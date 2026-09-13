# Deployment Guide

## Pre-Deployment Checklist

### 1. Add Favicon Files
Create the following icon files and place them in the `/public` folder:
- `favicon.ico` (16x16, 32x32, 48x48) ✅
- `icon.png` (192x192) - Required for PWA
- `apple-icon.png` (180x180) - Required for PWA

You can use tools like:
- https://favicon.io/
- https://realfavicongenerator.net/

### 2. Environment Variables
Copy `.env.local.example` to `.env.local` and add your values:
```bash
cp .env.local.example .env.local
```

### 3. Setup Comments (Optional)
If you want to enable comments on blog posts:
1. Install Giscus on your GitHub repository: https://github.com/apps/giscus
2. Get your configuration from: https://giscus.app/
3. Update `app/components/Comments.tsx` with your repo details

## New Features Included

### ✅ Social Features
- **Social Share Buttons**: Share blog posts on Twitter, LinkedIn, Facebook
- **Comments System**: Giscus-powered comments (requires setup)
- **View Counter**: Track page views on blog posts

### ✅ User Experience
- **Back to Top Button**: Smooth scroll on all pages
- **Global Search**: Press `Ctrl/Cmd + K` to search
- **Skeleton Loaders**: Better loading states
- **Error Boundary**: Graceful error handling
- **Image Lightbox**: Click to expand images

### ✅ Blog Features
- **Reading Time**: Auto-calculated for each post
- **Table of Contents**: Auto-generated from headings
- **Code Blocks**: With copy functionality
- **RSS Feed**: Available at `/rss.xml`

### ✅ PWA Support
- **Installable App**: Add to home screen
- **Service Worker**: Offline support
- **Install Prompt**: Smart installation banner

See `FEATURES.md` for detailed documentation.

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add Environment Variables in Vercel Dashboard
6. Click "Deploy"

## Post-Deployment Steps

### 1. Add Google Analytics
1. Go to https://analytics.google.com/
2. Create a new property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to Vercel Environment Variables:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: Your Measurement ID
5. Redeploy

### 2. Google Search Console Verification
1. Go to https://search.google.com/search-console
2. Add your property
3. Get verification code
4. Update `app/layout.tsx`:
   ```typescript
   verification: {
     google: 'your-actual-verification-code',
   }
   ```
5. Commit and redeploy

### 3. Test on Mobile Devices
- Use Chrome DevTools Device Mode
- Test on actual devices (iOS Safari, Android Chrome)
- Check responsive breakpoints
- Test dark mode toggle
- Verify all forms work

### 4. Run Lighthouse Audit
```bash
# In Chrome DevTools
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 5. Update Domain (if using custom domain)
In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate

### 6. Enable Analytics in Vercel
1. Go to Project Settings → Analytics
2. Enable Vercel Analytics (free tier available)
3. View real-time performance metrics

## Performance Optimization Tips

### Images
- All images are using Next.js Image component ✓
- Consider adding more images to `/public/images`

### Fonts
- Using next/font for optimization ✓

### Caching
- Static pages are automatically cached by Vercel ✓

## Monitoring

### Check these regularly:
- Vercel Dashboard for deployment status
- Google Analytics for traffic
- Google Search Console for SEO issues
- Lighthouse scores monthly

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

### Environment variables not working
- Ensure they start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables

### Images not loading
- Check file paths are correct
- Ensure images are in `/public` folder
- Verify Next.js Image component usage

## Quick Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start

# Lint code
npm run lint
```

## Support

If you encounter issues:
1. Check Vercel documentation: https://vercel.com/docs
2. Next.js documentation: https://nextjs.org/docs
3. GitHub Issues for specific packages

---

**Your portfolio is ready for deployment! 🚀**
