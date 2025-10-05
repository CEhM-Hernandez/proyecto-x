import { NextRequest, NextResponse } from 'next/server';
import { messageLoader } from '@/controllers/messageLoader';
import { MessageBody } from '@/controllers/messageLoader/types';

export async function POST(request: NextRequest) {
    try {
        const body: MessageBody = await request.json();

        console.log('Received request body:', body);
        const result = await messageLoader(body);

        if (!result.ok) {
            return NextResponse.json(result, { status: result.status || 500 });
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Error in /api/encolar-cita:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        return NextResponse.json(
            {
                ok: false,
                message: `Failed to enqueue message: ${errorMessage}`,
                status: 500,
            },
            { status: 500 }
        );
    }
}
