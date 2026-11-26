import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Lead capture simulation (ready to hook to Resend, Kit/ConvertKit, Mailchimp, or webhook)
    console.log(`[CrayNook Free Sample] Requested for email: ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Your 8-page sample pack has been emailed to you!',
    });
  } catch (error) {
    console.error('Free sample submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing sample request' },
      { status: 500 }
    );
  }
}
