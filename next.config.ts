import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 外部APIの画像使用時は外部ドメインを許可する
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
      },
    ],
  }
};

export default nextConfig;
