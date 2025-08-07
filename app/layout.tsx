import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Daily Devotionals",
        template: "%s | LWNRA Daily Devotionals",
    },
    description:
        "Daily spiritual devotional from Living Word NRA. Find strength, hope, and wisdom in God's word through our daily devotional readings.",
    keywords: [
        "devotional",
        "daily",
        "christian",
        "spiritual",
        "prayer",
        "bible",
        "LWNRA",
        "Living Word NRA",
    ],
    authors: [{ name: "jrsnleons" }],
    creator: "jrsnleons",
    publisher: "jrsnleons",
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    ),
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: [
            {
                url: "/icon",
                sizes: "32x32",
                type: "image/png",
            },
        ],
        apple: [
            {
                url: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
    openGraph: {
        title: "Daily Devotionals",
        description:
            "Daily spiritual guidance and reflection from Living Word NRA",
        url: "/",
        siteName: "LWNRA Daily Devotionals",
        images: [
            {
                url: "/opengraph-image", // Generated image
                width: 1200,
                height: 630,
                alt: "LWNRA Daily Devotionals",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "LWNRA Daily Devotionals",
        description:
            "Daily spiritual guidance and reflection from Living Word NRA",
        images: ["/opengraph-image"], // Generated image
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // Add Google Search Console verification when ready
        // google: 'your-google-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
