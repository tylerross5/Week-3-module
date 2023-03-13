// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var numbers= "123456789";
var lowercaseletters="abcdefghijklmnopqrstuvwxyz";
var uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialcharacter="!@#$%^&*()";
var characters= numbers + lowercaseletters + uppercaseletters + specialcharacter;
retval="";


passwordlength = prompt("How long would you like your password to be, choose between 8 and 128.")
  if (passwordlength < 8 || passwordlength> 128) {
    return ("Pick a correct number")
  }
else {
  alert("Your password is going to be " + passwordlength + " long")
}

lowercase= confirm("Would you like to have lowercase letters in your password")
if (lowercase) {
  var lowercaseletters= alert("You have selected lowercase letters")
}
else {alert ("You have not selected lowercase letters")
}

uppercase= confirm("Would you like to have uppercase letters in your password")
if (uppercase) {
  var uppercaseletters= alert("You have selected uppercase letters")
}
else {alert ("You have not selected uppercase letters")
}
Characters= confirm("Would you like to have special characters in your password")
if (Characters) {
  var specialcharacter= alert("You have selected special characters")
}
else {alert ("You have not selected special characters")
}







for (let i = 0; i < passwordlength; i++) {
  let rng =[Math.floor(Math.random() * characters.length)];
  retval = retval + characters[rng];
}
return retval;




}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
