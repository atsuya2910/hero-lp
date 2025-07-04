import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 既存の他の設定がある場合はここに維持します

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;