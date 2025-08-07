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
                src: "/icon",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}
