// app/manifest.ts - Progressive Web App manifest
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "LWNRA Daily Devotionals",
        short_name: "LWNRA Devotionals",
        description:
            "Daily spiritual guidance and reflection from Living Word NRA",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#14b8a6", // Teal-500
        icons: [
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
