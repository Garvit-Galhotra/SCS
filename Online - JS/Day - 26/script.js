// callback -> it is a function which will run when the word is done !!

// function goToInsta(username, cb) {
//   // logic -> to be learned in backend development
//   console.log("fetching data in 2 sec...")
//   setTimeout(() => {
//     cb(username);
//   }, 2000);
// }

// goToInsta("Garvit", function (username) {
//   console.log(username);
// });

// EXERCISE 1 (VERY EASY - warming up)
// Ek function banao afterDelay
// Requirements:
// Ye function 2 cheezein lega:
// time (milliseconds)
// callback function
// Given time ke baad callback call kare /
// Callback ke andar "Callback executed" print hona chahiye
// Use case socho:
// "2 second baad ek kaam karna hai"
// Goal:
// Samajhna ki callback delay ke baad kaise execute hota hai
// Ye setTimeout + callback connection hai

// function afterDelay(time, cb) {
//   console.log("function is executing ...");
//   setTimeout(() => {
//     cb();
//   }, time);
// }
// afterDelay(2000, function () {
//   console.log("Callback executed");
// });

// EXERCISE 2 (INTERMEDIATE - data flow)
// Ek functibn banao getUser
// Requirements:
// Username lega
// 1 second ke baad callback ko ek object de:
// id
// username /
// Then:
// Callback ke andar ek aur function call karo getUserPosts
// getUserPosts:
// userId lega
// 1 second ke baad callback ko posts ka array de
// Final output:
// User ka username print ho
// Fir uske posts print ho
// Goal:
// Samajhna ki ek async ka result next async ko kaise milta hai

// function getUser(user_name, cb) {
//   console.log("fecthing data....");
//   setTimeout(() => {
//     cb({ id: 1, username: user_name });
//   }, 1000);
// }
// getUser("Garvit", function (obj) {
//   console.log(obj.username);
// });

// function instaSeData(user_name, cb) {
//   console.log("fetching data ....");
//   setTimeout(() => {
//     cb({ uniquenum: 1234, username: "Garvit" });
//   }, 3000);
// }

// function metaPeJaoDataLao(uniquenum, cb) {
//   setTimeout(() => {
//     cb(["img1", "img2"]);
//   }, 4000);
// }

// instaSeData("Garvit", function (data) {
//   console.log("data arrived");
//   metaPeJaoDataLao(data.uniquenum, function (img) {
//     console.log("all the images came", img);
//   });
// });
