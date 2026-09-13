import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'www.theforage.com' },
      { protocol: 'https', hostname: 'www.udemy.com' },
      { protocol: 'https', hostname: 'komarev.com' },
      { protocol: 'https', hostname: 'img.shields.io' },
      { protocol: 'https', hostname: 'github-readme-stats.vercel.app' }
    ]
  }
};

export default nextConfig;
