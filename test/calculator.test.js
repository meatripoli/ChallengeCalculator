const Calculator = require("../lib/calculatorClass.js");

test("Can instantiate Calculator instance", () => {
  const e = new Calculator();
  expect(typeof(e)).toBe("object");
});

test("Don't allow negative numbers", () => {
  const e = new Calculator();
  e.runAddition("//,\n54,-3,-2,0,ttt,5,23");
  expect(e.comment).toBe("ERROR: calculator does not accept these negative numbers "+e.negativeNumberArray);
  expect(e.finalResultStr).toBe("");
});

test("Don't allow numbers bigger then 1000", () => {
  const e = new Calculator();
  e.runAddition("//,\n2,1001,6");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("2+0+6 = 8");
});

test("Add 2 + 5 and it equals 7", () => {
  const e = new Calculator();
  e.runAddition("//#\n2#5");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("2+5 = 7");
});

test("Add 2 + ff + 100 and it equals 102", () => {
  const e = new Calculator();
  e.runAddition("//,\n2,ff,100");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("2+0+100 = 102");
});

test("Add 1 + 5000 and it equals 5001", () => {
  const e = new Calculator();
  e.runAddition("//,\n1,5000");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("1+0 = 1");
});

test("Add 20 and it equals 20", () => {
  const e = new Calculator();
  e.runAddition("//,\n20");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("20 = 20");
});

test("Don't allow negative numbers", () => {
  const e = new Calculator();
  e.runAddition("//,\n4,-3");
  expect(e.comment).toBe("ERROR: calculator does not accept these negative numbers "+e.negativeNumberArray);
  expect(e.finalResultStr).toBe("");
});

test("Add 5 + tytyt and it equals 5", () => {
  const e = new Calculator();
  e.runAddition("//,\n5,tytyt");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("5+0 = 5");
});

test("Add 4,6,r and it equals 10", () => {
  const e = new Calculator();
  e.runAddition("//,\n4,6,r");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("4+6+0 = 10");
});
//
test("Add 1+2+3+4+5+6+7+8+9+10+11+12 and it equals 78", () => {
  const e = new Calculator();
  e.runAddition("//,\n1,2,3,4,5,6,7,8,9,10,11,12");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("1+2+3+4+5+6+7+8+9+10+11+12 = 78");
});

test("Add 1\n2,3,4r9r and it equals 6", () => {
  const e = new Calculator();
  e.runAddition("//,\n1,2,3,4r9r");
  expect(e.comment).toBe("Success!!!");
  expect(e.finalResultStr).toBe("1+2+3+0 = 6");
});