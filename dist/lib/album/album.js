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
require("./album.css");
/** Augments the YAMZ instance to support albums */
function withAlbum(_yamz) {
    var defaultLightboxGenerator = _yamz.defaultLightboxGenerator,
        optsFromElm = _yamz.optsFromElm,
        onKeyDown = _yamz.onKeyDown;
    var yamz = _yamz;
    yamz.options = __assign({ wrapAlbum: false }, yamz.options);
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
            $prev.classList.add(types_1.Classes.ALBUM_PREV);
            $prev.addEventListener("click", function(e) {
                if (!opts.album) {
                    return;
                }
                e.stopPropagation();
                yamz.moveToAlbumEntry(opts.album[prevIndex], "prev");
            });
            $lightbox.appendChild($prev);
        }
        if (nextIndex < opts.album.length) {
            var $next = document.createElement("button");
            $next.classList.add(types_1.Classes.ALBUM_NEXT);
            $next.addEventListener("click", function(e) {
                if (!opts.album) {
                    return;
                }
                e.stopPropagation();
                yamz.moveToAlbumEntry(opts.album[nextIndex], "next");
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
    yamz.moveToAlbumEntry = function(entry, direction) {
        var _this = this;
        if (!this.active) {
            return;
        }
        var $target = this.active.$lightbox.querySelector("." + types_1.Classes.IMG_WRAPPER);
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
            var $newTarget = _this.active.$lightbox.querySelector(
                "." + types_1.Classes.IMG_WRAPPER
            );
            if (!$newTarget) {
                return;
            }
            $newTarget.classList.add(types_1.Classes.IMG_WRAPPER + "--in-" + directions.in);
        };
        setTimeout(_onAnimEnd, 1000); // fail safe if for whatever reason animation doesn't play
        $target.addEventListener("animationend", _onAnimEnd);
        $target.addEventListener("animationcancel", _onAnimEnd);
        $target.classList.add(types_1.Classes.IMG_WRAPPER + "--out-" + directions.out);
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
                    e.key === "ArrowLeft" ? "prev" : "next"
                );
            }
        }
    };
    return yamz;
}
exports.default = withAlbum;
//# sourceMappingURL=album.js.map
