// const arr = [10, 20, 30, 40];
// const arr2 = arr;

// let arr = [10, 20, 30, 40];
// let arr2 = arr;

// var arr = [10, 20, 30, 40];
// var arr2 = arr;

// arr2.push(99);

// console.log(arr);

// ~-----~

// Best method to make a copy of an array is:-

// let arr = [10, 20, 30, 40];

// let arr2 = [...arr]; // This is the spread operator

// arr2.push(99);

// console.log(arr);
// console.log(arr2);

// ~-----~

// Destructuring of an array

// var arr = ["Anubhav", "Bixi", "Chandu", "Devendra", "Ekalavya"];

// var [a, b, c, d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ~---------~

// Import and export
// default import
// default export

import user from "./app.js";
import { msg } from "./app.js"; // Named import

console.log(user);
console.log(msg); 
