import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    console.log('--- Incoming Inquiry ---');
    console.log('Payload:', JSON.stringify(body, null, 2));

    if (!name || !email || !message) {
      console.error('Validation Error: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'GolHawks International <noreply@golhawksinternational.com>',
      to: ['info@golhawksinternational.com'],
      subject: `New Business Inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 40px; border-radius: 16px; background-color: #ffffff; color: #1a1a1a;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://golhawksinternational.com/images/Logo%20(2).png" alt="GolHawks International" style="width: 200px; height: auto;" />
          </div>
          
          <h2 style="color: #C41230; text-transform: uppercase; letter-spacing: 3px; font-weight: 900; margin-bottom: 20px; border-bottom: 2px solid #C41230; padding-bottom: 10px; display: inline-block;">New Inquiry Received</h2>
          
          <div style="margin-top: 30px; line-height: 1.6;">
            <p style="margin: 10px 0;"><strong style="color: #666; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Full Name:</strong><br /> <span style="font-size: 16px; font-weight: 600;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #666; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Email Address:</strong><br /> <span style="font-size: 16px; font-weight: 600;">${email}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #666; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Company:</strong><br /> <span style="font-size: 16px; font-weight: 600;">${company || 'Not provided'}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #666; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Phone Number:</strong><br /> <span style="font-size: 16px; font-weight: 600;">${phone || 'Not provided'}</span></p>
            
            <div style="margin-top: 30px; padding: 25px; background-color: #f8f8f8; border-radius: 12px; border-left: 4px solid #C41230;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #666; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Message Details:</strong></p>
              <p style="white-space: pre-wrap; font-size: 15px; margin: 0;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 40px; pt-20px; border-top: 1px solid #eee; text-align: center;">
            <p style="font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px;">
              © 2026 GolHawks International. This inquiry was sent from the official website contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ 
        error: error.message || 'Resend failed to process the request',
        details: error 
      }, { status: 400 });
    }

    console.log('Email sent successfully! Resend ID:', data?.id);
    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (err: any) {
    console.error('Unhandled Server Error:', err);
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      message: err.message || 'An unexpected error occurred' 
    }, { status: 500 });
  }
}
