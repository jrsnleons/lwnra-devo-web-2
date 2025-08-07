import { getBaseUrl } from "@/lib/env";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseUrl();

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/", "/admin/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
