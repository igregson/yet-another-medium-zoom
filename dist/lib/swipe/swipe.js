"use strict";
var __assign =
    (this && this.__assign) ||
    function() {
        __assign =
            Object.assign ||
            function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
require("./swipe.css");
var detector_1 = require("./detector");
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
        var $target = this.active.$lightbox.querySelector("." + types_1.Classes.IMG_WRAPPER);
        if ($target) {
            $target.style.transform =
                "translateX(" + offset.toFixed(5) + "px) scale(" + scale.toFixed(5) + ")";
            $target.style.opacity = "" + (1 - (1 - scale) * 4);
        }
    };
    yamz.onSwipeStart = function(point, opts) {
        if (this.active) {
            var $target = this.active.$lightbox.querySelector("." + types_1.Classes.IMG_WRAPPER);
            if ($target) {
                $target.classList.add(types_1.Classes.IMG_WRAPPER + "--swiping");
            }
        }
    };
    yamz.onSwipeEnd = function(direction, opts) {
        if (this.active) {
            var $btn =
                direction === "left"
                    ? this.active.$lightbox.querySelector("." + types_1.Classes.ALBUM_NEXT)
                    : this.active.$lightbox.querySelector("." + types_1.Classes.ALBUM_PREV);
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
            var $target = this.active.$lightbox.querySelector("." + types_1.Classes.IMG_WRAPPER);
            if ($target) {
                $target.classList.remove(types_1.Classes.IMG_WRAPPER + "--swiping");
            }
        }
    };
    yamz.swipeDetector = new detector_1.default({
        start: yamz.onSwipeStart.bind(yamz),
        update: yamz.applySwipeTransform.bind(yamz),
        end: yamz.onSwipeEnd.bind(yamz),
        cancel: yamz.onSwipeCancel.bind(yamz),
    });
    return yamz;
}
exports.default = withSwipe;
//# sourceMappingURL=swipe.js.map
