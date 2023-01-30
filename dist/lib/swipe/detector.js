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
exports.default = SwipeDetector;
//# sourceMappingURL=detector.js.map
