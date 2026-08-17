import { io } from "socket.io-client";

// Export a single socket instance to be used across your app
export const socket = io("http://localhost:8080");

socket.on("connect", () => {
    console.log("Connected to server", socket.id);
});

socket.on("disconnect", () => { 
    console.log("Disconnected", socket.id);
});