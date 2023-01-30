"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
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
exports.generateLightboxImg = generateLightboxImg;
function isValidImage($elm) {
    var types = [HTMLPictureElement, HTMLImageElement];
    return types.some(function(type) {
        return $elm instanceof type;
    });
}
exports.isValidImage = isValidImage;
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
exports.getHighResFromImage = getHighResFromImage;
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
exports.getHighestFromSrcSet = getHighestFromSrcSet;
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
exports.getSrcFromImage = getSrcFromImage;
function getScrollPosition(horizontal) {
    if (horizontal === void 0) {
        horizontal = false;
    }
    return horizontal
        ? window.scrollX || document.body.scrollLeft || document.documentElement.scrollLeft || 0
        : window.scrollY || document.body.scrollTop || document.documentElement.scrollTop || 0;
}
exports.getScrollPosition = getScrollPosition;
function defaultLightboxGenerator($copiedImg, opts, $original) {
    var $wrapper = document.createElement("aside");
    $wrapper.classList.add(types_1.Classes.WRAPPER);
    if (opts.class) {
        $wrapper.classList.add(opts.class);
    }
    var $imgWrapper = document.createElement("div");
    $imgWrapper.classList.add(types_1.Classes.IMG_WRAPPER);
    $imgWrapper.appendChild($copiedImg);
    $wrapper.appendChild($imgWrapper);
    // add loading UI if we're going to load a highres
    if (opts.highres) {
        $wrapper.classList.add(types_1.Classes.HAS_HIGHRES);
        var $loader = document.createElement("div");
        $loader.classList.add(types_1.Classes.LOADER);
        $imgWrapper.insertBefore($loader, $copiedImg);
    }
    return $wrapper;
}
exports.defaultLightboxGenerator = defaultLightboxGenerator;
//# sourceMappingURL=dom.js.map
