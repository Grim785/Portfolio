// helpers/socket.js
import { io } from "socket.io-client";

// KHÔNG ép chỉ dùng websocket vì Render có thể từ chối
const socket = io("https://portfolio-backend-dr8u.onrender.com", {
  transports: ["polling", "websocket"], // fallback nếu WebSocket bị chặn
  reconnection: true,
  reconnectionAttempts: 5,
  timeout: 20000,
});

export default socket;
