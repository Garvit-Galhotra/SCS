// 1.

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2.

// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 4.

// for (let i = 0; i < 5; i++) {
//   console.log("YES");
// }

// 5.

// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even -> ${i}`);
//   } else {
//     console.log(`Odd -> ${i}`);
//   }
// }

// 6.

// let userNumber = +prompt("Enter any positve or negative number");

// if (userNumber > 0) {
//   console.log(`${userNumber} is Positive`);
// } else if (userNumber < 0) {
//   console.log(`${userNumber} is Negative`);
// } else if (userNumber === 0) {
//   console.log(`Neither positive nor negative`);
// } else {
//   console.log(`Please enter the number`);
// }

// 7.

// let age = prompt("enter your age");
// console.log(`your age is ${age}`);
// if (age === null) {
//   console.error("You Pressed cancel.");
// } else {
//   if (age.trim() === "") {
//     console.warn("Write something..");
//   } else {
//     age = Number(age.trim());
//     if (isNaN(age)) {
//       console.error("Write a number");
//     } else {
//       if (age >= 18 && age < 101 && age >= 0) {
//         console.log("You are eligible.");
//       } else if (age >= 101) {
//         console.log("How are u alive... well good job");
//       } else {
//         console.log("You are not eligible.");
//       }
//     }
//   }
// }

// 8.

// for (let i = 1; i < 11; i++) {
//   console.log(` 5 x ${i} = ${5 * i}`);
// }

// 9.

// let count = 0;
// for (let i = 1; i < 16; i++) {
//   if (i > 8) {
//     ++count;
//     console.log(i);
//   }
// }

// console.log(count);

// 10.

// let password = "123";
// let user_pass = prompt("password pizz..");

// if (user_pass === null) {
//   console.error("you cancelled it.");
// } else if (user_pass === password) {
//   console.log("matched");
// } else {
//   console.log(" Not Matched");
// }

// 11.

// let pass = "123";
// let password = prompt("Enter you password..");
// let attempt = 0;
// attempt++;
// let account = false;

// if (pass === password) account = true;

// while (pass !== password) {
//   if (attempt === 3) {
//     console.error("account blocked");
//     break;
//   } else {
//     password = prompt("Enter you password..");
//     if (pass === password) account = true;
//     attempt++;
//   }
// }

// if (account) console.log("account opened");

// ~~---------------------------------------------------------------------~~

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let pass = "123";
// let attempt = 0;
// let numberOfAttempt = 3
// while (true) {
//   let password = prompt("Enter you password");
//   attempt++;
//   if (pass === password && attempt < numberOfAttempt) {
//     console.log("Welcome, User");
//     break;
//   } else {
//     if (attempt === numberOfAttempt) {
//       console.log("Account locked");
//       break;
//     }
//   }
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let yesCount = 0;

// while (true) {
//   let words = prompt("Enter words: ");
//   if (words === null) {
//     console.error("you have cancelled it.");
//     break;
//   } else if (words.trim().toLowerCase() === "stop") {
//     console.log(yesCount);
//     break;
//   } else if (words.trim().toLowerCase() === "yes") {
//     yesCount++;
//   }
// }

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// let count = 0;

// for (let i = 1; i < 51; i++) {
//   if (i % 7 === 0) {
//     count++;
//   }
// }
// console.log(count);

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let count = 0;

// for (let i = 1; i < 31; i++) {
//   if (i % 2 !== 0) {
//     count += i;
//   }
// }
// console.log(count);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// while (true) {
//   let number = +prompt("Enter an even number: ");
//   if (number % 2 === 0) {
//     console.log(number);
//     break;
//   }
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let firstNumber = prompt("Enter first number");
// let secondNumber = prompt("Enter second number");

// if (firstNumber === null || secondNumber === null) {
//   console.error("You cancelled it");
// } else {
//   firstNumber = Number(firstNumber.trim());
//   secondNumber = Number(secondNumber.trim());
//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     console.error("Enter a number");
//   } else {
//     if (firstNumber > secondNumber) {
//       console.error("Second number can't be greator than First number.");
//     } else if (firstNumber === secondNumber - 1) {
//       console.warn("There are no number in between them");
//     } else {
//       for (let i = firstNumber + 1; i < secondNumber; i++) {
//         console.log(i);
//       }
//     }
//   }
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for (let i = 1; i < 21; i++) {
//   if (i % 2 !== 0) {
//     count++;
//     if (count < 4) {
//       console.log(i);
//     }
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let evenCount = 0;
// let count = 0;
// while (count < 5) {
//   let userNumber = prompt("Enter Number: ");
//   count++;
//   if (userNumber === null) {
//     console.error("You cancelled it.");
//   } else {
//     if (userNumber.trim() === "") {
//       console.error("Enter a number");
//     } else {
//       userNumber = Number(userNumber);
//       if (isNaN(userNumber)) {
//         console.error("Enter the numberrrrrrrr!!!");
//       } else {
//         if (userNumber > 0) {
//           evenCount++;
//         }
//       }
//     }
//   }
// }

// console.log(`This is the even number count ${evenCount}`);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let attempt = 3;
// let balance = 1000;
// while (true) {
//   let amount = prompt("enter the amount: ");
//   attempt--;
//   amount = Number(amount);
//   balance -= amount;
//   if (balance < 0) {
//     console.error("Insufficient balance");
//     break;
//   } else {
//     if (attempt === 0) {
//       console.warn("You ran out of attempt for the day");
//       break;
//     }
//   }
// }
