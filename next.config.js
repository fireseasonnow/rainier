/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: "/ynq6ivsm69i3/**",
            },
        ],
    },
};

export default nextConfig;
