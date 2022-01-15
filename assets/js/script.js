
// Assignment code here
var generateBtn = document.querySelector("#generate");
// User input variables: 
var genNumber;
var genSymbol;
var upperCase;
var lowerCase;

// Declaration outside if statement to concatenated 
var choices = []

// Special characters 
genSymbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var genNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Alphabetical characters
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Upper case
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

// Function to generate password
function generatePassword() {
    // Determin length
    var enter = parseInt(prompt("Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        
        // Continues once user input is validated
        if (confirm("Will this contain numbers?")); {
            choices = choices.concat(genNumber);
        }
        if (confirm("Will this contain a special character?")); {
            choices = choices.concat(genSymbol);
        }
        if (confirm("Will this contain Uppercase letters?")); {
            choices = choices.concat (upperCase);
        }
        if (confirm("Will this contain Uppercase letters?")); {
            choices = choices.concat (lowerCase);
        }
        if (choices.length == 0) {
            alert("You must choose a criteria!");
        }}

  // empty array that will contain the new empty password
  var randomPassword = [];
  // This next line of code is the loop requiered for the generation of the password
  for (var i = 0; i < enter; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join(""); 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);