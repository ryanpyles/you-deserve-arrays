// secondCharOfThirdString.js: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead
const prompt = require('prompt-sync')({sigint:true});
userArray = JSON.parse(prompt('Enter an array: '));

if(userArray[2] !== undefine && typeof userArray[2] === 'string'){
    
}