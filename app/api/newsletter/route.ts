import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if in development mode or email not configured
    if (process.env.DEV_MODE === 'true' || 
        !process.env.EMAIL_USER || 
        !process.env.EMAIL_PASS ||
        process.env.EMAIL_USER === 'your-email@gmail.com') {
      console.log(`Newsletter subscription (DEV MODE): ${email}`);
      return NextResponse.json(
        { message: 'Successfully subscribed! (Development mode)' },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send welcome email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Ananya\'s Tech Newsletter! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; text-align: center;">Welcome to My Newsletter!</h1>
          <p>Hi there! 👋</p>
          <p>Thank you for subscribing to my tech newsletter. You'll receive:</p>
          <ul>
            <li>📚 Latest blog posts about web development</li>
            <li>💡 Tips and tricks for React, Next.js, and more</li>
            <li>🔥 Industry insights and best practices</li>
            <li>🚀 Updates on my latest projects</li>
          </ul>
          <p>Stay tuned for amazing content!</p>
          <p>Best regards,<br><strong>Ananya Shah</strong></p>
          <hr>
          <p style="font-size: 12px; color: #666;">You can unsubscribe anytime by replying to this email.</p>
        </div>
      `
    });

    console.log('Newsletter subscription:', {
      email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Successfully subscribed! Check your email for confirmation.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}