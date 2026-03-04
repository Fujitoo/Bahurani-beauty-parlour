# Portfolio Image Placement Guide

## Where to Place Images

Place all portfolio images in the following directory:

```
/public/images/portfolio/
```

## Required Image Categories

### 1. Bridal Makeup (4 images)
Place these files in `/public/images/portfolio/`:
- `bridal-1.jpg` - Traditional bridal glow
- `bridal-2.jpg` - Contemporary bride
- `bridal-3.jpg` - Royal bridal elegance
- `bridal-4.jpg` - Soft glam bride

### 2. Party Makeup (4 images)
Place these files in `/public/images/portfolio/`:
- `party-1.jpg` - Glamorous evening look
- `party-2.jpg` - Festive glam
- `party-3.jpg` - Reception ready
- `party-4.jpg` - Cocktail party style

### 3. Celebrity Moments (4 images)
Place these files in `/public/images/portfolio/`:
- `celebrity-1.jpg` - Meet & greet with local celebrities
- `celebrity-2.jpg` - Makeup seminar presentation
- `celebrity-3.jpg` - Industry event appearance
- `celebrity-4.jpg` - Behind the scenes with renowned personalities

### 4. Awards & Recognition (3 images)
Place these files in `/public/images/portfolio/`:
- `award-1.jpg` - Best Makeup Artist Award
- `award-2.jpg` - Excellence in Beauty Services
- `award-3.jpg` - Community Recognition

## Image Recommendations

### Format
- **Preferred format:** JPG or WebP
- **Alternative:** PNG (for images with transparency)

### Size
- **Recommended dimensions:** 800x1000px (3:4 aspect ratio for gallery)
- **Minimum:** 400x500px
- **Maximum:** 1600x2000px

### File Size
- **Optimal:** Under 200KB per image
- **Maximum:** 500KB per image

### Optimization Tips
1. Use tools like TinyPNG or Squoosh to compress images
2. Export as WebP for better performance (optional)
3. Ensure images look good on both mobile and desktop

## Current Structure

```
public/
└── images/
    └── portfolio/
        ├── bridal-1.jpg       (placeholder - replace with real image)
        ├── bridal-2.jpg       (placeholder - replace with real image)
        ├── bridal-3.jpg       (placeholder - replace with real image)
        ├── bridal-4.jpg       (placeholder - replace with real image)
        ├── party-1.jpg        (placeholder - replace with real image)
        ├── party-2.jpg        (placeholder - replace with real image)
        ├── party-3.jpg        (placeholder - replace with real image)
        ├── party-4.jpg        (placeholder - replace with real image)
        ├── celebrity-1.jpg    (placeholder - replace with real image)
        ├── celebrity-2.jpg    (placeholder - replace with real image)
        ├── celebrity-3.jpg    (placeholder - replace with real image)
        ├── celebrity-4.jpg    (placeholder - replace with real image)
        ├── award-1.jpg        (placeholder - replace with real image)
        ├── award-2.jpg        (placeholder - replace with real image)
        └── award-3.jpg        (placeholder - replace with real image)
```

## Notes

- If images are missing, the gallery will display placeholder SVGs automatically
- All images have lazy loading enabled for better performance
- Images are responsive and adapt to different screen sizes
- Clicking any image opens a lightbox with navigation

## Updating Image References

If you want to use different filenames, update these files:
1. `src/components/PortfolioGallery.astro` - Main gallery page
2. `src/components/FeaturedPortfolio.astro` - Homepage preview
3. `src/components/CelebrityAwards.astro` - Celebrity section
