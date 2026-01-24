# 📘 What I Learned Today — Express.js + MongoDB

This README only documents **the new things I learned and implemented today**, compared to my previous code.

---

## 🆕 New Learnings Today

### 1️⃣ Proper REST API Structure
- Implemented CRUD operations using REST principles.
- Designed clean API endpoints using HTTP methods:
  - POST → Create
  - GET → Read
  - DELETE → Delete
  - PATCH → Update

---

### 2️⃣ HTTP Status Codes
Learned and implemented proper HTTP status codes:
- 201 → Resource created
- 200 → Successful request
- 204 → Successful deletion

---

### 3️⃣ Structured JSON Responses
- Switched from plain text responses to structured JSON responses.
- Understood why JSON is the standard format for APIs.

---

### 4️⃣ Express Middleware
- Used:
  ```js
  app.use(express.json());
  ```
- Learned how middleware parses incoming JSON request bodies.

---

### 5️⃣ Modular Backend Architecture
- Separated server configuration and server startup:
  - app.js → server creation & configuration
  - server.js → API routes & server start
- Learned why modular design is used in production systems.

---

### 6️⃣ MongoDB Setup Using Compass
- Installed MongoDB Compass.
- Created a database connection named **cohort2**.
- Learned:
  - How to create databases
  - How MongoDB connections work

---

### 7️⃣ Professional Folder Structure
Learned proper Node.js backend project structure:
```
project-root/
├── src/
│   └── app.js
└── server.js
```

---

## 📌 Learning Summary

Today I moved from **basic backend coding to structured backend development**, learning:
- REST API architecture
- HTTP standards
- JSON responses
- Modular design
- MongoDB environment setup

---

**👨‍💻 Author:** 

Garvit Galhotra
