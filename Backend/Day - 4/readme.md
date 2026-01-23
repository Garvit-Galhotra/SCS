# 📘 Express.js Notes API — Daily Learning Log

This repository documents **what I learned today while working with Express.js**, including **server creation, configuration, routing, REST APIs, and proper folder structure**.

---

## 📂 Project Folder Structure

```
project-root/
│
├── node_modules/
├── src/
│   └── app.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

### 📌 Why this Structure?

- `src/app.js` → Used to **create and configure the server**
- `server.js` → Used to **start the server and manage all routes**
- This separation helps maintain **clean architecture, modularity, and scalability**

---

## 🧠 What I Learned Today

### 1️⃣ app.js — Server Creation & Configuration

Main purpose:

- Create the Express server
- Configure the server
- Export the configured server

```js
const express = require("express");

const app = express();

module.exports = app;
```

#### Key Concepts:

- Express server initialization
- Modular architecture
- Separation of server setup and execution

---

### 2️⃣ server.js — Main Server Logic

Main purpose:

- Start the server
- Handle routes
- Implement CRUD operations

```js
const express = require("express");
const app = require("./src/app.js");
const notes = [];

app.get("/", (req, res) => {
  console.log("hello");
});

app.use(express.json());

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send("node Created");
  console.log(notes);
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("note deleted successfully");
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.send("note updated successfully");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
```

---

## 🔥 API Endpoints Created

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | `/`             | Test route      |
| POST   | `/notes`        | Create new note |
| GET    | `/notes`        | Fetch all notes |
| DELETE | `/notes/:index` | Delete a note   |
| PATCH  | `/notes/:index` | Update a note   |

---

## 🛠 Core Concepts Learned

- Express server setup
- Modular folder structure
- REST API design
- CRUD operations
- JSON body parsing using `express.json()`
- Route parameters
- Server listening and startup flow

---

## 🚀 How To Run

```bash
npm install
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📌 Learning Summary

This project helped me clearly understand:

- How backend servers actually start
- How to structure real-world Node.js projects
- How REST APIs are created and managed
- How data flows between client and server

---

### 👨‍💻 Author

**Garvit Galhotra**
