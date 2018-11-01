declare namespace Units {

    export enum Types {
        Time,
        Degree,
        Pourcent,
        Bit,
        BitTime,
        Byte,
        ByteTime,
        Octet,
        OctetTime,
        Count,
        CountTime,
        Hertz,
        Watt,
        WattTime,
        Boolean
    }

    interface DefinitionOptions {
        name: string;
        type: number,
        symbol: string,
        min?: number,
        max?: number
    }

    declare class UnitDefinition {
        constructor(options: DefinitionOptions);

        public name: string;
        public type: Types;
        public symbol: string;
        public min: number;
        public max: number;
    }

    // Others unit
    export const Pourcent: UnitDefinition;
    export const Bool: UnitDefinition;
    export const Count: UnitDefinition;

    // Time unit
    export const MicroSecond: UnitDefinition;
    export const NanoSecond: UnitDefinition;
    export const MilliSecond: UnitDefinition;
    export const Second: UnitDefinition;
    export const Minute: UnitDefinition;
    export const Hour: UnitDefinition;
    export const Day: UnitDefinition;
    export const Month: UnitDefinition;
    export const Year: UnitDefinition;

    // Temperature Unit
    export const Celsius: UnitDefinition;
    export const Fehrenheit: UnitDefinition;
    export const Kelvin: UnitDefinition;

    // Bit Unit
    export const Bit: UnitDefinition;
    export const KiloBit: UnitDefinition;
    export const MegaBit: UnitDefinition;
    export const GigaBit: UnitDefinition;
    export const TeraBit: UnitDefinition;

    export const BitMicroSeconde: UnitDefinition;
    export const BitNanoSeconde: UnitDefinition;
    export const BitMilliSeconde: UnitDefinition;
    export const BitSeconde: UnitDefinition;
    export const BitMinute: UnitDefinition;
    export const BitHour: UnitDefinition;
    export const BitDay: UnitDefinition;
    export const BitMonth: UnitDefinition;
    export const BitYear: UnitDefinition;

    export const KiloBitMicroSeconde: UnitDefinition;
    export const KiloBitNanoSeconde: UnitDefinition;
    export const KiloBitMilliSeconde: UnitDefinition;
    export const KiloBitSeconde: UnitDefinition;
    export const KiloBitMinute: UnitDefinition;
    export const KiloBitHour: UnitDefinition;
    export const KiloBitDay: UnitDefinition;
    export const KiloBitMonth: UnitDefinition;
    export const KiloBitYear: UnitDefinition;

    export const MegaBitMicroSeconde: UnitDefinition;
    export const MegaBitNanoSeconde: UnitDefinition;
    export const MegaBitMilliSeconde: UnitDefinition;
    export const MegaBitSeconde: UnitDefinition;
    export const MegaBitMinute: UnitDefinition;
    export const MegaBitHour: UnitDefinition;
    export const MegaBitDay: UnitDefinition;
    export const MegaBitMonth: UnitDefinition;
    export const MegaBitYear: UnitDefinition;

    export const GigaBitMicroSeconde: UnitDefinition;
    export const GigaBitNanoSeconde: UnitDefinition;
    export const GigaBitMilliSeconde: UnitDefinition;
    export const GigaBitSeconde: UnitDefinition;
    export const GigaBitMinute: UnitDefinition;
    export const GigaBitHour: UnitDefinition;
    export const GigaBitDay: UnitDefinition;
    export const GigaBitMonth: UnitDefinition;
    export const GigaBitYear: UnitDefinition;

    export const TeraBitMicroSeconde: UnitDefinition;
    export const TeraBitNanoSeconde: UnitDefinition;
    export const TeraBitMilliSeconde: UnitDefinition;
    export const TeraBitSeconde: UnitDefinition;
    export const TeraBitMinute: UnitDefinition;
    export const TeraBitHour: UnitDefinition;
    export const TeraBitDay: UnitDefinition;
    export const TeraBitMonth: UnitDefinition;
    export const TeraBitYear: UnitDefinition;

    export const Byte: UnitDefinition;
    export const KiloByte: UnitDefinition;
    export const MegaByte: UnitDefinition;
    export const GigaByte: UnitDefinition;
    export const TeraByte: UnitDefinition;

    export const ByteMicroSeconde: UnitDefinition;
    export const ByteNanoSeconde: UnitDefinition;
    export const ByteMilliSeconde: UnitDefinition;
    export const ByteSeconde: UnitDefinition;
    export const ByteMinute: UnitDefinition;
    export const ByteHour: UnitDefinition;
    export const ByteDay: UnitDefinition;
    export const ByteMonth: UnitDefinition;
    export const ByteYear: UnitDefinition;

    export const KiloByteMicroSeconde: UnitDefinition;
    export const KiloByteNanoSeconde: UnitDefinition;
    export const KiloByteMilliSeconde: UnitDefinition;
    export const KiloByteSeconde: UnitDefinition;
    export const KiloByteMinute: UnitDefinition;
    export const KiloByteHour: UnitDefinition;
    export const KiloByteDay: UnitDefinition;
    export const KiloByteMonth: UnitDefinition;
    export const KiloByteYear: UnitDefinition;

    export const MegaByteMicroSeconde: UnitDefinition;
    export const MegaByteNanoSeconde: UnitDefinition;
    export const MegaByteMilliSeconde: UnitDefinition;
    export const MegaByteSeconde: UnitDefinition;
    export const MegaByteMinute: UnitDefinition;
    export const MegaByteHour: UnitDefinition;
    export const MegaByteDay: UnitDefinition;
    export const MegaByteMonth: UnitDefinition;
    export const MegaByteYear: UnitDefinition;

    export const GigaByteMicroSeconde: UnitDefinition;
    export const GigaByteNanoSeconde: UnitDefinition;
    export const GigaByteMilliSeconde: UnitDefinition;
    export const GigaByteSeconde: UnitDefinition;
    export const GigaByteMinute: UnitDefinition;
    export const GigaByteHour: UnitDefinition;
    export const GigaByteDay: UnitDefinition;
    export const GigaByteMonth: UnitDefinition;
    export const GigaByteYear: UnitDefinition;

    export const TeraByteMicroSeconde: UnitDefinition;
    export const TeraByteNanoSeconde: UnitDefinition;
    export const TeraByteMilliSeconde: UnitDefinition;
    export const TeraByteSeconde: UnitDefinition;
    export const TeraByteMinute: UnitDefinition;
    export const TeraByteHour: UnitDefinition;
    export const TeraByteDay: UnitDefinition;
    export const TeraByteMonth: UnitDefinition;
    export const TeraByteYear: UnitDefinition;

    export const Octet: UnitDefinition;
    export const KiloOctet: UnitDefinition;
    export const MegaOctet: UnitDefinition;
    export const GigaOctet: UnitDefinition;
    export const TeraOctet: UnitDefinition;

    export const OctetMicroSeconde: UnitDefinition;
    export const OctetNanoSeconde: UnitDefinition;
    export const OctetMilliSeconde: UnitDefinition;
    export const OctetSeconde: UnitDefinition;
    export const OctetMinute: UnitDefinition;
    export const OctetHour: UnitDefinition;
    export const OctetDay: UnitDefinition;
    export const OctetMonth: UnitDefinition;
    export const OctetYear: UnitDefinition;

    export const KiloOctetMicroSeconde: UnitDefinition;
    export const KiloOctetNanoSeconde: UnitDefinition;
    export const KiloOctetMilliSeconde: UnitDefinition;
    export const KiloOctetSeconde: UnitDefinition;
    export const KiloOctetMinute: UnitDefinition;
    export const KiloOctetHour: UnitDefinition;
    export const KiloOctetDay: UnitDefinition;
    export const KiloOctetMonth: UnitDefinition;
    export const KiloOctetYear: UnitDefinition;

    export const MegaOctetMicroSeconde: UnitDefinition;
    export const MegaOctetNanoSeconde: UnitDefinition;
    export const MegaOctetMilliSeconde: UnitDefinition;
    export const MegaOctetSeconde: UnitDefinition;
    export const MegaOctetMinute: UnitDefinition;
    export const MegaOctetHour: UnitDefinition;
    export const MegaOctetDay: UnitDefinition;
    export const MegaOctetMonth: UnitDefinition;
    export const MegaOctetYear: UnitDefinition;

    export const GigaOctetMicroSeconde: UnitDefinition;
    export const GigaOctetNanoSeconde: UnitDefinition;
    export const GigaOctetMilliSeconde: UnitDefinition;
    export const GigaOctetSeconde: UnitDefinition;
    export const GigaOctetMinute: UnitDefinition;
    export const GigaOctetHour: UnitDefinition;
    export const GigaOctetDay: UnitDefinition;
    export const GigaOctetMonth: UnitDefinition;
    export const GigaOctetYear: UnitDefinition;

    export const TeraOctetMicroSeconde: UnitDefinition;
    export const TeraOctetNanoSeconde: UnitDefinition;
    export const TeraOctetMilliSeconde: UnitDefinition;
    export const TeraOctetSeconde: UnitDefinition;
    export const TeraOctetMinute: UnitDefinition;
    export const TeraOctetHour: UnitDefinition;
    export const TeraOctetDay: UnitDefinition;
    export const TeraOctetMonth: UnitDefinition;
    export const TeraOctetYear: UnitDefinition;

    export const CountMicroSeconde: UnitDefinition;
    export const CountNanoSeconde: UnitDefinition;
    export const  CountMilliSeconde: UnitDefinition;
    export const  CountSeconde: UnitDefinition;
    export const CountMinute: UnitDefinition;
    export const CountHour: UnitDefinition;
    export const CountDay: UnitDefinition;
    export const CountMonth: UnitDefinition;
    export const CountYear: UnitDefinition;

    export const Hertz: UnitDefinition;
    export const KiloHertz: UnitDefinition;
    export const MegaHertz: UnitDefinition;
    export const GigaHertz: UnitDefinition;

    export const Watt: UnitDefinition;
    export const KiloWatt: UnitDefinition;

    export const WattHour: UnitDefinition;
    export const WattDay: UnitDefinition;
    export const WattMonth: UnitDefinition;
    export const WattYear: UnitDefinition;

    export const KiloWattHour: UnitDefinition;
    export const KiloWattDay: UnitDefinition;
    export const KiloWattMonth: UnitDefinition;
    export const KiloWattYear: UnitDefinition;

}

export as namespace Units;
export = Units;
