import { analyzeArray } from "./analyzeArray.js";

test("should analyze an array an return an object with the average, min and max and the length of the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("should analyze an array an return an object with the average, min and max and the length of the array", () => {
  expect(analyzeArray([1, 6, 3])).toEqual({
    average: 3.33,
    min: 1,
    max: 6,
    length: 3,
  });
});
