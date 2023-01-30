/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign =
        Object.assign ||
        function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done
                ? resolve(result.value)
                : new P(function(resolve) {
                      resolve(result.value);
                  }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: [],
        },
        f,
        y,
        t,
        g;
    return (
        (g = { next: verb(0), throw: verb(1), return: verb(2) }),
        typeof Symbol === "function" &&
            (g[Symbol.iterator] = function() {
                return this;
            }),
        g
    );
    function verb(n) {
        return function(v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (
                    ((f = 1),
                    y &&
                        (t =
                            op[0] & 2
                                ? y["return"]
                                : op[0]
                                ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                : y.next) &&
                        !(t = t.call(y, op[1])).done)
                )
                    return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (
                            !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                            (op[0] === 6 || op[0] === 2)
                        ) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Classes;
(function(Classes) {
    Classes["WRAPPER"] = "yamz__wrapper";
    Classes["WRAPPER_CLOSING"] = "yamz__wrapper--closing";
    Classes["IMG_WRAPPER"] = "yamz__img-wrapper";
    Classes["IMG"] = "yamz__img";
    Classes["HIGHRES"] = "yamz__highres";
    Classes["HAS_HIGHRES"] = "yamz__wrapper--has-highres";
    Classes["HIGHRES_LOADED"] = "yamz__wrapper--highres-loaded";
    Classes["CAPTION"] = "yamz__caption";
    Classes["HAS_CAPTION"] = "yamz__wrapper--has-caption";
    Classes["ORIGINAL"] = "yamz__original";
    Classes["ORIGINAL_OPEN"] = "yamz__original--open";
    Classes["LOADER"] = "yamz__loader";
    Classes["ALBUM_PREV"] = "yamz__album__prev";
    Classes["ALBUM_NEXT"] = "yamz__album__next";
})(Classes || (Classes = {}));
var STATES;
(function(STATES) {
    STATES[(STATES["Closed"] = 0)] = "Closed";
    STATES[(STATES["Opening"] = 1)] = "Opening";
    STATES[(STATES["Open"] = 2)] = "Open";
    STATES[(STATES["Closing"] = 3)] = "Closing";
})(STATES || (STATES = {}));

/**
 * Creates an image for use in the lightbox based on an input element.
 * Always returns an <img>, regardless of the input element.
 */
function generateLightboxImg($img, newSrc) {
    var $newImg = document.createElement("img");
    var src = newSrc ? newSrc : getSrcFromImage($img);
    $newImg.src = src;
    return $newImg;
}
function isValidImage($elm) {
    var types = [HTMLPictureElement, HTMLImageElement];
    return types.some(function(type) {
        return $elm instanceof type;
    });
}
function getHighResFromImage($image, targetWidth) {
    if (targetWidth === void 0) {
        targetWidth = document.body.clientWidth;
    }
    var cur = { width: $image.offsetWidth, src: getSrcFromImage($image) };
    var $targets =
        $image instanceof HTMLImageElement
            ? [$image]
            : Array.from($image.querySelectorAll("source"));
    $targets.forEach(function($target) {
        // ignore sources that don't match
        if (
            $target instanceof HTMLSourceElement &&
            $target.media &&
            !matchMedia($target.media).matches
        ) {
            return;
        }
        // extract size and URL from srcset
        if (!$target.srcset) {
            return;
        }
        var srcset = $target.srcset;
        var parsed = getHighestFromSrcSet(srcset, targetWidth);
        if (parsed && parsed.width > cur.width) {
            cur = parsed;
        }
    });
    return cur.src;
}
function getHighestFromSrcSet(srcset, targetWidth) {
    if (targetWidth === void 0) {
        targetWidth = document.body.clientWidth;
    }
    var parsed = srcset.split(",").map(function(entry) {
        var widthMatch = /([^ ]+) +(\d+)w$/.exec(entry.trim());
        if (!widthMatch) {
            return null;
        }
        return {
            src: widthMatch[1],
            width: +widthMatch[2],
        };
    });
    return parsed.reduce(function(prev, entry) {
        if (!entry) {
            return prev;
        }
        if (!prev) {
            return entry;
        }
        // if we've already found a smaller image that is bigger than the screen, use that image instead
        if (entry.width > prev.width && prev.width >= targetWidth) {
            return prev;
        }
        // if the one we've found is smaller than the previously found, only use it if it's bigger than targetWidth
        if (entry.width < prev.width && entry.width < targetWidth) {
            return prev;
        }
        return entry;
    }, null);
}
function getSrcFromImage($elm) {
    if ($elm instanceof HTMLImageElement) {
        return $elm.currentSrc || /* IE11 support */ $elm.src;
    }
    if ($elm instanceof HTMLPictureElement) {
        var $img = $elm.querySelector("img");
        if ($img) {
            return $img.currentSrc || /* IE11 support */ $img.src;
        }
    }
    return "";
}
function getScrollPosition(horizontal) {
    if (horizontal === void 0) {
        horizontal = false;
    }
    return horizontal
        ? window.scrollX || document.body.scrollLeft || document.documentElement.scrollLeft || 0
        : window.scrollY || document.body.scrollTop || document.documentElement.scrollTop || 0;
}
function defaultLightboxGenerator($copiedImg, opts, $original) {
    var $wrapper = document.createElement("aside");
    $wrapper.classList.add(Classes.WRAPPER);
    if (opts.class) {
        $wrapper.classList.add(opts.class);
    }
    var $imgWrapper = document.createElement("div");
    $imgWrapper.classList.add(Classes.IMG_WRAPPER);
    $imgWrapper.appendChild($copiedImg);
    $wrapper.appendChild($imgWrapper);
    // add loading UI if we're going to load a highres
    if (opts.highres) {
        $wrapper.classList.add(Classes.HAS_HIGHRES);
        var $loader = document.createElement("div");
        $loader.classList.add(Classes.LOADER);
        $imgWrapper.insertBefore($loader, $copiedImg);
    }
    return $wrapper;
}

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
        outp.left += getScrollPosition(true) - ($doc.clientLeft || 0);
        outp.top += getScrollPosition() - ($doc.clientTop || 0);
    }
    return outp;
}
/** Gets the snapshot of an element, but doesn't ignore transforms (unlike getSnapshot) */
function getTransformedSnapshot($elm) {
    var boundingRect = $elm.getBoundingClientRect();
    var $doc = document.documentElement;
    var outp = {
        left: Math.round(boundingRect.left) + getScrollPosition(true) - ($doc.clientLeft || 0),
        top: Math.round(boundingRect.top) + getScrollPosition() - ($doc.clientTop || 0),
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

function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === "undefined") {
        return;
    }

    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";

    if (insertAt === "top") {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    } else {
        head.appendChild(style);
    }

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}

var css =
    '/* original */\n.yamz__original {\n    cursor: zoom-in;\n}\n.yamz__original--open {\n    visibility: hidden;\n}\n\n/* wrapper */\n.yamz__wrapper {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    overflow-x: hidden;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    z-index: 999;\n    font-size: 16px;\n    color: #fff;\n    cursor: zoom-out;\n}\n.yamz__wrapper::before {\n    content: "";\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n\n    background: rgba(0, 0, 0, 0.9);\n    animation: yamz-fade-in 0.2s ease-out both;\n}\n.yamz__wrapper--closing::before {\n    animation: yamz-fade-out 0.2s ease-out both;\n}\n@keyframes yamz-fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes yamz-fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n/* img */\n.yamz__img-wrapper {\n    margin: 32px;\n    display: inline-block;\n    position: relative;\n    will-change: transform;\n    transition: transform ease;\n    animation: yamz-shadow-in 5s both;\n}\n@keyframes yamz-shadow-in {\n    0% {\n        box-shadow: 0 8px 32px rgba(0, 0, 0, 0);\n    }\n    100% {\n        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n    }\n}\n.yamz__wrapper--highres-loaded .yamz__img {\n    pointer-events: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n}\n.yamz__highres {\n    animation: yamz-fade-in 0.2s;\n    transition: opacity 0.2s;\n    opacity: 1;\n    will-change: opacity;\n}\n.yamz__wrapper--closing .yamz__highres {\n    opacity: 0;\n}\n@keyframes yamz-fade-in {\n    0% {\n        opacity: 0;\n    }\n}\n\n.yamz__img-wrapper > img {\n    max-width: calc(100vw - 64px);\n    max-height: calc(100vh - 64px);\n    margin: 0 auto;\n}\n\n/* loader */\n.yamz__loader {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    animation: yamz-fade-in 0.2s ease-out 0.1s both;\n}\n.yamz__wrapper--highres-loaded .yamz__loader {\n    z-index: -1;\n}\n.yamz__loader::before {\n    content: "";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 64px;\n    height: 64px;\n    background: #fff;\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    animation: yamz-loader 1s infinite ease;\n}\n@keyframes yamz-loader {\n    0% {\n        transform: translate(-50%, -50%) scale(0);\n        opacity: 1;\n    }\n    100% {\n        transform: translate(-50%, -50%) scale(1);\n        opacity: 0;\n    }\n}\n';
styleInject(css);

var DEFAULT_OPTS = {
    scrollAllowance: 128,
    duration: 300,
    container: undefined,
    lightboxGenerator: undefined,
};
var MediumLightboxCore = /** @class */ (function() {
    function MediumLightboxCore() {
        this.options = __assign({}, DEFAULT_OPTS);
        this.state = STATES.Closed;
        this.active = undefined;
        this._raf = false;
        // re-export some stuff so it's easily available to plugins
        this.defaultLightboxGenerator = defaultLightboxGenerator;
        this._onScroll = this._onScroll.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }
    /** Set options used by every lightbox */
    MediumLightboxCore.prototype.setOptions = function(newOpts) {
        this.options = __assign({}, this.options, newOpts);
    };
    /** Get the currently set global options */
    MediumLightboxCore.prototype.getOptions = function() {
        return this.options;
    };
    /** Open a specific image in the lightbox */
    MediumLightboxCore.prototype.open = function($img, opts) {
        return __awaiter(this, void 0, void 0, function() {
            var options, $animElm, $positionElm;
            return __generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        if (!isValidImage($img)) {
                            throw new TypeError($img + " cannot be used as an image");
                        }
                        if (!this.active) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        options = __assign({}, this.options, $img.yamzOpts || {}, opts || {});
                        // generate our lightbox
                        this.state = STATES.Opening;
                        this.active = __assign({}, this.generateLightbox($img, options), {
                            options: options,
                            scrollPos: getScrollPosition(),
                        });
                        // then insert and animate it
                        (options.container || document.body).appendChild(this.active.$lightbox);
                        this.active.$lightbox.style.top = this.active.scrollPos + "px";
                        $animElm = this.active.$copiedImg.parentElement || this.active.$copiedImg;
                        $positionElm =
                            $img.nodeName === "PICTURE" ? $img.querySelector("img") : $img;
                        if (!$positionElm) {
                            $positionElm = $img;
                        }
                        if (!(options.duration > 0)) return [3 /*break*/, 4];
                        this._flip = new FLIPElement($img);
                        return [
                            4 /*yield*/,
                            this._flip
                                .first($positionElm)
                                .last(this.active.$copiedImg)
                                .invert($animElm)
                                .play(options.duration),
                        ];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.state = STATES.Open;
                        this.attachListeners();
                        return [2 /*return*/, this.active.$lightbox];
                }
            });
        });
    };
    /** Close the currently active image. If img is given, only closes if that's the currently active img */
    MediumLightboxCore.prototype.close = function($img) {
        return __awaiter(this, void 0, void 0, function() {
            var active, options, $animElm, $positionElm, flip, $parent;
            return __generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.active) {
                            return [2 /*return*/];
                        }
                        if ($img && this.active.$img !== $img) {
                            return [2 /*return*/];
                        }
                        if (!$img) {
                            $img = this.active.$img;
                        }
                        this.detachListeners();
                        this.state = STATES.Closing;
                        active = this.active;
                        options = active.options;
                        this.active.$lightbox.classList.add(Classes.WRAPPER_CLOSING);
                        $animElm = this.active.$copiedImg.parentElement || this.active.$copiedImg;
                        $positionElm =
                            this.active.$img.nodeName === "PICTURE"
                                ? this.active.$img.querySelector("img")
                                : $img;
                        if (!$positionElm) {
                            $positionElm = this.active.$img;
                        }
                        if (!options.duration) return [3 /*break*/, 2];
                        flip = new FLIPElement($img);
                        flip.first(this.active.$copiedImg).last($positionElm);
                        return [4 /*yield*/, flip.invert($animElm).play(options.duration)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        active.$img.classList.remove(Classes.ORIGINAL_OPEN);
                        $parent = active.$lightbox.parentNode;
                        if ($parent) {
                            $parent.removeChild(active.$lightbox);
                        }
                        this.state = STATES.Closed;
                        if (this.active === active) {
                            this.active = undefined;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Replaces the currently open lightbox with that of another image, without animating a close/open
     */
    MediumLightboxCore.prototype.replace = function($img, opts) {
        if (!isValidImage($img)) {
            throw new TypeError($img + " cannot be used as an image");
        }
        if (!this.active) {
            return;
        }
        // unhide the original image
        this.active.$img.classList.remove(Classes.ORIGINAL_OPEN);
        // then generate the new lightbox and set it as active
        var $oldLightbox = this.active.$lightbox;
        var nextOpts = __assign({}, this.options, $img.yamzOpts || {}, opts || {});
        var nextActive = this.generateLightbox($img, nextOpts);
        this.active = __assign({}, this.active, nextActive, {
            $lightbox: $oldLightbox,
            options: nextOpts,
        });
        // then update the DOM
        this.replaceLightboxDOM(nextActive.$lightbox, $oldLightbox);
    };
    /**
     * Replaces the currently active lightbox DOM with the given one
     * Mostly its own method so plugins can overwrite it
     */
    MediumLightboxCore.prototype.replaceLightboxDOM = function($newLightbox, $oldLightbox) {
        if (!$oldLightbox) {
            $oldLightbox = this.active && this.active.$lightbox;
        }
        if (!$oldLightbox) {
            return;
        }
        /**
         * We replace the content of the lightbox instead of just replacing the element itself because the open
         * animations (e.g. fade-in of background) are CSS animations, that would replay if a new lightbox was inserted
         * TODO: consider whether this approach is better than having a CSS class that disables open animation
         */
        // replace the content of the current lightbox with that of the target lightbox
        while ($oldLightbox.firstChild) {
            $oldLightbox.removeChild($oldLightbox.firstChild);
        }
        var $children = Array.from($newLightbox.children);
        for (var i = 0; i < $children.length; ++i) {
            $oldLightbox.appendChild($children[i]);
        }
        // update the lightbox's attributes to match the new one
        $oldLightbox.setAttribute("class", $newLightbox.className);
    };
    /**
     * Function for generating lightbox for a given image.
     * This also handles loading the highres and stuff.
     * If you're only looking for generating the DOM (e.g. if you're creating a custom lightbox generator), use .defaultLightboxGenerator
     */
    MediumLightboxCore.prototype.generateLightbox = function($img, opts) {
        var _this = this;
        var generator = opts.lightboxGenerator || this.defaultLightboxGenerator;
        var origSrc = getSrcFromImage($img);
        var hasSrcSet = $img instanceof HTMLPictureElement || $img.srcset;
        // if we weren't explicitly given a highres, try to extract one from the image
        if (!opts.highres && hasSrcSet) {
            var highRes = getHighResFromImage($img);
            opts.highres = highRes;
        }
        // generate the DOM
        var $copiedImg = generateLightboxImg($img);
        $copiedImg.classList.add(Classes.IMG);
        $copiedImg.classList.remove(Classes.ORIGINAL);
        $img.classList.add(Classes.ORIGINAL_OPEN);
        var $lightbox = generator.call(this, $copiedImg, opts, $img);
        // add event listeners
        $lightbox.addEventListener("click", function() {
            return _this.close();
        });
        // and start loading high-res if we need to
        // start loading the highres version if we have one
        var $highRes;
        if (opts.highres) {
            $highRes = new Image();
            $highRes.decoding = "async";
            $highRes.addEventListener("load", function() {
                if (_this.active && _this.active.$img === $img) {
                    _this._highResLoaded($highRes);
                }
            });
            $highRes.addEventListener("error", function(e) {
                console.error("High-res image failed to load", e);
                $lightbox.classList.remove(Classes.HAS_HIGHRES);
                var $loader = $lightbox.querySelector("." + Classes.LOADER);
                if ($loader && $loader.parentNode) {
                    $loader.parentNode.removeChild($loader);
                }
            });
            $highRes.src = opts.highres;
            $highRes.classList.add(Classes.HIGHRES);
        }
        return {
            $img: $img,
            $copiedImg: $copiedImg,
            $lightbox: $lightbox,
            origSrc: origSrc,
            $highRes: $highRes,
        };
    };
    /** Called when a high-res version of an image has loaded */
    MediumLightboxCore.prototype._highResLoaded = function($highRes) {
        var _this = this;
        if (!this.active) {
            return;
        }
        var $copiedImg = this.active.$copiedImg;
        var $animElm = $copiedImg.parentElement || $copiedImg;
        // function that inserts the highres, resizing the img wrapper to the size of the highres
        var updater = function() {
            if (!_this.active) {
                return;
            }
            if ($copiedImg.parentElement) {
                _this.active.$highRes = $highRes;
                _this.active.$lightbox.classList.add(Classes.HIGHRES_LOADED);
                $copiedImg.parentElement.insertBefore(
                    $highRes,
                    $copiedImg.parentElement.firstChild
                );
            }
        };
        if (this.state === STATES.Opening && this._flip) {
            this._flip.update($animElm, updater, this.active.options.duration);
        } else if (this.state === STATES.Open && this.active) {
            this._flip = new FLIPElement(this.active.$img);
            this._flip.first(this.active.$copiedImg);
            updater();
            this._flip
                .last(this.active.$copiedImg)
                .invert($animElm)
                .play(this.active.options.duration);
        } else {
            updater();
        }
    };
    /** Parses options from a DOM element */
    MediumLightboxCore.prototype.optsFromElm = function($elm) {
        var outp = {};
        if ($elm.dataset.class) {
            outp.class = $elm.dataset.class;
        }
        if ($elm.dataset.highres) {
            outp.highres = $elm.dataset.highres;
        }
        if ($elm.dataset.duration && !Number.isNaN(+$elm.dataset.duration)) {
            outp.duration = +$elm.dataset.duration;
        }
        if ($elm.dataset.scrollAllowance && !Number.isNaN(+$elm.dataset.scrollAllowance)) {
            outp.scrollAllowance = +$elm.dataset.scrollAllowance;
        }
        return outp;
    };
    /** Binds an image (or multiple), such that clicking it will open it
     * @param $imgs The image(s) to bind. If this is a string, it's used as a selector. */
    MediumLightboxCore.prototype.bind = function($imgs, opts) {
        var _this = this;
        if (typeof $imgs === "string") {
            $imgs = Array.from(document.querySelectorAll($imgs));
        }
        if (!($imgs instanceof Array)) {
            $imgs = [$imgs];
        }
        $imgs.forEach(function($img) {
            $img.addEventListener("click", function() {
                // we extract options from the DOM here so that developers can change the data attributes and have it reflected
                var imgOpts = __assign({}, _this.optsFromElm($img), opts || {});
                _this.open($img, imgOpts);
            });
            $img.classList.add(Classes.ORIGINAL);
            // we store the custom opts given to us so we can later recreate the lightbox just from the element
            if (opts) {
                $img.yamzOpts = opts;
            }
        });
    };
    /** Attaches listeners we need globally */
    MediumLightboxCore.prototype.attachListeners = function() {
        window.addEventListener("scroll", this._onScroll);
        document.addEventListener("keydown", this._onKeyDown);
    };
    /** Detaches global listeners */
    MediumLightboxCore.prototype.detachListeners = function() {
        window.removeEventListener("scroll", this._onScroll);
        document.removeEventListener("keydown", this._onKeyDown);
    };
    /** Helper function used as scroll listener. Debounces calls to .onScroll */
    MediumLightboxCore.prototype._onScroll = function() {
        var _this = this;
        if (this._raf) {
            return;
        }
        this._raf = true;
        setTimeout(function() {
            _this._raf = false;
            _this.onScroll();
        }, 60);
    };
    MediumLightboxCore.prototype.onScroll = function() {
        if (!this.active) {
            return;
        }
        if (
            this.active.options.scrollAllowance === undefined ||
            this.active.options.scrollAllowance < 0
        ) {
            return;
        }
        var scrollAllowance = this.active.options.scrollAllowance;
        var scrollPos = getScrollPosition();
        var delta = Math.abs(this.active.scrollPos - scrollPos);
        if (delta > scrollAllowance) {
            this.close();
        }
    };
    /** Helper function used to ensure that .onKeyDown is called with proper `this` value, even if overwritten by plugins */
    MediumLightboxCore.prototype._onKeyDown = function(e) {
        this.onKeyDown(e);
    };
    MediumLightboxCore.prototype.onKeyDown = function(e) {
        if (!this.active) {
            return;
        }
        if (e.key === "Escape") {
            this.close();
        }
    };
    return MediumLightboxCore;
})();
var yamz = new MediumLightboxCore();

var css$1 =
    ".yamz__wrapper--has-caption .yamz__img-wrapper {\n    margin-bottom: 0;\n}\n.yamz__wrapper--has-caption .yamz__img-wrapper > img {\n    max-height: calc(100vh - 64px - 2em);\n}\n.yamz__caption {\n    margin: 1em 32px;\n    height: 1em;\n    will-change: opacity;\n\n    animation: yamz-fade-in 0.2s ease-out 0.1s both;\n}\n.yamz__wrapper--closing .yamz__caption {\n    opacity: 0 !important;\n}\n";
styleInject(css$1);

/** Augments the YAMZ instance to support captions */
function withCaption(_yamz) {
    var defaultLightboxGenerator = _yamz.defaultLightboxGenerator,
        optsFromElm = _yamz.optsFromElm;
    var yamz = _yamz;
    // insert caption into the lightbox if we're given one
    yamz.defaultLightboxGenerator = function($copiedImg, opts, $original) {
        var $lightbox = defaultLightboxGenerator.call(this, $copiedImg, opts, $original);
        // add caption if given
        if (opts.caption) {
            var $caption = document.createElement("div");
            $caption.classList.add(Classes.CAPTION);
            if (opts.caption instanceof HTMLElement) {
                $caption.appendChild(opts.caption);
            } else {
                $caption.textContent = opts.caption;
            }
            $lightbox.classList.add(Classes.HAS_CAPTION);
            $lightbox.appendChild($caption);
        }
        return $lightbox;
    };
    // also allow specifying the caption in HTML
    yamz.optsFromElm = function($elm) {
        var outp = optsFromElm.call(this, $elm);
        if ($elm.dataset.caption) {
            outp.caption = $elm.dataset.caption;
        }
        return outp;
    };
    return yamz;
}

var css$2 =
    ".yamz__album__prev,\n.yamz__album__next {\n    box-sizing: border-box;\n    position: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 350px;\n    max-width: 50%;\n    cursor: pointer;\n\n    opacity: 0.5;\n    background: none;\n    border: none;\n    padding: 0;\n    will-change: opacity;\n}\n.yamz__album__prev {\n    left: 0%;\n    background: linear-gradient(90deg, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0)) !important;\n    animation: yamz-fade-in 0.2s both 0.2s;\n}\n.yamz__album__next {\n    right: 0;\n    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0)) !important;\n    animation: yamz-fade-in 0.2s both 0.2s;\n}\n.yamz__album__prev::-moz-focus-inner,\n.yamz__album__next::-moz-focus-inner {\n    /* remove black outline in Firefox */\n    border: none;\n}\n.yamz__album__prev:hover,\n.yamz__album__prev:focus,\n.yamz__album__next:hover,\n.yamz__album__next:focus {\n    opacity: 1;\n}\n.yamz__wrapper--closing .yamz__album__prev,\n.yamz__wrapper--closing .yamz__album__next {\n    display: none;\n}\n\n.yamz__album__prev::before,\n.yamz__album__next::before {\n    content: \"\";\n    position: absolute;\n    width: 1.5em;\n    height: 1.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    background-size: cover;\n    color: white;\n}\n.yamz__album__prev::before {\n    left: 3em;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M17.219 24a1.565 1.565 0 001.105-2.672L8.997 12l9.327-9.328A1.565 1.565 0 0016.111.459L5.677 10.893a1.565 1.565 0 000 2.213l10.435 10.435a1.56 1.56 0 001.107.459z'/%3E%3C/svg%3E\");\n}\n.yamz__album__next::before {\n    right: 3em;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M6.783 24a1.565 1.565 0 01-1.106-2.672L15.004 12 5.676 2.671A1.565 1.565 0 017.889.458l10.435 10.435a1.565 1.565 0 010 2.213L7.889 23.541A1.56 1.56 0 016.783 24z'/%3E%3C/svg%3E\");\n}\n\n/* need each animation to have different names (not just use reverse direction) so animationend is called correctly */\n.yamz__img-wrapper--in-right {\n    animation: yamz-album-in-right 0.4s cubic-bezier(0.3, 0.3, 0.5, 1);\n}\n.yamz__img-wrapper--in-left {\n    animation: yamz-album-in-left 0.4s cubic-bezier(0.3, 0.3, 0.5, 1);\n}\n.yamz__img-wrapper--out-right {\n    animation: yamz-album-out-right 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n.yamz__img-wrapper--out-left {\n    animation: yamz-album-out-left 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n@keyframes yamz-album-out-right {\n    0% {\n        transform: scale(1) translate(0vw, 0px);\n        opacity: 1;\n    }\n    100% {\n        transform: scale(0.95) translate(5vw, 0px);\n        opacity: 0.25;\n    }\n}\n@keyframes yamz-album-out-left {\n    0% {\n        transform: scale(1) translate(0vw, 0px);\n        opacity: 1;\n    }\n    100% {\n        transform: scale(0.95) translate(-5vw, 0px);\n        opacity: 0.25;\n    }\n}\n\n@keyframes yamz-album-in-right {\n    0% {\n        transform: scale(0.95) translate(5vw, 0px);\n        opacity: 0.25;\n    }\n    100% {\n        transform: scale(1) translate(0vw, 0px);\n        opacity: 1;\n    }\n}\n@keyframes yamz-album-in-left {\n    0% {\n        transform: scale(0.95) translate(-5vw, 0px);\n        opacity: 0.25;\n    }\n    100% {\n        transform: scale(1) translate(0vw, 0px);\n        opacity: 1;\n    }\n}\n";
styleInject(css$2);

/** Augments the YAMZ instance to support albums */
function withAlbum(_yamz) {
    var defaultLightboxGenerator = _yamz.defaultLightboxGenerator,
        optsFromElm = _yamz.optsFromElm,
        onKeyDown = _yamz.onKeyDown;
    var yamz = _yamz;
    yamz.options = __assign({ wrapAlbum: false, disableAlbumAnimations: false }, yamz.options);
    function augmentLightbox(yamz, $lightbox, opts, index) {
        if (!opts.album) {
            return $lightbox;
        }
        var prevIndex = opts.wrapAlbum
            ? (opts.album.length + index - 1) % opts.album.length
            : index - 1;
        var nextIndex = opts.wrapAlbum
            ? (opts.album.length + index + 1) % opts.album.length
            : index + 1;
        if (prevIndex >= 0) {
            var $prev = document.createElement("button");
            $prev.classList.add(Classes.ALBUM_PREV);
            $prev.addEventListener("click", function(e) {
                if (!opts.album) {
                    return;
                }
                e.stopPropagation();
                yamz.moveToAlbumEntry(
                    opts.album[prevIndex],
                    "prev",
                    opts.disableAlbumAnimations || false
                );
            });
            $lightbox.appendChild($prev);
        }
        if (nextIndex < opts.album.length) {
            var $next = document.createElement("button");
            $next.classList.add(Classes.ALBUM_NEXT);
            $next.addEventListener("click", function(e) {
                if (!opts.album) {
                    return;
                }
                e.stopPropagation();
                yamz.moveToAlbumEntry(
                    opts.album[nextIndex],
                    "next",
                    opts.disableAlbumAnimations || false
                );
            });
            $lightbox.appendChild($next);
        }
    }
    // insert album stuff into the lightbox if we're given one
    yamz.defaultLightboxGenerator = function($copiedImg, opts, $original) {
        var $lightbox = defaultLightboxGenerator($copiedImg, opts, $original);
        if (opts.album) {
            var index = opts.album.findIndex(function(entry) {
                return entry.img === $original;
            });
            augmentLightbox(this, $lightbox, opts, index);
        }
        return $lightbox;
    };
    // also allow specifying the album in HTML
    yamz.optsFromElm = function($elm) {
        var outp = optsFromElm($elm);
        if ($elm.dataset.album) {
            var $siblings = Array.from(
                document.querySelectorAll('[data-album="' + $elm.dataset.album + '"]')
            );
            outp.album = $siblings.map(function($sibling) {
                return {
                    img: $sibling,
                    opts: optsFromElm($sibling),
                };
            });
            // make sure each entry knows about which album it's in
            outp.album.forEach(function(entry) {
                entry.opts = __assign({}, entry.opts || {}, { album: outp.album });
            });
        }
        return outp;
    };
    // add new method for moving to an album entry
    yamz.moveToAlbumEntry = function(entry, direction, disableAlbumAnimations) {
        var _this = this;
        if (!this.active) {
            return;
        }
        var $target = this.active.$lightbox.querySelector("." + Classes.IMG_WRAPPER);
        if (!$target) {
            throw new ReferenceError("Could not find image wrapper in lightbox");
        }
        var directions = {
            out: direction === "next" ? "left" : "right",
            in: direction === "next" ? "right" : "left",
        };
        var replaced = false;
        var _onAnimEnd = function() {
            if (replaced || !_this.active) {
                return;
            }
            replaced = true;
            _this.replace(entry.img, entry.opts);
            var $newTarget = _this.active.$lightbox.querySelector("." + Classes.IMG_WRAPPER);
            if (!$newTarget) {
                return;
            }
            $newTarget.classList.add(Classes.IMG_WRAPPER + "--in-" + directions.in);
        };
        if (disableAlbumAnimations) {
            _onAnimEnd();
        } else {
            setTimeout(_onAnimEnd, 1000); // fail safe if for whatever reason animation doesn't play
            $target.addEventListener("animationend", _onAnimEnd);
            $target.addEventListener("animationcancel", _onAnimEnd);
            $target.classList.add(Classes.IMG_WRAPPER + "--out-" + directions.out);
        }
    };
    // finally extend the keyboard interactivity
    yamz.onKeyDown = function(e) {
        onKeyDown.call(this, e);
        if (!this.active) {
            return;
        }
        var opts = this.active.options;
        if (!opts.album) {
            return;
        }
        // move back/forward in album when pressing arrow keys
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            var $curImg_1 = this.active.$img;
            var index = opts.album.findIndex(function(entry) {
                return entry.img === $curImg_1;
            });
            var prevIndex = opts.wrapAlbum
                ? (opts.album.length + index - 1) % opts.album.length
                : index - 1;
            var nextIndex = opts.wrapAlbum
                ? (opts.album.length + index + 1) % opts.album.length
                : index + 1;
            var targetIndex = e.key === "ArrowLeft" ? prevIndex : nextIndex;
            if (targetIndex >= 0 && targetIndex < opts.album.length) {
                this.moveToAlbumEntry(
                    opts.album[targetIndex],
                    e.key === "ArrowLeft" ? "prev" : "next",
                    opts.disableAlbumAnimations || false
                );
            }
        }
    };
    return yamz;
}

var css$3 =
    ".yamz__wrapper:not(.yamz__wrapper--closing) .yamz__img-wrapper--swiping {\n    transition: none !important;\n    will-change: transform;\n}\n";
styleInject(css$3);

var SwipeDetector = /** @class */ (function() {
    function SwipeDetector(listeners, threshold) {
        if (threshold === void 0) {
            threshold = 0;
        }
        this.listeners = listeners;
        this.threshold = threshold;
        // make sure we can be attached as event listeners easily
        this.start = this.start.bind(this);
        this.move = this.move.bind(this);
        this.end = this.end.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    SwipeDetector.prototype.setThreshold = function(threshold) {
        this.threshold = threshold;
    };
    SwipeDetector.prototype.start = function(e, metadata) {
        if (!(e instanceof MouseEvent)) {
            // we ignore any start touches if another finger is currently down (and cancel any active ones if a new finger is touched)
            if (e.touches.length > 1) {
                this.cancel();
                return false;
            }
        }
        var touch = e instanceof MouseEvent ? e : e.touches[0];
        var initialTouch = {
            x: touch.clientX,
            y: touch.clientY,
            time: Date.now(),
        };
        this.state = {
            startTouch: __assign({}, initialTouch),
            lastTouch: __assign({}, initialTouch),
            isSwipe: false,
            velocity: 0,
            identifier: touch instanceof MouseEvent ? undefined : touch.identifier,
            metadata: metadata,
        };
        this.emit("start", initialTouch, metadata);
    };
    SwipeDetector.prototype.move = function(e) {
        if (!this.state) {
            return;
        } // ignore if we aren't currently dragging
        var touch = e instanceof MouseEvent ? e : undefined;
        if (!(e instanceof MouseEvent)) {
            for (var i = 0; i < e.changedTouches.length; ++i) {
                var t = e.changedTouches[i];
                if (t.identifier === this.state.identifier) {
                    touch = t;
                    break;
                }
            }
        }
        if (!touch) {
            return;
        } // ignore if none of the touches are the one we're tracking
        var timeDelta = Date.now() - this.state.lastTouch.time;
        if (timeDelta < 16) {
            return;
        } // debounce
        // we compare the direction relative to the starting point; if it's more down than up, we cancel the drag ('cause it's probably a scroll)
        var xDelta = touch.clientX - this.state.startTouch.x;
        var yDelta = touch.clientY - this.state.startTouch.y;
        var absXDelta = Math.abs(xDelta);
        var absYDelta = Math.abs(yDelta);
        // ignore ones where the mouse hasn't moved
        if (absXDelta === 0 && absYDelta === 0) {
            return;
        }
        // update our state
        this.state.lastTouch.x = touch.clientX;
        this.state.lastTouch.y = touch.clientY;
        this.state.lastTouch.time = Date.now();
        this.state.velocity = timeDelta ? (touch.clientX - this.state.lastTouch.x) / timeDelta : 0;
        var IGNORE_THRESHOLD = 32; // ignore test if we have moved barely anything. Possibly consider if this is better as an option?
        if (!this.state.isSwipe) {
            // don't start tracking as a swipe until after we've exceeding our threshold
            if (Math.max(absXDelta, absYDelta) < IGNORE_THRESHOLD) {
                return;
            } else {
                // if we've just now gone past our threshold, check if this looks more like a scroll than a swipe
                if (absYDelta > absXDelta) {
                    this.cancel();
                    return;
                }
                this.state.isSwipe = true;
            }
        }
        e.preventDefault(); // stop any scrolling if we are currently swiping
        this.emit("update", { x: xDelta, y: yDelta }, this.state.metadata);
    };
    SwipeDetector.prototype.end = function(e) {
        if (!this.state) {
            return false;
        } // ignore if we aren't currently dragging
        var touch = e instanceof MouseEvent ? e : undefined;
        if (!(e instanceof MouseEvent)) {
            for (var i = 0; i < e.changedTouches.length; ++i) {
                var t = e.changedTouches[i];
                if (t.identifier === this.state.identifier) {
                    touch = t;
                    break;
                }
            }
        }
        if (!touch) {
            return false;
        } // ignore if none of the touches are the one we're tracking
        // then calculate the projected point we want to check
        var velocity = this.state.velocity;
        var totalDelta = touch.clientX - this.state.startTouch.x;
        var recentDelta = touch.clientX - this.state.lastTouch.x;
        var finalDelta = totalDelta;
        // we only project a point out if the flick is in the direction of the swipe, otherwise we just use the touch position
        if ((totalDelta >= 0 && recentDelta >= 0) || (totalDelta <= 0 && recentDelta <= 0)) {
            finalDelta += velocity * 50; // project it 50ms out
        }
        // finally check if it's a swipe
        if (this.threshold && this.threshold > 0 && Math.abs(finalDelta) > this.threshold) {
            this.emit("end", finalDelta < 0 ? "left" : "right", this.state.metadata);
            this.after();
            return true;
        }
        this.cancel();
        return false;
    };
    SwipeDetector.prototype.cancel = function() {
        if (!this.state) {
            return;
        }
        this.emit("cancel", this.state.metadata);
        this.after();
    };
    SwipeDetector.prototype.after = function() {
        delete this.state;
    };
    SwipeDetector.prototype.emit = function(event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var listener = this.listeners[event];
        if (listener) {
            listener.apply(void 0, args);
        }
    };
    return SwipeDetector;
})();

/** Augments the YAMZ instance to support swiping through albums on mobile */
function withSwipe(_yamz) {
    var defaultLightboxGenerator = _yamz.defaultLightboxGenerator;
    var yamz = _yamz;
    // tslint:disable-next-line strict-type-predicates
    if (typeof window === "undefined") {
        return yamz;
    }
    yamz.options = __assign(
        {
            swipeThreshold: window.innerWidth * 0.25,
            swipeResponseLimit: window.innerWidth * 0.05,
            swipeOnDesktop: false,
        },
        yamz.options
    );
    // attach listeners to lightbox if we're displaying an album
    yamz.defaultLightboxGenerator = function($copiedImg, opts, $original) {
        var _this = this;
        var $lightbox = defaultLightboxGenerator.call(this, $copiedImg, opts, $original);
        if (!opts.album) {
            return $lightbox;
        }
        if (opts.swipeThreshold) {
            yamz.swipeDetector.setThreshold(opts.swipeThreshold);
        }
        // normally we don't let mouse users swipe, but developers can enable it if they want
        if (opts.swipeOnDesktop) {
            $lightbox.addEventListener("mousedown", function(e) {
                e.preventDefault();
                yamz.swipeDetector.start(e, opts);
            });
            $lightbox.addEventListener("mousemove", function(e) {
                e.preventDefault();
                yamz.swipeDetector.move(e);
            });
            var justSwiped_1 = 0;
            $lightbox.addEventListener("mouseup", function(e) {
                e.preventDefault();
                if (yamz.swipeDetector.state) {
                    justSwiped_1 = yamz.swipeDetector.state.isSwipe ? Date.now() : 0;
                }
                if (!yamz.swipeDetector.end(e)) {
                    _this.onSwipeCancel(opts);
                }
            });
            $lightbox.addEventListener("click", function(e) {
                // we stop propagation here so that the lightbox doesn't close if we just swiped
                if (Date.now() - justSwiped_1 < 16) {
                    e.stopImmediatePropagation();
                }
            });
        }
        // we always attach listeners for touch
        $lightbox.addEventListener("touchstart", function(e) {
            yamz.swipeDetector.start(e, opts);
        });
        $lightbox.addEventListener("touchmove", yamz.swipeDetector.move);
        $lightbox.addEventListener("touchend", yamz.swipeDetector.end);
        $lightbox.addEventListener("touchcancel", yamz.swipeDetector.cancel);
        return $lightbox;
    };
    yamz.applySwipeTransform = function(touchOffset, opts) {
        if (!this.active) {
            return;
        }
        var offset = Math.abs(touchOffset.x);
        var scale = 1;
        if (opts.swipeResponseLimit) {
            // use a sine function to slowly scale down
            // sine wave is 3 long, because that gives a 45 degree angle at the start, so 1px touch movement = 1px image movement
            var limit = opts.swipeResponseLimit * 1.5; // this is where we want the image to stop moving entirely
            var progress = Math.abs(touchOffset.x) / opts.swipeResponseLimit;
            var clampedProgress = Math.min(progress, 1.5);
            var offsetScale = Math.sin((clampedProgress * Math.PI) / 3);
            offset = opts.swipeResponseLimit * offsetScale;
            // update the opacity if we're nearing the end
            if (progress > 1) {
                scale = Math.min(Math.max(1 - (progress - 1) * 0.01, 0.8), 1);
            }
            // maintain a very slight response to dragging further
            var linearOffset = Math.abs(touchOffset.x) - Math.min(Math.abs(touchOffset.x), limit);
            offset += linearOffset * 0.05;
            if (touchOffset.x < 0) {
                offset = -offset;
            }
        }
        var $target = this.active.$lightbox.querySelector("." + Classes.IMG_WRAPPER);
        if ($target) {
            $target.style.transform =
                "translateX(" + offset.toFixed(5) + "px) scale(" + scale.toFixed(5) + ")";
            $target.style.opacity = "" + (1 - (1 - scale) * 4);
        }
    };
    yamz.onSwipeStart = function(point, opts) {
        if (this.active) {
            var $target = this.active.$lightbox.querySelector("." + Classes.IMG_WRAPPER);
            if ($target) {
                $target.classList.add(Classes.IMG_WRAPPER + "--swiping");
            }
        }
    };
    yamz.onSwipeEnd = function(direction, opts) {
        if (this.active) {
            var $btn =
                direction === "left"
                    ? this.active.$lightbox.querySelector("." + Classes.ALBUM_NEXT)
                    : this.active.$lightbox.querySelector("." + Classes.ALBUM_PREV);
            if ($btn) {
                $btn.click();
            }
        }
        this.afterSwipe();
    };
    yamz.onSwipeCancel = function(opts) {
        this.applySwipeTransform({ x: 0, y: 0 }, opts);
        this.afterSwipe();
    };
    yamz.afterSwipe = function() {
        if (this.active) {
            var $target = this.active.$lightbox.querySelector("." + Classes.IMG_WRAPPER);
            if ($target) {
                $target.classList.remove(Classes.IMG_WRAPPER + "--swiping");
            }
        }
    };
    yamz.swipeDetector = new SwipeDetector({
        start: yamz.onSwipeStart.bind(yamz),
        update: yamz.applySwipeTransform.bind(yamz),
        end: yamz.onSwipeEnd.bind(yamz),
        cancel: yamz.onSwipeCancel.bind(yamz),
    });
    return yamz;
}

var index = withSwipe(withAlbum(withCaption(yamz)));

export default index;
//# sourceMappingURL=index.js.map
