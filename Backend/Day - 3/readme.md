# 🚀 Express.js Notes API – Learning Project

This project is a **basic backend API built using Node.js and Express.js**.  
It demonstrates how to:

- Create a server using Express
- Build APIs
- Understand REST APIs
- Handle JSON data
- Use HTTP methods like GET, POST, PUT, PATCH, DELETE

This project is designed for **learning backend fundamentals** and understanding how APIs work.

---

## 📌 What I Built Today

### 1️⃣ Basic Express Server

```js
const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

app.get("/", (req, res) => {
  res.send("hello World");
});
```

### 2️⃣ Simple Notes API

```js
const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);

  notes.push(req.body);

  res.send("note created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
```

---

## 🌐 What is an API?

API (Application Programming Interface) is a way for two applications to communicate with each other.

---

## 🔁 What is a REST API?

REST (Representational State Transfer) is a standard way of designing APIs using HTTP methods.

---

## ⚡ HTTP Methods Used

- GET – Fetch data
- POST – Create data
- PUT – Replace data
- PATCH – Update partial data
- DELETE – Remove data

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript

---

## 🚀 How to Run
`
```bash
npm install express
node index.js
```

---

## 👨‍💻 Author

**Garvit Galhotra**
