/**
 * Environment variables validation and configuration
 * This ensures all required environment variables are properly set
 */

interface Environment {
    NODE_ENV: "development" | "production" | "test";
    NEXT_PUBLIC_APP_URL?: string;
    VERCEL_URL?: string;
}

function validateEnvironment(): Environment {
    const env = {
        NODE_ENV: process.env.NODE_ENV as Environment["NODE_ENV"],
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        VERCEL_URL: process.env.VERCEL_URL,
    };

    // Validate NODE_ENV
    if (!env.NODE_ENV || !["development", "production", "test"].includes(env.NODE_ENV)) {
        throw new Error("NODE_ENV must be 'development', 'production', or 'test'");
    }

    // Set default APP_URL for production if not provided
    if (env.NODE_ENV === "production" && !env.NEXT_PUBLIC_APP_URL) {
        if (env.VERCEL_URL) {
            env.NEXT_PUBLIC_APP_URL = `https://${env.VERCEL_URL}`;
        } else {
            console.warn("NEXT_PUBLIC_APP_URL not set in production environment");
        }
    }

    return env;
}

export const env = validateEnvironment();

export function getBaseUrl(): string {
    if (env.NEXT_PUBLIC_APP_URL) return env.NEXT_PUBLIC_APP_URL;
    if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`;
    return "http://localhost:3000";
}
