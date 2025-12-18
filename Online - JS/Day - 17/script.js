let body = document.querySelector("body");
let text = document.querySelector("h1");
body.addEventListener("keydown", (arg) => {
  text.innerHTML = arg.code;
});
