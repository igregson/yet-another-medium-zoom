"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./dom");
/** Used to make sure a single element never has two animations at a time */
var elmMap = new Map();
/** https://aerotwist.com/blog/flip-your-animations/ */
var FLIPElement = /** @class */ (function() {
    function FLIPElement($elm) {
        this.playing = false;
        this.$elm = $elm;
        if (elmMap.has($elm)) {
            var self_1 = elmMap.get($elm);
            if (self_1) {
                return self_1;
            }
        }
        elmMap.set($elm, this);
        this._onTransitionEnd = this._onTransitionEnd.bind(this);
        this.stop = this.stop.bind(this);
    }
    FLIPElement.prototype.first = function($elm) {
        if ($elm === void 0) {
            $elm = this.$elm;
        }
        if (this.playing) {
            this.stop();
        }
        this._first = getSnapshot($elm);
        return this;
    };
    FLIPElement.prototype.last = function($elm) {
        if ($elm === void 0) {
            $elm = this.$elm;
        }
        if (this.playing) {
            this.stop();
        }
        this._last = getSnapshot($elm);
        return this;
    };
    FLIPElement.prototype.invert = function($elm) {
        if ($elm === void 0) {
            $elm = this.$elm;
        }
        if (!this._first || !this._last) {
            throw new Error(".first() and .last() must be called before .invert()");
        }
        this._elmPos = getSnapshot($elm);
        $elm.style.transitionDuration = "0s";
        $elm.style.transformOrigin = "50% 50%";
        $elm.style.transform = getTransform(this._elmPos, this._first);
        this._target$Elm = $elm;
        return this;
    };
    FLIPElement.prototype.play = function(duration) {
        var _this = this;
        if (duration === void 0) {
            duration = 300;
        }
        if (!this._target$Elm || !this._elmPos || !this._first || !this._last) {
            throw new Error(".invert() must be called before .play()");
        }
        if (this.playing) {
            this.stop();
        }
        this.playing = true;
        var $elm = this._target$Elm;
        +$elm.offsetHeight; // force reflow
        $elm.style.transitionDuration = duration + "ms";
        $elm.style.transform = getTransform(this._elmPos, this._last);
        $elm.addEventListener("transitioncancel", this._onTransitionEnd);
        $elm.addEventListener("transitionend", this._onTransitionEnd);
        clearTimeout(this._transitionFallback);
        this._transitionFallback = setTimeout(this.stop, duration + 50);
        return new Promise(function(res, rej) {
            _this._playResolver = res;
        });
    };
    FLIPElement.prototype.stop = function() {
        clearTimeout(this._transitionFallback);
        if (this._target$Elm) {
            this._target$Elm.removeEventListener("transitioncancel", this._onTransitionEnd);
            this._target$Elm.removeEventListener("transitionend", this._onTransitionEnd);
        }
        if (this._playResolver) {
            this._playResolver();
            this._playResolver = undefined;
        }
        this.playing = false;
        this._target$Elm = undefined;
    };
    /** Updates an animation while it's playing */
    FLIPElement.prototype.update = function($target, updater, duration) {
        var $elm = this._target$Elm;
        if (!this.playing || !$elm || !this._first) {
            return;
        }
        var currentPos = getTransformedSnapshot($elm);
        if (updater) {
            updater();
        }
        this._elmPos = getSnapshot($elm);
        this._last = getSnapshot($target);
        var prevDuration = duration ? duration + "ms" : $elm.style.transitionDuration;
        $elm.style.transitionDuration = "0ms";
        $elm.style.transform = getTransform(this._elmPos, currentPos);
        +$elm.offsetHeight; // force reflow
        $elm.style.transitionDuration = prevDuration;
        $elm.style.transform = getTransform(this._elmPos, this._last);
    };
    FLIPElement.prototype._onTransitionEnd = function(e) {
        if (e.target === this._target$Elm && e.propertyName === "transform") {
            this.stop();
        }
    };
    return FLIPElement;
})();
exports.default = FLIPElement;
function getSnapshot($elm) {
    var outp = {
        width: $elm.offsetWidth,
        height: $elm.offsetHeight,
        left: $elm.offsetLeft,
        top: $elm.offsetTop,
    };
    // make sure left/top is measured from center
    // this allows us to combine scaling and translating
    outp.left += outp.width / 2;
    outp.top += outp.height / 2;
    // offsetLeft/Top relates to offsetParent. Walk up the tree to get it relative to the window
    while (
        $elm.offsetParent instanceof HTMLElement &&
        $elm.offsetParent &&
        $elm.offsetParent !== document.body &&
        $elm.offsetParent !== document.documentElement
    ) {
        $elm = $elm.offsetParent;
        outp.left += $elm.offsetLeft;
        outp.top += $elm.offsetTop;
    }
    // if the element is fixed, offsetLeft/Top will be 0 when we want it to be the scroll position
    if (
        $elm.offsetTop === 0 &&
        $elm.offsetLeft === 0 &&
        window.getComputedStyle($elm).position === "fixed"
    ) {
        var $doc = document.documentElement;
        outp.left += dom_1.getScrollPosition(true) - ($doc.clientLeft || 0);
        outp.top += dom_1.getScrollPosition() - ($doc.clientTop || 0);
    }
    return outp;
}
exports.getSnapshot = getSnapshot;
/** Gets the snapshot of an element, but doesn't ignore transforms (unlike getSnapshot) */
function getTransformedSnapshot($elm) {
    var boundingRect = $elm.getBoundingClientRect();
    var $doc = document.documentElement;
    var outp = {
        left:
            Math.round(boundingRect.left) + dom_1.getScrollPosition(true) - ($doc.clientLeft || 0),
        top: Math.round(boundingRect.top) + dom_1.getScrollPosition() - ($doc.clientTop || 0),
        width: Math.round(boundingRect.width),
        height: Math.round(boundingRect.height),
    };
    outp.left += outp.width / 2;
    outp.top += outp.height / 2;
    return outp;
}
function getTransform(from, to) {
    var delta = {
        left: to.left - from.left,
        top: to.top - from.top,
        width: to.width / from.width,
        height: to.height / from.height,
    };
    var translation = "translate(" + delta.left.toFixed(5) + "px, " + delta.top.toFixed(5) + "px)";
    var scaling = "scale(" + delta.width.toFixed(5) + ", " + delta.height.toFixed(5) + ")";
    return translation + " " + scaling;
}
//# sourceMappingURL=flip.js.map
