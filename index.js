// Require Third-party Dependencies
const lazy = require("@slimio/lazy");

/**
 * @constructor
 * @function Unit
 * @param {Object} options Unit options
 * @param {!String} options.name Unit name
 * @param {!Number} options.type Unit type
 * @param {!String} options.symbol Unit symbol
 * @param {Number=} [options.min=0] min
 * @param {Number=} [options.max=Infinity] max
 */
function Unit(options) {
    this.name = options.name;
    this.type = options.type;
    this.symbol = options.symbol;
    this.min = typeof options.min === "number" ? options.min : 0;
    this.max = typeof options.max === "number" ? options.max : Infinity;
}

/**
 * @const Types
 * @desc Enumeration of available Unit Types
 */
const Types = Object.freeze({
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

const Units = lazy.of({
    Types
});

// Time Unit
Units.set("MicroSecond", () => new Unit({ name: "MicroSecond", type: Types.Time, symbol: "μs" }));
Units.set("NanoSecond", () => new Unit({ name: "NanoSecond", type: Types.Time, symbol: "ns" }));
Units.set("MilliSecond", () => new Unit({ name: "MilliSecond", type: Types.Time, symbol: "ms" }));
Units.set("Second", () => new Unit({ name: "Second", type: Types.Time, symbol: "s" }));
Units.set("Minute", () => new Unit({ name: "Minute", type: Types.Time, symbol: "m" }));
Units.set("Hour", () => new Unit({ name: "Hour", type: Types.Time, symbol: "h" }));
Units.set("Day", () => new Unit({ name: "Day", type: Types.Time, symbol: "D" }));
Units.set("Month", () => new Unit({ name: "Month", type: Types.Time, symbol: "M" }));
Units.set("Year", () => new Unit({ name: "Year", type: Types.Time, symbol: "Y" }));

module.exports = Units.value;

// module.exports = {
//     Celsius: new Unit({ type: Types.Degree, symbol: "C", min: -273.12 }),
//     Fehrenheit: new Unit({ type: Types.Degree, symbol: "F", min: -459.67 }),
//     Kelvin: new Unit({ type: Types.Degree, symbol: "K", min: 0 }),

//     Pourcent: new Unit({ type: Types.Pourcent, symbol: "%", min: 0, max: 100 }),

//     Bit: new Unit({ type: Types.Bit, symbol: "b", min: 0 }),
//     KiloBit: new Unit({ type: Types.Bit, symbol: "kb", min: 0 }),
//     MegaBit: new Unit({ type: Types.Bit, symbol: "Mb", min: 0 }),
//     GigaBit: new Unit({ type: Types.Bit, symbol: "Gb", min: 0 }),
//     TeraBit: new Unit({ type: Types.Bit, symbol: "Tb", min: 0 }),

//     BitMicroSeconde: new Unit({ type: Types.BitTime, symbol: "b/μs", min: 0 }),
//     BitNanoSeconde: new Unit({ type: Types.BitTime, symbol: "b/ns", min: 0 }),
//     BitMilliSeconde: new Unit({ type: Types.BitTime, symbol: "b/ms", min: 0 }),
//     BitSeconde: new Unit({ type: Types.BitTime, symbol: "b/s", min: 0 }),
//     BitMinute: new Unit({ type: Types.BitTime, symbol: "b/m", min: 0 }),
//     BitHour: new Unit({ type: Types.BitTime, symbol: "b/h", min: 0 }),
//     BitDay: new Unit({ type: Types.BitTime, symbol: "b/D", min: 0 }),
//     BitMonth: new Unit({ type: Types.BitTime, symbol: "b/M", min: 0 }),
//     BitYear: new Unit({ type: Types.BitTime, symbol: "b/Y", min: 0 }),

//     KiloBitMicroSeconde: new Unit({ type: Types.BitTime, symbol: "kb/μs", min: 0 }),
//     KiloBitNanoSeconde: new Unit({ type: Types.BitTime, symbol: "kb/ns", min: 0 }),
//     KiloBitMilliSeconde: new Unit({ type: Types.BitTime, symbol: "kb/ms", min: 0 }),
//     KiloBitSeconde: new Unit({ type: Types.BitTime, symbol: "kb/s", min: 0 }),
//     KiloBitMinute: new Unit({ type: Types.BitTime, symbol: "kb/m", min: 0 }),
//     KiloBitHour: new Unit({ type: Types.BitTime, symbol: "kb/h", min: 0 }),
//     KiloBitDay: new Unit({ type: Types.BitTime, symbol: "kb/D", min: 0 }),
//     KiloBitMonth: new Unit({ type: Types.BitTime, symbol: "kb/M", min: 0 }),
//     KiloBitYear: new Unit({ type: Types.BitTime, symbol: "kb/Y", min: 0 }),

//     MegaBitMicroSeconde: new Unit({ type: Types.BitTime, symbol: "Mb/μs", min: 0 }),
//     MegaBitNanoSeconde: new Unit({ type: Types.BitTime, symbol: "Mb/ns", min: 0 }),
//     MegaBitMilliSeconde: new Unit({ type: Types.BitTime, symbol: "Mb/ms", min: 0 }),
//     MegaBitSeconde: new Unit({ type: Types.BitTime, symbol: "Mb/s", min: 0 }),
//     MegaBitMinute: new Unit({ type: Types.BitTime, symbol: "Mb/m", min: 0 }),
//     MegaBitHour: new Unit({ type: Types.BitTime, symbol: "Mb/h", min: 0 }),
//     MegaBitDay: new Unit({ type: Types.BitTime, symbol: "Mb/D", min: 0 }),
//     MegaBitMonth: new Unit({ type: Types.BitTime, symbol: "Mb/M", min: 0 }),
//     MegaBitYear: new Unit({ type: Types.BitTime, symbol: "Mb/Y", min: 0 }),

//     GigaBitMicroSeconde: new Unit({ type: Types.BitTime, symbol: "Gb/μs", min: 0 }),
//     GigaBitNanoSeconde: new Unit({ type: Types.BitTime, symbol: "Gb/ns", min: 0 }),
//     GigaBitMilliSeconde: new Unit({ type: Types.BitTime, symbol: "Gb/ms", min: 0 }),
//     GigaBitSeconde: new Unit({ type: Types.BitTime, symbol: "Gb/s", min: 0 }),
//     GigaBitMinute: new Unit({ type: Types.BitTime, symbol: "Gb/m", min: 0 }),
//     GigaBitHour: new Unit({ type: Types.BitTime, symbol: "Gb/h", min: 0 }),
//     GigaBitDay: new Unit({ type: Types.BitTime, symbol: "Gb/D", min: 0 }),
//     GigaBitMonth: new Unit({ type: Types.BitTime, symbol: "Gb/M", min: 0 }),
//     GigaBitYear: new Unit({ type: Types.BitTime, symbol: "Gb/Y", min: 0 }),

//     TeraBitMicroSeconde: new Unit({ type: Types.BitTime, symbol: "Tb/μs", min: 0 }),
//     TeraBitNanoSeconde: new Unit({ type: Types.BitTime, symbol: "Tb/ns", min: 0 }),
//     TeraBitMilliSeconde: new Unit({ type: Types.BitTime, symbol: "Tb/ms", min: 0 }),
//     TeraBitSeconde: new Unit({ type: Types.BitTime, symbol: "Tb/s", min: 0 }),
//     TeraBitMinute: new Unit({ type: Types.BitTime, symbol: "Tb/m", min: 0 }),
//     TeraBitHour: new Unit({ type: Types.BitTime, symbol: "Tb/h", min: 0 }),
//     TeraBitDay: new Unit({ type: Types.BitTime, symbol: "Tb/D", min: 0 }),
//     TeraBitMonth: new Unit({ type: Types.BitTime, symbol: "Tb/M", min: 0 }),
//     TeraBitYear: new Unit({ type: Types.BitTime, symbol: "Tb/Y", min: 0 }),

//     Byte: new Unit({ type: Types.Byte, symbol: "B", min: 0 }),
//     KiloByte: new Unit({ type: Types.Byte, symbol: "kB", min: 0 }),
//     MegaByte: new Unit({ type: Types.Byte, symbol: "MB", min: 0 }),
//     GigaByte: new Unit({ type: Types.Byte, symbol: "GB", min: 0 }),
//     TeraByte: new Unit({ type: Types.Byte, symbol: "TB", min: 0 }),

//     ByteMicroSeconde: new Unit({ type: Types.ByteTime, symbol: "B/μs", min: 0 }),
//     ByteNanoSeconde: new Unit({ type: Types.ByteTime, symbol: "B/ns", min: 0 }),
//     ByteMilliSeconde: new Unit({ type: Types.ByteTime, symbol: "B/ms", min: 0 }),
//     ByteSeconde: new Unit({ type: Types.ByteTime, symbol: "B/s", min: 0 }),
//     ByteMinute: new Unit({ type: Types.ByteTime, symbol: "B/m", min: 0 }),
//     ByteHour: new Unit({ type: Types.ByteTime, symbol: "B/h", min: 0 }),
//     ByteDay: new Unit({ type: Types.ByteTime, symbol: "B/D", min: 0 }),
//     ByteMonth: new Unit({ type: Types.ByteTime, symbol: "B/M", min: 0 }),
//     ByteYear: new Unit({ type: Types.ByteTime, symbol: "B/Y", min: 0 }),

//     KiloByteMicroSeconde: new Unit({ type: Types.ByteTime, symbol: "kB/μs", min: 0 }),
//     KiloByteNanoSeconde: new Unit({ type: Types.ByteTime, symbol: "kB/ns", min: 0 }),
//     KiloByteMilliSeconde: new Unit({ type: Types.ByteTime, symbol: "kB/ms", min: 0 }),
//     KiloByteSeconde: new Unit({ type: Types.ByteTime, symbol: "kB/s", min: 0 }),
//     KiloByteMinute: new Unit({ type: Types.ByteTime, symbol: "kB/m", min: 0 }),
//     KiloByteHour: new Unit({ type: Types.ByteTime, symbol: "kB/h", min: 0 }),
//     KiloByteDay: new Unit({ type: Types.ByteTime, symbol: "kB/D", min: 0 }),
//     KiloByteMonth: new Unit({ type: Types.ByteTime, symbol: "kB/M", min: 0 }),
//     KiloByteYear: new Unit({ type: Types.ByteTime, symbol: "kB/Y", min: 0 }),

//     MegaByteMicroSeconde: new Unit({ type: Types.ByteTime, symbol: "MB/μs", min: 0 }),
//     MegaByteNanoSeconde: new Unit({ type: Types.ByteTime, symbol: "MB/ns", min: 0 }),
//     MegaByteMilliSeconde: new Unit({ type: Types.ByteTime, symbol: "MB/ms", min: 0 }),
//     MegaByteSeconde: new Unit({ type: Types.ByteTime, symbol: "MB/s", min: 0 }),
//     MegaByteMinute: new Unit({ type: Types.ByteTime, symbol: "MB/m", min: 0 }),
//     MegaByteHour: new Unit({ type: Types.ByteTime, symbol: "MB/h", min: 0 }),
//     MegaByteDay: new Unit({ type: Types.ByteTime, symbol: "MB/D", min: 0 }),
//     MegaByteMonth: new Unit({ type: Types.ByteTime, symbol: "MB/M", min: 0 }),
//     MegaByteYear: new Unit({ type: Types.ByteTime, symbol: "MB/Y", min: 0 }),

//     GigaByteMicroSeconde: new Unit({ type: Types.ByteTime, symbol: "GB/μs", min: 0 }),
//     GigaByteNanoSeconde: new Unit({ type: Types.ByteTime, symbol: "GB/ns", min: 0 }),
//     GigaByteMilliSeconde: new Unit({ type: Types.ByteTime, symbol: "GB/ms", min: 0 }),
//     GigaByteSeconde: new Unit({ type: Types.ByteTime, symbol: "GB/s", min: 0 }),
//     GigaByteMinute: new Unit({ type: Types.ByteTime, symbol: "GB/m", min: 0 }),
//     GigaByteHour: new Unit({ type: Types.ByteTime, symbol: "GB/h", min: 0 }),
//     GigaByteDay: new Unit({ type: Types.ByteTime, symbol: "GB/D", min: 0 }),
//     GigaByteMonth: new Unit({ type: Types.ByteTime, symbol: "GB/M", min: 0 }),
//     GigaByteYear: new Unit({ type: Types.ByteTime, symbol: "GB/Y", min: 0 }),

//     TeraByteMicroSeconde: new Unit({ type: Types.ByteTime, symbol: "TB/μs", min: 0 }),
//     TeraByteNanoSeconde: new Unit({ type: Types.ByteTime, symbol: "TB/ns", min: 0 }),
//     TeraByteMilliSeconde: new Unit({ type: Types.ByteTime, symbol: "TB/ms", min: 0 }),
//     TeraByteSeconde: new Unit({ type: Types.ByteTime, symbol: "TB/s", min: 0 }),
//     TeraByteMinute: new Unit({ type: Types.ByteTime, symbol: "TB/m", min: 0 }),
//     TeraByteHour: new Unit({ type: Types.ByteTime, symbol: "TB/h", min: 0 }),
//     TeraByteDay: new Unit({ type: Types.ByteTime, symbol: "TB/D", min: 0 }),
//     TeraByteMonth: new Unit({ type: Types.ByteTime, symbol: "TB/M", min: 0 }),
//     TeraByteYear: new Unit({ type: Types.ByteTime, symbol: "TB/Y", min: 0 }),

//     Octet: new Unit({ type: Types.Octet, symbol: "o", min: 0 }),
//     KiloOctet: new Unit({ type: Types.Octet, symbol: "ko", min: 0 }),
//     MegaOctet: new Unit({ type: Types.Octet, symbol: "Mo", min: 0 }),
//     GigaOctet: new Unit({ type: Types.Octet, symbol: "Go", min: 0 }),
//     TeraOctet: new Unit({ type: Types.Octet, symbol: "To", min: 0 }),

//     OctetMicroSeconde: new Unit({ type: Types.OctetTime, symbol: "o/μs", min: 0 }),
//     OctetNanoSeconde: new Unit({ type: Types.OctetTime, symbol: "o/ns", min: 0 }),
//     OctetMilliSeconde: new Unit({ type: Types.OctetTime, symbol: "o/ms", min: 0 }),
//     OctetSeconde: new Unit({ type: Types.OctetTime, symbol: "o/s", min: 0 }),
//     OctetMinute: new Unit({ type: Types.OctetTime, symbol: "o/m", min: 0 }),
//     OctetHour: new Unit({ type: Types.OctetTime, symbol: "o/h", min: 0 }),
//     OctetDay: new Unit({ type: Types.OctetTime, symbol: "o/D", min: 0 }),
//     OctetMonth: new Unit({ type: Types.OctetTime, symbol: "o/M", min: 0 }),
//     OctetYear: new Unit({ type: Types.OctetTime, symbol: "o/Y", min: 0 }),

//     KiloOctetMicroSeconde: new Unit({ type: Types.OctetTime, symbol: "ko/μs", min: 0 }),
//     KiloOctetNanoSeconde: new Unit({ type: Types.OctetTime, symbol: "ko/ns", min: 0 }),
//     KiloOctetMilliSeconde: new Unit({ type: Types.OctetTime, symbol: "ko/ms", min: 0 }),
//     KiloOctetSeconde: new Unit({ type: Types.OctetTime, symbol: "ko/s", min: 0 }),
//     KiloOctetMinute: new Unit({ type: Types.OctetTime, symbol: "ko/m", min: 0 }),
//     KiloOctetHour: new Unit({ type: Types.OctetTime, symbol: "ko/h", min: 0 }),
//     KiloOctetDay: new Unit({ type: Types.OctetTime, symbol: "ko/D", min: 0 }),
//     KiloOctetMonth: new Unit({ type: Types.OctetTime, symbol: "ko/M", min: 0 }),
//     KiloOctetYear: new Unit({ type: Types.OctetTime, symbol: "ko/Y", min: 0 }),

//     MegaOctetMicroSeconde: new Unit({ type: Types.OctetTime, symbol: "Mo/μs", min: 0 }),
//     MegaOctetNanoSeconde: new Unit({ type: Types.OctetTime, symbol: "Mo/ns", min: 0 }),
//     MegaOctetMilliSeconde: new Unit({ type: Types.OctetTime, symbol: "Mo/ms", min: 0 }),
//     MegaOctetSeconde: new Unit({ type: Types.OctetTime, symbol: "Mo/s", min: 0 }),
//     MegaOctetMinute: new Unit({ type: Types.OctetTime, symbol: "Mo/m", min: 0 }),
//     MegaOctetHour: new Unit({ type: Types.OctetTime, symbol: "Mo/h", min: 0 }),
//     MegaOctetDay: new Unit({ type: Types.OctetTime, symbol: "Mo/D", min: 0 }),
//     MegaOctetMonth: new Unit({ type: Types.OctetTime, symbol: "Mo/M", min: 0 }),
//     MegaOctetYear: new Unit({ type: Types.OctetTime, symbol: "Mo/Y", min: 0 }),

//     GigaOctetMicroSeconde: new Unit({ type: Types.OctetTime, symbol: "Go/μs", min: 0 }),
//     GigaOctetNanoSeconde: new Unit({ type: Types.OctetTime, symbol: "Go/ns", min: 0 }),
//     GigaOctetMilliSeconde: new Unit({ type: Types.OctetTime, symbol: "Go/ms", min: 0 }),
//     GigaOctetSeconde: new Unit({ type: Types.OctetTime, symbol: "Go/s", min: 0 }),
//     GigaOctetMinute: new Unit({ type: Types.OctetTime, symbol: "Go/m", min: 0 }),
//     GigaOctetHour: new Unit({ type: Types.OctetTime, symbol: "Go/h", min: 0 }),
//     GigaOctetDay: new Unit({ type: Types.OctetTime, symbol: "Go/D", min: 0 }),
//     GigaOctetMonth: new Unit({ type: Types.OctetTime, symbol: "Go/M", min: 0 }),
//     GigaOctetYear: new Unit({ type: Types.OctetTime, symbol: "Go/Y", min: 0 }),

//     TeraOctetMicroSeconde: new Unit({ type: Types.OctetTime, symbol: "To/μs", min: 0 }),
//     TeraOctetNanoSeconde: new Unit({ type: Types.OctetTime, symbol: "To/ns", min: 0 }),
//     TeraOctetMilliSeconde: new Unit({ type: Types.OctetTime, symbol: "To/ms", min: 0 }),
//     TeraOctetSeconde: new Unit({ type: Types.OctetTime, symbol: "To/s", min: 0 }),
//     TeraOctetMinute: new Unit({ type: Types.OctetTime, symbol: "To/m", min: 0 }),
//     TeraOctetHour: new Unit({ type: Types.OctetTime, symbol: "To/h", min: 0 }),
//     TeraOctetDay: new Unit({ type: Types.OctetTime, symbol: "To/D", min: 0 }),
//     TeraOctetMonth: new Unit({ type: Types.OctetTime, symbol: "To/M", min: 0 }),
//     TeraOctetYear: new Unit({ type: Types.OctetTime, symbol: "To/Y", min: 0 }),

//     Count: new Unit({ type: Types.Count, symbol: "#", min: 0}),

//     CountMicroSeconde: new Unit({ type: Types.CountTime, symbol: "#/μs" }),
//     CountNanoSeconde: new Unit({ type: Types.CountTime, symbol: "#/ns" }),
//     CountMilliSeconde: new Unit({ type: Types.CountTime, symbol: "#/ms" }),
//     CountSeconde: new Unit({ type: Types.CountTime, symbol: "#/s" }),
//     CountMinute: new Unit({ type: Types.CountTime, symbol: "#/m" }),
//     CountHour: new Unit({ type: Types.CountTime, symbol: "#/h" }),
//     CountDay: new Unit({ type: Types.CountTime, symbol: "#/D" }),
//     CountMonth: new Unit({ type: Types.CountTime, symbol: "#/M" }),
//     CountYear: new Unit({ type: Types.CountTime, symbol: "#/Y" }),

//     Hertz: new Unit({ type: Types.Hertz, symbol: "Hz", min: 0 }),
//     KiloHertz: new Unit({ type: Types.Hertz, symbol: "kHz", min: 0 }),
//     MegaHertz: new Unit({ type: Types.Hertz, symbol: "MHz", min: 0 }),
//     GigaHertz: new Unit({ type: Types.Hertz, symbol: "GHz", min: 0 }),

//     Watt: new Unit({ type: Types.Watt, symbol: "W", min: 0 }),
//     KiloWatt: new Unit({ type: Types.Watt, symbol: "kW", min: 0 }),

//     WattHour: new Unit({ type: Types.WattTime, symbol: "W/h", min: 0 }),
//     WattDay: new Unit({ type: Types.WattTime, symbol: "W/D", min: 0 }),
//     WattMonth: new Unit({ type: Types.WattTime, symbol: "W/M", min: 0 }),
//     WattYear: new Unit({ type: Types.WattTime, symbol: "W/Y", min: 0 }),

//     KiloWattHour: new Unit({ type: Types.WattTime, symbol: "kW/h", min: 0 }),
//     KiloWattDay: new Unit({ type: Types.WattTime, symbol: "kW/D", min: 0 }),
//     KiloWattMonth: new Unit({ type: Types.WattTime, symbol: "kW/M", min: 0 }),
//     KiloWattYear: new Unit({ type: Types.WattTime, symbol: "kW/Y", min: 0 }),

//     Bool: new Unit({ type: Types.Boolean, symbol: "bool", min: 0, max: 1 })
// };
