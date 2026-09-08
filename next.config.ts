import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  ...(isGitHubPagesBuild
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default config;
