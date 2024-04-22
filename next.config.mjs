/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    basePath: '/',
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    reactStrictMode: true,
};

export default nextConfig;
