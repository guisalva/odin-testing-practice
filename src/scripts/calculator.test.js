import { calculator } from "./calculator";

test("should add two numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("should subtract two numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("should divide two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("should multiply two numbers", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});
