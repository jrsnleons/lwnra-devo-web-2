import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Production optimizations
    experimental: {
        optimizePackageImports: [
            "lucide-react",
            "@radix-ui/react-dropdown-menu",
        ],
    },

    // Image optimization
    images: {
        formats: ["image/webp", "image/avif"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Security headers
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin",
                    },
                ],
            },
        ];
    },

    // Compression
    compress: true,

    // Enable static exports if needed (for static hosting)
    // output: 'export',
    // trailingSlash: true,
};

export default nextConfig;
