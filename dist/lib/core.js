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
var __awaiter =
    (this && this.__awaiter) ||
    function(thisArg, _arguments, P, generator) {
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
    };
var __generator =
    (this && this.__generator) ||
    function(thisArg, body) {
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
    };
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var dom_1 = require("./dom");
var flip_1 = require("./flip");
require("./style.css");
exports.DEFAULT_OPTS = {
    scrollAllowance: 128,
    duration: 300,
    container: undefined,
    lightboxGenerator: undefined,
};
var MediumLightboxCore = /** @class */ (function() {
    function MediumLightboxCore() {
        this.options = __assign({}, exports.DEFAULT_OPTS);
        this.state = types_1.STATES.Closed;
        this.active = undefined;
        this._raf = false;
        // re-export some stuff so it's easily available to plugins
        this.defaultLightboxGenerator = dom_1.defaultLightboxGenerator;
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
                        if (!dom_1.isValidImage($img)) {
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
                        this.state = types_1.STATES.Opening;
                        this.active = __assign({}, this.generateLightbox($img, options), {
                            options: options,
                            scrollPos: dom_1.getScrollPosition(),
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
                        this._flip = new flip_1.default($img);
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
                        this.state = types_1.STATES.Open;
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
                        this.state = types_1.STATES.Closing;
                        active = this.active;
                        options = active.options;
                        this.active.$lightbox.classList.add(types_1.Classes.WRAPPER_CLOSING);
                        $animElm = this.active.$copiedImg.parentElement || this.active.$copiedImg;
                        $positionElm =
                            this.active.$img.nodeName === "PICTURE"
                                ? this.active.$img.querySelector("img")
                                : $img;
                        if (!$positionElm) {
                            $positionElm = this.active.$img;
                        }
                        if (!options.duration) return [3 /*break*/, 2];
                        flip = new flip_1.default($img);
                        flip.first(this.active.$copiedImg).last($positionElm);
                        return [4 /*yield*/, flip.invert($animElm).play(options.duration)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        active.$img.classList.remove(types_1.Classes.ORIGINAL_OPEN);
                        $parent = active.$lightbox.parentNode;
                        if ($parent) {
                            $parent.removeChild(active.$lightbox);
                        }
                        this.state = types_1.STATES.Closed;
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
        if (!dom_1.isValidImage($img)) {
            throw new TypeError($img + " cannot be used as an image");
        }
        if (!this.active) {
            return;
        }
        // unhide the original image
        this.active.$img.classList.remove(types_1.Classes.ORIGINAL_OPEN);
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
        var origSrc = dom_1.getSrcFromImage($img);
        var hasSrcSet = $img instanceof HTMLPictureElement || $img.srcset;
        // if we weren't explicitly given a highres, try to extract one from the image
        if (!opts.highres && hasSrcSet) {
            var highRes = dom_1.getHighResFromImage($img);
            opts.highres = highRes;
        }
        // generate the DOM
        var $copiedImg = dom_1.generateLightboxImg($img);
        $copiedImg.classList.add(types_1.Classes.IMG);
        $copiedImg.classList.remove(types_1.Classes.ORIGINAL);
        $img.classList.add(types_1.Classes.ORIGINAL_OPEN);
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
                $lightbox.classList.remove(types_1.Classes.HAS_HIGHRES);
                var $loader = $lightbox.querySelector("." + types_1.Classes.LOADER);
                if ($loader && $loader.parentNode) {
                    $loader.parentNode.removeChild($loader);
                }
            });
            $highRes.src = opts.highres;
            $highRes.classList.add(types_1.Classes.HIGHRES);
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
                _this.active.$lightbox.classList.add(types_1.Classes.HIGHRES_LOADED);
                $copiedImg.parentElement.insertBefore(
                    $highRes,
                    $copiedImg.parentElement.firstChild
                );
            }
        };
        if (this.state === types_1.STATES.Opening && this._flip) {
            this._flip.update($animElm, updater, this.active.options.duration);
        } else if (this.state === types_1.STATES.Open && this.active) {
            this._flip = new flip_1.default(this.active.$img);
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
            $img.classList.add(types_1.Classes.ORIGINAL);
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
        var scrollPos = dom_1.getScrollPosition();
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
exports.MediumLightboxCore = MediumLightboxCore;
exports.default = new MediumLightboxCore();
//# sourceMappingURL=core.js.map
