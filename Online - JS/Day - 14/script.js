// setTimeout() - delay
// setInterval() - controlled loop

// sync -> single process at a time
// async -> multiple process at a time

// js is synchornous

// for (let i = 0; i < 11; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");

// btn.addEventListener("click", () => {
//   h1.innerHTML = "Changing user...";
//   setTimeout(() => {
//     h1.innerHTML = "Hey This is Gavi";
//   }, 2000);
// });

// let a = 1;

// let number = setInterval(() => {
//   console.log(a);
//   a++;
// }, 100);

// setTimeout(() => {
//   clearInterval(number);
// }, 2000);

// ~------------------------------------~

// project code

let bar = document.querySelector(".inner");
let btn = document.querySelector("button");
let percent = document.querySelector(".content h3");
let text = document.querySelector(".card p");
let grow = 0;

btn.addEventListener("click", () => {
  btn.disabled = true;
  let growRandom = 50 + Math.floor(Math.random() * 100);

  let loops = setInterval(() => {
    grow++;
    percent.innerHTML = grow + "%";
    bar.style.width = grow + "%";
  }, growRandom);

  setTimeout(() => {
    clearInterval(loops);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = "0.5";
    text.innerHTML = `Downloaded in ${growRandom / 10} seconds`;
  }, growRandom * 100);
});
