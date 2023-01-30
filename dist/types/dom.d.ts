import { ImageOptions } from "./types";
/**
 * Creates an image for use in the lightbox based on an input element.
 * Always returns an <img>, regardless of the input element.
 */
export declare function generateLightboxImg(
    $img: HTMLPictureElement | HTMLImageElement,
    newSrc?: string
): HTMLImageElement;
export declare function isValidImage(
    $elm: HTMLElement
): $elm is HTMLImageElement | HTMLPictureElement;
export declare function getHighResFromImage(
    $image: HTMLImageElement | HTMLPictureElement,
    targetWidth?: number
): string;
export declare function getHighestFromSrcSet(
    srcset: string,
    targetWidth?: number
): {
    src: string;
    width: number;
} | null;
export declare function getSrcFromImage($elm: HTMLImageElement | HTMLPictureElement): string;
export declare function getScrollPosition(horizontal?: boolean): number;
export declare function defaultLightboxGenerator(
    $copiedImg: HTMLElement,
    opts: ImageOptions,
    $original: HTMLElement
): HTMLElement;
