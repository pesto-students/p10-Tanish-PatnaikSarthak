const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },
  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
};

module.exports = mathOperations;



// mathOperations.test.js
//main.test.js

const mathOperations = require("./index");

describe("Math Operations", () => {
  test("should return the correct sum of two numbers", () => {
    expect(mathOperations.sum(2, 3)).toBe(5);
  });

  test("should return the correct difference of two numbers", () => {
    expect(mathOperations.diff(5, 2)).toBe(3);
  });

  test("should return the correct product of two numbers", () => {
    expect(mathOperations.product(2, 3)).toBe(6);
  });
});

//package.json
{
    "dependencies": {
      "jest": "^29.5.0"
    },
    "scripts": {
      "test": "jest"
    }
  }