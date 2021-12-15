// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const arrayFromLowToHighNum = (low, high) => {
  const array = [];
  for (let i =low; i <= high; i++) {
    array.push(i);
  }
  return array;
};


const UPPERCASE_CODES = arrayFromLowToHighNum(65, 90);
const LOWERCASE_CODES = arrayFromLowToHighNum(97,122);
const NUMBER_CODES = arrayFromLowToHighNum(48,57);
const SYMBOL_CODES = arrayFromLowToHighNum(33, 47);
  .concat(arrayFromLowToHighNum(58, 64))
  .concat(arrayFromLowToHighNum(91, 96))
  .concat(arrayFromLowToHighNum(123, 126));

  //choose how long your character length will be
  function generatePassword() {
    var passwordLength = +window.prompt("Choose a password length between 5 and 128")
    if (passwordLength < 8 || passwordLength > 128) {
      windows.alert("You did not enter a correct/valid number, please try again.");
      return "";
    }

  }

  // Password Variables
  var lowerCase = window.confirm("Would you like to use lower case characters?");
  var upperCase = window.confirm("Would you like to use upper case characters?");
  var numbers = window.confirm("Would you like to use numbers?");
  var specialcharacters = windows.confirm("Would you like to use special characters?");


  let charCodes = [];
  if (lowercase) {
    charCodes = charCodes.concat(LOWERCASE_CODES);
  }
  if (upperCase) {
    charCodes = charCodes.concat(UPPERCASE_CODES);
  }
  if (specialcharacters) {
    charCodes = charCodes.concat(SYMBOL_CODES);
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

  function writePasword() {
    const password = generatePassword();
    document.getElememtById("password").value = password;
  }

  document.getElememtById("#generate")addEventListener("click", writePassword);

