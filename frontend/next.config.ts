import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
	turbopack: { root: path.resolve(process.cwd(), "..") },
	images: {
		remotePatterns: [
			{
				hostname: "**",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
