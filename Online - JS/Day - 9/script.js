// Pure Function
// same input same output

// let a = 12;
// // same input -> val
// // same output -> val + 2
// // no side effect on a
// function abcd(val) {
//   console.log(val + 2);
// }

// abcd(a);
// console.log(a);

// Impure Function
// same input but different output

// let a = 12;
// function abcd(val) {
//   a = Math.random() + val;
//   console.log(a);
// }
// abcd(a);

// - What are Arrays in JavaScript and how to Create an Array. // - Understand How to Accessing Elements in Array.

// - Functions on Arrays - [`push' , `pop' , `shift' , 'unshift" index0f' , 'array destructuring' , 'filter' , `some' , `map' reduce' , 'spread operator' , 'slice' , 'reverse' , `sort' , 'join' , 'toString' ]

// Arrays

// let arr = [98765, 567, 456, 123, 2345, 234];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// let arr = [];
// let arr2 = new Array();

// [`push' , `pop' , `shift' , 'unshift" index0f' , 'array destructuring' , 'filter' , `some' , `map' reduce' , 'spread operator' , 'slice' , 'reverse' , `sort' , 'join' , 'toString' ]

// let arr = [1, 2, 3, 4, 5, 6];

// arr.push(9);
// arr.pop();
// arr.shift();
// arr.unshift(1);

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.indexOf(3));

// let arr = [1, 2, 3, 4, 5, 6];

// let [a, , c] = arr;

// let arr = [1, 2, 3, 4];

// let arr2 = arr.filter((a) => {
//   return a<4; // all the members will go to the new arr if false then no one will go there
// });

// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = [...arr];

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//   console.log(val);
// });

// - Understanding What are Objects in JavaScript - [`key-value pair' ]

// let obj = {
//   name: "Garvit",
//   age: 18,
//   email: "garvit@mail.com",
// };

// let obj2 = new Object();
// delete obj.name;
