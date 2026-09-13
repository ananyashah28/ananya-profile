# Dynamic Testimonials System

## ✅ Features Implemented

### User Submission
- Floating "Leave a Testimonial" button on homepage
- Beautiful modal form with fields:
  - Name (required)
  - Role
  - Company
  - LinkedIn URL
  - Rating (1-5 stars)
  - Testimonial text (required)

### Dynamic Display
- Shows default testimonials + approved user submissions
- LinkedIn profile links
- Star ratings
- Responsive grid layout
- Loading states

### Email Notifications
- You receive email when someone submits a testimonial
- Includes all details and action reminder

## How It Works

### 1. User Submits Testimonial
- Clicks floating button on homepage
- Fills out form
- Submits

### 2. You Receive Email
- Email sent to: ananya.shah2811@gmail.com
- Contains all testimonial details
- Reminder to approve

### 3. Approve Testimonials
Open `data/testimonials.json` and change `"approved": false` to `"approved": true`:

```json
[
  {
    "id": "1234567890",
    "name": "John Doe",
    "role": "CEO",
    "company": "Tech Corp",
    "text": "Great work!",
    "rating": 5,
    "linkedinUrl": "https://linkedin.com/in/johndoe",
    "approved": true,  // Change this to true
    "createdAt": "2026-01-04T10:00:00.000Z"
  }
]
```

### 4. Testimonial Appears
- Approved testimonials show on homepage automatically
- No code changes needed
- Just refresh the page

## Default Testimonials

Three default testimonials are always shown:
1. Cygnet.One Team
2. Operisoft Technologies
3. Academic Excellence

User testimonials appear alongside these.

## LinkedIn Integration

If user provides LinkedIn URL:
- LinkedIn icon appears on their testimonial
- Clickable link to their profile
- Opens in new tab

## File Structure

```
app/
├── components/
│   ├── TestimonialForm.tsx       # Submission form
│   └── DynamicTestimonials.tsx   # Display component
├── api/
│   └── testimonials/
│       └── route.ts               # API endpoints
data/
└── testimonials.json              # Stored testimonials
```

## API Endpoints

### GET /api/testimonials
Returns all testimonials (approved and pending)

### POST /api/testimonials
Submit new testimonial
```json
{
  "name": "John Doe",
  "role": "CEO",
  "company": "Tech Corp",
  "text": "Great work!",
  "rating": 5,
  "linkedinUrl": "https://linkedin.com/in/johndoe"
}
```

### PATCH /api/testimonials
Approve/reject testimonial
```json
{
  "id": "1234567890",
  "approved": true
}
```

## Managing Testimonials

### View All Submissions
Check `data/testimonials.json`

### Approve Testimonial
1. Open `data/testimonials.json`
2. Find the testimonial by name/date
3. Change `"approved": false` to `"approved": true`
4. Save file
5. Refresh website

### Delete Testimonial
1. Open `data/testimonials.json`
2. Remove the entire testimonial object
3. Save file

## Testing

1. Visit homepage
2. Click "Leave a Testimonial" button (bottom right)
3. Fill out form
4. Submit
5. Check your email
6. Approve in `data/testimonials.json`
7. Refresh homepage to see it

## Security

- All submissions require approval
- Email notifications for new submissions
- Data stored locally in JSON file
- No public API to approve testimonials

## Future Enhancements

Optional features you can add:
- Admin dashboard to approve testimonials
- Image upload for profile pictures
- Import from LinkedIn API
- Spam filtering
- Testimonial moderation queue

Your testimonials are now dynamic and user-submittable! 🎉
