// synchronous approach - line by line work
// asynchronous approach - start doing the next work while the 1 work is taking a long process

// callback - it is a function which do not work immediatly
// it will work when a particular work will be completed



// for (let i = 1; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }



// function abcd(fn) {
//   fn(function (fn3) {
//     fn3(function () {
//       console.log("fn4");
//     });
//     console.log("fn2");
//   });
// }

// abcd(function (fn2) {
//   fn2(function (fn4) {
//     fn4(function () {});
//     console.log("fn3");
//   });
//   console.log("fn");
// });


