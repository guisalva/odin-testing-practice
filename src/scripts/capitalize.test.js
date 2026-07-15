import { capitalize } from "./capitalize.js";

test("should capitalize the first letter of a word", () => {
  expect(capitalize("bread")).toBe("Bread");
});

test("should capitalize the first letter of a word, even the word contains spaces", () => {
  expect(capitalize("  bread ")).toBe("Bread");
});

test("should capitalize only the first letter of a phrase", () => {
  expect(capitalize("bread and butter")).toBe("Bread and butter");
});

test("should capitalize a single character", () => {
  expect(capitalize("b")).toBe("B");
});

test("should return an empty string when given an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("should return an empty string when given a string with spaces", () => {
  expect(capitalize("  ")).toBe("");
});

test("should return an empty string when parameter is not given", () => {
  expect(capitalize()).toBe("");
});

test("should throw an error if a number is given instead a string", () => {
  expect(() => capitalize(99)).toThrow();
});

test("should throw an error if other type of data is given instead a string", () => {
  expect(() => capitalize(["one", "two", "three"])).toThrow();
});
