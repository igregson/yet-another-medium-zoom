import { MediumLightboxCore } from "./core";
export interface GlobalOptions {
    scrollAllowance: number;
    duration: number;
    container?: HTMLElement;
    lightboxGenerator?: (
        $img: HTMLElement,
        opts: ImageOptions,
        $original: HTMLElement
    ) => HTMLElement;
}
export interface ImageOptions extends Partial<GlobalOptions> {
    highres?: string;
    class?: string;
}
export interface YamzElement extends HTMLElement {
    yamzOpts?: ImageOptions;
}
export declare enum Classes {
    WRAPPER = "yamz__wrapper",
    WRAPPER_CLOSING = "yamz__wrapper--closing",
    IMG_WRAPPER = "yamz__img-wrapper",
    IMG = "yamz__img",
    HIGHRES = "yamz__highres",
    HAS_HIGHRES = "yamz__wrapper--has-highres",
    HIGHRES_LOADED = "yamz__wrapper--highres-loaded",
    CAPTION = "yamz__caption",
    HAS_CAPTION = "yamz__wrapper--has-caption",
    ORIGINAL = "yamz__original",
    ORIGINAL_OPEN = "yamz__original--open",
    LOADER = "yamz__loader",
    ALBUM_PREV = "yamz__album__prev",
    ALBUM_NEXT = "yamz__album__next",
}
export declare enum STATES {
    Closed = 0,
    Opening = 1,
    Open = 2,
    Closing = 3,
}
export declare type Subtract<T extends object, U extends object> = Pick<
    T,
    Exclude<keyof T, keyof U>
>;
declare type Overwrite<T extends object, U extends object> = Subtract<T, U> & U;
/**
 * Applies a given Plugin, with its own GlobalOptions and ImageOptions, to an instance of YAMZ
 */
export declare type YamzPlugin<
    Yamz extends MediumLightboxCore,
    Plugin extends object,
    NewGlobalOpts extends object,
    NewImageOpts extends object
> = Overwrite<
    Yamz,
    Overwrite<
        {
            defaultLightboxGenerator: (
                $copiedImg: HTMLElement,
                opts: Parameters<Yamz["defaultLightboxGenerator"]>[1] & NewImageOpts,
                $original: HTMLElement
            ) => HTMLElement;
            setOptions: (
                options: Parameters<Yamz["setOptions"]>[0] & Partial<NewGlobalOpts>
            ) => ReturnType<Yamz["setOptions"]>;
            optsFromElm: ($elm: HTMLElement) => ReturnType<Yamz["optsFromElm"]> & NewImageOpts;
            open: (
                $img: Parameters<Yamz["open"]>[0],
                opts?: Parameters<Yamz["open"]>[1] & NewImageOpts
            ) => ReturnType<Yamz["open"]>;
            replace: (
                $img: Parameters<Yamz["replace"]>[0],
                opts?: Parameters<Yamz["replace"]>[1] & NewImageOpts
            ) => ReturnType<Yamz["replace"]>;
            bind: (
                $imgs: Parameters<Yamz["bind"]>[0],
                opts?: Parameters<Yamz["bind"]>[1] & NewImageOpts
            ) => ReturnType<Yamz["bind"]>;
            options: Yamz["options"] & NewGlobalOpts;
        },
        Plugin
    >
>;
export {};
