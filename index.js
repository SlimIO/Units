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

Units.set("MicroSecond", () => new Unit({ name: "MicroSecond", type: Types.Time, symbol: "μs" }));
Units.set("NanoSecond", () => new Unit({ name: "NanoSecond", type: Types.Time, symbol: "ns" }));
Units.set("MilliSecond", () => new Unit({ name: "MilliSecond", type: Types.Time, symbol: "ms" }));
Units.set("Second", () => new Unit({ name: "Second", type: Types.Time, symbol: "s" }));
Units.set("Minute", () => new Unit({ name: "Minute", type: Types.Time, symbol: "m" }));
Units.set("Hour", () => new Unit({ name: "Hour", type: Types.Time, symbol: "h" }));
Units.set("Day", () => new Unit({ name: "Day", type: Types.Time, symbol: "D" }));
Units.set("Month", () => new Unit({ name: "Month", type: Types.Time, symbol: "M" }));
Units.set("Year", () => new Unit({ name: "Year", type: Types.Time, symbol: "Y" }));

Units.set("Celsius", () => new Unit({ name: "Celsius", type: Types.Degree, symbol: "C", min: -273.12 }));
Units.set("Fehrenheit", () => new Unit({ name: "Fehrenheit", type: Types.Degree, symbol: "F", min: -459.67 }));
Units.set("Kelvin", () => new Unit({ name: "Kelvin", type: Types.Degree, symbol: "K", min: 0 }));

Units.set("Pourcent", () => new Unit({ name: "Pourcent", type: Types.Pourcent, symbol: "%", min: 0, max: 100 }));

Units.set("Bit", () => new Unit({ name: "Bit", type: Types.Bit, symbol: "b", min: 0 }));
Units.set("KiloBit", () => new Unit({ name: "KiloBit", type: Types.Bit, symbol: "kb", min: 0 }));
Units.set("MegaBit", () => new Unit({ name: "MegaBit", type: Types.Bit, symbol: "Mb", min: 0 }));
Units.set("GigaBit", () => new Unit({ name: "GigaBit", type: Types.Bit, symbol: "Gb", min: 0 }));
Units.set("TeraBit", () => new Unit({ name: "TeraBit", type: Types.Bit, symbol: "Tb", min: 0 }));

Units.set("BitMicroSeconde", () => new Unit({ name: "BitMicroSeconde", type: Types.BitTime, symbol: "b/μs", min: 0 }));
Units.set("BitNanoSeconde", () => new Unit({ name: "BitNanoSeconde", type: Types.BitTime, symbol: "b/ns", min: 0 }));
Units.set("BitMilliSeconde", () => new Unit({ name: "BitMilliSeconde", type: Types.BitTime, symbol: "b/ms", min: 0 }));
Units.set("BitSeconde", () => new Unit({ name: "BitSeconde", type: Types.BitTime, symbol: "b/s", min: 0 }));
Units.set("BitMinute", () => new Unit({ name: "BitMinute", type: Types.BitTime, symbol: "b/m", min: 0 }));
Units.set("BitHour", () => new Unit({ name: "BitHour", type: Types.BitTime, symbol: "b/h", min: 0 }));
Units.set("BitDay", () => new Unit({ name: "BitDay", type: Types.BitTime, symbol: "b/D", min: 0 }));
Units.set("BitMonth", () => new Unit({ name: "BitMonth", type: Types.BitTime, symbol: "b/M", min: 0 }));
Units.set("BitYear", () => new Unit({ name: "BitYear", type: Types.BitTime, symbol: "b/Y", min: 0 }));

Units.set("KiloBitMicroSeconde", () => new Unit({ name: "KiloBitMicroSeconde", type: Types.BitTime, symbol: "kb/μs", min: 0 }));
Units.set("KiloBitNanoSeconde", () => new Unit({ name: "KiloBitNanoSeconde", type: Types.BitTime, symbol: "kb/ns", min: 0 }));
Units.set("KiloBitMilliSeconde", () => new Unit({ name: "KiloBitMilliSeconde", type: Types.BitTime, symbol: "kb/ms", min: 0 }));
Units.set("KiloBitSeconde", () => new Unit({ name: "KiloBitSeconde", type: Types.BitTime, symbol: "kb/s", min: 0 }));
Units.set("KiloBitMinute", () => new Unit({ name: "KiloBitMinute", type: Types.BitTime, symbol: "kb/m", min: 0 }));
Units.set("KiloBitHour", () => new Unit({ name: "KiloBitHour", type: Types.BitTime, symbol: "kb/h", min: 0 }));
Units.set("KiloBitDay", () => new Unit({ name: "KiloBitDay", type: Types.BitTime, symbol: "kb/D", min: 0 }));
Units.set("KiloBitMonth", () => new Unit({ name: "KiloBitMonth", type: Types.BitTime, symbol: "kb/M", min: 0 }));
Units.set("KiloBitYear", () => new Unit({ name: "KiloBitYear", type: Types.BitTime, symbol: "kb/Y", min: 0 }));

Units.set("MegaBitMicroSeconde", () => new Unit({ name: "MegaBitMicroSeconde", type: Types.BitTime, symbol: "Mb/μs", min: 0 }));
Units.set("MegaBitNanoSeconde", () => new Unit({ name: "MegaBitNanoSeconde", type: Types.BitTime, symbol: "Mb/ns", min: 0 }));
Units.set("MegaBitMilliSeconde", () => new Unit({ name: "MegaBitMilliSeconde", type: Types.BitTime, symbol: "Mb/ms", min: 0 }));
Units.set("MegaBitSeconde", () => new Unit({ name: "MegaBitSeconde", type: Types.BitTime, symbol: "Mb/s", min: 0 }));
Units.set("MegaBitMinute", () => new Unit({ name: "MegaBitMinute", type: Types.BitTime, symbol: "Mb/m", min: 0 }));
Units.set("MegaBitHour", () => new Unit({ name: "MegaBitHour", type: Types.BitTime, symbol: "Mb/h", min: 0 }));
Units.set("MegaBitDay", () => new Unit({ name: "MegaBitDay", type: Types.BitTime, symbol: "Mb/D", min: 0 }));
Units.set("MegaBitMonth", () => new Unit({ name: "MegaBitMonth", type: Types.BitTime, symbol: "Mb/M", min: 0 }));
Units.set("MegaBitYear", () => new Unit({ name: "MegaBitYear", type: Types.BitTime, symbol: "Mb/Y", min: 0 }));

Units.set("GigaBitMicroSeconde", () => new Unit({ name: "GigaBitMicroSeconde", type: Types.BitTime, symbol: "Gb/μs", min: 0 }));
Units.set("GigaBitNanoSeconde", () => new Unit({ name: "GigaBitNanoSeconde", type: Types.BitTime, symbol: "Gb/ns", min: 0 }));
Units.set("GigaBitMilliSeconde", () => new Unit({ name: "GigaBitMilliSeconde", type: Types.BitTime, symbol: "Gb/ms", min: 0 }));
Units.set("GigaBitSeconde", () => new Unit({ name: "GigaBitSeconde", type: Types.BitTime, symbol: "Gb/s", min: 0 }));
Units.set("GigaBitMinute", () => new Unit({ name: "GigaBitMinute", type: Types.BitTime, symbol: "Gb/m", min: 0 }));
Units.set("GigaBitHour", () => new Unit({ name: "GigaBitHour", type: Types.BitTime, symbol: "Gb/h", min: 0 }));
Units.set("GigaBitDay", () => new Unit({ name: "GigaBitDay", type: Types.BitTime, symbol: "Gb/D", min: 0 }));
Units.set("GigaBitMonth", () => new Unit({ name: "GigaBitMonth", type: Types.BitTime, symbol: "Gb/M", min: 0 }));
Units.set("GigaBitYear", () => new Unit({ name: "GigaBitYear", type: Types.BitTime, symbol: "Gb/Y", min: 0 }));

Units.set("TeraBitMicroSeconde", () => new Unit({ name: "TeraBitMicroSeconde", type: Types.BitTime, symbol: "Tb/μs", min: 0 }));
Units.set("TeraBitNanoSeconde", () => new Unit({ name: "TeraBitNanoSeconde", type: Types.BitTime, symbol: "Tb/ns", min: 0 }));
Units.set("TeraBitMilliSeconde", () => new Unit({ name: "TeraBitMilliSeconde", type: Types.BitTime, symbol: "Tb/ms", min: 0 }));
Units.set("TeraBitSeconde", () => new Unit({ name: "TeraBitSeconde", type: Types.BitTime, symbol: "Tb/s", min: 0 }));
Units.set("TeraBitMinute", () => new Unit({ name: "TeraBitMinute", type: Types.BitTime, symbol: "Tb/m", min: 0 }));
Units.set("TeraBitHour", () => new Unit({ name: "TeraBitHour", type: Types.BitTime, symbol: "Tb/h", min: 0 }));
Units.set("TeraBitDay", () => new Unit({ name: "TeraBitDay", type: Types.BitTime, symbol: "Tb/D", min: 0 }));
Units.set("TeraBitMonth", () => new Unit({ name: "TeraBitMonth", type: Types.BitTime, symbol: "Tb/M", min: 0 }));
Units.set("TeraBitYear", () => new Unit({ name: "TeraBitYear", type: Types.BitTime, symbol: "Tb/Y", min: 0 }));

Units.set("Byte", () => new Unit({ name: "Byte", type: Types.Byte, symbol: "B", min: 0 }));
Units.set("KiloByte", () => new Unit({ name: "KiloByte", type: Types.Byte, symbol: "kB", min: 0 }));
Units.set("MegaByte", () => new Unit({ name: "MegaByte", type: Types.Byte, symbol: "MB", min: 0 }));
Units.set("GigaByte", () => new Unit({ name: "GigaByte", type: Types.Byte, symbol: "GB", min: 0 }));
Units.set("TeraByte", () => new Unit({ name: "TeraByte", type: Types.Byte, symbol: "TB", min: 0 }));

Units.set("ByteMicroSeconde", () => new Unit({ name: "ByteMicroSeconde", type: Types.ByteTime, symbol: "B/μs", min: 0 }));
Units.set("ByteNanoSeconde", () => new Unit({ name: "ByteNanoSeconde", type: Types.ByteTime, symbol: "B/ns", min: 0 }));
Units.set("ByteMilliSeconde", () => new Unit({ name: "ByteMilliSeconde", type: Types.ByteTime, symbol: "B/ms", min: 0 }));
Units.set("ByteSeconde", () => new Unit({ name: "ByteSeconde", type: Types.ByteTime, symbol: "B/s", min: 0 }));
Units.set("ByteMinute", () => new Unit({ name: "ByteMinute", type: Types.ByteTime, symbol: "B/m", min: 0 }));
Units.set("ByteHour", () => new Unit({ name: "ByteHour", type: Types.ByteTime, symbol: "B/h", min: 0 }));
Units.set("ByteDay", () => new Unit({ name: "ByteDay", type: Types.ByteTime, symbol: "B/D", min: 0 }));
Units.set("ByteMonth", () => new Unit({ name: "ByteMonth", type: Types.ByteTime, symbol: "B/M", min: 0 }));
Units.set("ByteYear", () => new Unit({ name: "ByteYear", type: Types.ByteTime, symbol: "B/Y", min: 0 }));

Units.set("KiloByteMicroSeconde", () => new Unit({ name: "KiloByteMicroSeconde", type: Types.ByteTime, symbol: "kB/μs", min: 0 }));
Units.set("KiloByteNanoSeconde", () => new Unit({ name: "KiloByteNanoSeconde", type: Types.ByteTime, symbol: "kB/ns", min: 0 }));
Units.set("KiloByteMilliSeconde", () => new Unit({ name: "KiloByteMilliSeconde", type: Types.ByteTime, symbol: "kB/ms", min: 0 }));
Units.set("KiloByteSeconde", () => new Unit({ name: "KiloByteSeconde", type: Types.ByteTime, symbol: "kB/s", min: 0 }));
Units.set("KiloByteMinute", () => new Unit({ name: "KiloByteMinute", type: Types.ByteTime, symbol: "kB/m", min: 0 }));
Units.set("KiloByteHour", () => new Unit({ name: "KiloByteHour", type: Types.ByteTime, symbol: "kB/h", min: 0 }));
Units.set("KiloByteDay", () => new Unit({ name: "KiloByteDay", type: Types.ByteTime, symbol: "kB/D", min: 0 }));
Units.set("KiloByteMonth", () => new Unit({ name: "KiloByteMonth", type: Types.ByteTime, symbol: "kB/M", min: 0 }));
Units.set("KiloByteYear", () => new Unit({ name: "KiloByteYear", type: Types.ByteTime, symbol: "kB/Y", min: 0 }));

Units.set("MegaByteMicroSeconde", () => new Unit({ name: "MegaByteMicroSeconde", type: Types.ByteTime, symbol: "MB/μs", min: 0 }));
Units.set("MegaByteNanoSeconde", () => new Unit({ name: "MegaByteNanoSeconde", type: Types.ByteTime, symbol: "MB/ns", min: 0 }));
Units.set("MegaByteMilliSeconde", () => new Unit({ name: "MegaByteMilliSeconde", type: Types.ByteTime, symbol: "MB/ms", min: 0 }));
Units.set("MegaByteSeconde", () => new Unit({ name: "MegaByteSeconde", type: Types.ByteTime, symbol: "MB/s", min: 0 }));
Units.set("MegaByteMinute", () => new Unit({ name: "MegaByteMinute", type: Types.ByteTime, symbol: "MB/m", min: 0 }));
Units.set("MegaByteHour", () => new Unit({ name: "MegaByteHour", type: Types.ByteTime, symbol: "MB/h", min: 0 }));
Units.set("MegaByteDay", () => new Unit({ name: "MegaByteDay", type: Types.ByteTime, symbol: "MB/D", min: 0 }));
Units.set("MegaByteMonth", () => new Unit({ name: "MegaByteMonth", type: Types.ByteTime, symbol: "MB/M", min: 0 }));
Units.set("MegaByteYear", () => new Unit({ name: "MegaByteYear", type: Types.ByteTime, symbol: "MB/Y", min: 0 }));

Units.set("GigaByteMicroSeconde", () => new Unit({ name: "GigaByteMicroSeconde", type: Types.ByteTime, symbol: "GB/μs", min: 0 }));
Units.set("GigaByteNanoSeconde", () => new Unit({ name: "GigaByteNanoSeconde", type: Types.ByteTime, symbol: "GB/ns", min: 0 }));
Units.set("GigaByteMilliSeconde", () => new Unit({ name: "GigaByteMilliSeconde", type: Types.ByteTime, symbol: "GB/ms", min: 0 }));
Units.set("GigaByteSeconde", () => new Unit({ name: "GigaByteSeconde", type: Types.ByteTime, symbol: "GB/s", min: 0 }));
Units.set("GigaByteMinute", () => new Unit({ name: "GigaByteMinute", type: Types.ByteTime, symbol: "GB/m", min: 0 }));
Units.set("GigaByteHour", () => new Unit({ name: "GigaByteHour", type: Types.ByteTime, symbol: "GB/h", min: 0 }));
Units.set("GigaByteDay", () => new Unit({ name: "GigaByteDay", type: Types.ByteTime, symbol: "GB/D", min: 0 }));
Units.set("GigaByteMonth", () => new Unit({ name: "GigaByteMonth", type: Types.ByteTime, symbol: "GB/M", min: 0 }));
Units.set("GigaByteYear", () => new Unit({ name: "GigaByteYear", type: Types.ByteTime, symbol: "GB/Y", min: 0 }));

Units.set("TeraByteMicroSeconde", () => new Unit({ name: "TeraByteMicroSeconde", type: Types.ByteTime, symbol: "TB/μs", min: 0 }));
Units.set("TeraByteNanoSeconde", () => new Unit({ name: "TeraByteNanoSeconde", type: Types.ByteTime, symbol: "TB/ns", min: 0 }));
Units.set("TeraByteMilliSeconde", () => new Unit({ name: "TeraByteMilliSeconde", type: Types.ByteTime, symbol: "TB/ms", min: 0 }));
Units.set("TeraByteSeconde", () => new Unit({ name: "TeraByteSeconde", type: Types.ByteTime, symbol: "TB/s", min: 0 }));
Units.set("TeraByteMinute", () => new Unit({ name: "TeraByteMinute", type: Types.ByteTime, symbol: "TB/m", min: 0 }));
Units.set("TeraByteHour", () => new Unit({ name: "TeraByteHour", type: Types.ByteTime, symbol: "TB/h", min: 0 }));
Units.set("TeraByteDay", () => new Unit({ name: "TeraByteDay", type: Types.ByteTime, symbol: "TB/D", min: 0 }));
Units.set("TeraByteMonth", () => new Unit({ name: "TeraByteMonth", type: Types.ByteTime, symbol: "TB/M", min: 0 }));
Units.set("TeraByteYear", () => new Unit({ name: "TeraByteYear", type: Types.ByteTime, symbol: "TB/Y", min: 0 }));

Units.set("Octet", () => new Unit({ name: "Octet", type: Types.Octet, symbol: "o", min: 0 }));
Units.set("KiloOctet", () => new Unit({ name: "KiloOctet", type: Types.Octet, symbol: "ko", min: 0 }));
Units.set("MegaOctet", () => new Unit({ name: "MegaOctet", type: Types.Octet, symbol: "Mo", min: 0 }));
Units.set("GigaOctet", () => new Unit({ name: "GigaOctet", type: Types.Octet, symbol: "Go", min: 0 }));
Units.set("TeraOctet", () => new Unit({ name: "TeraOctet", type: Types.Octet, symbol: "To", min: 0 }));

Units.set("OctetMicroSeconde", () => new Unit({ name: "OctetMicroSeconde", type: Types.OctetTime, symbol: "o/μs", min: 0 }));
Units.set("OctetNanoSeconde", () => new Unit({ name: "OctetNanoSeconde", type: Types.OctetTime, symbol: "o/ns", min: 0 }));
Units.set("OctetMilliSeconde", () => new Unit({ name: "OctetMilliSeconde", type: Types.OctetTime, symbol: "o/ms", min: 0 }));
Units.set("OctetSeconde", () => new Unit({ name: "OctetSeconde", type: Types.OctetTime, symbol: "o/s", min: 0 }));
Units.set("OctetMinute", () => new Unit({ name: "OctetMinute", type: Types.OctetTime, symbol: "o/m", min: 0 }));
Units.set("OctetHour", () => new Unit({ name: "OctetHour", type: Types.OctetTime, symbol: "o/h", min: 0 }));
Units.set("OctetDay", () => new Unit({ name: "OctetDay", type: Types.OctetTime, symbol: "o/D", min: 0 }));
Units.set("OctetMonth", () => new Unit({ name: "OctetMonth", type: Types.OctetTime, symbol: "o/M", min: 0 }));
Units.set("OctetYear", () => new Unit({ name: "OctetYear", type: Types.OctetTime, symbol: "o/Y", min: 0 }));

Units.set("KiloOctetMicroSeconde", () => new Unit({ name: "KiloOctetMicroSeconde", type: Types.OctetTime, symbol: "ko/μs", min: 0 }));
Units.set("KiloOctetNanoSeconde", () => new Unit({ name: "KiloOctetNanoSeconde", type: Types.OctetTime, symbol: "ko/ns", min: 0 }));
Units.set("KiloOctetMilliSeconde", () => new Unit({ name: "KiloOctetMilliSeconde", type: Types.OctetTime, symbol: "ko/ms", min: 0 }));
Units.set("KiloOctetSeconde", () => new Unit({ name: "KiloOctetSeconde", type: Types.OctetTime, symbol: "ko/s", min: 0 }));
Units.set("KiloOctetMinute", () => new Unit({ name: "KiloOctetMinute", type: Types.OctetTime, symbol: "ko/m", min: 0 }));
Units.set("KiloOctetHour", () => new Unit({ name: "KiloOctetHour", type: Types.OctetTime, symbol: "ko/h", min: 0 }));
Units.set("KiloOctetDay", () => new Unit({ name: "KiloOctetDay", type: Types.OctetTime, symbol: "ko/D", min: 0 }));
Units.set("KiloOctetMonth", () => new Unit({ name: "KiloOctetMonth", type: Types.OctetTime, symbol: "ko/M", min: 0 }));
Units.set("KiloOctetYear", () => new Unit({ name: "KiloOctetYear", type: Types.OctetTime, symbol: "ko/Y", min: 0 }));

Units.set("MegaOctetMicroSeconde", () => new Unit({ name: "MegaOctetMicroSeconde", type: Types.OctetTime, symbol: "Mo/μs", min: 0 }));
Units.set("MegaOctetNanoSeconde", () => new Unit({ name: "MegaOctetNanoSeconde", type: Types.OctetTime, symbol: "Mo/ns", min: 0 }));
Units.set("MegaOctetMilliSeconde", () => new Unit({ name: "MegaOctetMilliSeconde", type: Types.OctetTime, symbol: "Mo/ms", min: 0 }));
Units.set("MegaOctetSeconde", () => new Unit({ name: "MegaOctetSeconde", type: Types.OctetTime, symbol: "Mo/s", min: 0 }));
Units.set("MegaOctetMinute", () => new Unit({ name: "MegaOctetMinute", type: Types.OctetTime, symbol: "Mo/m", min: 0 }));
Units.set("MegaOctetHour", () => new Unit({ name: "MegaOctetHour", type: Types.OctetTime, symbol: "Mo/h", min: 0 }));
Units.set("MegaOctetDay", () => new Unit({ name: "MegaOctetDay", type: Types.OctetTime, symbol: "Mo/D", min: 0 }));
Units.set("MegaOctetMonth", () => new Unit({ name: "MegaOctetMonth", type: Types.OctetTime, symbol: "Mo/M", min: 0 }));
Units.set("MegaOctetYear", () => new Unit({ name: "MegaOctetYear", type: Types.OctetTime, symbol: "Mo/Y", min: 0 }));

Units.set("GigaOctetMicroSeconde", () => new Unit({ name: "GigaOctetMicroSeconde", type: Types.OctetTime, symbol: "Go/μs", min: 0 }));
Units.set("GigaOctetNanoSeconde", () => new Unit({ name: "GigaOctetNanoSeconde", type: Types.OctetTime, symbol: "Go/ns", min: 0 }));
Units.set("GigaOctetMilliSeconde", () => new Unit({ name: "GigaOctetMilliSeconde", type: Types.OctetTime, symbol: "Go/ms", min: 0 }));
Units.set("GigaOctetSeconde", () => new Unit({ name: "GigaOctetSeconde", type: Types.OctetTime, symbol: "Go/s", min: 0 }));
Units.set("GigaOctetMinute", () => new Unit({ name: "GigaOctetMinute", type: Types.OctetTime, symbol: "Go/m", min: 0 }));
Units.set("GigaOctetHour", () => new Unit({ name: "GigaOctetHour", type: Types.OctetTime, symbol: "Go/h", min: 0 }));
Units.set("GigaOctetDay", () => new Unit({ name: "GigaOctetDay", type: Types.OctetTime, symbol: "Go/D", min: 0 }));
Units.set("GigaOctetMonth", () => new Unit({ name: "GigaOctetMonth", type: Types.OctetTime, symbol: "Go/M", min: 0 }));
Units.set("GigaOctetYear", () => new Unit({ name: "GigaOctetYear", type: Types.OctetTime, symbol: "Go/Y", min: 0 }));

Units.set("TeraOctetMicroSeconde", () => new Unit({ name: "TeraOctetMicroSeconde", type: Types.OctetTime, symbol: "To/μs", min: 0 }));
Units.set("TeraOctetNanoSeconde", () => new Unit({ name: "TeraOctetNanoSeconde", type: Types.OctetTime, symbol: "To/ns", min: 0 }));
Units.set("TeraOctetMilliSeconde", () => new Unit({ name: "TeraOctetMilliSeconde", type: Types.OctetTime, symbol: "To/ms", min: 0 }));
Units.set("TeraOctetSeconde", () => new Unit({ name: "TeraOctetSeconde", type: Types.OctetTime, symbol: "To/s", min: 0 }));
Units.set("TeraOctetMinute", () => new Unit({ name: "TeraOctetMinute", type: Types.OctetTime, symbol: "To/m", min: 0 }));
Units.set("TeraOctetHour", () => new Unit({ name: "TeraOctetHour", type: Types.OctetTime, symbol: "To/h", min: 0 }));
Units.set("TeraOctetDay", () => new Unit({ name: "TeraOctetDay", type: Types.OctetTime, symbol: "To/D", min: 0 }));
Units.set("TeraOctetMonth", () => new Unit({ name: "TeraOctetMonth", type: Types.OctetTime, symbol: "To/M", min: 0 }));
Units.set("TeraOctetYear", () => new Unit({ name: "TeraOctetYear", type: Types.OctetTime, symbol: "To/Y", min: 0 }));

Units.set("Count", () => new Unit({ name: "Count", type: Types.Count, symbol: "#", min: 0}));

Units.set("CountMicroSeconde", () => new Unit({ name: "CountMicroSeconde", type: Types.CountTime, symbol: "#/μs" }));
Units.set("CountNanoSeconde", () => new Unit({ name: "CountNanoSeconde", type: Types.CountTime, symbol: "#/ns" }));
Units.set("CountMilliSeconde", () => new Unit({ name: "CountMilliSeconde", type: Types.CountTime, symbol: "#/ms" }));
Units.set("CountSeconde", () => new Unit({ name: "CountSeconde", type: Types.CountTime, symbol: "#/s" }));
Units.set("CountMinute", () => new Unit({ name: "CountMinute", type: Types.CountTime, symbol: "#/m" }));
Units.set("CountHour", () => new Unit({ name: "CountHour", type: Types.CountTime, symbol: "#/h" }));
Units.set("CountDay", () => new Unit({ name: "CountDay", type: Types.CountTime, symbol: "#/D" }));
Units.set("CountMonth", () => new Unit({ name: "CountMonth", type: Types.CountTime, symbol: "#/M" }));
Units.set("CountYear", () => new Unit({ name: "CountYear", type: Types.CountTime, symbol: "#/Y" }));

Units.set("Hertz", () => new Unit({ name: "Hertz", type: Types.Hertz, symbol: "Hz", min: 0 }));
Units.set("KiloHertz", () => new Unit({ name: "KiloHertz", type: Types.Hertz, symbol: "kHz", min: 0 }));
Units.set("MegaHertz", () => new Unit({ name: "MegaHertz", type: Types.Hertz, symbol: "MHz", min: 0 }));
Units.set("GigaHertz", () => new Unit({ name: "GigaHertz", type: Types.Hertz, symbol: "GHz", min: 0 }));

Units.set("Watt", () => new Unit({ name: "Watt", type: Types.Watt, symbol: "W", min: 0 }));
Units.set("KiloWatt", () => new Unit({ name: "KiloWatt", type: Types.Watt, symbol: "kW", min: 0 }));

Units.set("WattHour", () => new Unit({ name: "WattHour", type: Types.WattTime, symbol: "W/h", min: 0 }));
Units.set("WattDay", () => new Unit({ name: "WattDay", type: Types.WattTime, symbol: "W/D", min: 0 }));
Units.set("WattMonth", () => new Unit({ name: "WattMonth", type: Types.WattTime, symbol: "W/M", min: 0 }));
Units.set("WattYear", () => new Unit({ name: "WattYear", type: Types.WattTime, symbol: "W/Y", min: 0 }));

Units.set("KiloWattHour", () => new Unit({ name: "KiloWattHour", type: Types.WattTime, symbol: "kW/h", min: 0 }));
Units.set("KiloWattDay", () => new Unit({ name: "KiloWattDay", type: Types.WattTime, symbol: "kW/D", min: 0 }));
Units.set("KiloWattMonth", () => new Unit({ name: "KiloWattMonth", type: Types.WattTime, symbol: "kW/M", min: 0 }));
Units.set("KiloWattYear", () => new Unit({ name: "KiloWattYear", type: Types.WattTime, symbol: "kW/Y", min: 0 }));

Units.set("Bool", () => new Unit({ name: "Bool", type: Types.Boolean, symbol: "bool", min: 0, max: 1 }));

module.exports = Units.value;
