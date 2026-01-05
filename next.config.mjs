/** @type {import('next').NextConfig} */
const nextConfig = {
    output : 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    ignoreDuringBuilds: true,
};

export default nextConfig;

