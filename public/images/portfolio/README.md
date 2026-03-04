# Portfolio Images

Place your portfolio images in the appropriate subfolders below.

## Folder Structure

```
portfolio/
├── bridal/        - Bridal makeup photos
├── makeup/        - Party and HD makeup photos
├── parlour/       - Parlour interior and ambiance photos
├── celebrity/     - Celebrity meetup and seminar photos
└── awards/        - Award ceremony and recognition photos
```

## Image Guidelines

### Recommended Specifications
- **Format:** JPG or WebP (preferred for web performance)
- **Dimensions:** 800x1000px minimum (3:4 aspect ratio recommended)
- **File Size:** Under 200KB per image for optimal loading
- **Quality:** High resolution but optimized for web

### Naming Convention
Use descriptive filenames:
- `bridal-traditional-01.jpg`
- `party-glam-evening-02.jpg`
- `celebrity-seminar-2024-01.jpg`
- `award-best-mua-2024.jpg`

## Where Images Are Used

| Folder | Used In |
|--------|---------|
| `bridal/` | Portfolio page, Homepage preview |
| `makeup/` | Portfolio page, Homepage preview |
| `parlour/` | Portfolio page (Interior section) |
| `celebrity/` | Portfolio page, Celebrity & Awards section |
| `awards/` | Portfolio page, Celebrity & Awards section |

## After Adding Images

1. Update the image references in:
   - `src/components/PortfolioGallery.astro`
   - `src/components/FeaturedPortfolio.astro`
   - `src/components/CelebrityAwards.astro`

2. Rebuild the project:
   ```bash
   npm run build
   ```

3. Test locally:
   ```bash
   npm run dev
   ```

## Tips

- All images automatically have lazy loading enabled
- Alt text is set in the component files for SEO
- If images are missing, placeholder SVGs will display automatically
