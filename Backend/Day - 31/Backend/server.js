import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  // connection is an event listner
  // io => server
  // socket => single user
  // on => event ko listen krna
  // emit => event ko fire krna
  console.log("new connection created");

  socket.on("message", (msg) => {
    console.log("user fired message listner");
    console.log(msg);
    io.emit("abc");
  }); // custom event will be made here.
});

httpServer.listen(3000, () => {
  console.log("httpServer is running on port 3000");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// HW

// Task = >

// socket.emit()
// socket.broadcast.emit()
// io.emit

// Read from DOCS
