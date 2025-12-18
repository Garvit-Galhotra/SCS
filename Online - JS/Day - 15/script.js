let img = document.querySelector("img");
let heart = document.querySelector("i");

img.addEventListener("dblclick", () => {
  heart.style.scale = 1.7;
  heart.style.transition = "all 0.3s cubic-bezier(.75, .99,.64,1.18)";
  heart.style.transform = "scale(1)";
  setTimeout(() => {
    heart.style.scale = 1;
    heart.style.transform = "scale(0) rotate(-60deg)";
    heart.style.transition = "all 0.1s ease-in";
  }, 1500);

});
