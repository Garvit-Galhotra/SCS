// Write a function sayHello() that prints "Hello JavaScript".  I

// function sayHello() {
//   console.log("Hello Java Script");
// }

// sayHello();
// Create a function add(a, b) that .returns their .sum.and log . the result.

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

// Write a function with a default parameter name = "Guest" that prints "Hi <name>".

// function def(name = "Guest") {
//   console.log(`Hi ${name}`);
// }

// def();
// def("Garvit");

// Use rest parameters to make a function that adds unlimited numbers.

// function addUnlmtd(...numbers) {
//   let count = 0;
//   numbers.forEach(function (val) {
//     count += val;
//   });
//   return count;
// }
// console.log(addUnlmtd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// or

// function addUnlmtd(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(addUnlmtd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// or

// function addUnlmtd(...numbers) {
//   let ans = numbers.reduce(function (acc, val) { // 0 , 1|1,2|3,3|...
//     return acc + val; // this is returned to acc->  0+1 |1+2|3+3|...
//   }, 0); // acc default value is 0
//   console.log(ans);
// }
// addUnlmtd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Create an IIFE that prints "I run instantly!".

// (function () {
//   console.log("I run instantly!");
// })();

//  Make a nested function where the inner one prints a variable from the outer one.

// function parent() {
//   let a = 19;
//   function child(a) {
//     console.log(a);
//   }
//   child(a);
// }
// parent();

// Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let fruitBasket = ["apple", "orange", "grapes", "papaya", "mango"];
// fruitBasket.push("pineapple");
// fruitBasket.shift();
// console.log(fruitBasket);

// Use a for loop to print all elements of an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Create an object person with keys name, age, and city, and print each key's value.

// let obj = {
//   name: "Garvit",
//   age: 19,
//   city: "Sri Ganganagar",
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }

// Use setTimeout() to log "Time's up!" after 2 seconds.

// setTimeout(function () {
//   console.log("Time's up ");
// }, 2000);

// Write a higher-order function runTwice(fn) that takes another function and executes it two times.

// function runTwice(fn) {
//   fn();
//   fn();
// }

// runTwice(function () {
//   console.log("one, two");
// });

// Create one pure function that always returns the same output for given input, and one impure function using a global variable.

// function pureFunction(a, b) {
//   console.log(a + b);
// }

// pureFunction(1, 2);
// pureFunction(1, 2);

// let global = 19;

// function impureFunction(a, b) {
//   global++;
//   console.log(a - global);
// }
// impureFunction(1, 2);

// Write a function that uses object destructuring inside parameters to extract and print name and age.

// function abcd({ name, age }) {
//   console.log(obj.name);
//   console.log(obj.age);
//   console.log(name);
//   console.log(age);
// }

// abcd({ name: "garvit", age: 19 });

// Demonstrate the difference between normal function and arrow function when used as object methods (this issue).

// no idea what this was

// Given an array of numbers, use map() to create a new array where each number is squared.

// let arr = [1, 2, 3, 4, 5];

// let newarr = arr.map(function (val) {
//   return val * val;
// });
// console.log(newarr);

// Use filter() to get only even numbers from an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// let newarr = arr.filter(function (val) {
//   return val % 2 === 0;
// });

// console.log(newarr);

// Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000].

// let salary = [1000, 2000, 3000];

// let newsalary = salary.reduce(function (acc, val) {
//   return acc+val;
// }, 0);
// console.log(newsalary);

// Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).

// let names = ["garvit", "gavi", "sa", "re", "ga", "ma", "doll", "paul"];

// let namess = names.some(function (val) {
//   return val.length > 3;
// });

// let namess = names.every(function (val) {
//   return val.length > 3;
// });

// console.log(namess);

// Create an object user and test the behavior of Object. freeze() and Object.seal() by adding/changing keys.

// let obj = { name: "Garvit", age: 19, mail: "garvit@gmail.com" };
// Object.freeze(obj);
// Object.seal(obj);

// obj.age = 12;
// obj.name = "Garvita";
// obj.social = "gavi_1905";

// Create a nested object (user address - city) and access the city name inside it.

