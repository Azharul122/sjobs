import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5001",
      },
      {
        protocol: "http",
        hostname: "10.0.10.79",
        port: "5001",
      },
      {
        protocol: "http",
        hostname: "10.0.10.79",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
