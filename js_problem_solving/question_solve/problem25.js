// - Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
// input Always-Look-on-the-Bright-Side-of-Life, shift = 5
// output Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj

const originalMessage = "Always-Look-on-the-Bright-Side-of-Life";
const shiftAmount = 5;

function caesarCipher(text, shift) {
  return text
  .split('')
  .map(char => {
    if (char.match(/[a-zA-Z]/)) {
      const baseCode = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      const charCode = char.charCodeAt(0) - baseCode;
      const shiftedCharCode = (charCode + shift) % 26;
      const shiftedChar = String.fromCharCode(baseCode + shiftedCharCode);
      return char.toLowerCase() === char ? shiftedChar : shiftedChar.toUpperCase();
    } else {
      return char;
    };
  })
  .join('');
}

const encryptedMessage = caesarCipher(originalMessage, shiftAmount);

console.log(`Original: ${originalMessage}`);
console.log(`Encrypted: ${encryptedMessage}`);
