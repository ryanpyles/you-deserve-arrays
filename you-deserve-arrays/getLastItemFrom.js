// Write a program, getLastItemFrom.js that prompts the user for an array, then logs out the last item from that array
const prompt = require('prompt-sync')({sigint:true});
userArray = JSON.parse(prompt('Enter an array: '));
getLastItemFrom = userArray[userArray.length - 1];
console.log(`the last item from index is ${getLastItemFrom}`);
