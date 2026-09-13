import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const DATA_DIR = path.join(process.cwd(), 'data');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

async function getTestimonials() {
  try {
    const data = await readFile(TESTIMONIALS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveTestimonials(testimonials: any[]) {
  await ensureDataDir();
  await writeFile(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2));
}

export async function GET() {
  try {
    const testimonials = await getTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, company, text, rating, linkedinUrl, image } = body;

    if (!name || !text || !rating) {
      return NextResponse.json({ error: 'Name, text, and rating are required' }, { status: 400 });
    }

    const testimonials = await getTestimonials();
    const newTestimonial = {
      id: Date.now().toString(),
      name,
      role: role || '',
      company: company || '',
      text,
      rating: Math.min(5, Math.max(1, rating)),
      linkedinUrl: linkedinUrl || '',
      image: image || '',
      approved: false,
      createdAt: new Date().toISOString()
    };

    testimonials.push(newTestimonial);
    await saveTestimonials(testimonials);

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
          subject: `New Testimonial from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #2563eb; margin-bottom: 20px;">New Testimonial Submission</h2>
              
              <div style="background: #f9fafb; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Role:</strong> ${role || 'N/A'}</p>
                <p style="margin: 5px 0;"><strong>Company:</strong> ${company || 'N/A'}</p>
                <p style="margin: 5px 0;"><strong>Rating:</strong> ${'⭐'.repeat(rating)}</p>
                ${linkedinUrl ? `<p style="margin: 5px 0;"><strong>LinkedIn:</strong> <a href="${linkedinUrl}">${linkedinUrl}</a></p>` : ''}
              </div>
              
              <div style="background: #fff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 15px;">
                <p style="margin: 0 0 10px 0;"><strong>Testimonial:</strong></p>
                <p style="margin: 0; white-space: pre-wrap;">${text}</p>
              </div>
              
              <div style="background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0; color: #92400e;"><strong>Action Required:</strong> Review and approve this testimonial in your data/testimonials.json file</p>
              </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                <p>Submitted on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          `
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    return NextResponse.json({ message: 'Testimonial submitted for review', testimonial: newTestimonial });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit testimonial' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, approved } = await request.json();
    const testimonials = await getTestimonials();
    const index = testimonials.findIndex((t: any) => t.id === id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    testimonials[index].approved = approved;
    await saveTestimonials(testimonials);

    return NextResponse.json({ message: 'Testimonial updated' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
  }
}
