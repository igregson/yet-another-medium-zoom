import withAlbum from "../album/album";
import "./swipe.css";
import SwipeDetector from "./detector";
export interface Swipeable {
    swipeDetector: SwipeDetector;
    applySwipeTransform: (
        offset: {
            x: number;
            y: number;
        },
        opts: SwipeOptions
    ) => void;
    onSwipeStart: (
        point: {
            x: number;
            y: number;
        },
        opts: SwipeOptions
    ) => void;
    onSwipeEnd: (direction: "left" | "right", opts: SwipeOptions) => void;
    onSwipeCancel: (opts: SwipeOptions) => void;
    afterSwipe: () => void;
}
export interface SwipeOptions {
    /** Describes how far users have to drag before it's recognized as a drag */
    swipeThreshold?: number;
    /** Describes how far the image can move visually in response to being dragged */
    swipeResponseLimit?: number;
    /** If true, desktop users can drag images using their mouse */
    swipeOnDesktop?: boolean;
}
/** Augments the YAMZ instance to support swiping through albums on mobile */
export default function withSwipe<YamzType extends ReturnType<typeof withAlbum>>(
    _yamz: YamzType
): Pick<
    YamzType,
    Exclude<
        keyof YamzType,
        | "defaultLightboxGenerator"
        | "setOptions"
        | "optsFromElm"
        | "open"
        | "replace"
        | "bind"
        | "options"
        | "swipeDetector"
        | "applySwipeTransform"
        | "onSwipeStart"
        | "onSwipeEnd"
        | "onSwipeCancel"
        | "afterSwipe"
    >
> &
    Pick<
        {
            defaultLightboxGenerator: (
                $copiedImg: HTMLElement,
                opts: Parameters<YamzType["defaultLightboxGenerator"]>[1] & SwipeOptions,
                $original: HTMLElement
            ) => HTMLElement;
            setOptions: (
                options: Parameters<YamzType["setOptions"]>[0] & Partial<SwipeOptions>
            ) => ReturnType<YamzType["setOptions"]>;
            optsFromElm: ($elm: HTMLElement) => ReturnType<YamzType["optsFromElm"]> & SwipeOptions;
            open: (
                $img: Parameters<YamzType["open"]>[0],
                opts?: (Parameters<YamzType["open"]>[1] & SwipeOptions) | undefined
            ) => ReturnType<YamzType["open"]>;
            replace: (
                $img: Parameters<YamzType["replace"]>[0],
                opts?: (Parameters<YamzType["replace"]>[1] & SwipeOptions) | undefined
            ) => ReturnType<YamzType["replace"]>;
            bind: (
                $imgs: Parameters<YamzType["bind"]>[0],
                opts?: (Parameters<YamzType["bind"]>[1] & SwipeOptions) | undefined
            ) => ReturnType<YamzType["bind"]>;
            options: YamzType["options"] & SwipeOptions;
        },
        | "defaultLightboxGenerator"
        | "setOptions"
        | "optsFromElm"
        | "open"
        | "replace"
        | "bind"
        | "options"
    > &
    Swipeable;
