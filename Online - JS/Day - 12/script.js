// let h1 = document.querySelector("h1");

// h1.addEventListener("click", () => {
//   h1.innerHTML += " did it";
// });

// Math.random() its range is 0 to 1

// let a = Math.floor(Math.random() * 100);
// let a = Math.random() * 100;
// let b = Math.floor(a);
// console.log(a);

// console.log(Math.floor(Math.random() * 100));

// Color Changer

// let box = document.getElementById("box");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 265);
//   box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// });

let arr = [
  {
    team: "Chennai Super Kings",
    primaryColour: "Yellow",
    captain: "MS Dhoni",
  },
  {
    team: "Delhi Capitals",
    primaryColour: "Blue",
    captain: "Axar Patel",
  },
  {
    team: "Gujarat Titans",
    primaryColour: "Navy blue",
    captain: "Shubman Gill",
  },
  {
    team: "Kolkata Knight Riders",
    primaryColour: "Purple",
    captain: "Ajinkya Rahane",
  },
  {
    team: "Lucknow Super Giants",
    primaryColour: "Sky blue",
    captain: "Rishabh Pant",
  },
  {
    team: "Mumbai Indians",
    primaryColour: "Blue",
    captain: "Hardik Pandya",
  },
  {
    team: "Punjab Kings",
    primaryColour: "Red",
    captain: "Shreyas Iyer",
  },
  {
    team: "Rajasthan Royals",
    primaryColour: "Pink",
    captain: "Sanju Samson",
  },
  {
    team: "Royal Challengers Bengaluru",
    primaryColour: "Red",
    captain: "Rajat Patidar",
  },
  {
    team: "Sunrisers Hyderabad",
    primaryColour: "Orange",
    captain: "Pat Cummins",
  },
];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

btn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * arr.length);
  h1.innerHTML = arr[num].team;
  p.innerHTML = arr[num].captain;
});
