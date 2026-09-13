import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    console.log('Contact form submission:', {
      name,
      email,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString()
    });

    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_USER !== 'your-email@gmail.com') {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: 'ananya.shah2811@gmail.com',
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
              
              <div style="background: #f9fafb; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 5px 0;"><strong>Project Type:</strong> ${projectType}</p>
                <p style="margin: 5px 0;"><strong>Budget:</strong> ${budget}</p>
              </div>
              
              <div style="background: #fff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 6px;">
                <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                <p>Submitted on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          `,
          replyTo: email
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}