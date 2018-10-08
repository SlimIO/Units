// Require Internal dependencie(s)
const Units = require("../units.class.js");

// Require Third-party NPM package(s)
const is = require("@slimio/is");

/* eslint no-eval : "off" */

/**
 * @class Degree
 * @property {String} unit Default degree unit
 * @property {Map<String, Number>} calculated Map conversion
 */
class Degree extends Units {

    /**
     * @constructor
     * @param {Number} value value
     * @param {String} unit unit
     */
    constructor(value, unit) {
        super(value);
        if (!is.string(unit)) {
            throw new Error("unit param must be a string");
        }
        if (!Degree.units.has(unit)) {
            throw new Error(`unit param must be [${[...Degree.units]}]`);
        }
        this.unit = unit;
        this.calculated = new Map();
        this.calculated.set(this.unit, this.value);
    }

    /**
     * @method get
     * @param {String} unit Unit wanted
     * @param {Number} toFixed Number of decimal
     * @returns {{value: Number, unit: String}}
     */
    get(unit, toFixed) {
        if (!is.nullOrUndefined(unit) && !is.string(unit)) {
            throw new TypeError("unit param must be a string");
        }
        if (!is.nullOrUndefined(toFixed) && !is.number(toFixed)) {
            throw new TypeError("toFixed param must be a number");
        }

        if (is.nullOrUndefined(unit)) {
            return { value: this.value, unit: this.unit };
        }

        if (!Degree.units.has(unit)) {
            throw new Error(`unit param must be [${[...Degree.units]}]`);
        }

        if (this.calculated.has(unit)) {
            const result = this.calculated.get(unit);
            const value = toFixed ? Number(result.toFixed(toFixed)) : result;

            return { value, unit };
        }

        const result = this.conversion(unit);
        const value = toFixed ? Number(result.toFixed(toFixed)) : result;

        return { value, unit };
    }

    /**
     * @private
     * @function conversion
     * @param {String} unit The unit conversion
     * @return {Number}
     */
    conversion(unit) {
        const formula = Degree.conversion.get(`${this.unit} to ${unit}`);
        const result = eval(formula.replace("x", this.value));

        this.calculated.set(unit, result);

        return result;
    }

}

Degree.units = new Set(["C", "F", "K"]);
Degree.conversion = new Map([
    ["C to F", "x * 9/5 + 32"],
    ["F to C", "(x - 32) * 5/9"],

    ["C to K", "x + 273.15"],
    ["K to C", "x - 273.15"],

    ["F to K", "(x + 459.67) * 5/9"],
    ["K to F", "x * 9/5 - 459.67"]
]);

module.exports = Degree;
