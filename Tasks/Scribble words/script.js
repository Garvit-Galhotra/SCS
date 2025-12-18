let para = document.querySelector("p");
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerHTML;
let iteration = 0;

function randomText() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return character.split("")[Math.floor(Math.random() * text.length + 1)];
    })
    .join("");
  para.innerHTML = str;
  iteration += 0.2;
}

para.addEventListener("mouseenter", () => {
  iteration = 0;
  setInterval(randomText, 50);
});
