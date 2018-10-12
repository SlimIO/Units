// Require Unit Definition class
const Definition = require("./src/definition");

/**
 * @const {UnitTypes}
 * @desc Enumeration of available Unit Types
 */
const UnitTypes = Object.freeze({
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

module.exports = {
    UnitTypes,
    MicroSecond: new Definition({ type: UnitTypes.Time, symbol: "μs", min: 0 }),
    NanoSecond: new Definition({ type: UnitTypes.Time, symbol: "ns", min: 0 }),
    MilliSecond: new Definition({ type: UnitTypes.Time, symbol: "ms", min: 0 }),
    Second: new Definition({ type: UnitTypes.Time, symbol: "s", min: 0 }),
    Minute: new Definition({ type: UnitTypes.Time, symbol: "m", min: 0 }),
    Hour: new Definition({ type: UnitTypes.Time, symbol: "h", min: 0 }),
    Day: new Definition({ type: UnitTypes.Time, symbol: "D", min: 0 }),
    Month: new Definition({ type: UnitTypes.Time, symbol: "M", min: 0 }),
    Year: new Definition({ type: UnitTypes.Time, symbol: "Y", min: 0 }),

    Celsius: new Definition({ type: UnitTypes.Degree, symbol: "C", min: -273.12 }),
    Fehrenheit: new Definition({ type: UnitTypes.Degree, symbol: "F", min: -459.67 }),
    Kelvin: new Definition({ type: UnitTypes.Degree, symbol: "K", min: 0 }),

    Pourcent: new Definition({ type: UnitTypes.Pourcent, symbol: "%", min: 0, max: 100 }),

    Bit: new Definition({ type: UnitTypes.Bit, symbol: "b", min: 0 }),
    KiloBit: new Definition({ type: UnitTypes.Bit, symbol: "kb", min: 0 }),
    MegaBit: new Definition({ type: UnitTypes.Bit, symbol: "Mb", min: 0 }),
    GigaBit: new Definition({ type: UnitTypes.Bit, symbol: "Gb", min: 0 }),
    TeraBit: new Definition({ type: UnitTypes.Bit, symbol: "Tb", min: 0 }),

    BitMicroSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "b/μs", min: 0 }),
    BitNanoSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "b/ns", min: 0 }),
    BitMilliSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "b/ms", min: 0 }),
    BitSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "b/s", min: 0 }),
    BitMinute: new Definition({ type: UnitTypes.BitTime, symbol: "b/m", min: 0 }),
    BitHour: new Definition({ type: UnitTypes.BitTime, symbol: "b/h", min: 0 }),
    BitDay: new Definition({ type: UnitTypes.BitTime, symbol: "b/D", min: 0 }),
    BitMonth: new Definition({ type: UnitTypes.BitTime, symbol: "b/M", min: 0 }),
    BitYear: new Definition({ type: UnitTypes.BitTime, symbol: "b/Y", min: 0 }),

    KiloBitMicroSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "kb/μs", min: 0 }),
    KiloBitNanoSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "kb/ns", min: 0 }),
    KiloBitMilliSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "kb/ms", min: 0 }),
    KiloBitSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "kb/s", min: 0 }),
    KiloBitMinute: new Definition({ type: UnitTypes.BitTime, symbol: "kb/m", min: 0 }),
    KiloBitHour: new Definition({ type: UnitTypes.BitTime, symbol: "kb/h", min: 0 }),
    KiloBitDay: new Definition({ type: UnitTypes.BitTime, symbol: "kb/D", min: 0 }),
    KiloBitMonth: new Definition({ type: UnitTypes.BitTime, symbol: "kb/M", min: 0 }),
    KiloBitYear: new Definition({ type: UnitTypes.BitTime, symbol: "kb/Y", min: 0 }),

    MegaBitMicroSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/μs", min: 0 }),
    MegaBitNanoSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/ns", min: 0 }),
    MegaBitMilliSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/ms", min: 0 }),
    MegaBitSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/s", min: 0 }),
    MegaBitMinute: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/m", min: 0 }),
    MegaBitHour: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/h", min: 0 }),
    MegaBitDay: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/D", min: 0 }),
    MegaBitMonth: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/M", min: 0 }),
    MegaBitYear: new Definition({ type: UnitTypes.BitTime, symbol: "Mb/Y", min: 0 }),

    GigaBitMicroSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/μs", min: 0 }),
    GigaBitNanoSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/ns", min: 0 }),
    GigaBitMilliSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/ms", min: 0 }),
    GigaBitSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/s", min: 0 }),
    GigaBitMinute: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/m", min: 0 }),
    GigaBitHour: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/h", min: 0 }),
    GigaBitDay: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/D", min: 0 }),
    GigaBitMonth: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/M", min: 0 }),
    GigaBitYear: new Definition({ type: UnitTypes.BitTime, symbol: "Gb/Y", min: 0 }),

    TeraBitMicroSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/μs", min: 0 }),
    TeraBitNanoSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/ns", min: 0 }),
    TeraBitMilliSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/ms", min: 0 }),
    TeraBitSeconde: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/s", min: 0 }),
    TeraBitMinute: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/m", min: 0 }),
    TeraBitHour: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/h", min: 0 }),
    TeraBitDay: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/D", min: 0 }),
    TeraBitMonth: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/M", min: 0 }),
    TeraBitYear: new Definition({ type: UnitTypes.BitTime, symbol: "Tb/Y", min: 0 }),

    Byte: new Definition({ type: UnitTypes.Byte, symbol: "B", min: 0 }),
    KiloByte: new Definition({ type: UnitTypes.Byte, symbol: "kB", min: 0 }),
    MegaByte: new Definition({ type: UnitTypes.Byte, symbol: "MB", min: 0 }),
    GigaByte: new Definition({ type: UnitTypes.Byte, symbol: "GB", min: 0 }),
    TeraByte: new Definition({ type: UnitTypes.Byte, symbol: "TB", min: 0 }),

    ByteMicroSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "B/μs", min: 0 }),
    ByteNanoSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "B/ns", min: 0 }),
    ByteMilliSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "B/ms", min: 0 }),
    ByteSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "B/s", min: 0 }),
    ByteMinute: new Definition({ type: UnitTypes.ByteTime, symbol: "B/m", min: 0 }),
    ByteHour: new Definition({ type: UnitTypes.ByteTime, symbol: "B/h", min: 0 }),
    ByteDay: new Definition({ type: UnitTypes.ByteTime, symbol: "B/D", min: 0 }),
    ByteMonth: new Definition({ type: UnitTypes.ByteTime, symbol: "B/M", min: 0 }),
    ByteYear: new Definition({ type: UnitTypes.ByteTime, symbol: "B/Y", min: 0 }),

    KiloByteMicroSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/μs", min: 0 }),
    KiloByteNanoSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/ns", min: 0 }),
    KiloByteMilliSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/ms", min: 0 }),
    KiloByteSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/s", min: 0 }),
    KiloByteMinute: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/m", min: 0 }),
    KiloByteHour: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/h", min: 0 }),
    KiloByteDay: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/D", min: 0 }),
    KiloByteMonth: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/M", min: 0 }),
    KiloByteYear: new Definition({ type: UnitTypes.ByteTime, symbol: "kB/Y", min: 0 }),

    MegaByteMicroSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/μs", min: 0 }),
    MegaByteNanoSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/ns", min: 0 }),
    MegaByteMilliSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/ms", min: 0 }),
    MegaByteSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/s", min: 0 }),
    MegaByteMinute: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/m", min: 0 }),
    MegaByteHour: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/h", min: 0 }),
    MegaByteDay: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/D", min: 0 }),
    MegaByteMonth: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/M", min: 0 }),
    MegaByteYear: new Definition({ type: UnitTypes.ByteTime, symbol: "MB/Y", min: 0 }),

    GigaByteMicroSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/μs", min: 0 }),
    GigaByteNanoSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/ns", min: 0 }),
    GigaByteMilliSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/ms", min: 0 }),
    GigaByteSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/s", min: 0 }),
    GigaByteMinute: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/m", min: 0 }),
    GigaByteHour: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/h", min: 0 }),
    GigaByteDay: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/D", min: 0 }),
    GigaByteMonth: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/M", min: 0 }),
    GigaByteYear: new Definition({ type: UnitTypes.ByteTime, symbol: "GB/Y", min: 0 }),

    TeraByteMicroSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/μs", min: 0 }),
    TeraByteNanoSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/ns", min: 0 }),
    TeraByteMilliSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/ms", min: 0 }),
    TeraByteSeconde: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/s", min: 0 }),
    TeraByteMinute: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/m", min: 0 }),
    TeraByteHour: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/h", min: 0 }),
    TeraByteDay: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/D", min: 0 }),
    TeraByteMonth: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/M", min: 0 }),
    TeraByteYear: new Definition({ type: UnitTypes.ByteTime, symbol: "TB/Y", min: 0 }),

    Octet: new Definition({ type: UnitTypes.Octet, symbol: "o", min: 0 }),
    KiloOctet: new Definition({ type: UnitTypes.Octet, symbol: "ko", min: 0 }),
    MegaOctet: new Definition({ type: UnitTypes.Octet, symbol: "Mo", min: 0 }),
    GigaOctet: new Definition({ type: UnitTypes.Octet, symbol: "Go", min: 0 }),
    TeraOctet: new Definition({ type: UnitTypes.Octet, symbol: "To", min: 0 }),

    OctetMicroSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "o/μs", min: 0 }),
    OctetNanoSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "o/ns", min: 0 }),
    OctetMilliSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "o/ms", min: 0 }),
    OctetSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "o/s", min: 0 }),
    OctetMinute: new Definition({ type: UnitTypes.OctetTime, symbol: "o/m", min: 0 }),
    OctetHour: new Definition({ type: UnitTypes.OctetTime, symbol: "o/h", min: 0 }),
    OctetDay: new Definition({ type: UnitTypes.OctetTime, symbol: "o/D", min: 0 }),
    OctetMonth: new Definition({ type: UnitTypes.OctetTime, symbol: "o/M", min: 0 }),
    OctetYear: new Definition({ type: UnitTypes.OctetTime, symbol: "o/Y", min: 0 }),

    KiloOctetMicroSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/μs", min: 0 }),
    KiloOctetNanoSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/ns", min: 0 }),
    KiloOctetMilliSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/ms", min: 0 }),
    KiloOctetSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/s", min: 0 }),
    KiloOctetMinute: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/m", min: 0 }),
    KiloOctetHour: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/h", min: 0 }),
    KiloOctetDay: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/D", min: 0 }),
    KiloOctetMonth: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/M", min: 0 }),
    KiloOctetYear: new Definition({ type: UnitTypes.OctetTime, symbol: "ko/Y", min: 0 }),

    MegaOctetMicroSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/μs", min: 0 }),
    MegaOctetNanoSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/ns", min: 0 }),
    MegaOctetMilliSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/ms", min: 0 }),
    MegaOctetSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/s", min: 0 }),
    MegaOctetMinute: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/m", min: 0 }),
    MegaOctetHour: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/h", min: 0 }),
    MegaOctetDay: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/D", min: 0 }),
    MegaOctetMonth: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/M", min: 0 }),
    MegaOctetYear: new Definition({ type: UnitTypes.OctetTime, symbol: "Mo/Y", min: 0 }),

    GigaOctetMicroSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/μs", min: 0 }),
    GigaOctetNanoSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/ns", min: 0 }),
    GigaOctetMilliSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/ms", min: 0 }),
    GigaOctetSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/s", min: 0 }),
    GigaOctetMinute: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/m", min: 0 }),
    GigaOctetHour: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/h", min: 0 }),
    GigaOctetDay: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/D", min: 0 }),
    GigaOctetMonth: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/M", min: 0 }),
    GigaOctetYear: new Definition({ type: UnitTypes.OctetTime, symbol: "Go/Y", min: 0 }),

    TeraOctetMicroSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "To/μs", min: 0 }),
    TeraOctetNanoSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "To/ns", min: 0 }),
    TeraOctetMilliSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "To/ms", min: 0 }),
    TeraOctetSeconde: new Definition({ type: UnitTypes.OctetTime, symbol: "To/s", min: 0 }),
    TeraOctetMinute: new Definition({ type: UnitTypes.OctetTime, symbol: "To/m", min: 0 }),
    TeraOctetHour: new Definition({ type: UnitTypes.OctetTime, symbol: "To/h", min: 0 }),
    TeraOctetDay: new Definition({ type: UnitTypes.OctetTime, symbol: "To/D", min: 0 }),
    TeraOctetMonth: new Definition({ type: UnitTypes.OctetTime, symbol: "To/M", min: 0 }),
    TeraOctetYear: new Definition({ type: UnitTypes.OctetTime, symbol: "To/Y", min: 0 }),

    Count: new Definition({ type: UnitTypes.Count, symbol: "#", min: 0}),

    CountMicroSeconde: new Definition({ type: UnitTypes.CountTime, symbol: "#/μs" }),
    CountNanoSeconde: new Definition({ type: UnitTypes.CountTime, symbol: "#/ns" }),
    CountMilliSeconde: new Definition({ type: UnitTypes.CountTime, symbol: "#/ms" }),
    CountSeconde: new Definition({ type: UnitTypes.CountTime, symbol: "#/s" }),
    CountMinute: new Definition({ type: UnitTypes.CountTime, symbol: "#/m" }),
    CountHour: new Definition({ type: UnitTypes.CountTime, symbol: "#/h" }),
    CountDay: new Definition({ type: UnitTypes.CountTime, symbol: "#/D" }),
    CountMonth: new Definition({ type: UnitTypes.CountTime, symbol: "#/M" }),
    CountYear: new Definition({ type: UnitTypes.CountTime, symbol: "#/Y" }),

    Hertz: new Definition({ type: UnitTypes.Hertz, symbol: "Hz", min: 0 }),
    KiloHertz: new Definition({ type: UnitTypes.Hertz, symbol: "kHz", min: 0 }),
    MegaHertz: new Definition({ type: UnitTypes.Hertz, symbol: "MHz", min: 0 }),
    GigaHertz: new Definition({ type: UnitTypes.Hertz, symbol: "GHz", min: 0 }),

    Watt: new Definition({ type: UnitTypes.Watt, symbol: "W", min: 0 }),
    KiloWatt: new Definition({ type: UnitTypes.Watt, symbol: "kW", min: 0 }),

    WattHour: new Definition({ type: UnitTypes.WattTime, symbol: "W/h", min: 0 }),
    WattDay: new Definition({ type: UnitTypes.WattTime, symbol: "W/D", min: 0 }),
    WattMonth: new Definition({ type: UnitTypes.WattTime, symbol: "W/M", min: 0 }),
    WattYear: new Definition({ type: UnitTypes.WattTime, symbol: "W/Y", min: 0 }),

    KiloWattHour: new Definition({ type: UnitTypes.WattTime, symbol: "kW/h", min: 0 }),
    KiloWattDay: new Definition({ type: UnitTypes.WattTime, symbol: "kW/D", min: 0 }),
    KiloWattMonth: new Definition({ type: UnitTypes.WattTime, symbol: "kW/M", min: 0 }),
    KiloWattYear: new Definition({ type: UnitTypes.WattTime, symbol: "kW/Y", min: 0 }),

    Bool: new Definition({ type: UnitTypes.Boolean, symbol: "bool", min: 0, max: 1 })
};
