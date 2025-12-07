import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/300/200?random=1"),
      new URL("https://picsum.photos/300/200?random=2"),
      new URL("https://picsum.photos/300/200?random=3"),
      new URL("https://picsum.photos/300/200?random=4"),
      new URL("https://picsum.photos/300/200?random=5"),
      new URL("https://picsum.photos/300/200?random=6"),
      new URL("https://picsum.photos/300/200?random=7"),
      new URL("https://picsum.photos/300/200?random=8"),
      new URL("https://picsum.photos/300/200?random=9"),
      new URL("https://picsum.photos/300/200?random=10"),
      new URL("https://picsum.photos/300/200?random=11"),
      new URL("https://picsum.photos/300/200?random=12"),
      new URL("https://picsum.photos/300/200?random=13"),
      new URL("https://picsum.photos/300/200?random=14"),
      new URL("https://picsum.photos/300/200?random=15"),
      new URL("https://picsum.photos/300/200?random=16"),
      new URL("https://picsum.photos/300/200?random=16"),
      new URL("https://picsum.photos/300/200?random=17"),
      new URL("https://picsum.photos/300/200?random=18"),
      new URL("https://picsum.photos/300/200?random=19"),
      new URL("https://picsum.photos/300/200?random=20"),
    ],
  },
};

export default nextConfig;
