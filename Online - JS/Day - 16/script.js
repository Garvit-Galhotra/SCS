// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// let obj = {
//   user: "garvit",
//   age: 19,
// };
// console.log(obj.user);
// console.log(obj.age);

// let arr = [
//   { user: "Garvit", city: "Ganganagar", age: 19 },
//   { user: "Ritik", city: "Delhi", age: 22 },
//   { user: "Sarthak", city: "Los Angelas", age: 30 },
//   { user: "Tanish", city: "Kolkata", age: 39 },
//   { user: "harsh", city: "bhopal", age: 27 },
// ];
// console.log(arr[0].city);

// sum of elements of array

// let arr = [10, 20, 30, 40];
// let sum = 0;

// arr.forEach((element, idx) => {
//   sum += arr[idx];
//   sum += element;
// });
// console.log(sum);

// Average age
// let arr = [
//   { user: "Garvit", city: "Ganganagar", age: 19 },
//   { user: "Ritik", city: "Delhi", age: 22 },
//   { user: "Sarthak", city: "Los Angelas", age: 30 },
//   { user: "Tanishq", city: "Kolkata", age: 39 },
//   { user: "harsh", city: "bhopal", age: 27 },
// ];

// let sum = 0;

// arr.forEach((element) => {
//   sum += element.age;
// });
// console.log(sum / arr.length);

// ~---------------------~

let img = document.querySelector("img");
let name = document.querySelector("h3");
let profession = document.querySelector("h4");
let desc = document.querySelector("p");
let btn = document.querySelector("button");

const users = [
  {
    id: 1,
    fullName: "Amir Patel",
    image: "https://picsum.photos/id/1005/400/400", // portrait-style photo
    profession: "Frontend Engineer",
    description:
      "Builds pixel-perfect UIs and loves converting designs into accessible, responsive web apps.",
    tags: ["React", "TypeScript", "CSS", "Accessibility"],
  },
  {
    id: 2,
    fullName: "Sofia Martinez",
    image: "https://picsum.photos/id/1011/400/400",
    profession: "Product Designer",
    description:
      "Designs user-centered interfaces, prototypes quickly, and runs usability tests to validate decisions.",
    tags: ["Figma", "UX Research", "Prototyping", "Design Systems"],
  },
  {
    id: 3,
    fullName: "Liam O'Connor",
    image: "https://picsum.photos/id/1027/400/400",
    profession: "Data Scientist",
    description:
      "Applies ML to real-world problems, builds end-to-end pipelines, and explains models to stakeholders.",
    tags: ["Python", "Pandas", "ML", "Model Interpretability"],
  },
  {
    id: 4,
    fullName: "Priya Sharma",
    image: "https://picsum.photos/id/1012/400/400",
    profession: "DevOps Engineer",
    description:
      "Automates deployments, optimizes CI/CD, and keeps infrastructure reliable and cost-efficient.",
    tags: ["Kubernetes", "Terraform", "CI/CD", "Monitoring"],
  },
];

let main = document.querySelector("main");
let sum = "";

users.forEach((elem) => {
  sum += `<div class="card">
        <img
          src="${elem.image}"
          alt=""
        />
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
      </div>`;
});
console.log(sum);
main.innerHTML = sum;
