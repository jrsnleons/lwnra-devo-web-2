import { ApiResponse, Devotional } from "@/types/devotional";
import { cache } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

if (!BASE_URL) {
    throw new Error(
        "NEXT_PUBLIC_SERVER_URL environment variable is not defined"
    );
}

// Cache the fetch function to avoid duplicate API calls
export const getDevotional = cache(async (): Promise<Devotional> => {
    try {
        const response = await fetch(`${BASE_URL}/api/devotionals`, {
            next: {
                revalidate: 86400, // Cache for 24 hours
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (!data.data || data.data.length === 0) {
            throw new Error("No devotional data available");
        }

        const firstDevotional = data.data[0];

        // Validate required fields
        const requiredFields = [
            "date",
            "reading",
            "version",
            "passage",
            "title",
            "author",
            "body",
            "prayer",
        ];
        for (const field of requiredFields) {
            if (!firstDevotional[field as keyof Devotional]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        return {
            date: firstDevotional.date,
            reading: firstDevotional.reading,
            version: firstDevotional.version,
            passage: firstDevotional.passage,
            reflection_qs: firstDevotional.reflection_qs || [],
            title: firstDevotional.title,
            author: firstDevotional.author,
            body: firstDevotional.body,
            prayer: firstDevotional.prayer,
        };
    } catch (error) {
        console.error("Failed to fetch devotional:", error);

        // Return fallback devotional when API fails
        return {
            date: new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            reading: "Psalm 23:1-6",
            version: "NIV",
            passage:
                "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name's sake. Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows. Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever.",
            reflection_qs: [
                "How can you trust God's guidance in uncertain times?",
                "What does it mean to you that God provides comfort in difficult situations?",
                "How can you experience God's goodness in your daily life?",
            ],
            title: "The Good Shepherd",
            author: "Living Word NRA",
            body: "In times when we cannot connect to our daily devotional service, we can always turn to the timeless comfort of Psalm 23. This beloved passage reminds us that God is our shepherd, always watching over us, providing for our needs, and guiding us along the right path.\n\nEven when technology fails us or circumstances prevent us from accessing our usual resources, God's word remains constant and available. His promises never fail, and His love never wavers.\n\nLet this be a reminder that our relationship with God doesn't depend on perfect circumstances or flawless systems, but on His unchanging character and faithfulness.",
            prayer: "Dear Heavenly Father, thank you for being our Good Shepherd. Even when our usual routines are disrupted, help us to remember that You are always with us. Guide us through any challenges we face today, and help us to trust in Your provision and care. May we find peace in knowing that You are leading us along the right paths. In Jesus' name, Amen.",
        };
    }
});
