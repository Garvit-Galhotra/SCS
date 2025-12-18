// create element

// set and get attribute

// document.querySelector(""); used before

// let h2 = document.createElement("h2");
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   let h1 = document.createElement("h1");
//   h1.innerHTML = "Hello from js";
//   console.log(h1);
// });

// appending a child
// let h1 = document.createElement("h1");

// h1.innerHTML = "Hello boiiii 'this is the appended child'";
// let btn = document.querySelector("button");
// let main = document.querySelector("main");

// btn.addEventListener("click", () => {
//   main.appendChild(h1);
//   h1.style.color = "lightseagreen";
// });

// ~------------------------------------------------------------------------------------~

// A simple project
let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  div.style.transform = `rotate(${y}deg)`;
  div.style.left = `${x}%`;
  div.style.top = `${y}%`;
  div.style.position = "absolute";
  main.appendChild(div);
  console.log(div);
  console.log(x);
});
