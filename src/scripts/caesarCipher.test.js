import { caesarCipher } from "./caesarCipher.js";

test("should return encrypted text", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test('should return "abc" if "xyz" is given', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("should preserve the uppercase and lowercase characters", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("should not change Punctuation, spaces, and other non-alphabetical characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
