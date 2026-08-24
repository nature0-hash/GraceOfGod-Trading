import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "*.space-z.ai",
    "*.chatglm.cn",
    "preview-chat-f96a2b5e-3422-4519-8b59-4448cce395d9.space-z.ai",
  ],
};

export default nextConfig;
