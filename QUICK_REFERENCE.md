# Quick Feature Reference

## Keyboard Shortcuts
- `Ctrl/Cmd + K` - Open global search

## New Components

### Social Share
```tsx
<SocialShare title="Post Title" url="https://site.com/post" />
```

### View Counter
```tsx
<ViewCounter slug="post-slug" />
```

### Reading Time
```tsx
import { calculateReadingTime } from '@/app/components/ReadingTime';
const time = calculateReadingTime(content);
```

### Image Lightbox
```tsx
<ImageLightbox src="/image.jpg" alt="Description" width={800} height={600} />
```

### Code Block
```tsx
<CodeBlock code="const x = 1;" language="javascript" />
```

### Table of Contents
```tsx
<TableOfContents />
```

### Comments
```tsx
<Comments />
```

### Skeleton Loaders
```tsx
import { BlogCardSkeleton, ProjectCardSkeleton } from '@/app/components/SkeletonLoader';
<BlogCardSkeleton />
```

## Automatic Features

These work automatically without any code:
- ✅ Back to Top button (appears after scrolling)
- ✅ Error Boundary (wraps entire app)
- ✅ Global Search (Ctrl/Cmd + K)
- ✅ PWA Install Prompt (shows when applicable)
- ✅ Service Worker (registers automatically)
- ✅ RSS Feed (available at /rss.xml)

## URLs

- RSS Feed: `/rss.xml`
- Manifest: `/manifest.json`
- Service Worker: `/sw.js`

## Setup Required

1. **Comments**: Update `app/components/Comments.tsx` with Giscus config
2. **PWA Icons**: Create `icon.png` (192x192) and `apple-icon.png` (180x180)
3. **RSS**: Update `app/rss.xml/route.ts` when adding new blog posts

## Testing Checklist

- [ ] Test global search (Ctrl/Cmd + K)
- [ ] Verify back to top button appears
- [ ] Check PWA install prompt
- [ ] Test social share buttons
- [ ] Verify view counter increments
- [ ] Check RSS feed at /rss.xml
- [ ] Test image lightbox
- [ ] Verify skeleton loaders show
- [ ] Test error boundary (trigger error)
- [ ] Check service worker in DevTools
- [ ] Test comments (if configured)
- [ ] Verify reading time displays
- [ ] Test table of contents navigation
- [ ] Check code block copy button

## Performance

All features are optimized:
- Lazy loading where possible
- Minimal bundle size
- Service worker caching
- No heavy dependencies
