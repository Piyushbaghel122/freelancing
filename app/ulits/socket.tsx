import { io } from "socket.io-client";

// Export a single socket instance to be used across your app
export const socket = io("https://backendfeeling-13.onrender.com");

socket.on("connect", () => {
    console.log("Connected to server", socket.id);
});

socket.on("disconnect", () => { 
    console.log("Disconnected", socket.id);
});