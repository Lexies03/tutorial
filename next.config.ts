import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // port: "",
        // pathname: "/720/480/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        // port: "",
        // pathname: "/720/480/**",
      },
    ],
  },
};

export default nextConfig;
