import { MediumLightboxCore } from "../core";
import "./caption.css";
export interface Captioned {}
export interface CaptionOptions {
    caption?: string | HTMLElement;
}
/** Augments the YAMZ instance to support captions */
export default function withCaption<YamzType extends MediumLightboxCore>(
    _yamz: YamzType
): Pick<
    YamzType,
    Exclude<
        keyof YamzType,
        | "defaultLightboxGenerator"
        | "optsFromElm"
        | "setOptions"
        | "open"
        | "replace"
        | "bind"
        | "options"
    >
> &
    Pick<
        {
            defaultLightboxGenerator: (
                $copiedImg: HTMLElement,
                opts: Parameters<YamzType["defaultLightboxGenerator"]>[1] & CaptionOptions,
                $original: HTMLElement
            ) => HTMLElement;
            setOptions: (
                options: Parameters<YamzType["setOptions"]>[0] & Partial<CaptionOptions>
            ) => ReturnType<YamzType["setOptions"]>;
            optsFromElm: (
                $elm: HTMLElement
            ) => ReturnType<YamzType["optsFromElm"]> & CaptionOptions;
            open: (
                $img: Parameters<YamzType["open"]>[0],
                opts?: (Parameters<YamzType["open"]>[1] & CaptionOptions) | undefined
            ) => ReturnType<YamzType["open"]>;
            replace: (
                $img: Parameters<YamzType["replace"]>[0],
                opts?: (Parameters<YamzType["replace"]>[1] & CaptionOptions) | undefined
            ) => ReturnType<YamzType["replace"]>;
            bind: (
                $imgs: Parameters<YamzType["bind"]>[0],
                opts?: (Parameters<YamzType["bind"]>[1] & CaptionOptions) | undefined
            ) => ReturnType<YamzType["bind"]>;
            options: YamzType["options"] & CaptionOptions;
        },
        | "defaultLightboxGenerator"
        | "optsFromElm"
        | "setOptions"
        | "open"
        | "replace"
        | "bind"
        | "options"
    > &
    Captioned;
