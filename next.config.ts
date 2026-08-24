import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: [
    "*.space-z.ai",
    "localhost:3000",
  ],
};

export default nextConfig;
