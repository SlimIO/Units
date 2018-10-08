// Require Internal dependencie(s)
const { Degree } = require("../index.js");

// Require Third-party NPM package(s)
const ava = require("ava");

ava("Instentiation error", (assert) => {
    let error;
    error = assert.throws(() => {
        new Degree("test", "C");
    }, TypeError);
    assert.is(error.message, "value param must be a number");

    error = assert.throws(() => {
        new Degree(20, 20);
    }, Error);
    assert.is(error.message, "unit param must be a string");

    error = assert.throws(() => {
        new Degree(20, "test");
    }, Error);
    assert.is(error.message, "unit param must be [C,F,K]");
});

ava("Get error", (assert) => {
    let error;
    error = assert.throws(() => {
        const degree = new Degree(20, "C");
        degree.get(5);
    }, TypeError);
    assert.is(error.message, "unit param must be a string");

    error = assert.throws(() => {
        const degree = new Degree(20, "C");
        degree.get("test");
    }, Error);
    assert.is(error.message, "unit param must be [C,F,K]");

    error = assert.throws(() => {
        const degree = new Degree(20, "C");
        degree.get("C", "test");
    }, TypeError);
    assert.is(error.message, "toFixed param must be a number");
});

ava("Celcius to ...", (assert) => {
    const degree = new Degree(20, "C");
    let result;
    result = degree.get();
    assert.is(result.value, 20);
    assert.is(result.unit, "C");

    result = degree.get("F");
    assert.is(result.value, 68);
    assert.is(result.unit, "F");

    result = degree.get("K");
    assert.is(result.value, 293.15);
    assert.is(result.unit, "K");
});

ava("Fahrenheit to ...", (assert) => {
    const degree = new Degree(68, "F");
    let result;
    result = degree.get();
    assert.is(result.value, 68);
    assert.is(result.unit, "F");

    result = degree.get("C");
    assert.is(result.value, 20);
    assert.is(result.unit, "C");

    result = degree.get("K", 2);
    assert.is(result.value, 293.15);
    assert.is(result.unit, "K");
});

ava("Kelvin to ...", (assert) => {
    const degree = new Degree(300, "K");
    let result;
    result = degree.get();
    assert.is(result.value, 300);
    assert.is(result.unit, "K");

    result = degree.get("C", 2);
    assert.is(result.value, 26.85);
    assert.is(result.unit, "C");

    result = degree.get("F", 2);
    assert.is(result.value, 80.33);
    assert.is(result.unit, "F");
});


ava("Get when calculated", (assert) => {
    const degree = new Degree(20, "C");
    let result;

    result = degree.get("F");
    assert.is(result.value, 68);
    assert.is(result.unit, "F");

    result = degree.get("F");
    assert.is(result.value, 68);
    assert.is(result.unit, "F");
});
