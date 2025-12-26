# Portfolio

A minimal, professional portfolio website built with Astro showcasing full-stack development expertise and personal projects.

## Overview

This portfolio website features a clean, minimal design with a focus on simplicity and elegance. The site includes a personal bio, contact information, and supports both light and dark themes.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with component islands
- **Deployment**: Vercel (static hosting)
- **Styling**: CSS with CSS Variables (no external CSS frameworks)
- **Language**: TypeScript

## Features

- **Minimal Design**: Clean, professional interface with neutral colors
- **Light/Dark Theme**: Toggle between light and dark modes with theme persistence
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Personal Bio**: Multi-paragraph bio with customizable content
- **Contact Links**: GitHub and LinkedIn integration

## Local Development

### Prerequisites

- Node.js 18+ and pnpm

### Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm astro` - Run Astro CLI commands

## Deployment

### Deploying to Vercel

This project is configured for deployment on Vercel with a custom domain.

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
pnpm add -g vercel
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

2. Add your custom domain

3. Follow Vercel's instructions to configure your DNS records:
   - Add an A record pointing to Vercel's IP addresses, OR
   - Add a CNAME record pointing to `cname.vercel-dns.com`

4. Vercel will automatically provision an SSL certificate for your domain

### Build Configuration

The project uses the `@astrojs/vercel` adapter configured in `astro.config.mjs` for optimal Vercel deployment. The build output is static, which works perfectly with Vercel's static hosting.

## Project Structure

```
/
├── public/          # Static assets (favicon, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── ThemeToggle.astro
│   │   └── ProjectCard.astro
│   ├── layouts/     # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/       # Route pages
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── contact.astro
│   └── utils/       # Utility functions and constants
│       ├── constants.ts
│       └── theme.ts
├── astro.config.mjs # Astro configuration
├── package.json
└── tsconfig.json
```

## Customization

### Updating Personal Information

Edit the `SITE_CONFIG` object in `src/utils/constants.ts` to update:
- Name
- Title
- Description
- Bio (array of paragraphs)

### Updating Contact Links

Edit the `CONTACT_LINKS` object in `src/utils/constants.ts` to update:
- GitHub URL
- LinkedIn URL

### Updating Projects

Edit the `PROJECTS` array in `src/utils/constants.ts` to add, remove, or modify project entries.

### Styling

Global styles and CSS variables (including theme colors) are defined in `src/layouts/BaseLayout.astro`. Component-specific styles are scoped within each component file.

### Theme Customization

Theme colors can be customized in `src/layouts/BaseLayout.astro`:
- Light mode colors are defined under `[data-theme="light"]`
- Dark mode colors are defined under `[data-theme="dark"]`
- Default theme is dark mode

## License

All rights reserved.
