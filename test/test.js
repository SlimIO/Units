// Require Third-party Dependencies
const ava = require("ava");

// Require Internal Dependencies
const Unit = require("..");

ava("Unit should export frozen UnitTypes", (assert) => {
    assert.true(Object.isFrozen(Unit.Types));
});

ava("UnitDefinition (test values)", (assert) => {
    const E_TYPES = new Set(Object.values(Unit.Types));

    assert.deepEqual(Object.keys(Unit), ["Types"]);
    for (const key of Reflect.ownKeys(Unit)) {
        if (key === "Types") {
            continue;
        }

        const currUnit = Unit[key];
        assert.is(currUnit.name, key);
        assert.true(E_TYPES.has(currUnit.type));
        assert.true(typeof currUnit.symbol === "string");
        assert.true(typeof currUnit.min === "number");
        assert.true(typeof currUnit.max === "number");
    }
    assert.deepEqual(Object.keys(Unit), Reflect.ownKeys(Unit));
});
