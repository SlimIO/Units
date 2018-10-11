/// <reference types="node" />

declare namespace Units {

    interface UnitOption {
        type: number,
        symbol: string,
        min: number,
        max: number
    }

    declare class Unit {
        constructor(options?: UnitOption);

        public type: boolean;
        public symbol: string;
        public min: number;
        public max: number;
    }

}

export type MicroSecond = typeof Unit;
export type NanoSecond = typeof Unit;
export type MilliSecond = typeof Unit;
export type Second = typeof Unit;
export type Minute = typeof Unit;
export type Hour = typeof Unit;
export type Day = typeof Unit;
export type Month = typeof Unit;
export type Year = typeof Unit;

export type Celsius = typeof Unit;
export type Fehrenheit = typeof Unit;
export type Kelvin = typeof Unit;

export type Pourcent = typeof Unit;

export type Bit = typeof Unit;
export type KiloBit = typeof Unit;
export type MegaBit = typeof Unit;
export type GigaBit = typeof Unit;
export type TeraBit = typeof Unit;

export type BitMicroSeconde = typeof Unit;
export type BitNanoSeconde = typeof Unit;
export type BitMilliSeconde = typeof Unit;
export type BitSeconde = typeof Unit;
export type BitMinute = typeof Unit;
export type BitHour = typeof Unit;
export type BitDay = typeof Unit;
export type BitMonth = typeof Unit;
export type BitYear = typeof Unit;

export type KiloBitMicroSeconde = typeof Unit;
export type KiloBitNanoSeconde = typeof Unit;
export type KiloBitMilliSeconde = typeof Unit;
export type KiloBitSeconde = typeof Unit;
export type KiloBitMinute = typeof Unit;
export type KiloBitHour = typeof Unit;
export type KiloBitDay = typeof Unit;
export type KiloBitMonth = typeof Unit;
export type KiloBitYear = typeof Unit;

export type MegaBitMicroSeconde = typeof Unit;
export type MegaBitNanoSeconde = typeof Unit;
export type MegaBitMilliSeconde = typeof Unit;
export type MegaBitSeconde = typeof Unit;
export type MegaBitMinute = typeof Unit;
export type MegaBitHour = typeof Unit;
export type MegaBitDay = typeof Unit;
export type MegaBitMonth = typeof Unit;
export type MegaBitYear = typeof Unit;

export type GigaBitMicroSeconde = typeof Unit;
export type GigaBitNanoSeconde = typeof Unit;
export type GigaBitMilliSeconde = typeof Unit;
export type GigaBitSeconde = typeof Unit;
export type GigaBitMinute = typeof Unit;
export type GigaBitHour = typeof Unit;
export type GigaBitDay = typeof Unit;
export type GigaBitMonth = typeof Unit;
export type GigaBitYear = typeof Unit;

export type TeraBitMicroSeconde = typeof Unit;
export type TeraBitNanoSeconde = typeof Unit;
export type TeraBitMilliSeconde = typeof Unit;
export type TeraBitSeconde = typeof Unit; 
export type TeraBitMinute = typeof Unit;
export type TeraBitHour = typeof Unit;
export type TeraBitDay = typeof Unit;
export type TeraBitMonth = typeof Unit;
export type TeraBitYear = typeof Unit;

export type Byte = typeof Unit;
export type KiloByte = typeof Unit;
export type MegaByte = typeof Unit;
export type GigaByte = typeof Unit;
export type TeraByte = typeof Unit;

export type ByteMicroSeconde = typeof Unit;
export type ByteNanoSeconde = typeof Unit;
export type ByteMilliSeconde = typeof Unit;
export type ByteSeconde = typeof Unit;
export type ByteMinute = typeof Unit;
export type ByteHour = typeof Unit;
export type ByteDay = typeof Unit;
export type ByteMonth = typeof Unit;
export type ByteYear = typeof Unit;

export type KiloByteMicroSeconde = typeof Unit;
export type KiloByteNanoSeconde = typeof Unit;
export type KiloByteMilliSeconde = typeof Unit;
export type KiloByteSeconde = typeof Unit;
export type KiloByteMinute = typeof Unit;
export type KiloByteHour = typeof Unit;
export type KiloByteDay = typeof Unit;
export type KiloByteMonth = typeof Unit;
export type KiloByteYear = typeof Unit;

export type MegaByteMicroSeconde = typeof Unit;
export type MegaByteNanoSeconde = typeof Unit;
export type MegaByteMilliSeconde = typeof Unit;
export type MegaByteSeconde = typeof Unit;
export type MegaByteMinute = typeof Unit;
export type MegaByteHour = typeof Unit;
export type MegaByteDay = typeof Unit;
export type MegaByteMonth = typeof Unit;
export type MegaByteYear = typeof Unit;

export type GigaByteMicroSeconde = typeof Unit;
export type GigaByteNanoSeconde = typeof Unit;
export type GigaByteMilliSeconde = typeof Unit;
export type GigaByteSeconde = typeof Unit;
export type GigaByteMinute = typeof Unit;
export type GigaByteHour = typeof Unit;
export type GigaByteDay = typeof Unit;
export type GigaByteMonth = typeof Unit;
export type GigaByteYear = typeof Unit;

export type TeraByteMicroSeconde = typeof Unit;
export type TeraByteNanoSeconde = typeof Unit;
export type TeraByteMilliSeconde = typeof Unit;
export type TeraByteSeconde = typeof Unit;
export type TeraByteMinute = typeof Unit;
export type TeraByteHour = typeof Unit;
export type TeraByteDay = typeof Unit;
export type TeraByteMonth = typeof Unit;
export type TeraByteYear = typeof Unit;

export type Octet = typeof Unit;
export type KiloOctet = typeof Unit;
export type MegaOctet = typeof Unit;
export type GigaOctet = typeof Unit;
export type TeraOctet = typeof Unit;

export type OctetMicroSeconde = typeof Unit;
export type OctetNanoSeconde = typeof Unit;
export type OctetMilliSeconde = typeof Unit;
export type OctetSeconde = typeof Unit;
export type OctetMinute = typeof Unit;
export type OctetHour = typeof Unit;
export type OctetDay = typeof Unit;
export type OctetMonth = typeof Unit;
export type OctetYear = typeof Unit;

export type KiloOctetMicroSeconde = typeof Unit;
export type KiloOctetNanoSeconde = typeof Unit;
export type KiloOctetMilliSeconde = typeof Unit;
export type KiloOctetSeconde = typeof Unit;
export type KiloOctetMinute = typeof Unit;
export type KiloOctetHour = typeof Unit;
export type KiloOctetDay = typeof Unit;
export type KiloOctetMonth = typeof Unit;
export type KiloOctetYear = typeof Unit;

export type MegaOctetMicroSeconde = typeof Unit;
export type MegaOctetNanoSeconde = typeof Unit;
export type MegaOctetMilliSeconde = typeof Unit;
export type MegaOctetSeconde = typeof Unit;
export type MegaOctetMinute = typeof Unit;
export type MegaOctetHour = typeof Unit;
export type MegaOctetDay = typeof Unit;
export type MegaOctetMonth = typeof Unit;
export type MegaOctetYear = typeof Unit;

export type GigaOctetMicroSeconde = typeof Unit;
export type GigaOctetNanoSeconde = typeof Unit;
export type GigaOctetMilliSeconde = typeof Unit;
export type GigaOctetSeconde = typeof Unit;
export type GigaOctetMinute = typeof Unit;
export type GigaOctetHour = typeof Unit;
export type GigaOctetDay = typeof Unit;
export type GigaOctetMonth = typeof Unit;
export type GigaOctetYear = typeof Unit;

export type TeraOctetMicroSeconde = typeof Unit;
export type TeraOctetNanoSeconde = typeof Unit;
export type TeraOctetMilliSeconde = typeof Unit;
export type TeraOctetSeconde = typeof Unit;
export type TeraOctetMinute = typeof Unit;
export type TeraOctetHour = typeof Unit;
export type TeraOctetDay = typeof Unit;
export type TeraOctetMonth = typeof Unit;
export type TeraOctetYear = typeof Unit;

export type Count = typeof Unit;

export type CountMicroSeconde = typeof Unit;
export type CountNanoSeconde = typeof Unit;
export type CountMilliSeconde = typeof Unit;
export type CountSeconde = typeof Unit;
export type CountMinute = typeof Unit;
export type CountHour = typeof Unit;
export type CountDay = typeof Unit;
export type CountMonth = typeof Unit;
export type CountYear = typeof Unit;

export type Hertz = typeof Unit;
export type KiloHertz = typeof Unit;
export type MegaHertz = typeof Unit;
export type GigaHertz = typeof Unit;

export type Watt = typeof Unit;
export type KiloWatt = typeof Unit;

export type WattHour = typeof Unit;
export type WattDay = typeof Unit;
export type WattMonth = typeof Unit;
export type WattYear = typeof Unit;

export type KiloWattHour = typeof Unit;
export type KiloWattDay = typeof Unit;
export type KiloWattMonth = typeof Unit;
export type KiloWattYear = typeof Unit;

export type Bool = typeof Unit;

export as namespace Units;
export = Units;