const alphabet = "abcdefghijklmnopqrstuvwxyz";
let ciphertextAlphabet = "";

export function caesarCipher(text, shift) {
  ciphertextAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

  return encryptText(text);
}

function encryptText(text) {
  let encryptedText = text.trim().split("");

  encryptedText.forEach((char, index) => {
    const isLetter = /[A-Za-z]/.test(char);
    const isUpperCase = /[A-Z]/.test(char);

    if (isLetter) {
      const indexOnAlphabet = alphabet
        .split("")
        .findIndex((letter) => letter.toLowerCase() === char.toLowerCase());

      const encryptedLetter = ciphertextAlphabet.split("")[indexOnAlphabet];

      encryptedText[index] = isUpperCase
        ? encryptedLetter.toUpperCase()
        : encryptedLetter;
    }
  });

  return encryptedText.join("");
}
