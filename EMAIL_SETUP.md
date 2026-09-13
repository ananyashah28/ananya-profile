# Email Notifications Setup

## ✅ Email Notifications Added!

When someone fills the contact form, you'll receive an email notification at: **ananya.shah2811@gmail.com**

## Setup Instructions (5 minutes)

### Step 1: Enable Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left menu
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords**: https://myaccount.google.com/apppasswords
5. Select **Mail** and **Other (Custom name)**
6. Enter "Portfolio Contact Form"
7. Click **Generate**
8. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### Step 2: Update Environment Variables

Update your `.env.local` file:

```bash
# Email Configuration
EMAIL_USER=ananya.shah2811@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Step 3: Deploy

After updating `.env.local`:

**For Vercel:**
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add:
   - `EMAIL_USER` = `ananya.shah2811@gmail.com`
   - `EMAIL_PASS` = `your-app-password`
4. Redeploy

**For local testing:**
```bash
npm run dev
```

## Email Features

### Contact Form Notifications
When someone submits the contact form, you receive:
- ✅ Name and email of the person
- ✅ Project type and budget
- ✅ Full message
- ✅ Timestamp
- ✅ Reply-to set to their email (click reply to respond)

### Newsletter Subscriptions
When someone subscribes to newsletter:
- ✅ They receive a welcome email
- ✅ You see the subscription in console logs

## Email Template

The notification email includes:
- Professional formatting
- All form details in a clean layout
- Direct reply-to functionality
- Timestamp

## Testing

1. Update `.env.local` with your credentials
2. Run `npm run dev`
3. Fill out the contact form
4. Check your email inbox

## Troubleshooting

**Email not sending?**
- Verify 2-Step Verification is enabled
- Check app password is correct (16 characters, no spaces)
- Ensure EMAIL_USER and EMAIL_PASS are in `.env.local`
- Check console for error messages

**Still not working?**
- Try generating a new app password
- Make sure you're using Gmail
- Check spam folder

## Security

✅ App passwords are secure
✅ Environment variables are not committed to Git
✅ Credentials are only in `.env.local` (gitignored)

Your contact form now sends email notifications! 📧
