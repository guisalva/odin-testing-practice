import { reverseString } from "./reverseString.js";

test("should revert the order of a string", () => {
  expect(reverseString("bread")).toBe("daerb");
});

test("should revert the order of a string", () => {
  expect(reverseString("water")).toBe("retaw");
});

test("should revert the order of a string even the string contains spaces", () => {
  expect(reverseString(" water  ")).toBe("retaw");
});

test("should revert the order of a phrase", () => {
  expect(reverseString("bread and butter")).toBe("rettub dna daerb");
});

test("string should keep the same if it has a single letter", () => {
  expect(reverseString("d")).toBe("d");
});

test("should return an empty string when given an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("should return an empty string when no argument is provided", () => {
  expect(reverseString()).toBe("");
});

test("should throw an error if other type of data is given instead a string", () => {
  expect(() => reverseString(99)).toThrow(TypeError);
});
