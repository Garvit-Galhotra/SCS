// let animal = class {
//   constructor() {
//     this.name = "dodo";
//     this.breed = "dog";
//   }
// };

// let a1 = new animal();

// class Animal {
//   constructor(hand = 2, leg = 2) {
//     this.hands = hand;
//     this.legs = leg;
//   }
//   breed() {}
// }

// class Kedka extends Animal {
//   constructor() {
//     super();
//     this.hands = 0;
//     this.legs = 8;
//   }
//   susu() {}
// }

// let k1 = new Kedka();

// class Animal {
//   constructor() {
//     this._age = 12;
//   }

//   get age() {
//     return this._age;
//   }
//   set age(val) {
//     if (val < 0) {
//       console.error("Not possible");
//       return;
//     }
//     this._age = val;
//     return this._age;
//   }
// }
// let a1 = new Animal();
// a1.age = -2;

// ~----------------------------------------------------------------------------------~

// Create a user object that stores name and email and has a login method which prints "User logged in".

// let user = {
//   name: "garvit",
//   email: "gg@gmail.com",
//   login: function () {
//     console.log("logged in ");
//   },
// };
// user.login();

// Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// class User {
//   constructor(name, mail) {
//     this.name = name;
//     this.email = mail;
//   }
// }

// User.prototype.login = function () {
//   console.log("Logged in ");
// };

// let user1 = new User("Garvit", "user1@gg");
// let user2 = new User("user2", "user2@gg");
// let user3 = new User("user3", "user3@gg");
// let user4 = new User("user4", "user4@gg");
// let user5 = new User("user4", "user5@gg");

// Create a product object that stores name and price and has a method which returns the final price after discount.

// let product = {
//   name: "garvit",
//   price: 2100,
//   discount: function () {
//     return this.price - 200;
//   },
// };

// console.log(product.discount());

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   drive() {
//     console.log(this.brand + "-" + this.speed);
//   }
// }

// let c1 = new Car("Hyundai", 180);
// let c2 = new Car("Maruti", 170);

// Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// SECTION 3: Constructor and this keyword

// Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

// class Student {
//   constructor(name, RN) {
//     this.name = name;
//     this.rollNumber = RN;
//   }
//   introduce() {
//     console.log(this.name + "-" + this.rollNumber);
//   }
// }

// let st1 = new Student("Garvit", 9013768);

// Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// let obj = {
//   sayName: function () {
//     console.log(this);
//   },
//   sayArrowName: () => {
//     console.log(this);
//   },
// };

// SECTION 4: Constructor Functions and Prototypes

// Create a User constructor function (do not use class syntax).
// Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.
// The purpose here is to understand how prototypes help share behaviour efficiently.

// function User() {
//   this.name = "garvit";
//   this.login = function () {
//     console.log("Logged in");
//   };
// }

// User.prototype.logging = function () {
//   console.log("logging in from prototype");
// };

// let an1 = new User();

// function abcd() {
//   console.log(this.name);
// }

// let obj = {
//   name: "garvit",
// };

// let a1 = abcd.call(obj);
// let a1 = abcd.apply(obj);
// let a1 = abcd.bind(obj);
// a1();
