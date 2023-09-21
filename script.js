// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var length = parseInt(prompt("Enter password length from 8 to 128 characters"));
    
    if (length < 8 || length > 128) {
      alert("Invalid length");
      return;
    }

    var lowerChars = ""










}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



























// if (length < 8) {
//     alert("Password must be greater than 8 characters!")
//   } else if (length > 128) {
//     alert("Password must be less than 129!")
//     return
//   }