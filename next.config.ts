import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/_availability",
        destination: "/availability",
      },
    ];
  },
};

export default nextConfig;
