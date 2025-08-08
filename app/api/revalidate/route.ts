import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json().catch(() => ({}));
        
        // Optional secret check (not required for revalidate)
        const secret = body.secret;
        if (secret && secret !== process.env.REVALIDATE_SECRET) {
            return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
        }

        revalidateTag('devotional');
        
        console.log('Devotional cache cleared at:', new Date().toISOString());
        
        return NextResponse.json({ 
            success: true,
            message: 'Devotional cache cleared successfully',
            timestamp: new Date().toISOString(),
            instruction: 'Visit homepage to see refreshed content'
        });
    } catch (error) {
        console.error('Error clearing cache:', error);
        return NextResponse.json(
            { 
                success: false,
                message: 'Error clearing cache', 
                error: (error as Error).message 
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    // Get current cache info
    const now = new Date();
    const target = new Date();
    target.setHours(4, 45, 0, 0);
    
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }
    
    const secondsUntilTarget = Math.floor((target.getTime() - now.getTime()) / 1000);
    const hoursUntilTarget = Math.floor(secondsUntilTarget / 3600);
    const minutesUntilTarget = Math.floor((secondsUntilTarget % 3600) / 60);
    
    return NextResponse.json({
        message: 'Cache status and manual refresh options',
        currentTime: now.toISOString(),
        nextScheduledRefresh: target.toISOString(),
        secondsUntilRefresh: Math.max(secondsUntilTarget, 3600),
        timeUntilRefresh: `${hoursUntilTarget}h ${minutesUntilTarget}m`,
        automaticRefresh: 'Cache will refresh automatically at 4:45 AM daily',
        manualRefreshOptions: {
            simple: {
                url: '/api/refresh-now',
                method: 'POST',
                auth: 'None required',
                usage: 'For quick emergency refresh'
            },
            secure: {
                url: '/api/emergency-refresh', 
                method: 'POST',
                auth: 'Secret token required',
                usage: 'For authenticated refresh with logging'
            },
            current: {
                url: '/api/revalidate',
                method: 'POST',
                auth: 'Optional secret token',
                usage: 'Standard cache refresh'
            }
        }
    });
}
