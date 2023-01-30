import { MediumLightboxCore } from "../core";
import "./album.css";
export interface Albumed<Yamz extends MediumLightboxCore> {
    moveToAlbumEntry: (
        entry: AlbumEntry<Yamz>,
        direction: "next" | "prev",
        disableAlbumAnimations: boolean
    ) => void;
}
export interface AlbumOptions<Yamz extends MediumLightboxCore> {
    album?: AlbumEntry<Yamz>[];
    wrapAlbum?: boolean;
    disableAlbumAnimations?: boolean;
}
export interface AlbumEntry<Yamz extends MediumLightboxCore> {
    img: HTMLElement;
    opts?: ReturnType<Yamz["optsFromElm"]> & AlbumOptions<Yamz>;
}
/** Augments the YAMZ instance to support albums */
export default function withAlbum<YamzType extends MediumLightboxCore>(
    _yamz: YamzType
): Pick<
    YamzType,
    Exclude<
        keyof YamzType,
        | "optsFromElm"
        | "options"
        | "setOptions"
        | "open"
        | "replace"
        | "bind"
        | "defaultLightboxGenerator"
        | "moveToAlbumEntry"
    >
> &
    Pick<
        {
            defaultLightboxGenerator: (
                $copiedImg: HTMLElement,
                opts: Parameters<YamzType["defaultLightboxGenerator"]>[1] & AlbumOptions<YamzType>,
                $original: HTMLElement
            ) => HTMLElement;
            setOptions: (
                options: Parameters<YamzType["setOptions"]>[0] & Partial<AlbumOptions<YamzType>>
            ) => ReturnType<YamzType["setOptions"]>;
            optsFromElm: (
                $elm: HTMLElement
            ) => ReturnType<YamzType["optsFromElm"]> & AlbumOptions<YamzType>;
            open: (
                $img: Parameters<YamzType["open"]>[0],
                opts?: (Parameters<YamzType["open"]>[1] & AlbumOptions<YamzType>) | undefined
            ) => ReturnType<YamzType["open"]>;
            replace: (
                $img: Parameters<YamzType["replace"]>[0],
                opts?: (Parameters<YamzType["replace"]>[1] & AlbumOptions<YamzType>) | undefined
            ) => ReturnType<YamzType["replace"]>;
            bind: (
                $imgs: Parameters<YamzType["bind"]>[0],
                opts?: (Parameters<YamzType["bind"]>[1] & AlbumOptions<YamzType>) | undefined
            ) => ReturnType<YamzType["bind"]>;
            options: YamzType["options"] & AlbumOptions<YamzType>;
        },
        | "optsFromElm"
        | "options"
        | "setOptions"
        | "open"
        | "replace"
        | "bind"
        | "defaultLightboxGenerator"
    > &
    Albumed<YamzType>;
