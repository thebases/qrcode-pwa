/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
import createMDX from "@next/mdx";

// Configure MDX with optional plugins
const withMDX = createMDX({
    extension: /\.mdx?$/, // Matches `.mdx` and `.md` files
    // Add any desired MDX-specific options here
});

const nextConfig = {
    // Common Next.js configurations
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // Include MDX and Markdown files
    output: "export",

    images: { unoptimized: true },
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: true,
    trailingSlash: false,
    generateBuildId: async () => {
        return process.env.GIT_HASH || "default-build-id";
    },
    compress: true,
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false, // Prevent server-side file system access in the browser
        };
        // config.module.rules.push({
        //     test: /\.svg$/i,
        //     issuer: /\.[jt]sx?$/,
        //     use: ["@svgr/webpack"],
        // });
        return config;
    },
};

// Wrap with MDX and PWA plugins
export default withPWA({
    dest: "build", // Use "public" or "build" based on your preference
    disable: process.env.NODE_ENV === "development", // Disable PWA in development
})(withMDX(nextConfig));
