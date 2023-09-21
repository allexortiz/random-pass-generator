// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    alert("A strong password must should a combination of uppercase letters, lowercase letters, numbers, and special characters and be at least 8 characters long but no more than 128.");
    var length = parseInt(prompt("Enter password length from 8 to 128 characters"));

    if (length < 8 || length > 128) {
        alert("Invalid length");
        return;
    }

    var lowerChars = confirm("Would you like to include lowercase characters?");
    var upperChars = confirm("Would you like to include uppercase characters?");
    var numericChars = confirm("Would you like to include numeric characters?");
    var specialChars = confirm("Would you like to include special characters?");

    if (!lowerChars || !upperChars || !numericChars || !specialChars) {
        alert("Please click okay on all criteria.");
        return;
        
    }

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!@#$%^&*()_-+=<>?";

    var allChars = lowercase + uppercase + numeric + special

for (var i = 0; i 






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