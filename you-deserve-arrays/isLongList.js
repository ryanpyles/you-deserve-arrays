// isLongList.js: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
const prompt = require('prompt-sync')({sigint:true});
userArray = JSON.parse(prompt('Enter an array: '));
console.log(userArray);
if(userArray.length >= 10){
    console.log(true, );
} else {
    console.log(false, "User array is less than ten items");
};