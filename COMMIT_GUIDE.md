# Atomic Commit Guide

This guide outlines the recommended atomic commits for this implementation.

## Commit Strategy

Each commit should represent a single logical change. This makes it easier to:
- Review changes
- Revert specific features if needed
- Understand the development process
- Debug issues

## Recommended Commit Sequence

### 1. Setup Types and Utilities
```bash
git add src/types/index.ts
git commit -m "feat: add TypeScript types for marketplace and CTA sections"
```

### 2. Add Constants
```bash
git add src/lib/constants.ts
git commit -m "feat: add marketplace items and CTA content constants"
```

### 3. Create MarketplaceCard Component
```bash
git add src/components/marketplace-card.tsx
git commit -m "feat: create reusable MarketplaceCard component with hover effects"
```

### 4. Create OurMarketplace Section
```bash
git add src/components/our-marketplace.tsx
git commit -m "feat: implement Our Marketplace section with responsive grid"
```

### 5. Create LookingToDoMore Section
```bash
git add src/components/looking-to-do-more.tsx
git commit -m "feat: implement Looking to Do More CTA section"
```

### 6. Add Placeholder Images
```bash
git add public/placeholder-marketplace-*.svg
git commit -m "feat: add SVG placeholder images for marketplace cards"
```

### 7. Update Next.js Config
```bash
git add next.config.ts
git commit -m "config: enable SVG image support in Next.js"
```

### 8. Integrate Sections into Main Page
```bash
git add src/app/page.tsx
git commit -m "feat: integrate marketplace and CTA sections into landing page"
```

### 9. Add Documentation
```bash
git add IMPLEMENTATION.md TESTING_GUIDE.md COMMIT_GUIDE.md
git commit -m "docs: add implementation and testing documentation"
```

## Commit Message Format

Follow the Conventional Commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `config`: Configuration changes

### Examples

Good commit messages:
```
feat: add MarketplaceCard component with hover animations
fix: correct image aspect ratio on mobile devices
docs: update README with setup instructions
style: format code with Prettier
refactor: extract marketplace data to constants
config: update Tailwind config for custom colors
```

Bad commit messages:
```
update files
fix stuff
changes
wip
asdf
```

## Commit Best Practices

1. **One logical change per commit**
   - Don't mix feature additions with bug fixes
   - Don't combine multiple features in one commit

2. **Write clear commit messages**
   - Use imperative mood ("add" not "added")
   - Be specific about what changed
   - Explain why if not obvious

3. **Keep commits small**
   - Easier to review
   - Easier to revert
   - Easier to understand

4. **Test before committing**
   - Ensure code compiles
   - Run linter
   - Check for TypeScript errors

5. **Don't commit broken code**
   - Each commit should be a working state
   - Don't commit commented-out code
   - Don't commit console.logs

## Git Commands Reference

### Check status
```bash
git status
```

### Stage specific files
```bash
git add <file1> <file2>
```

### Stage all changes
```bash
git add .
```

### Commit with message
```bash
git commit -m "feat: add new feature"
```

### Commit with detailed message
```bash
git commit
# Opens editor for multi-line message
```

### View commit history
```bash
git log --oneline
```

### Amend last commit
```bash
git commit --amend
```

### Unstage files
```bash
git reset HEAD <file>
```

### Discard changes
```bash
git checkout -- <file>
```

## Pre-Commit Checklist

Before each commit:
- [ ] Code compiles without errors
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Linter passes
- [ ] Changes are tested
- [ ] Commit message is clear
- [ ] Only related files are staged

## Branch Strategy

### Create feature branch
```bash
git checkout -b feature/marketplace-cta-sections
```

### Push to remote
```bash
git push -u origin feature/marketplace-cta-sections
```

### Create Pull Request
1. Push all commits to feature branch
2. Go to GitHub/GitLab
3. Create PR from feature branch to main
4. Add description with:
   - What was implemented
   - Link to Loom video
   - Screenshots
   - Testing notes

## Example PR Description

```markdown
# Marketplace & CTA Sections Implementation

## Overview
Implemented "Our Marketplace" and "Looking to Do More" sections as per Figma design.

## Changes
- Created reusable MarketplaceCard component
- Implemented responsive grid layout (1/2/3 columns)
- Added CTA section with gradient background
- Included hover effects and animations
- Added SVG placeholder images
- Ensured accessibility (Lighthouse score: 98)

## Demo
🎥 [Loom Video Walkthrough](https://loom.com/share/...)

## Screenshots
### Desktop
![Desktop view](screenshots/desktop.png)

### Tablet
![Tablet view](screenshots/tablet.png)

### Mobile
![Mobile view](screenshots/mobile.png)

## Testing
- ✅ Responsive on all breakpoints
- ✅ Lighthouse accessibility: 98
- ✅ No TypeScript errors
- ✅ Cross-browser tested
- ✅ Keyboard navigation works

## Checklist
- [x] Pixel-perfect implementation
- [x] Responsive design
- [x] Accessibility score ≥ 95
- [x] Hover effects
- [x] Atomic commits
- [x] Loom video recorded
- [x] Documentation added
```

## Post-Commit Actions

After committing:
1. Push to remote branch
2. Verify CI/CD passes
3. Create PR
4. Request review
5. Address feedback
6. Merge when approved
