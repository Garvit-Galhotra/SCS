const mouseController = document.querySelector(".mouse-follower");

let x = 0;
let y = 0;

document.body.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  x = clientX;
  y = clientY;
});

function far() {
  mouseController.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(far);
}
far();
