const is = require("@slimio/is");

/**
 * @class Units
 */
class Units {

    /**
     * @constructor
     * @param {Number} value value
     */
    constructor(value) {
        if (!is.number(value)) {
            throw new TypeError("value param must be a number");
        }

        this.value = value;
    }

}


module.exports = Units;