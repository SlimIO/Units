const ava = require("ava");
const Unit = require("../index.js");

ava("Unit", (assert) => {
    const milliSeconde = Unit.MilliSecond;
    assert.is(milliSeconde.symbol, "ms");
});
