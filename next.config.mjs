/** @type {import('next').NextConfig} */
import withPWA from "next-pwa"
const nextConfig = withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    reactStrictMode: true,
});

export default nextConfig;
