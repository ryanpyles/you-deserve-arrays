const prompt = require('prompt-sync')({sigint:true});
userArray = JSON.parse(prompt('Enter an array: '));
let getFirstItemFrom = userArray[0];
console.log(userArray);
console.log(`The first item of your array is ${getFirstItemFrom}`);









// Write a program, getFirstItemFrom.js that prompts the user for an array, then logs out the first item in that array













// let getIndex3 = Array(prompt('Enter an array of at least 4 indeces long'));
// if(getIndex3.length != 3){
// console.log(getIndex3.length - 1)
