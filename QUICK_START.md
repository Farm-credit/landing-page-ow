# Quick Start Guide

## Installation & Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser
# Navigate to http://localhost:3000
```

## What Was Built

### 1. Our Marketplace Section
- **Location**: `src/components/our-marketplace.tsx`
- **Features**: 
  - Responsive grid (1/2/3 columns)
  - 6 marketplace cards
  - Hover effects on cards
  - Centered heading and description

### 2. Looking to Do More Section
- **Location**: `src/components/looking-to-do-more.tsx`
- **Features**:
  - Gradient background
  - Large headline
  - CTA button with icon
  - Hover and focus states

### 3. MarketplaceCard Component
- **Location**: `src/components/marketplace-card.tsx`
- **Features**:
  - Reusable card component
  - Image with 4:3 aspect ratio
  - Hover animations
  - Semantic HTML

## File Structure

```
src/
├── components/
│   ├── marketplace-card.tsx       # Reusable card
│   ├── our-marketplace.tsx        # Marketplace section
│   └── looking-to-do-more.tsx     # CTA section
├── lib/
│   ├── constants.ts               # Content data
│   └── utils/index.ts             # Utilities
├── types/
│   └── index.ts                   # TypeScript types
└── app/
    └── page.tsx                   # Main page

public/
└── placeholder-marketplace-*.svg  # Placeholder images
```

## Customization

### Update Content
Edit `src/lib/constants.ts`:

```typescript
// Change marketplace items
export const MARKETPLACE_ITEMS = [
  {
    id: 1,
    image: "/your-image.jpg",
    title: "Your Title",
    description: "Your description",
  },
  // ... more items
];

// Change CTA content
export const CTA_CONTENT = {
  headline: "Your Headline",
  description: "Your description",
  buttonText: "Your Button Text",
  buttonLink: "/your-link",
};
```

### Update Styles
Components use Tailwind classes. Edit component files directly:

```tsx
// Example: Change grid columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Change lg:grid-cols-3 to lg:grid-cols-4 for 4 columns */}
</div>
```

### Replace Placeholder Images
1. Add your images to `public/` folder
2. Update image paths in `src/lib/constants.ts`
3. Ensure images are optimized (WebP recommended)

## Testing

### Run Development Server
```bash
pnpm dev
```

### Check TypeScript Errors
```bash
pnpm run build
```

### Run Linter
```bash
pnpm run lint
```

## Responsive Breakpoints

- **Mobile**: < 768px → 1 column
- **Tablet**: 768px - 1024px → 2 columns
- **Desktop**: > 1024px → 3 columns

## Key Features

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Alt text for images

### Performance
- ✅ Next.js Image optimization
- ✅ Lazy loading
- ✅ Responsive images
- ✅ Minimal JavaScript

### Responsive Design
- ✅ Mobile-first approach
- ✅ Flexible grid
- ✅ Responsive typography
- ✅ Touch-friendly buttons

## Common Tasks

### Add a New Marketplace Item
1. Open `src/lib/constants.ts`
2. Add new item to `MARKETPLACE_ITEMS` array:
```typescript
{
  id: 7,
  image: "/new-image.jpg",
  title: "New Item",
  description: "Description here",
}
```

### Change CTA Button Link
1. Open `src/lib/constants.ts`
2. Update `buttonLink` in `CTA_CONTENT`:
```typescript
export const CTA_CONTENT = {
  // ...
  buttonLink: "/new-link",
};
```

### Adjust Spacing
Edit component files and modify Tailwind spacing classes:
- `py-16` → `py-20` (increase vertical padding)
- `gap-6` → `gap-8` (increase grid gap)
- `mb-4` → `mb-6` (increase margin bottom)

### Change Colors
Colors are defined in `src/app/globals.css` using CSS variables:
- `--primary`: Main brand color
- `--secondary`: Secondary color
- `--accent`: Accent color
- `--muted`: Muted text color

## Troubleshooting

### Images Not Loading
1. Check image paths in `src/lib/constants.ts`
2. Ensure images exist in `public/` folder
3. Check Next.js config allows image format

### TypeScript Errors
```bash
# Check for errors
pnpm run build

# If errors persist, check:
# - Import paths are correct
# - Types are properly defined
# - No missing dependencies
```

### Styling Issues
1. Check Tailwind classes are correct
2. Verify CSS variables in `globals.css`
3. Clear browser cache
4. Restart dev server

### Build Errors
```bash
# Clean build
rm -rf .next
pnpm run build
```

## Next Steps

1. **Replace placeholder images** with actual assets
2. **Update content** in `src/lib/constants.ts`
3. **Adjust colors** to match brand
4. **Test on real devices**
5. **Run Lighthouse audit**
6. **Record Loom video**
7. **Create PR**

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Support

For issues or questions:
1. Check documentation files
2. Review component code
3. Check browser console for errors
4. Verify all dependencies are installed

## Deployment

```bash
# Build for production
pnpm run build

# Start production server
pnpm start

# Or deploy to Vercel
# Push to GitHub and connect to Vercel
```

## Performance Tips

1. Use WebP images for better compression
2. Optimize image sizes (max 1920px width)
3. Enable image caching
4. Use CDN for static assets
5. Minimize custom CSS

## Maintenance

### Regular Updates
```bash
# Update dependencies
pnpm update

# Check for outdated packages
pnpm outdated
```

### Code Quality
```bash
# Run linter
pnpm run lint

# Format code (if Prettier is configured)
pnpm run format
```

---

**Ready to go!** Start the dev server and view your sections at `http://localhost:3000`
