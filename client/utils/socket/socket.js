import { io } from "socket.io-client";
const socket = io.connect("http://172.20.10.2:5000");
export default socket;