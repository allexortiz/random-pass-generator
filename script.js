// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    alert("A strong password should contain a combination of uppercase letters, lowercase letters, numbers, special characters, and be at least 8 characters long but no more than 128.");
    var length = Number(prompt("Enter password length from 8 to 128 characters"));

    if (isNaN(length)) {
        alert("Invalid input");
        return;
    }
    if (length < 8 || length > 128) {
        alert("Invalid input");
        return;
    }

    var lowerChars = confirm("Would you like to include lowercase characters?");
    var upperChars = confirm("Would you like to include uppercase characters?");
    var numericChars = confirm("Would you like to include numeric characters?");
    var specialChars = confirm("Would you like to include special characters?");

    if (!lowerChars && !upperChars && !numericChars && !specialChars) {
        alert("Please click okay on at least one criteria.");
        return;
        
    }

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!@#$%^&*()_-+=<>?";

    var allChars = lowercase + uppercase + numeric + special
    var generatedPassword = "";

for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];
}

return generatedPassword;

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);