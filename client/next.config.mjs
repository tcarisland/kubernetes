/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://tcapi:8080/:path*',
            },
        ]
    },
};

export default nextConfig;
