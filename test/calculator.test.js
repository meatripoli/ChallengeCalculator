const Calculator = require("../lib/calculatorClass.js");

test("Can instantiate Calculator instance", () => {
  const e = new Calculator();
  expect(typeof(e)).toBe("object");
});

test("Add 1 + 5000 and it equals 5001", () => {
  const e = new Calculator();
  e.runAddition("1,5000");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("1+5000 = 5001");
});

test("Add 20 and it equals 20", () => {
  const e = new Calculator();
  e.runAddition("20");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("20 = 20");
});

test("Add 4 + -3 and it equals 1", () => {
  const e = new Calculator();
  e.runAddition("4,-3");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("4+-3 = 1");
});

test("Add 5 + tytyt and it equals 5", () => {
  const e = new Calculator();
  e.runAddition("5,tytyt");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("5+0 = 5");
});

test("Don't allow more then 2 numbers 4,6,r", () => {
  const e = new Calculator();
  e.runAddition("4,6,r");
  expect(e.comment).toBe("ERROR: please only provide 2 numbers");
  expect(e.finalResultStr).toBe("");
});