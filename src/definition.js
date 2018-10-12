// Require Third-party Dependencies
const is = require("@slimio/is");

/**
 * @class UnitDefinition
 * @param {Number} type Unit type
 * @param {String} symbol Unit symbol
 * @param {Number} min min
 * @param {Number} max max
 */
class UnitDefinition {

    /**
     * @constructor
     * @param {Object} options UnitDefinition options
     * @param {!Number} options.type Unit type
     * @param {!String} options.symbol Unit symbol
     * @param {Number=} options.min min
     * @param {Number=} options.max max
     *
     * @throws {TypeError}
     */
    constructor(options) {
        if (!is.plainObject(options)) {
            throw new TypeError("options should be a plain javascript Object");
        }
        if (!is.number(options.type)) {
            throw new TypeError("options.type should be typeof number");
        }
        if (!is.string(options.symbol)) {
            throw new TypeError("options.symbol should be typeof string");
        }

        this.type = options.type;
        this.symbol = options.symbol;
        this.min = typeof options.min === "number" ? options.min : -Infinity;
        this.max = typeof options.max === "number" ? options.max : Infinity;
    }

}

module.exports = UnitDefinition;
