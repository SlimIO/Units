// Require Third-party Dependencies
const ava = require("ava");

// Require Internal Dependencies
const Unit = require("..");
const UnitDefinition = require("../src/definition");

ava("Unit should export frozen UnitTypes", (assert) => {
    assert.true(Object.isFrozen(Unit.UnitTypes));
});

ava("UnitDefinition (options should be plainObject)", (assert) => {
    const { message } = assert.throws(() => {
        new UnitDefinition(void 0);
    }, TypeError);
    assert.is(message, "options should be a plain javascript Object");
});

ava("UnitDefinition (options.type should be typeof number)", (assert) => {
    const { message } = assert.throws(() => {
        new UnitDefinition({ type: "10" });
    }, TypeError);
    assert.is(message, "options.type should be typeof number");
});

ava("UnitDefinition (options.symbol should be typeof string)", (assert) => {
    const { message } = assert.throws(() => {
        new UnitDefinition({
            type: Unit.Types.Boolean,
            symbol: 0
        });
    }, TypeError);
    assert.is(message, "options.symbol should be typeof string");
});

ava("UnitDefinition (test values)", (assert) => {
    const defValue = new UnitDefinition({
        type: Unit.Types.Boolean,
        symbol: "b"
    });
    assert.is(defValue.type, Unit.Types.Boolean);
    assert.is(defValue.symbol, "b");
    assert.is(defValue.max, Infinity);
    assert.is(defValue.min, -Infinity);

    const defTest = new UnitDefinition({
        type: Unit.Types.Bit,
        symbol: "bT",
        min: 0,
        max: 1
    });
    assert.is(defTest.type, Unit.Types.Bit);
    assert.is(defTest.symbol, "bT");
    assert.is(defTest.max, 1);
    assert.is(defTest.min, 0);
});
