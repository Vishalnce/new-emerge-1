import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
