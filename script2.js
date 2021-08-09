// function writePassword() {
//     // var password = generatePassword();
//     // var passwordText = document.querySelector("#password");
  
//     // passwordText.value = password;
// //    var getLength = true;
// //     while (getLength) {
// //       var characterTy = prompt("Please enter your password length");
// //       if (characterTy >= 8 && characterTy <= 128) {
// //        console.log ("Accepted") 
// //         getLength = false;
// //       }
var getLength = true;
            while (getLength) {
              var characterTy = prompt("Please enter a password length 8 - 128 characters");
              if (characterTy >= 8 && characterTy <= 128) {
               console.log ("Accepted") 
                getLength = false;
              }
            }
            newFunction();

            function newFunction() {
              var getCharacters = true;
              while (getCharacters) {
                var characters = prompt("Please type accept if you agree to use previously selected character length and will select character type lowercase, uppercase, numeric, and/or special characters to create your password");
                if (characters === "accept") {
                  console.log("Password Created");
                  getCharacters = false;
                  alert("Please enter selection below for new password");
                }
            
              }
            }
            
function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
   }

   function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
 } 

 function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
 }

 function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

var answerEl = document.getElementById("answer");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate");

const randomFunc = {
    upper : getRandomUpperCase,
    lower : getRandomLowerCase,
    number : getRandomNumber,
    symbol : getRandomSymbol
};

//generate event
generateEl.addEventListener('click', () =>{
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

function generatePassword(upper, lower, number, symbol, length){
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    //console.log(typesCount);

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });


    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
}