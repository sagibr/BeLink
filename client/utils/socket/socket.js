const { Server } = require("socket.io");

const io = new Server({
  serveClient: false
});

export default io