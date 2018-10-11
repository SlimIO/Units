# SlimIO Units
NodeJS Javascript Unit

![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![V1.0](https://img.shields.io/badge/version-1.0.0-blue.svg)
![0DEP](https://img.shields.io/badge/Dependencies-0-yellow.svg)

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/units
# or
$ yarn add @slimio/units
```

## API

### UnitType
| Name | Number |
|---|:--:|
| Time | 0 |
| Degree | 1 |
| Pourcent | 2 |
| Bit | 3 |
| BitTime | 4 |
| ByteTime | 6 |
| Octet | 7 |
| OctetTime | 8 |
| Count | 9 |
| CountTime | 10 |
| Hertz | 11 |
| Watt | 12 |
| WattTime | 13 |
| Boolean | 14 |

### Units

#### Time

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| MicroSecond | Time | μs | 0 | Infinity |
| NanoSecond | Time | ns | 0 | Infinity |
| MilliSecond | Time | ms | 0 | Infinity |
| Second | Time | s | 0 | Infinity |
| Minute | Time | m | 0 | Infinity |
| Hour | Time | h | 0 | Infinity |
| Day | Time | D | 0 | Infinity |
| Month | Time | M | 0 | Infinity |
| Year | Time | Y | 0 | Infinity |


#### Degree

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Celsius | Degree | C | -273.12 | Infinity |
| Fehrenheit | Degree | F | -459.67 | Infinity |
| Kelvin | Degree | K | 0 | Infinity |


#### Pourcent

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Pourcent | Pourcent | % | 0 | 100 |


#### Bit

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Bit | Bit | B | 0 | Infinity |
| KiloBit | Bit | kB | 0 | Infinity |
| MegaBit | Bit | MB | 0 | Infinity |
| GigaBit | Bit | GB | 0 | Infinity |
| TeraBit | Bit | TB | 0 | Infinity |


#### BitTime

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| BitMicroSeconde | BitTime | b/μs | 0 | Infinity |
| BitNanoSeconde | BitTime | b/ns | 0 | Infinity |
| BitMilliSeconde | BitTime | b/ms | 0 | Infinity |
| BitSeconde | BitTime | b/s | 0 | Infinity |
| BitMinute | BitTime | b/m | 0 | Infinity |
| BitHour | BitTime | b/h | 0 | Infinity |
| BitDay | BitTime | b/D | 0 | Infinity |
| BitMonth | BitTime | b/M | 0 | Infinity |
| BitYear | BitTime | b/Y | 0 | Infinity |
| KiloBitMicroSeconde | BitTime | kb/μs | 0 | Infinity |
| KiloBitNanoSeconde | BitTime | kb/ns | 0 | Infinity |
| KiloBitMilliSeconde | BitTime | kb/ms | 0 | Infinity |
| KiloBitSeconde | BitTime | kb/s | 0 | Infinity |
| KiloBitMinute | BitTime | kb/m | 0 | Infinity |
| KiloBitHour | BitTime | kb/h | 0 | Infinity |
| KiloBitDay | BitTime | kb/D | 0 | Infinity |
| KiloBitMonth | BitTime | kb/M | 0 | Infinity |
| KiloBitYear | BitTime | kb/Y | 0 | Infinity |
| MegaBitMicroSeconde | BitTime | Mb/μs | 0 | Infinity |
| MegaBitNanoSeconde | BitTime | Mb/ns | 0 | Infinity |
| MegaBitMilliSeconde | BitTime | Mb/ms | 0 | Infinity |
| MegaBitSeconde | BitTime | Mb/s | 0 | Infinity |
| MegaBitMinute | BitTime | Mb/m | 0 | Infinity |
| MegaBitHour | BitTime | Mb/h | 0 | Infinity |
| MegaBitDay | BitTime | Mb/D | 0 | Infinity |
| MegaBitMonth | BitTime | Mb/M | 0 | Infinity |
| MegaBitYear | BitTime | Mb/Y | 0 | Infinity |
| GigaBitMicroSeconde | BitTime | Gb/μs | 0 | Infinity |
| GigaBitNanoSeconde | BitTime | Gb/ns | 0 | Infinity |
| GigaBitMilliSeconde | BitTime | Gb/ms | 0 | Infinity |
| GigaBitSeconde | BitTime | Gb/s | 0 | Infinity |
| GigaBitMinute | BitTime | Gb/m | 0 | Infinity |
| GigaBitHour | BitTime | Gb/h | 0 | Infinity |
| GigaBitDay | BitTime | Gb/D | 0 | Infinity |
| GigaBitMonth | BitTime | Gb/M | 0 | Infinity |
| GigaBitYear | BitTime | Gb/Y | 0 | Infinity |
| TeraBitMicroSeconde | BitTime | Tb/μs | 0 | Infinity |
| TeraBitNanoSeconde | BitTime | Tb/ns | 0 | Infinity |
| TeraBitMilliSeconde | BitTime | Tb/ms | 0 | Infinity |
| TeraBitSeconde | BitTime | Tb/s | 0 | Infinity |
| TeraBitMinute | BitTime | Tb/m | 0 | Infinity |
| TeraBitHour | BitTime | Tb/h | 0 | Infinity |
| TeraBitDay | BitTime | Tb/D | 0 | Infinity |
| TeraBitMonth | BitTime | Tb/M | 0 | Infinity |
| TeraBitYear | BitTime | Tb/Y | 0 | Infinity |


#### Byte

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Byte | Byte | B | 0 | Infinity |
| KiloByte | Byte | kB | 0 | Infinity |
| MegaByte | Byte | MB | 0 | Infinity |
| GigaByte | Byte | GB | 0 | Infinity |
| TeraByte | Byte | TB | 0 | Infinity |


#### ByteTime

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| ByteMicroSeconde | ByteTime | B/μs | 0 | Infinity |
| ByteNanoSeconde | ByteTime | B/ns | 0 | Infinity |
| ByteMilliSeconde | ByteTime | B/ms | 0 | Infinity |
| ByteSeconde | ByteTime | B/s | 0 | Infinity |
| ByteMinute | ByteTime | B/m | 0 | Infinity |
| ByteHour | ByteTime | B/h | 0 | Infinity |
| ByteDay | ByteTime | B/D | 0 | Infinity |
| ByteMonth | ByteTime | B/M | 0 | Infinity |
| ByteYear | ByteTime | B/Y | 0 | Infinity |
| KiloByteMicroSeconde | ByteTime | kB/μs | 0 | Infinity |
| KiloByteNanoSeconde | ByteTime | kB/ns | 0 | Infinity |
| KiloByteMilliSeconde | ByteTime | kB/ms | 0 | Infinity |
| KiloByteSeconde | ByteTime | kB/s | 0 | Infinity |
| KiloByteMinute | ByteTime | kB/m | 0 | Infinity |
| KiloByteHour | ByteTime | kB/h | 0 | Infinity |
| KiloByteDay | ByteTime | kB/D | 0 | Infinity |
| KiloByteMonth | ByteTime | kB/M | 0 | Infinity |
| KiloByteYear | ByteTime | kB/Y | 0 | Infinity |
| MegaByteMicroSeconde | ByteTime | MB/μs | 0 | Infinity |
| MegaByteNanoSeconde | ByteTime | MB/ns | 0 | Infinity |
| MegaByteMilliSeconde | ByteTime | MB/ms | 0 | Infinity |
| MegaByteSeconde | ByteTime | MB/s | 0 | Infinity |
| MegaByteMinute | ByteTime | MB/m | 0 | Infinity |
| MegaByteHour | ByteTime | MB/h | 0 | Infinity |
| MegaByteDay | ByteTime | MB/D | 0 | Infinity |
| MegaByteMonth | ByteTime | MB/M | 0 | Infinity |
| MegaByteYear | ByteTime | MB/Y | 0 | Infinity |
| GigaByteMicroSeconde | ByteTime | GB/μs | 0 | Infinity |
| GigaByteNanoSeconde | ByteTime | GB/ns | 0 | Infinity |
| GigaByteMilliSeconde | ByteTime | GB/ms | 0 | Infinity |
| GigaByteSeconde | ByteTime | GB/s | 0 | Infinity |
| GigaByteMinute | ByteTime | GB/m | 0 | Infinity |
| GigaByteHour | ByteTime | GB/h | 0 | Infinity |
| GigaByteDay | ByteTime | GB/D | 0 | Infinity |
| GigaByteMonth | ByteTime | GB/M | 0 | Infinity |
| GigaByteYear | ByteTime | GB/Y | 0 | Infinity |
| TeraByteMicroSeconde | ByteTime | TB/μs | 0 | Infinity |
| TeraByteNanoSeconde | ByteTime | TB/ns | 0 | Infinity |
| TeraByteMilliSeconde | ByteTime | TB/ms | 0 | Infinity |
| TeraByteSeconde | ByteTime | TB/s | 0 | Infinity |
| TeraByteMinute | ByteTime | TB/m | 0 | Infinity |
| TeraByteHour | ByteTime | TB/h | 0 | Infinity |
| TeraByteDay | ByteTime | TB/D | 0 | Infinity |
| TeraByteMonth | ByteTime | TB/M | 0 | Infinity |
| TeraByteYear | ByteTime | TB/Y | 0 | Infinity |


#### Octet

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Octet | Octet | o | 0 | Infinity |
| KiloOctet | Octet | ko | 0 | Infinity |
| MegaOctet | Octet | Mo | 0 | Infinity |
| GigaOctet | Octet | Go | 0 | Infinity |
| TeraOctet | Octet | To | 0 | Infinity |


#### OctetTime

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| OctetMicroSeconde | OctetTime | o/μs | 0 | Infinity |
| OctetNanoSeconde | OctetTime | o/ns | 0 | Infinity |
| OctetMilliSeconde | OctetTime | o/ms | 0 | Infinity |
| OctetSeconde | OctetTime | o/s | 0 | Infinity |
| OctetMinute | OctetTime | o/m | 0 | Infinity |
| OctetHour | OctetTime | o/h | 0 | Infinity |
| OctetDay | OctetTime | o/D | 0 | Infinity |
| OctetMonth | OctetTime | o/M | 0 | Infinity |
| OctetYear | OctetTime | o/Y | 0 | Infinity |
| KiloOctetMicroSeconde | OctetTime | ko/μs | 0 | Infinity |
| KiloOctetNanoSeconde | OctetTime | ko/ns | 0 | Infinity |
| KiloOctetMilliSeconde | OctetTime | ko/ms | 0 | Infinity |
| KiloOctetSeconde | OctetTime | ko/s | 0 | Infinity |
| KiloOctetMinute | OctetTime | ko/m | 0 | Infinity |
| KiloOctetHour | OctetTime | ko/h | 0 | Infinity |
| KiloOctetDay | OctetTime | ko/D | 0 | Infinity |
| KiloOctetMonth | OctetTime | ko/M | 0 | Infinity |
| KiloOctetYear | OctetTime | ko/Y | 0 | Infinity |
| MegaOctetMicroSeconde | OctetTime | Mo/μs | 0 | Infinity |
| MegaOctetNanoSeconde | OctetTime | Mo/ns | 0 | Infinity |
| MegaOctetMilliSeconde | OctetTime | Mo/ms | 0 | Infinity |
| MegaOctetSeconde | OctetTime | Mo/s | 0 | Infinity |
| MegaOctetMinute | OctetTime | Mo/m | 0 | Infinity |
| MegaOctetHour | OctetTime | Mo/h | 0 | Infinity |
| MegaOctetDay | OctetTime | Mo/D | 0 | Infinity |
| MegaOctetMonth | OctetTime | Mo/M | 0 | Infinity |
| MegaOctetYear | OctetTime | Mo/Y | 0 | Infinity |
| GigaOctetMicroSeconde | OctetTime | Go/μs | 0 | Infinity |
| GigaOctetNanoSeconde | OctetTime | Go/ns | 0 | Infinity |
| GigaOctetMilliSeconde | OctetTime | Go/ms | 0 | Infinity |
| GigaOctetSeconde | OctetTime | Go/s | 0 | Infinity |
| GigaOctetMinute | OctetTime | Go/m | 0 | Infinity |
| GigaOctetHour | OctetTime | Go/h | 0 | Infinity |
| GigaOctetDay | OctetTime | Go/D | 0 | Infinity |
| GigaOctetMonth | OctetTime | Go/M | 0 | Infinity |
| GigaOctetYear | OctetTime | Go/Y | 0 | Infinity |
| TeraOctetMicroSeconde | OctetTime | To/μs | 0 | Infinity |
| TeraOctetNanoSeconde | OctetTime | To/ns | 0 | Infinity |
| TeraOctetMilliSeconde | OctetTime | To/ms | 0 | Infinity |
| TeraOctetSeconde | OctetTime | To/s | 0 | Infinity |
| TeraOctetMinute | OctetTime | To/m | 0 | Infinity |
| TeraOctetHour | OctetTime | To/h | 0 | Infinity |
| TeraOctetDay | OctetTime | To/D | 0 | Infinity |
| TeraOctetMonth | OctetTime | To/M | 0 | Infinity |
| TeraOctetYear | OctetTime | To/Y | 0 | Infinity |


#### Count

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Count | Count | # | 0 | Infinity |


#### CountTime

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| CountMicroSeconde | CountTime | #/μs | -Infinity | Infinity |
| CountNanoSeconde | CountTime | #/ns | -Infinity | Infinity |
| CountMilliSeconde | CountTime | #/ms | -Infinity | Infinity |
| CountSeconde | CountTime | #/s | -Infinity | Infinity |
| CountMinute | CountTime | #/m | -Infinity | Infinity |
| CountHour | CountTime | #/h | -Infinity | Infinity |
| CountDay | CountTime | #/D | -Infinity | Infinity |
| CountMonth | CountTime | #/M | -Infinity | Infinity |
| CountYear | CountTime | #/Y | -Infinity | Infinity |

#### Hertz

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Hertz | Hertz | Hz | 0 | Infinity |
| KiloHertz | Hertz | kHz | 0 | Infinity |
| MegaHertz | Hertz | MHz | 0 | Infinity |
| GigaHertz | Hertz | GHz | 0 | Infinity |


#### Watt

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Watt | Watt | W | 0 | Infinity |
| KiloWatt | Watt | kW | 0 | Infinity |


#### WattTime

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| WattHour | WattTime | W/h | 0 | Infinity |
| WattDay | WattTime | W/D | 0 | Infinity |
| WattMonth | WattTime | W/M | 0 | Infinity |
| WattYear | WattTime | W/Y | 0 | Infinity |
| KiloWattHour | WattTime | kW/h | 0 | Infinity |
| KiloWattDay | WattTime | kW/D | 0 | Infinity |
| KiloWattMonth | WattTime | kW/M | 0 | Infinity |
| KiloWattYear | WattTime | kW/Y | 0 | Infinity |

#### Boolean

| Name | UnitType | Symbol | Min | Max |
| ---- | ---------|:------:| --- | --- |
| Bool | Boolean | bool | 0 | 1 |


## Licence

MIT
