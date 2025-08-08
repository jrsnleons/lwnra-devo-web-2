import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

// Simple emergency refresh without authentication
export async function POST() {
    try {
        // Clear the devotional cache immediately
        revalidateTag('devotional');
        
        console.log(`🔄 Manual refresh triggered at ${new Date().toISOString()}`);
        
        return NextResponse.json({ 
            success: true,
            message: 'Cache refreshed successfully - visit homepage to see new content',
            timestamp: new Date().toISOString(),
            instruction: 'Refresh your browser to load new devotional content'
        });
        
    } catch (error) {
        return NextResponse.json(
            { 
                success: false,
                message: 'Refresh failed', 
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Simple Manual Refresh',
        usage: 'POST to this endpoint to refresh devotional cache',
        example: `curl -X POST ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/refresh-now`,
        note: 'No authentication required - use for emergencies'
    });
}
