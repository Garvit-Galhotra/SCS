// - Introduction to Error Handling
// - Common types of errors in JavaScript - [`Syntax errors' , 'Runtime errors' , `Logical errors']
// - Understanding the Error object - [`message' , 'name' , `stack']
// - Handling exceptions using 'try-catch' , 'try-catch-finally'
// - How to Throw Errors in JavaScript
// - Error Handling in Asynchronous Code

// ~----------------------------------------------------~

// Syntax errors -> written mistake done by user in the program
// lt a = 12; ❌ this will give the syntax error

// ~----------------------------------------------------~

// Runtime errors -> this will give you the error when we run the program
// function abcd() {
//   let b = 12;
//   console.log(b.name.first);
// }

// abcd();

// ~----------------------------------------------------~

//Logical error -> the code should do something and it is doing something else
// function add(a, b) {
//   console.log(a - b);
// }

// add(8, 9);

// ~----------------------------------------------------~
// - Understanding the Error object - [`message' , 'name' , `stack']
// - Handling exceptions using 'try-catch' , 'try-catch-finally'
// ~----------------------------------------------------~

// try {
//   let a = 12;
//   console.log(a.age.name);
//   //   console.log(a);
// } catch (err) {
//   console.log(err.message);
//   console.log(err.name);
//   console.log(err.stack);
// } finally {
//   console.log("finally worked");
// }

// ~----------------------------------------------------~

// - How to Throw Errors in JavaScript

try {
  let a = 12;
  console.log(a.name.first);
} catch (err) {
  throw          new Error(
    "Something went wrong from our side please wait for some time..."
  );
}
