# Testing Guide - Marketplace & CTA Sections

## Pre-Testing Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open browser at `http://localhost:3000`

## Visual Testing Checklist

### Desktop View (1920px+)

#### Our Marketplace Section
- [ ] Section displays with proper padding (py-32)
- [ ] Heading "Our Marketplace" is centered and large (text-5xl)
- [ ] Description text is centered and readable
- [ ] Grid shows 3 columns
- [ ] Cards have equal height and spacing (gap-8)
- [ ] Images load properly with 4:3 aspect ratio
- [ ] Card titles are bold and prominent
- [ ] Card descriptions are readable with proper line height

#### Card Hover Effects
- [ ] Card scales slightly on hover
- [ ] Shadow appears on hover
- [ ] Border color changes to primary/50
- [ ] Image scales up (105%) smoothly
- [ ] Title color changes to primary
- [ ] All transitions are smooth (300ms)

#### Looking to Do More Section
- [ ] Section has gradient background
- [ ] Headline is large and bold (text-6xl)
- [ ] Description is centered and readable
- [ ] CTA button is prominent and centered
- [ ] Button has proper padding (px-8 py-4)

#### Button Interactions
- [ ] Hover: Background darkens (primary/90)
- [ ] Hover: Shadow appears
- [ ] Hover: Slight scale up (105%)
- [ ] Hover: Arrow icon moves right
- [ ] Focus: Ring appears around button
- [ ] Active: Scales down (95%)
- [ ] All transitions are smooth

### Tablet View (768px - 1024px)

#### Our Marketplace Section
- [ ] Grid shows 2 columns
- [ ] Cards maintain proper spacing (gap-8)
- [ ] Heading size adjusts (text-4xl)
- [ ] Description text size adjusts (text-lg)
- [ ] Container padding adjusts (px-6)

#### Looking to Do More Section
- [ ] Headline size adjusts (text-5xl)
- [ ] Description size adjusts (text-lg)
- [ ] Button size adjusts appropriately
- [ ] Content remains centered

### Mobile View (< 768px)

#### Our Marketplace Section
- [ ] Grid shows 1 column
- [ ] Cards stack vertically
- [ ] Cards maintain proper spacing (gap-6)
- [ ] Heading size adjusts (text-3xl)
- [ ] Description text size adjusts (text-base)
- [ ] Container padding adjusts (px-4)
- [ ] Images maintain aspect ratio

#### Looking to Do More Section
- [ ] Headline size adjusts (text-3xl)
- [ ] Description size adjusts (text-base)
- [ ] Button remains centered
- [ ] Button text doesn't wrap
- [ ] All content is readable

## Accessibility Testing

### Keyboard Navigation
1. Tab through the page
   - [ ] Focus states are visible
   - [ ] Tab order is logical
   - [ ] CTA button is focusable
   - [ ] Focus ring is visible on button

2. Press Enter on CTA button
   - [ ] Button activates (navigates)

### Screen Reader Testing
- [ ] Section landmarks are announced
- [ ] Headings are properly structured (h2, h3)
- [ ] Images have alt text
- [ ] Button has descriptive label
- [ ] Card content is readable in order

### Color Contrast
- [ ] Heading text meets WCAG AA (4.5:1)
- [ ] Body text meets WCAG AA (4.5:1)
- [ ] Button text meets WCAG AA (4.5:1)
- [ ] Muted text is still readable

## Performance Testing

### Lighthouse Audit
Run Lighthouse in Chrome DevTools:

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Desktop" or "Mobile"
4. Click "Analyze page load"

#### Target Scores
- [ ] Performance: ≥ 90
- [ ] Accessibility: ≥ 95
- [ ] Best Practices: ≥ 90
- [ ] SEO: ≥ 90

### Image Loading
- [ ] Images load progressively
- [ ] No layout shift when images load
- [ ] Images are properly sized
- [ ] SVG placeholders render correctly

## Cross-Browser Testing

### Chrome
- [ ] All features work
- [ ] Hover effects smooth
- [ ] Transitions work
- [ ] Images load

### Firefox
- [ ] All features work
- [ ] Hover effects smooth
- [ ] Transitions work
- [ ] Images load

### Safari
- [ ] All features work
- [ ] Hover effects smooth
- [ ] Transitions work
- [ ] Images load

### Edge
- [ ] All features work
- [ ] Hover effects smooth
- [ ] Transitions work
- [ ] Images load

## Responsive Testing Tools

### Browser DevTools
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test these presets:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1920px)

### Manual Resize
- [ ] Resize browser window slowly
- [ ] Check breakpoint transitions (768px, 1024px)
- [ ] Ensure no horizontal scroll
- [ ] Verify content doesn't overflow

## Content Testing

### Text Overflow
- [ ] Long titles don't break layout
- [ ] Long descriptions wrap properly
- [ ] No text cutoff
- [ ] Line heights are comfortable

### Empty States
Test with modified data in `src/lib/constants.ts`:
- [ ] Empty marketplace array
- [ ] Single item
- [ ] Very long descriptions
- [ ] Very short descriptions

## Integration Testing

### Navigation
- [ ] CTA button links to correct page
- [ ] Link is accessible
- [ ] Link opens in same tab (default)

### Data Flow
- [ ] Constants load correctly
- [ ] Props pass to components
- [ ] TypeScript types are correct
- [ ] No console errors

## Bug Checklist

Common issues to check:
- [ ] No console errors
- [ ] No console warnings
- [ ] No 404 errors for images
- [ ] No layout shift
- [ ] No horizontal scroll
- [ ] No text overflow
- [ ] No broken hover states
- [ ] No accessibility violations

## Video Recording Checklist

Record a Loom video showing:

1. **Desktop View (1920px)**
   - [ ] Full page scroll
   - [ ] Hover over each marketplace card
   - [ ] Hover over CTA button
   - [ ] Click CTA button

2. **Tablet View (768px)**
   - [ ] Full page scroll
   - [ ] Show 2-column grid
   - [ ] Hover interactions
   - [ ] Responsive text sizing

3. **Mobile View (375px)**
   - [ ] Full page scroll
   - [ ] Show 1-column grid
   - [ ] Tap interactions
   - [ ] Responsive text sizing

4. **Accessibility Demo**
   - [ ] Keyboard navigation
   - [ ] Focus states
   - [ ] Tab order

5. **Lighthouse Scores**
   - [ ] Run audit
   - [ ] Show scores ≥ 95 for accessibility

## Final Checklist

Before submitting:
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Lighthouse accessibility ≥ 95
- [ ] Responsive on all breakpoints
- [ ] Hover effects work
- [ ] Images load correctly
- [ ] Video recorded and uploaded
- [ ] Code committed with atomic commits
- [ ] PR created with video link
