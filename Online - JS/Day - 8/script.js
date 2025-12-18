// - Understanding Function in JavaScript and why its widely used - [`parameters' , `arguments' , `rest parameters' `hoisting' , 'Variable Hoisting' , 'Function Hoisting' ]

// function abcd(age, name ) { // this is parameter
//   console.log(`${arguments[1]} is ${arguments[0]} years old.`);
//   console.log(`${name} is ${age} years old.`);
// }
// abcd(18, "Garvit"); // this is arguments

//rest paramters

// function abcd(a, b, ...arg) {
//   console.log(`This is a: ${a}`);
//   console.log(`This is b: ${b}`);
//   console.log(`This is ...arg: ${arg}`);
// }
// abcd(1, 2, 3, 4, 5, 6);

// hoisting, variable hoisting and Function hoisting

// add(4, 5);

// function add(a, b) {
//   console.log(a + b);
// }
// add(1, 2);

// - Parameters in JavaScript - [`required' `destructured' , `rest' , 'default' ]

// function abcd({ name, age }) {
//   console.log(name, age);
// }
// agar aapne parameter banaaye and aapne unme arguments nahi bheje to fir wo value parameter ki undefined ho jaayegi

// abcd({ name: "Garvit", age: 18 });

// function abcd(...val) {
//   console.log(val);
// }
// abcd(1, 2, 3, 4, 5, 6);

//default parameter

// function abcd(a = 0, b = 0, c = 0) {
//   console.log(a, b, c);
// }
// abcd(1, 2);

// - Arguments in JavaScript - ['positional' , 'default' spread` ]

//Positional arguments

// function abcd(a, b, c, d) {
//   console.log(a, b, c, d);
// }
// abcd(1, 2, 3, 4);

// function abcd(a, b, c, d) {
//   console.log(a, b, c, d);
// }
// let arr = [1, 2, 3, 4];

// abcd(...arr);

// - 'Classic Function', `Nested Function' (function within function), `Scope Chain' in Javascript.

// Nested Function

// function abcd() {
//   function defg() {
//     console.log("in defg");
//   }
//   defg();
//   console.log("in abcd");
// }
// abcd();

// scope chain

// let a = 12; // global scope
// function abcd() {
//   let b = 13; // local scope
//   function defg() {
//     console.log(b);
//   }
//   defg();
// }
// abcd();
// console.log(a);

// - Understanding Immediately Invoked Function Expression (IIFE).
// This is used to make the private variable.

// (function () {
//   console.log("hello");
// })();

// - More Functions in JavaScript - [ Arrow Fat Arrow' , `Anonymous , `Higher Order' , 'Callback' , 'First Class' `Pure Function' , 'Impure Function ]

// let fun = () => {
//   console.log("this is fat arrow function");
// };

// fun();

//Anonymous  function

// function(){}

// higher order function
// if it will return another function or it can accept a function as a parameter

// function abcd() {
//   return function () {
//     console.log("heyeheyheyheyheyheyheyheyhey");
//   };
// }

// callback
// function abcd(a) {}

// abcd(function () {}); // the function inside here is called callback

// first class function

// function abcd(a, b) {}

// abcd(function () {}, 2);

