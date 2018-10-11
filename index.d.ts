/// <reference types="node" />

declare namespace Units {

    interface AddonOptions {
        type: number,
        symbol: string,
        min: number,
        max: number
    }

    declare class Unit {
        constructor(options?: AddonOptions);

        public type: boolean;
        public symbol: string;
        public min: number;
        public max: number;
    }


}

export as namespace Units;
export = Units;