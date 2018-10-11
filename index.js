const UnitType = Object.freeze({
    Time: 0,
    Degree: 1,
    Pourcent: 2,
    Bit: 3,
    BitTime: 4,
    Byte: 5,
    ByteTime: 6,
    Octet: 7,
    OctetTime: 8,
    Count: 9,
    CountTime: 10,
    Hertz: 11,
    Watt: 12,
    WattTime: 13,
    Boolean: 14
});


/**
 * @class Units
 * @param {Number} type Unit type
 * @param {String} symbol Unit symbol
 * @param {Number} min min
 * @param {Number} max max
 */
class Unit {

    /**
     * @constructor
     * @param {Object=} options options
     * @param {Number} options.type Unit type
     * @param {String} options.symbol Unit symbol
     * @param {Number} options.min min
     * @param {Number} options.max max
     */
    constructor(options = Object.create(null)) {
        this.type = options.type;
        this.symbol = options.symbol ? options.symbol : undefined;
        this.min = typeof options.min === "number" ? options.min : -Infinity;
        this.max = typeof options.max === "number" ? options.max : Infinity;
    }

}

module.exports = {
    MicroSecond: new Unit({ type: UnitType.Time, symbol: "μs", min: 0 }),
    NanoSecond: new Unit({ type: UnitType.Time, symbol: "ns", min: 0 }),
    MilliSecond: new Unit({ type: UnitType.Time, symbol: "ms", min: 0 }),
    Second: new Unit({ type: UnitType.Time, symbol: "s", min: 0 }),
    Minute: new Unit({ type: UnitType.Time, symbol: "m", min: 0 }),
    Hour: new Unit({ type: UnitType.Time, symbol: "h", min: 0 }),
    Day: new Unit({ type: UnitType.Time, symbol: "D", min: 0 }),
    Month: new Unit({ type: UnitType.Time, symbol: "M", min: 0 }),
    Year: new Unit({ type: UnitType.Time, symbol: "Y", min: 0 }),

    Celsius: new Unit({ type: UnitType.Degree, symbol: "C", min: -273.12 }),
    Fehrenheit: new Unit({ type: UnitType.Degree, symbol: "F", min: -459.67 }),
    Kelvin: new Unit({ type: UnitType.Degree, symbol: "K", min: 0 }),

    Pourcent: new Unit({ type: UnitType.Pourcent, symbol: "%", min: 0, max: 100 }),

    Bit: new Unit({ type: UnitType.Bit, symbol: "b", min: 0 }),
    KiloBit: new Unit({ type: UnitType.Bit, symbol: "kb", min: 0 }),
    MegaBit: new Unit({ type: UnitType.Bit, symbol: "Mb", min: 0 }),
    GigaBit: new Unit({ type: UnitType.Bit, symbol: "Gb", min: 0 }),
    TeraBit: new Unit({ type: UnitType.Bit, symbol: "Tb", min: 0 }),

    BitMicroSeconde: new Unit({ type: UnitType.BitTime, symbol: "b/μs", min: 0 }),
    BitNanoSeconde: new Unit({ type: UnitType.BitTime, symbol: "b/ns", min: 0 }),
    BitMilliSeconde: new Unit({ type: UnitType.BitTime, symbol: "b/ms", min: 0 }),
    BitSeconde: new Unit({ type: UnitType.BitTime, symbol: "b/s", min: 0 }),
    BitMinute: new Unit({ type: UnitType.BitTime, symbol: "b/m", min: 0 }),
    BitHour: new Unit({ type: UnitType.BitTime, symbol: "b/h", min: 0 }),
    BitDay: new Unit({ type: UnitType.BitTime, symbol: "b/D", min: 0 }),
    BitMonth: new Unit({ type: UnitType.BitTime, symbol: "b/M", min: 0 }),
    BitYear: new Unit({ type: UnitType.BitTime, symbol: "b/Y", min: 0 }),

    KiloBitMicroSeconde: new Unit({ type: UnitType.BitTime, symbol: "kb/μs", min: 0 }),
    KiloBitNanoSeconde: new Unit({ type: UnitType.BitTime, symbol: "kb/ns", min: 0 }),
    KiloBitMilliSeconde: new Unit({ type: UnitType.BitTime, symbol: "kb/ms", min: 0 }),
    KiloBitSeconde: new Unit({ type: UnitType.BitTime, symbol: "kb/s", min: 0 }),
    KiloBitMinute: new Unit({ type: UnitType.BitTime, symbol: "kb/m", min: 0 }),
    KiloBitHour: new Unit({ type: UnitType.BitTime, symbol: "kb/h", min: 0 }),
    KiloBitDay: new Unit({ type: UnitType.BitTime, symbol: "kb/D", min: 0 }),
    KiloBitMonth: new Unit({ type: UnitType.BitTime, symbol: "kb/M", min: 0 }),
    KiloBitYear: new Unit({ type: UnitType.BitTime, symbol: "kb/Y", min: 0 }),

    MegaBitMicroSeconde: new Unit({ type: UnitType.BitTime, symbol: "Mb/μs", min: 0 }),
    MegaBitNanoSeconde: new Unit({ type: UnitType.BitTime, symbol: "Mb/ns", min: 0 }),
    MegaBitMilliSeconde: new Unit({ type: UnitType.BitTime, symbol: "Mb/ms", min: 0 }),
    MegaBitSeconde: new Unit({ type: UnitType.BitTime, symbol: "Mb/s", min: 0 }),
    MegaBitMinute: new Unit({ type: UnitType.BitTime, symbol: "Mb/m", min: 0 }),
    MegaBitHour: new Unit({ type: UnitType.BitTime, symbol: "Mb/h", min: 0 }),
    MegaBitDay: new Unit({ type: UnitType.BitTime, symbol: "Mb/D", min: 0 }),
    MegaBitMonth: new Unit({ type: UnitType.BitTime, symbol: "Mb/M", min: 0 }),
    MegaBitYear: new Unit({ type: UnitType.BitTime, symbol: "Mb/Y", min: 0 }),

    GigaBitMicroSeconde: new Unit({ type: UnitType.BitTime, symbol: "Gb/μs", min: 0 }),
    GigaBitNanoSeconde: new Unit({ type: UnitType.BitTime, symbol: "Gb/ns", min: 0 }),
    GigaBitMilliSeconde: new Unit({ type: UnitType.BitTime, symbol: "Gb/ms", min: 0 }),
    GigaBitSeconde: new Unit({ type: UnitType.BitTime, symbol: "Gb/s", min: 0 }),
    GigaBitMinute: new Unit({ type: UnitType.BitTime, symbol: "Gb/m", min: 0 }),
    GigaBitHour: new Unit({ type: UnitType.BitTime, symbol: "Gb/h", min: 0 }),
    GigaBitDay: new Unit({ type: UnitType.BitTime, symbol: "Gb/D", min: 0 }),
    GigaBitMonth: new Unit({ type: UnitType.BitTime, symbol: "Gb/M", min: 0 }),
    GigaBitYear: new Unit({ type: UnitType.BitTime, symbol: "Gb/Y", min: 0 }),

    TeraBitMicroSeconde: new Unit({ type: UnitType.BitTime, symbol: "Tb/μs", min: 0 }),
    TeraBitNanoSeconde: new Unit({ type: UnitType.BitTime, symbol: "Tb/ns", min: 0 }),
    TeraBitMilliSeconde: new Unit({ type: UnitType.BitTime, symbol: "Tb/ms", min: 0 }),
    TeraBitSeconde: new Unit({ type: UnitType.BitTime, symbol: "Tb/s", min: 0 }),
    TeraBitMinute: new Unit({ type: UnitType.BitTime, symbol: "Tb/m", min: 0 }),
    TeraBitHour: new Unit({ type: UnitType.BitTime, symbol: "Tb/h", min: 0 }),
    TeraBitDay: new Unit({ type: UnitType.BitTime, symbol: "Tb/D", min: 0 }),
    TeraBitMonth: new Unit({ type: UnitType.BitTime, symbol: "Tb/M", min: 0 }),
    TeraBitYear: new Unit({ type: UnitType.BitTime, symbol: "Tb/Y", min: 0 }),

    Byte: new Unit({ type: UnitType.Byte, symbol: "B", min: 0 }),
    KiloByte: new Unit({ type: UnitType.Byte, symbol: "kB", min: 0 }),
    MegaByte: new Unit({ type: UnitType.Byte, symbol: "MB", min: 0 }),
    GigaByte: new Unit({ type: UnitType.Byte, symbol: "GB", min: 0 }),
    TeraByte: new Unit({ type: UnitType.Byte, symbol: "TB", min: 0 }),

    ByteMicroSeconde: new Unit({ type: UnitType.ByteTime, symbol: "B/μs", min: 0 }),
    ByteNanoSeconde: new Unit({ type: UnitType.ByteTime, symbol: "B/ns", min: 0 }),
    ByteMilliSeconde: new Unit({ type: UnitType.ByteTime, symbol: "B/ms", min: 0 }),
    ByteSeconde: new Unit({ type: UnitType.ByteTime, symbol: "B/s", min: 0 }),
    ByteMinute: new Unit({ type: UnitType.ByteTime, symbol: "B/m", min: 0 }),
    ByteHour: new Unit({ type: UnitType.ByteTime, symbol: "B/h", min: 0 }),
    ByteDay: new Unit({ type: UnitType.ByteTime, symbol: "B/D", min: 0 }),
    ByteMonth: new Unit({ type: UnitType.ByteTime, symbol: "B/M", min: 0 }),
    ByteYear: new Unit({ type: UnitType.ByteTime, symbol: "B/Y", min: 0 }),

    KiloByteMicroSeconde: new Unit({ type: UnitType.ByteTime, symbol: "kB/μs", min: 0 }),
    KiloByteNanoSeconde: new Unit({ type: UnitType.ByteTime, symbol: "kB/ns", min: 0 }),
    KiloByteMilliSeconde: new Unit({ type: UnitType.ByteTime, symbol: "kB/ms", min: 0 }),
    KiloByteSeconde: new Unit({ type: UnitType.ByteTime, symbol: "kB/s", min: 0 }),
    KiloByteMinute: new Unit({ type: UnitType.ByteTime, symbol: "kB/m", min: 0 }),
    KiloByteHour: new Unit({ type: UnitType.ByteTime, symbol: "kB/h", min: 0 }),
    KiloByteDay: new Unit({ type: UnitType.ByteTime, symbol: "kB/D", min: 0 }),
    KiloByteMonth: new Unit({ type: UnitType.ByteTime, symbol: "kB/M", min: 0 }),
    KiloByteYear: new Unit({ type: UnitType.ByteTime, symbol: "kB/Y", min: 0 }),

    MegaByteMicroSeconde: new Unit({ type: UnitType.ByteTime, symbol: "MB/μs", min: 0 }),
    MegaByteNanoSeconde: new Unit({ type: UnitType.ByteTime, symbol: "MB/ns", min: 0 }),
    MegaByteMilliSeconde: new Unit({ type: UnitType.ByteTime, symbol: "MB/ms", min: 0 }),
    MegaByteSeconde: new Unit({ type: UnitType.ByteTime, symbol: "MB/s", min: 0 }),
    MegaByteMinute: new Unit({ type: UnitType.ByteTime, symbol: "MB/m", min: 0 }),
    MegaByteHour: new Unit({ type: UnitType.ByteTime, symbol: "MB/h", min: 0 }),
    MegaByteDay: new Unit({ type: UnitType.ByteTime, symbol: "MB/D", min: 0 }),
    MegaByteMonth: new Unit({ type: UnitType.ByteTime, symbol: "MB/M", min: 0 }),
    MegaByteYear: new Unit({ type: UnitType.ByteTime, symbol: "MB/Y", min: 0 }),

    GigaByteMicroSeconde: new Unit({ type: UnitType.ByteTime, symbol: "GB/μs", min: 0 }),
    GigaByteNanoSeconde: new Unit({ type: UnitType.ByteTime, symbol: "GB/ns", min: 0 }),
    GigaByteMilliSeconde: new Unit({ type: UnitType.ByteTime, symbol: "GB/ms", min: 0 }),
    GigaByteSeconde: new Unit({ type: UnitType.ByteTime, symbol: "GB/s", min: 0 }),
    GigaByteMinute: new Unit({ type: UnitType.ByteTime, symbol: "GB/m", min: 0 }),
    GigaByteHour: new Unit({ type: UnitType.ByteTime, symbol: "GB/h", min: 0 }),
    GigaByteDay: new Unit({ type: UnitType.ByteTime, symbol: "GB/D", min: 0 }),
    GigaByteMonth: new Unit({ type: UnitType.ByteTime, symbol: "GB/M", min: 0 }),
    GigaByteYear: new Unit({ type: UnitType.ByteTime, symbol: "GB/Y", min: 0 }),

    TeraByteMicroSeconde: new Unit({ type: UnitType.ByteTime, symbol: "TB/μs", min: 0 }),
    TeraByteNanoSeconde: new Unit({ type: UnitType.ByteTime, symbol: "TB/ns", min: 0 }),
    TeraByteMilliSeconde: new Unit({ type: UnitType.ByteTime, symbol: "TB/ms", min: 0 }),
    TeraByteSeconde: new Unit({ type: UnitType.ByteTime, symbol: "TB/s", min: 0 }),
    TeraByteMinute: new Unit({ type: UnitType.ByteTime, symbol: "TB/m", min: 0 }),
    TeraByteHour: new Unit({ type: UnitType.ByteTime, symbol: "TB/h", min: 0 }),
    TeraByteDay: new Unit({ type: UnitType.ByteTime, symbol: "TB/D", min: 0 }),
    TeraByteMonth: new Unit({ type: UnitType.ByteTime, symbol: "TB/M", min: 0 }),
    TeraByteYear: new Unit({ type: UnitType.ByteTime, symbol: "TB/Y", min: 0 }),

    Octet: new Unit({ type: UnitType.Octet, symbol: "o", min: 0 }),
    KiloOctet: new Unit({ type: UnitType.Octet, symbol: "ko", min: 0 }),
    MegaOctet: new Unit({ type: UnitType.Octet, symbol: "Mo", min: 0 }),
    GigaOctet: new Unit({ type: UnitType.Octet, symbol: "Go", min: 0 }),
    TeraOctet: new Unit({ type: UnitType.Octet, symbol: "To", min: 0 }),

    OctetMicroSeconde: new Unit({ type: UnitType.OctetTime, symbol: "o/μs", min: 0 }),
    OctetNanoSeconde: new Unit({ type: UnitType.OctetTime, symbol: "o/ns", min: 0 }),
    OctetMilliSeconde: new Unit({ type: UnitType.OctetTime, symbol: "o/ms", min: 0 }),
    OctetSeconde: new Unit({ type: UnitType.OctetTime, symbol: "o/s", min: 0 }),
    OctetMinute: new Unit({ type: UnitType.OctetTime, symbol: "o/m", min: 0 }),
    OctetHour: new Unit({ type: UnitType.OctetTime, symbol: "o/h", min: 0 }),
    OctetDay: new Unit({ type: UnitType.OctetTime, symbol: "o/D", min: 0 }),
    OctetMonth: new Unit({ type: UnitType.OctetTime, symbol: "o/M", min: 0 }),
    OctetYear: new Unit({ type: UnitType.OctetTime, symbol: "o/Y", min: 0 }),

    KiloOctetMicroSeconde: new Unit({ type: UnitType.OctetTime, symbol: "ko/μs", min: 0 }),
    KiloOctetNanoSeconde: new Unit({ type: UnitType.OctetTime, symbol: "ko/ns", min: 0 }),
    KiloOctetMilliSeconde: new Unit({ type: UnitType.OctetTime, symbol: "ko/ms", min: 0 }),
    KiloOctetSeconde: new Unit({ type: UnitType.OctetTime, symbol: "ko/s", min: 0 }),
    KiloOctetMinute: new Unit({ type: UnitType.OctetTime, symbol: "ko/m", min: 0 }),
    KiloOctetHour: new Unit({ type: UnitType.OctetTime, symbol: "ko/h", min: 0 }),
    KiloOctetDay: new Unit({ type: UnitType.OctetTime, symbol: "ko/D", min: 0 }),
    KiloOctetMonth: new Unit({ type: UnitType.OctetTime, symbol: "ko/M", min: 0 }),
    KiloOctetYear: new Unit({ type: UnitType.OctetTime, symbol: "ko/Y", min: 0 }),

    MegaOctetMicroSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Mo/μs", min: 0 }),
    MegaOctetNanoSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Mo/ns", min: 0 }),
    MegaOctetMilliSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Mo/ms", min: 0 }),
    MegaOctetSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Mo/s", min: 0 }),
    MegaOctetMinute: new Unit({ type: UnitType.OctetTime, symbol: "Mo/m", min: 0 }),
    MegaOctetHour: new Unit({ type: UnitType.OctetTime, symbol: "Mo/h", min: 0 }),
    MegaOctetDay: new Unit({ type: UnitType.OctetTime, symbol: "Mo/D", min: 0 }),
    MegaOctetMonth: new Unit({ type: UnitType.OctetTime, symbol: "Mo/M", min: 0 }),
    MegaOctetYear: new Unit({ type: UnitType.OctetTime, symbol: "Mo/Y", min: 0 }),

    GigaOctetMicroSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Go/μs", min: 0 }),
    GigaOctetNanoSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Go/ns", min: 0 }),
    GigaOctetMilliSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Go/ms", min: 0 }),
    GigaOctetSeconde: new Unit({ type: UnitType.OctetTime, symbol: "Go/s", min: 0 }),
    GigaOctetMinute: new Unit({ type: UnitType.OctetTime, symbol: "Go/m", min: 0 }),
    GigaOctetHour: new Unit({ type: UnitType.OctetTime, symbol: "Go/h", min: 0 }),
    GigaOctetDay: new Unit({ type: UnitType.OctetTime, symbol: "Go/D", min: 0 }),
    GigaOctetMonth: new Unit({ type: UnitType.OctetTime, symbol: "Go/M", min: 0 }),
    GigaOctetYear: new Unit({ type: UnitType.OctetTime, symbol: "Go/Y", min: 0 }),

    TeraOctetMicroSeconde: new Unit({ type: UnitType.OctetTime, symbol: "To/μs", min: 0 }),
    TeraOctetNanoSeconde: new Unit({ type: UnitType.OctetTime, symbol: "To/ns", min: 0 }),
    TeraOctetMilliSeconde: new Unit({ type: UnitType.OctetTime, symbol: "To/ms", min: 0 }),
    TeraOctetSeconde: new Unit({ type: UnitType.OctetTime, symbol: "To/s", min: 0 }),
    TeraOctetMinute: new Unit({ type: UnitType.OctetTime, symbol: "To/m", min: 0 }),
    TeraOctetHour: new Unit({ type: UnitType.OctetTime, symbol: "To/h", min: 0 }),
    TeraOctetDay: new Unit({ type: UnitType.OctetTime, symbol: "To/D", min: 0 }),
    TeraOctetMonth: new Unit({ type: UnitType.OctetTime, symbol: "To/M", min: 0 }),
    TeraOctetYear: new Unit({ type: UnitType.OctetTime, symbol: "To/Y", min: 0 }),

    Count: new Unit({ type: UnitType.Count, symbol: "#", min: 0}),

    CountMicroSeconde: new Unit({ type: UnitType.CountTime, symbol: "#/μs" }),
    CountNanoSeconde: new Unit({ type: UnitType.CountTime, symbol: "#/ns" }),
    CountMilliSeconde: new Unit({ type: UnitType.CountTime, symbol: "#/ms" }),
    CountSeconde: new Unit({ type: UnitType.CountTime, symbol: "#/s" }),
    CountMinute: new Unit({ type: UnitType.CountTime, symbol: "#/m" }),
    CountHour: new Unit({ type: UnitType.CountTime, symbol: "#/h" }),
    CountDay: new Unit({ type: UnitType.CountTime, symbol: "#/D" }),
    CountMonth: new Unit({ type: UnitType.CountTime, symbol: "#/M" }),
    CountYear: new Unit({ type: UnitType.CountTime, symbol: "#/Y" }),

    Hertz: new Unit({ type: UnitType.Hertz, symbol: "Hz", min: 0 }),
    KiloHertz: new Unit({ type: UnitType.Hertz, symbol: "kHz", min: 0 }),
    MegaHertz: new Unit({ type: UnitType.Hertz, symbol: "MHz", min: 0 }),
    GigaHertz: new Unit({ type: UnitType.Hertz, symbol: "GHz", min: 0 }),

    Watt: new Unit({ type: UnitType.Watt, symbol: "W", min: 0 }),
    KiloWatt: new Unit({ type: UnitType.Watt, symbol: "kW", min: 0 }),

    WattHour: new Unit({ type: UnitType.WattTime, symbol: "W/h", min: 0 }),
    WattDay: new Unit({ type: UnitType.WattTime, symbol: "W/D", min: 0 }),
    WattMonth: new Unit({ type: UnitType.WattTime, symbol: "W/M", min: 0 }),
    WattYear: new Unit({ type: UnitType.WattTime, symbol: "W/Y", min: 0 }),

    KiloWattHour: new Unit({ type: UnitType.WattTime, symbol: "kW/h", min: 0 }),
    KiloWattDay: new Unit({ type: UnitType.WattTime, symbol: "kW/D", min: 0 }),
    KiloWattMonth: new Unit({ type: UnitType.WattTime, symbol: "kW/M", min: 0 }),
    KiloWattYear: new Unit({ type: UnitType.WattTime, symbol: "kW/Y", min: 0 }),

    Bool: new Unit({ type: UnitType.Boolean, symbol: "bool", min: 0, max: 1 })
};
