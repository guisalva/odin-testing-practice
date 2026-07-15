export function reverseString(text = "") {
  if (typeof text !== "string") throw new TypeError("Expected a string");

  const trimmedText = text.trim();

  return trimmedText.split("").reverse().join("");
}
