/** https://aerotwist.com/blog/flip-your-animations/ */
export default class FLIPElement {
    $elm: HTMLElement;
    playing: boolean;
    _first?: Snapshot;
    _last?: Snapshot;
    _elmPos?: Snapshot;
    _target$Elm?: HTMLElement;
    _playResolver?: (val?: unknown) => void;
    _transitionFallback?: number;
    constructor($elm: HTMLElement);
    first($elm?: HTMLElement): this;
    last($elm?: HTMLElement): this;
    invert($elm?: HTMLElement): this;
    play(duration?: number): Promise<unknown>;
    stop(): void;
    /** Updates an animation while it's playing */
    update($target: HTMLElement, updater?: () => void, duration?: number): void;
    _onTransitionEnd(e: TransitionEvent): void;
}
interface Snapshot {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function getSnapshot($elm: HTMLElement): Snapshot;
export {};
