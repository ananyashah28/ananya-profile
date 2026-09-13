# New Features Installation Guide

## Features Added

### 1. **Social Share Buttons** ✅
- Share blog posts on Twitter, LinkedIn, Facebook
- Copy link functionality
- Location: Blog post pages

### 2. **View Counter** ✅
- Tracks page views using localStorage
- Displays view count on blog posts
- Location: Blog post pages

### 3. **Comments System** ✅
- Giscus-powered comments (GitHub Discussions)
- Location: Blog post pages
- **Setup Required**: Update `app/components/Comments.tsx` with your GitHub repo details

### 4. **Reading Time Calculator** ✅
- Automatically calculates reading time
- Location: Blog post pages

### 5. **Back to Top Button** ✅
- Smooth scroll to top
- Appears after scrolling 300px
- Location: All pages

### 6. **Error Boundary** ✅
- Graceful error handling
- Reload page option
- Location: Wraps entire app

### 7. **Skeleton Loaders** ✅
- Better loading states
- Blog and project card skeletons
- Location: Blog and project pages

### 8. **Image Lightbox** ✅
- Click to expand images
- Full-screen view
- Usage: `<ImageLightbox src="/path" alt="description" />`

### 9. **Code Block with Copy** ✅
- Syntax highlighting ready
- Copy code button
- Usage: `<CodeBlock code="..." language="javascript" />`

### 10. **Table of Contents** ✅
- Auto-generated from headings
- Active section highlighting
- Smooth scroll navigation
- Usage: Add to blog post pages

### 11. **Global Search** ✅
- Keyboard shortcut: `Ctrl/Cmd + K`
- Search across all pages
- Location: Available globally

### 12. **RSS Feed** ✅
- XML feed for blog posts
- URL: `/rss.xml`
- Auto-updates with new posts

### 13. **PWA Support** ✅
- Installable app
- Service worker for offline support
- Manifest file configured
- **Setup Required**: Create icon files (see below)

## Setup Instructions

### 1. Comments System (Giscus)
1. Go to https://github.com/apps/giscus
2. Install Giscus on your repository
3. Visit https://giscus.app/
4. Configure and get your repo ID and category ID
5. Update `app/components/Comments.tsx`:
   ```typescript
   script.setAttribute('data-repo', 'YOUR_USERNAME/YOUR_REPO');
   script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
   script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
   ```

### 2. PWA Icons
Create these icon files in `/public`:
- `icon.png` (192x192)
- `apple-icon.png` (180x180)

Use tools like:
- https://favicon.io/
- https://realfavicongenerator.net/

### 3. RSS Feed
The RSS feed is automatically available at `/rss.xml`
Update `app/rss.xml/route.ts` when you add new blog posts.

## Usage Examples

### Social Share
```tsx
import SocialShare from '@/app/components/SocialShare';

<SocialShare title="Post Title" url="https://yoursite.com/post" />
```

### View Counter
```tsx
import ViewCounter from '@/app/components/ViewCounter';

<ViewCounter slug="post-slug" />
```

### Reading Time
```tsx
import { calculateReadingTime } from '@/app/components/ReadingTime';

const time = calculateReadingTime(content);
```

### Image Lightbox
```tsx
import ImageLightbox from '@/app/components/ImageLightbox';

<ImageLightbox src="/image.jpg" alt="Description" width={800} height={600} />
```

### Code Block
```tsx
import CodeBlock from '@/app/components/CodeBlock';

<CodeBlock code="const x = 1;" language="javascript" />
```

### Table of Contents
```tsx
import TableOfContents from '@/app/components/TableOfContents';

<TableOfContents />
```

## Testing

1. **PWA**: Open DevTools → Application → Service Workers
2. **RSS**: Visit `/rss.xml`
3. **Search**: Press `Ctrl/Cmd + K`
4. **Comments**: Scroll to bottom of blog post
5. **Back to Top**: Scroll down any page

## Performance Impact

All features are optimized:
- Lazy loading where possible
- Minimal bundle size increase
- No external dependencies for most features
- Service worker caches assets for offline use

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- PWA: Chrome, Edge, Safari (iOS 11.3+)
- Service Worker: All modern browsers

## Next Steps

1. Set up Giscus comments
2. Create PWA icon files
3. Test all features locally
4. Deploy and verify in production
5. Update RSS feed when adding new blog posts
