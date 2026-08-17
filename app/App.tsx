"use client";

import { RouterProvider } from "@tanstack/react-router";
import Router from "./router/router";

export default function App() {
    return (
        <RouterProvider router={Router} />
    );
}
