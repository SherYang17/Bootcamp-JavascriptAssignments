// Create two arrays of numbers called numbers1 and numbers
const numbers1 = [1, 2, 3, 4, 5, 6, 7 ,8, 9];
const numbers = [10, 11, 12, 13, 14, 15];

// Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
array1 = [...numbers1, ...numbers];
console.log("This is the spread operator method: " + array1); //output below
// [
//  1,  2,  3,  4,  5,  6,
//  7,  8,  9, 10, 11, 12,
// 13, 14, 15
//]
// or if in console, then itll just put it in 1 line 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15


// Define an arrow function called square that accepts a number as an argument and returns the square of the number.
let square = n => n * n;
console.log("This is arrow method: " + square(5));
// basically, 5 * 5, then return the value.

// Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
let squares = [5, 10, 15, 20];
let squaretwo = numbers.map((num) => {
  return num * num;
});
console.log("This is map method :" + squaretwo); // Output: [25, 100, 225, 400]


// Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
let isEven = (num) => {
    return num % 2 === 0;
  };

  // function isEven(num) {
  // return num % 2 === 0;
  // }
  // ngl, i just like the feel of typing out function more as opposed to arrow function

// Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
//const squares used from above
let evenSquares = squares.filter(num => num % 2 === 0).map(num => num * num);
console.log("This is filter method: " + evenSquares); // Output: [100, 400]


// Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
let [firstEvenSquare, secondEvenSquare] = evenSquares;
console.log("This is the first even square: " + firstEvenSquare); // Output : 100
console.log("This is the second even square: " + secondEvenSquare); // Output: 400



// Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`numbers array: ${numbers}${squaretwo}${evenSquares}${firstEvenSquare}${secondEvenSquare}`);
// output is numbers array: 10,11,12,13,14,1525,100,225,400100,400100400


// Spread syntax can be used when all elements from an object or array need to be included in a new array or object


// arrow function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// template literal https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#multi-line_strings