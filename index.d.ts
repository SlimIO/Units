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

export interface Members{
    MicroSecond : typeof Units.Unit;
    NanoSecond : typeof Units.Unit;
    MilliSecond : typeof Units.Unit;
    Second : typeof Units.Unit;
    Minute : typeof Units.Unit;
    Hour : typeof Units.Unit;
    Day : typeof Units.Unit;
    Month : typeof Units.Unit;
    Year : typeof Units.Unit;

    Celsius : typeof Units.Unit;
    Fehrenheit : typeof Units.Unit;
    Kelvin : typeof Units.Unit;

    Pourcent : typeof Units.Unit;

    Bit : typeof Units.Unit;
    KiloBit : typeof Units.Unit;
    MegaBit : typeof Units.Unit;
    GigaBit : typeof Units.Unit;
    TeraBit : typeof Units.Unit;

    BitMicroSeconde : typeof Units.Unit;
    BitNanoSeconde : typeof Units.Unit;
    BitMilliSeconde : typeof Units.Unit;
    BitSeconde : typeof Units.Unit;
    BitMinute : typeof Units.Unit;
    BitHour : typeof Units.Unit;
    BitDay : typeof Units.Unit;
    BitMonth : typeof Units.Unit;
    BitYear : typeof Units.Unit;

    KiloBitMicroSeconde : typeof Units.Unit;
    KiloBitNanoSeconde : typeof Units.Unit;
    KiloBitMilliSeconde : typeof Units.Unit;
    KiloBitSeconde : typeof Units.Unit;
    KiloBitMinute : typeof Units.Unit;
    KiloBitHour : typeof Units.Unit;
    KiloBitDay : typeof Units.Unit;
    KiloBitMonth : typeof Units.Unit;
    KiloBitYear : typeof Units.Unit;

    MegaBitMicroSeconde : typeof Units.Unit;
    MegaBitNanoSeconde : typeof Units.Unit;
    MegaBitMilliSeconde : typeof Units.Unit;
    MegaBitSeconde : typeof Units.Unit;
    MegaBitMinute : typeof Units.Unit;
    MegaBitHour : typeof Units.Unit;
    MegaBitDay : typeof Units.Unit;
    MegaBitMonth : typeof Units.Unit;
    MegaBitYear : typeof Units.Unit;

    GigaBitMicroSeconde : typeof Units.Unit;
    GigaBitNanoSeconde : typeof Units.Unit;
    GigaBitMilliSeconde : typeof Units.Unit;
    GigaBitSeconde : typeof Units.Unit;
    GigaBitMinute : typeof Units.Unit;
    GigaBitHour : typeof Units.Unit;
    GigaBitDay : typeof Units.Unit;
    GigaBitMonth : typeof Units.Unit;
    GigaBitYear : typeof Units.Unit;

    TeraBitMicroSeconde : typeof Units.Unit;
    TeraBitNanoSeconde : typeof Units.Unit;
    TeraBitMilliSeconde : typeof Units.Unit;
    TeraBitSeconde : typeof Units.Unit; 
    TeraBitMinute : typeof Units.Unit;
    TeraBitHour : typeof Units.Unit;
    TeraBitDay : typeof Units.Unit;
    TeraBitMonth : typeof Units.Unit;
    TeraBitYear : typeof Units.Unit;

    Byte : typeof Units.Unit;
    KiloByte : typeof Units.Unit;
    MegaByte : typeof Units.Unit;
    GigaByte : typeof Units.Unit;
    TeraByte : typeof Units.Unit;

    ByteMicroSeconde : typeof Units.Unit;
    ByteNanoSeconde : typeof Units.Unit;
    ByteMilliSeconde : typeof Units.Unit;
    ByteSeconde : typeof Units.Unit;
    ByteMinute : typeof Units.Unit;
    ByteHour : typeof Units.Unit;
    ByteDay : typeof Units.Unit;
    ByteMonth : typeof Units.Unit;
    ByteYear : typeof Units.Unit;

    KiloByteMicroSeconde : typeof Units.Unit;
    KiloByteNanoSeconde : typeof Units.Unit;
    KiloByteMilliSeconde : typeof Units.Unit;
    KiloByteSeconde : typeof Units.Unit;
    KiloByteMinute : typeof Units.Unit;
    KiloByteHour : typeof Units.Unit;
    KiloByteDay : typeof Units.Unit;
    KiloByteMonth : typeof Units.Unit;
    KiloByteYear : typeof Units.Unit;

    MegaByteMicroSeconde : typeof Units.Unit;
    MegaByteNanoSeconde : typeof Units.Unit;
    MegaByteMilliSeconde : typeof Units.Unit;
    MegaByteSeconde : typeof Units.Unit;
    MegaByteMinute : typeof Units.Unit;
    MegaByteHour : typeof Units.Unit;
    MegaByteDay : typeof Units.Unit;
    MegaByteMonth : typeof Units.Unit;
    MegaByteYear : typeof Units.Unit;

    GigaByteMicroSeconde : typeof Units.Unit;
    GigaByteNanoSeconde : typeof Units.Unit;
    GigaByteMilliSeconde : typeof Units.Unit;
    GigaByteSeconde : typeof Units.Unit;
    GigaByteMinute : typeof Units.Unit;
    GigaByteHour : typeof Units.Unit;
    GigaByteDay : typeof Units.Unit;
    GigaByteMonth : typeof Units.Unit;
    GigaByteYear : typeof Units.Unit;

    TeraByteMicroSeconde : typeof Units.Unit;
    TeraByteNanoSeconde : typeof Units.Unit;
    TeraByteMilliSeconde : typeof Units.Unit;
    TeraByteSeconde : typeof Units.Unit;
    TeraByteMinute : typeof Units.Unit;
    TeraByteHour : typeof Units.Unit;
    TeraByteDay : typeof Units.Unit;
    TeraByteMonth : typeof Units.Unit;
    TeraByteYear : typeof Units.Unit;

    Octet : typeof Units.Unit;
    KiloOctet : typeof Units.Unit;
    MegaOctet : typeof Units.Unit;
    GigaOctet : typeof Units.Unit;
    TeraOctet : typeof Units.Unit;

    OctetMicroSeconde : typeof Units.Unit;
    OctetNanoSeconde : typeof Units.Unit;
    OctetMilliSeconde : typeof Units.Unit;
    OctetSeconde : typeof Units.Unit;
    OctetMinute : typeof Units.Unit;
    OctetHour : typeof Units.Unit;
    OctetDay : typeof Units.Unit;
    OctetMonth : typeof Units.Unit;
    OctetYear : typeof Units.Unit;

    KiloOctetMicroSeconde : typeof Units.Unit;
    KiloOctetNanoSeconde : typeof Units.Unit;
    KiloOctetMilliSeconde : typeof Units.Unit;
    KiloOctetSeconde : typeof Units.Unit;
    KiloOctetMinute : typeof Units.Unit;
    KiloOctetHour : typeof Units.Unit;
    KiloOctetDay : typeof Units.Unit;
    KiloOctetMonth : typeof Units.Unit;
    KiloOctetYear : typeof Units.Unit;

    MegaOctetMicroSeconde : typeof Units.Unit;
    MegaOctetNanoSeconde : typeof Units.Unit;
    MegaOctetMilliSeconde : typeof Units.Unit;
    MegaOctetSeconde : typeof Units.Unit;
    MegaOctetMinute : typeof Units.Unit;
    MegaOctetHour : typeof Units.Unit;
    MegaOctetDay : typeof Units.Unit;
    MegaOctetMonth : typeof Units.Unit;
    MegaOctetYear : typeof Units.Unit;

    GigaOctetMicroSeconde : typeof Units.Unit;
    GigaOctetNanoSeconde : typeof Units.Unit;
    GigaOctetMilliSeconde : typeof Units.Unit;
    GigaOctetSeconde : typeof Units.Unit;
    GigaOctetMinute : typeof Units.Unit;
    GigaOctetHour : typeof Units.Unit;
    GigaOctetDay : typeof Units.Unit;
    GigaOctetMonth : typeof Units.Unit;
    GigaOctetYear : typeof Units.Unit;

    TeraOctetMicroSeconde : typeof Units.Unit;
    TeraOctetNanoSeconde : typeof Units.Unit;
    TeraOctetMilliSeconde : typeof Units.Unit;
    TeraOctetSeconde : typeof Units.Unit;
    TeraOctetMinute : typeof Units.Unit;
    TeraOctetHour : typeof Units.Unit;
    TeraOctetDay : typeof Units.Unit;
    TeraOctetMonth : typeof Units.Unit;
    TeraOctetYear : typeof Units.Unit;

    Count : typeof Units.Unit;

    CountMicroSeconde : typeof Units.Unit;
    CountNanoSeconde : typeof Units.Unit;
    CountMilliSeconde : typeof Units.Unit;
    CountSeconde : typeof Units.Unit;
    CountMinute : typeof Units.Unit;
    CountHour : typeof Units.Unit;
    CountDay : typeof Units.Unit;
    CountMonth : typeof Units.Unit;
    CountYear : typeof Units.Unit;

    Hertz : typeof Units.Unit;
    KiloHertz : typeof Units.Unit;
    MegaHertz : typeof Units.Unit;
    GigaHertz : typeof Units.Unit;

    Watt : typeof Units.Unit;
    KiloWatt : typeof Units.Unit;

    WattHour : typeof Units.Unit;
    WattDay : typeof Units.Unit;
    WattMonth : typeof Units.Unit;
    WattYear : typeof Units.Unit;

    KiloWattHour : typeof Units.Unit;
    KiloWattDay : typeof Units.Unit;
    KiloWattMonth : typeof Units.Unit;
    KiloWattYear : typeof Units.Unit;

    Bool : typeof Units.Unit;
}

export as namespace Units;
export = Members;