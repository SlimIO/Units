const ava = require("ava");
const Unit = require("..");

ava("Unit", (assert) => {
    const milliSeconde = Unit.MilliSecond;
    assert.is(milliSeconde.symbol, "ms");
});
