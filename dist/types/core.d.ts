import { ImageOptions, GlobalOptions, STATES, YamzElement } from "./types";
import { defaultLightboxGenerator } from "./dom";
import FLIPElement from "./flip";
import "./style.css";
export declare const DEFAULT_OPTS: GlobalOptions;
export declare class MediumLightboxCore {
    options: GlobalOptions;
    state: STATES;
    active?: {
        $lightbox: HTMLElement;
        $img: HTMLElement;
        $copiedImg: HTMLImageElement;
        $highRes?: HTMLImageElement;
        scrollPos: number;
        origSrc?: string;
        options: ImageOptions;
    };
    _flip?: FLIPElement;
    _raf: boolean;
    constructor();
    /** Set options used by every lightbox */
    setOptions(newOpts: Partial<GlobalOptions>): void;
    /** Get the currently set global options */
    getOptions(): GlobalOptions;
    /** Open a specific image in the lightbox */
    open($img: YamzElement, opts?: ImageOptions): Promise<HTMLElement>;
    /** Close the currently active image. If img is given, only closes if that's the currently active img */
    close($img?: YamzElement): Promise<void>;
    /**
     * Replaces the currently open lightbox with that of another image, without animating a close/open
     */
    replace($img: YamzElement, opts?: ImageOptions): void;
    /**
     * Replaces the currently active lightbox DOM with the given one
     * Mostly its own method so plugins can overwrite it
     */
    replaceLightboxDOM($newLightbox: HTMLElement, $oldLightbox?: HTMLElement): void;
    /**
     * Function for generating lightbox for a given image.
     * This also handles loading the highres and stuff.
     * If you're only looking for generating the DOM (e.g. if you're creating a custom lightbox generator), use .defaultLightboxGenerator
     */
    generateLightbox(
        $img: HTMLPictureElement | HTMLImageElement,
        opts: GlobalOptions & ImageOptions
    ): {
        $img: HTMLPictureElement | HTMLImageElement;
        $copiedImg: HTMLImageElement;
        $lightbox: HTMLElement;
        origSrc: string;
        $highRes?: HTMLImageElement;
    };
    /** Called when a high-res version of an image has loaded */
    _highResLoaded($highRes: HTMLImageElement): void;
    /** Parses options from a DOM element */
    optsFromElm($elm: HTMLElement): ImageOptions;
    /** Binds an image (or multiple), such that clicking it will open it
     * @param $imgs The image(s) to bind. If this is a string, it's used as a selector. */
    bind($imgs: HTMLElement | HTMLElement[] | string, opts?: ImageOptions): void;
    /** Attaches listeners we need globally */
    attachListeners(): void;
    /** Detaches global listeners */
    detachListeners(): void;
    /** Helper function used as scroll listener. Debounces calls to .onScroll */
    _onScroll(): void;
    onScroll(): void;
    /** Helper function used to ensure that .onKeyDown is called with proper `this` value, even if overwritten by plugins */
    _onKeyDown(e: KeyboardEvent): void;
    onKeyDown(e: KeyboardEvent): void;
    defaultLightboxGenerator: typeof defaultLightboxGenerator;
}
declare const _default: MediumLightboxCore;
export default _default;
