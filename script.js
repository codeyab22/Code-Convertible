  // Adia's Assignment Code
//This is the part of puesdocode.

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//This is an console.log to upload the button
console.log("script loaded");
//Start and define with user variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values:
// Arrays: Special characters
var character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numeric characters
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alpha2 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Space is for the Uppercase conversion
var space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// Created function generatePassword
function generatePassword() {
  var enter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  // First if statement for user validation
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    var enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // Continues once user input is validated
    confirmNumber = confirm("Will this include numbers?");
    confirmCharacter = confirm("Will this include special characters?");
    confirmUppercase = confirm("Will this include Uppercase letters?");
    confirmLowercase = confirm("Will this include Lowercase letters?");
  }
  // Else if for 4 negative choices
  if (
    !confirmCharacter &&
    !confirmNumber &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    var choices = alert("You must choose a criteria!");
  }
  // First if statement determines choices by user's prompts
  //  4 positive options
  else if (
    confirmCharacter &&
    confirmNumber &&
    confirmUppercase &&
    confirmLowercase
  ) {
    var character = [ ]
    var choices = character.concat(num, alpha);
  }
  // Else if for 3 positive choices
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
   var choices = character.concat(num, alpha2);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    var choices = character.concat(num, alpha);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    var choices = character.concat(alpha, alpha2);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    var choices = num.concat(alpha, alpha2);
  }
  // Else if for 2 positive choices
  else if (confirmCharacter && confirmNumber) {
    var choices = character.concat(num);
  } else if (confirmCharacter && confirmLowercase) {
    var choices = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
    var choices = character.concat(alpha2);
  } else if (confirmLowercase && confirmNumber) {
    var choices = alpha.concat(num);
  } else if (confirmLowercase && confirmUppercase) {
    var choices = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
    var choices = num.concat(alpha2);
  }
  // Else if for 1 positive choices
  else if (confirmCharacter) {
    var choices = character;
  } else if (confirmNumber) {
    var choices = num;
  } else if (confirmLowercase) {
    var choices = alpha;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
    var choices = space.concat(alpha2);
  }
  // password variable is an array placeholder for user generated amount of length
  var password = [];
  // Start random selection variables:
  // Random selection for all variables:
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  return password.join("");
}
// This puts the password value into the textbox
