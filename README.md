# Portfolio

A minimal, professional portfolio website built with Astro showcasing backend development expertise, database design, and full-stack projects.

## Overview

This portfolio website highlights 3 years of experience building production-ready applications in health tech and crowdfunding platforms. The site features a clean, minimal design that emphasizes technical expertise while maintaining a polished frontend interface.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with component islands
- **Deployment**: Vercel (static hosting)
- **Styling**: CSS with CSS Variables (no external CSS frameworks)
- **Language**: TypeScript

## Features

- **Home/About Me**: Highlights backend-heavy experience and full-stack capabilities
- **Projects**: Showcases 7 production applications with detailed information
- **Contact**: Email and social media links (GitHub, LinkedIn)
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Minimal Design**: Clean, professional interface with neutral colors

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Deployment

### Deploying to Vercel

This project is configured for deployment on Vercel with a custom domain (`zeddjaykay.dev`).

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

#### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository

2. Import the repository in [Vercel Dashboard](https://vercel.com/dashboard)

3. Vercel will automatically detect Astro and configure the build settings

4. Click "Deploy"

#### Custom Domain Setup

1. In your Vercel project dashboard, go to **Settings** → **Domains**

2. Add your custom domain: `zeddjaykay.dev`

3. Follow Vercel's instructions to configure your DNS records:
   - Add an A record pointing to Vercel's IP addresses, OR
   - Add a CNAME record pointing to `cname.vercel-dns.com`

4. Vercel will automatically provision an SSL certificate for your domain

### Build Configuration

The project uses the `@astrojs/vercel` adapter configured in `astro.config.mjs` for optimal Vercel deployment. The build output is static, which works perfectly with Vercel's static hosting.

## Project Structure

```
/
├── public/          # Static assets (images, favicon, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── ProjectCard.astro
│   ├── layouts/     # Page layouts
│   │   └── BaseLayout.astro
│   └── pages/       # Route pages
│       ├── index.astro
│       ├── projects.astro
│       └── contact.astro
├── astro.config.mjs # Astro configuration
├── package.json
└── tsconfig.json
```

## Customization

### Updating Projects

Edit the `projects` array in `src/pages/projects.astro` to add, remove, or modify project entries.

### Updating Contact Information

Edit the contact details in `src/pages/contact.astro`.

### Styling

Global styles and CSS variables are defined in `src/layouts/BaseLayout.astro`. Component-specific styles are scoped within each component file.

### Adding Screenshots

1. Place project screenshots in the `public/` directory
2. Reference them in the project data using the `screenshot` property

## License

All rights reserved.

