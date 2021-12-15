// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click,", writePassword);

const arrayFromLowToHighNum = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const UPPERCASE_CODES = arrayFromLowToHighNum(65, 90);
const LOWERCASE_CODES = arrayFromLowToHighNum(97, 122);
const NUMBER_CODES = arrayFromLowToHighNum(48, 57);
const SYMBOLS_CODES = arrayFromLowToHighNum(33, 47)
  .concat(arrayFromLowToHighNum(58, 64))
  .concat(arrayFromLowToHighNum(91, 96))
  .concat(arrayFromLowToHighNum(123, 126));

// Choose how long your character length
function generatePassword() {
  var passwordLength = +window.prompt("Choose a password length between 8 & 128")
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You did not enter a valid number, please try again.");
    return "";
  }
  // Password variables 
  var lowerCase = window.confirm("Would you like to use lower case characters?");
  var upperCase = window.confirm("Would you like to use upper case characters?");
  var numbers = window.confirm("Would you like to use numbers?");
  var specialCharacters = window.confirm("Would you like special characters?");


  let charCodes = [];
  if (lowerCase) {
    charCodes = charCodes.concat(LOWERCASE_CODES);
  }
  if (upperCase) {
    charCodes = charCodes.concat(UPPERCASE_CODES);
  }
  if (specialCharacters) {
    charCodes = charCodes.concat(SYMBOLS_CODES);
  }
  if (numbers) {
    charCodes = charCodes.concat(NUMBER_CODES);
  }
  if (charCodes.length === 0) {
    alert("Please choose at least one set of characters");
    return ""
  }
  const passwordCharacters = Array.from({length: passwordLength}, () => {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    return String.fromCharCode(characterCode);
  })
  return passwordCharacters.join('');
}

// Parse password to #password input
function writePassword() {
  const password = generatePassword();
  document.getElementById("password").value = password;
}

document.getElementById("#generate").addEventListener("click", writePassword);
