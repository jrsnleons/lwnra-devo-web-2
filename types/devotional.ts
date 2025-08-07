export interface Devotional {
    date: string;
    reading: string;
    version: string;
    passage: string;
    reflection_qs: string[];
    title: string;
    author: string;
    body: string;
    prayer: string;
}

export interface ApiResponse {
    data: Devotional[];
    status: string;
    message?: string;
}
