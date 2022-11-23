import { io } from "socket.io-client";
const socket = io.connect("https://belink-socket.herokuapp.com");
export default socket;