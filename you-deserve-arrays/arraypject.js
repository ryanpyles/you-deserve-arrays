const prompt = require('prompt-sync')({sigint:true});
userArray = JSON.parse(prompt('Enter an array: '));
let getFirstItemFrom = userArray[0];
console.log(userArray);
console.log(`The first item of your array is ${getFirstItemFrom}`);







// Write a program, getFirstItemFrom.js that prompts the user for an array, then logs out the first item in that array



// Write a program, getLastItemFrom.js that prompts the user for an array, then logs out the last item from that array

// Write a program getIndex3.js that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index

// isLongList.js: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10

// firstItemIsNumber.js: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number

// secondCharOfThirdString.js: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead




// let getIndex3 = Array(prompt('Enter an array of at least 4 indeces long'));
// if(getIndex3.length != 3){
// console.log(getIndex3.length - 1)
