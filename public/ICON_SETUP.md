# PWA Icon Setup

## Current Status
✅ Placeholder SVG icons created:
- `/public/icon.svg` (192x192)
- `/public/apple-icon.svg` (180x180)

These are gradient blue-purple icons with "AS" initials.

## To Use Your Own Logo

### Option 1: Use Online Tools (Recommended)
1. Visit https://favicon.io/favicon-converter/
2. Upload your logo/photo
3. Download the generated icons
4. Replace:
   - `icon.svg` → `icon.png` (192x192)
   - `apple-icon.svg` → `apple-icon.png` (180x180)

### Option 2: Use Photoshop/Figma
1. Create 192x192px image → Save as `icon.png`
2. Create 180x180px image → Save as `apple-icon.png`
3. Place both in `/public` folder

### Option 3: Keep Current SVG Icons
The current SVG icons work perfectly and will display your initials "AS" with a gradient background.

## Update Manifest (if using PNG)
If you convert to PNG, update `/public/manifest.json`:
```json
"icons": [
  {
    "src": "/icon.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "/apple-icon.png",
    "sizes": "180x180",
    "type": "image/png"
  }
]
```

## Current Icons Work!
The SVG icons are already functional and will work for PWA installation.
