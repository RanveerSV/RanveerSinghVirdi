import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for static site generation
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js Image Optimization API
  },
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/RanveerSinghVirdi' : '',
};

export default nextConfig;