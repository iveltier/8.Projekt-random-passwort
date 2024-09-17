let button = document.getElementById("button");

button.onclick = function generate() {
  let passwordLength = document.getElementById("paslength").value;
  let includeLowercase = document.getElementById(
    "checklowercaseletters"
  ).checked;
  let includeUppercase = document.getElementById(
    "checkuppercaseletters"
  ).checked;
  let includeNumbers = document.getElementById("checknumbers").checked;
  let includeSymbols = document.getElementById("checksymbols").checked;

  const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  document.getElementById("result").textContent = `Your Password: ${password}`;
};
function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@+-*#,.%$<>/(){}_:;☭"; //chars short for characters

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(passwort length must be at least one)`;
  }
  if (allowedChars.length === 0) {
    return `(At least  1 set of character needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
