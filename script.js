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

  function generatePassword()