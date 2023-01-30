declare type coordinates = {
    x: number;
    y: number;
};
declare type listeners = {
    start?: (position: coordinates, metadata?: any) => void;
    update?: (offset: coordinates, metadata?: any) => void;
    end?: (direction: "left" | "right", metadata?: any) => void;
    cancel?: (metadata?: any) => void;
};
export default class SwipeDetector {
    listeners: listeners;
    state?: {
        startTouch: coordinates & {
            time: number;
        };
        lastTouch: coordinates & {
            time: number;
        };
        identifier?: number;
        velocity: number;
        isSwipe: boolean;
        metadata?: any;
    };
    threshold: number;
    constructor(listeners: listeners, threshold?: number);
    setThreshold(threshold: number): void;
    start(e: MouseEvent | TouchEvent, metadata?: any): false | undefined;
    move(e: MouseEvent | TouchEvent): void;
    end(e: MouseEvent | TouchEvent): boolean;
    cancel(): void;
    after(): void;
    emit(event: keyof listeners, ...args: any[]): void;
}
export {};
