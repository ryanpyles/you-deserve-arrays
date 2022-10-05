// firstItemIsNumber.js: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number

const prompt = require('prompt-sync')({sigint:true});
userArray = JSON.parse(prompt('Enter an array: '));

console.log(userArray[0]);

if (typeof userArray[0] === "number"){
    console.log(true);
} else {
    console.log(false);
};
