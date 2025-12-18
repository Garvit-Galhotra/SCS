//  Effect - 1

let effect1 = document.querySelector("#effect-1");

effect1.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.x + "px");
  document.body.style.setProperty("--y", e.y + "px");
});

// Effect - 2

let accessGranted = document.querySelector("#effect-2 section  h2");
let welcome = document.querySelector("#effect-2 section h3");
let lorem = document.querySelector("#effect-2 section p");
const randomAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const accessGrantedText = accessGranted.innerText;
const welcomeText = welcome.innerText;
const loremText = lorem.innerText;

accessGranted.addEventListener("mouseenter", () => {
  let iteration = 0;
  setInterval(() => {
    const str = accessGrantedText
      .split("")
      .map((char, idx) => {
        if (idx < iteration) {
          return char;
        }
        return randomAlpha.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");
    accessGranted.innerText = str;
    iteration += 0.3;
  }, 100);
});

welcome.addEventListener("mouseenter", (e) => {
  let counting = 0;

  setInterval(() => {
    const str = welcomeText
      .split("")
      .map((char, idx) => {
        if (idx < counting) {
          return char;
        }
        return randomAlpha.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");
    welcome.innerText = str;
    counting += 0.75;
  }, 100);
});

lorem.addEventListener("mouseenter", (e) => {
  let count = 0;
  setInterval(() => {
    const str = loremText
      .split("")
      .map((char, idx) => {
        if (idx < count) {
          return char;
        }
        return randomAlpha.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");
    lorem.innerText = str;
    count += 1;
  }, 100);
});
