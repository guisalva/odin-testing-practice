export function capitalize(word = "") {
  if (typeof word !== "string") {
    throw new TypeError("Expected a string");
  }

  if (!word.trim()) return "";

  const trimmedWord = word.trim();

  return trimmedWord.at(0).toUpperCase() + trimmedWord.slice(1);
}
