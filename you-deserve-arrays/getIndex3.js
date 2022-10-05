// Write a program getIndex3.js that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index
const prompt = require('prompt-sync')({sigint:true});
userArray = JSON.parse(prompt('Enter an array: '));

console.log(userArray);

if(userArray.length >= 3){
    console.log(`The item at the 3rd index  of the array is ${userArray[3]}.`);
} else {
    console.log(`The value of the last index of the array is ${userArray[userArray.length - 1]}`);
}
