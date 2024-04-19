/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    /*basePath: '/Author_new',*/
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    reactStrictMode: true,
};

export default nextConfig;
