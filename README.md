# Bahurani Beauty Parlour & Makeup Academy Website

Professional website for Bahurani Beauty Parlour & Makeup Academy, Varanasi.

## 🛠️ Tech Stack

- **Framework:** Astro 4.x
- **Styling:** TailwindCSS 3.x
- **JavaScript:** Vanilla JS
- **Package Manager:** npm

## 📁 Project Structure

```
bahurani-beauty-website/
├── public/
│   ├── images/          # Static images (hero, team, gallery)
│   └── favicon.svg      # Site favicon
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   └── ContactForm.astro
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Website pages
│   │   ├── index.astro  # Home page
│   │   ├── about.astro
│   │   ├── services.astro
│   │   └── contact.astro
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies & scripts
```

---

## 📱 Termux Setup Instructions

### Step 1: Install Prerequisites

Open Termux and run:

```bash
# Update packages
pkg update && pkg upgrade -y

# Install Node.js (LTS version recommended)
pkg install nodejs -y

# Install git (optional, for version control)
pkg install git -y

# Verify installations
node --version
npm --version
```

### Step 2: Navigate to Project Directory

```bash
cd /storage/emulated/0/projects/bahurani-website
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install:
- Astro (framework)
- @astrojs/tailwind (TailwindCSS integration)
- TailwindCSS (styling)

### Step 4: Start Development Server

```bash
npm run dev
```

The site will be available at: `http://localhost:4321`

To access from your phone's browser, find your device's local IP:
```bash
ifconfig
```
Then access: `http://<your-ip>:4321`

---

## 🚀 Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload enabled) |
| `npm run start` | Same as dev (alias) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Pink | `#db2777` (pink-700) | Buttons, accents, highlights |
| Secondary Black | `#18181b` (zinc-900) | Text, footer, dark sections |
| Background White | `#ffffff` | Main background |

---

## 📄 Pages Overview

### 1. Home (`/`)
- Hero section with CTAs
- Featured services grid
- Why Choose Us section
- Call-to-action banner

### 2. About (`/about`)
- Company story
- Milestones timeline
- Core values
- Team introduction

### 3. Services (`/services`)
- Detailed service descriptions
- Pricing information
- Features & inclusions
- Booking CTA

### 4. Contact (`/contact`)
- Contact form (FormSubmit integration)
- Phone, email, address
- Google Maps embed
- Opening hours
- FAQ section

---

## 🔧 Configuration

### Contact Form

The contact form uses [FormSubmit](https://formsubmit.co/). To receive submissions:

1. Replace `bahuranibeauty@gmail.com` in `ContactForm.astro` with actual email
2. First submission will require email confirmation
3. Subsequent submissions go directly to inbox

### Google Maps

Update the iframe `src` in `contact.astro` with the exact embed URL from Google Maps.

### Images

Add your images to `/public/images/`:
- `hero-bg.jpg` - Hero background
- `og-image.jpg` - Social media preview
- `team/` - Team member photos

---

## 🌐 Production Build

### Build for Production

```bash
npm run build
```

Output will be in `/dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy

The `/dist/` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

---

## 📝 Customization

### Adding New Services

Edit `src/pages/index.astro` and `src/pages/services.astro`:

```javascript
const services = [
  {
    icon: '💄',
    title: 'New Service',
    description: 'Description here',
    price: '₹X,XXX',
    features: ['Feature 1', 'Feature 2'],
    href: '/services#slug'
  },
];
```

### Changing Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Adding New Pages

1. Create `.astro` file in `src/pages/`
2. Import `BaseLayout`
3. Add navigation link in `Header.astro`

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 4321
kill $(lsof -t -i:4321)
```

### Node Modules Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Check for TypeScript errors
npx astro check

# Clear Astro cache
rm -rf .astro
npm run build
```

---

## 📞 Business Information

- **Name:** Bahurani Beauty Parlour & Makeup Academy
- **Owner:** Basumati Verma
- **Location:** Koilipul, Varanasi, Dipapur, Uttar Pradesh 221311
- **Phone:** +91 95594 00986
- **Instagram:** @bahurani_beauty_parlour_01
- **Google Maps:** [View Location](https://maps.app.goo.gl/beKpgrmsFcZM1aox9)

---

## 📄 License

This project is proprietary. All rights reserved to Bahurani Beauty Parlour.

---

## 🙏 Credits

Developed for Bahurani Beauty Parlour & Makeup Academy, Varanasi.
