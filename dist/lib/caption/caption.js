"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
require("./caption.css");
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
            $caption.classList.add(types_1.Classes.CAPTION);
            if (opts.caption instanceof HTMLElement) {
                $caption.appendChild(opts.caption);
            } else {
                $caption.textContent = opts.caption;
            }
            $lightbox.classList.add(types_1.Classes.HAS_CAPTION);
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
exports.default = withCaption;
//# sourceMappingURL=caption.js.map
