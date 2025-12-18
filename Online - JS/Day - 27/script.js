// promises
// async await
// settimeout and setinterval

// promises -> ek kaam jaake karo
// pending state
// hojaayega -> resolved
// nahi h -> rejected

// const prm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// prm
//   .then(function () {
//     console.log("resolved");
//   })
//   .catch(function () {
//     console.log("rejected");
//   });

// How to fetch the real data

// fetch(`https://randomuser.me/api/`)
//   .then((notReadableData) => {
//     return notReadableData.json(); // converting the data to a json file
//   })
//   .then(function (realData) {
//     console.log(
//       realData.results[0].name.first + " " + realData.results[0].name.last
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await

// async function abcd() {
//   let raw = await fetch(`https://randomuser.me/api/`);
//   let data = await raw.json();
//   console.log(data);
// }

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       num = Math.floor(Math.random() * 11);
//       console.log(num);
//       if (num < 5) return resolve(true);
//       else reject(false);
//     }, 3000);
//   });
// }

// async function abcd() {
//   console.log("getting data...");
//   let number = await getNum();
//   console.log(number);
// }

// abcd();

// settimeout and setInterval
// already done
