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
     * @param {Object=} options options
     * @param {Number} options.type Unit type
     * @param {String} options.symbol Unit symbol
     * @param {Number} options.min min
     * @param {Number} options.max max
     */
    constructor(options = Object.create(null)) {
        this.type = options.type;
        this.symbol = options.symbol;
        this.min = typeof options.min === "number" ? options.min : -Infinity;
        this.max = typeof options.max === "number" ? options.max : Infinity;
    }

}

module.exports = UnitDefinition;