# Giscus Comments Setup

## ✅ Comments Component is Ready!

The comments component is configured with default settings and will work once you enable Giscus on your GitHub repository.

## Quick Setup (5 minutes)

### Step 1: Enable GitHub Discussions
1. Go to your repository: https://github.com/ananyashah28/ananya-portfolio
2. Click **Settings** tab
3. Scroll to **Features** section
4. Check ✅ **Discussions**

### Step 2: Install Giscus App
1. Visit: https://github.com/apps/giscus
2. Click **Install**
3. Select your repository: `ananyashah28/ananya-portfolio`
4. Click **Install**

### Step 3: Get Your Configuration
1. Visit: https://giscus.app/
2. Fill in:
   - **Repository**: `ananyashah28/ananya-portfolio`
   - **Page ↔️ Discussions Mapping**: `pathname`
   - **Discussion Category**: Choose "General" or create "Comments"
3. Copy the generated values:
   - `data-repo-id`
   - `data-category-id`

### Step 4: Update Comments Component (Optional)

If you want to use custom values, update `app/components/Comments.tsx`:

```typescript
export default function Comments({ 
  repo = 'ananyashah28/ananya-portfolio',
  repoId = 'YOUR_REPO_ID_HERE',  // Replace with your repo ID
  category = 'General',
  categoryId = 'YOUR_CATEGORY_ID_HERE'  // Replace with your category ID
}: CommentsProps) {
```

## Current Configuration

The component is pre-configured with:
- ✅ Repository: `ananyashah28/ananya-portfolio`
- ✅ Default repo ID (update if needed)
- ✅ Category: General
- ✅ Theme: Follows your site's dark/light mode
- ✅ Reactions enabled
- ✅ Already integrated in blog posts

## Features

✅ GitHub-powered comments
✅ No database needed
✅ Markdown support
✅ Reactions (👍, ❤️, etc.)
✅ Dark mode support
✅ Spam protection via GitHub
✅ Free forever

## Test Comments

1. Enable Discussions on your repo
2. Install Giscus app
3. Visit any blog post
4. Scroll to bottom
5. Sign in with GitHub
6. Leave a test comment

## Alternative: Skip Comments

If you don't want comments, simply remove the `<Comments />` component from:
- `app/blogs/posts/[slug]/page.tsx`
- `app/blogs/PWAblog/page.tsx`

Comments are optional and won't break anything if not configured! 🎉
