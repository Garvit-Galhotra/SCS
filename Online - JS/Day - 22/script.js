// ### 18. Object Oriented Concepts in JavaScripts
// - Introduction to OOPS in JavaScript
// - Understanding `classes' and `objects' in JavaScript
// - Understanding `Constructor' and `Prototypes'
// - [`this keyword' , 'call' , 'apply' , `bind` ]
// - More Topics in OOPS
// - [`class expression' `hoisting' , 'inheritence' , `getter & setter']

// oops - object oriented programming

// modular -> spliting of code
// scalable -> number of users can be anyone
// managable -> manage the code
// promise -> easy to fix gurantee

//Object

// let user1 = {
//   name: "Garvit",
//   age: 19,
//   email: "awdefgttrsefa",
//   address: "awdasdgawhtrdx",
// };
// let user2 = {
//   name: "ajwbdi",
//   age: 1172,
//   email: "awdefgttrsefa",
//   address: "awdasdgawhtrdx",
// };

// classes
// blueprint

// class - saancha
// constructor - automatic on function

// class Remote {
//   constructor(product, price, color) {
//     this.product = product;
//     this.price = price;
//     this.color = color;
//   }
//   powerOn() {
//     console.log("The machine is now on.");
//   }

//   powerOff() {
//     console.log("The machine is now off.");
//   }
// }

// let remote = new Remote("Lenovo", 1200, "black");

// class biscuitMaker {
//   constructor(product, price) {
//     this.companyName = product;
//     this.price = price;
//   }
// }

// let parleG = new biscuitMaker("parleG", 5);
// let oreo = new biscuitMaker("oreo", 10);
// let sunshine = new biscuitMaker("sunshine", 5);
// let fifty = new biscuitMaker("50/50", 10);

// `oreo` is an instance

class Human {
  constructor() {
    this.name = "garvit";
    this.age = 19;
  }
}

Human.prototype.sanslo = function{
    
};

let h1 = new Human();
let h2 = new Human();
