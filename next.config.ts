import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Server restarted to pick up sass, axios, and zustand
  allowedDevOrigins: ["192.168.1.10"],
  reactStrictMode: false,
};

export default nextConfig;
