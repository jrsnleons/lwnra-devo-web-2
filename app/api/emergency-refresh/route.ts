import { revalidateTag, revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

function getNext445AM(): string {
    const now = new Date();
    const target = new Date();
    target.setHours(4, 45, 0, 0);
    
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }
    
    return target.toISOString();
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json().catch(() => ({}));
        
        // Check for secret token (required for emergency refresh)
        const providedSecret = body.secret || request.headers.get('authorization')?.replace('Bearer ', '');
        const validSecret = process.env.EMERGENCY_REFRESH_SECRET || 'emergency-refresh-2025';
        
        if (!providedSecret || providedSecret !== validSecret) {
            return NextResponse.json({ 
                success: false,
                message: 'Invalid or missing secret token',
                hint: 'Provide secret in request body or Authorization header',
                example: {
                    body: { secret: 'your-secret-here' },
                    header: 'Authorization: Bearer your-secret-here'
                }
            }, { status: 401 });
        }

        // Clear all devotional-related caches
        revalidateTag('devotional');
        revalidatePath('/', 'page');
        
        // Log the emergency refresh
        console.log(`🚨 EMERGENCY CACHE REFRESH at ${new Date().toISOString()}`);
        
        return NextResponse.json({ 
            success: true,
            message: 'Emergency cache refresh completed successfully',
            timestamp: new Date().toISOString(),
            clearedTags: ['devotional'],
            clearedPaths: ['/'],
            nextScheduledRefresh: getNext445AM(),
            note: 'Visit homepage to see fresh content'
        });
        
    } catch (error) {
        console.error('Emergency refresh failed:', error);
        return NextResponse.json(
            { 
                success: false,
                message: 'Emergency refresh failed', 
                error: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Emergency Refresh Endpoint',
        description: 'Secure endpoint for emergency cache refresh with authentication',
        usage: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_SECRET (optional alternative)'
            },
            body: {
                secret: 'YOUR_SECRET_TOKEN'
            }
        },
        examples: {
            usingBody: `curl -X POST ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/emergency-refresh -H "Content-Type: application/json" -d '{"secret":"emergency-refresh-2025"}'`,
            usingHeader: `curl -X POST ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/emergency-refresh -H "Authorization: Bearer emergency-refresh-2025"`
        },
        nextScheduledRefresh: getNext445AM()
    });
}
