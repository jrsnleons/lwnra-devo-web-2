# LWNRA Daily Devotionals

A modern, responsive web application for daily spiritual devotionals from Living Word NRA. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

-   📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
-   🌙 **Dark/Light Mode** - Automatic theme switching with user preference
-   ⚡ **Server-Side Rendering** - Fast loading with Next.js App Router
-   🎨 **Modern UI** - Beautiful teal-themed design with smooth animations
-   📖 **Daily Devotionals** - Scripture verses, reflections, and prayers
-   🔍 **SEO Optimized** - Meta tags, sitemap, and robots.txt included

## Tech Stack

-   **Framework**: Next.js 15.4.5 with App Router
-   **Frontend**: React 19.1.0, TypeScript
-   **Styling**: Tailwind CSS 4, next-themes
-   **UI Components**: Radix UI, Lucide React icons
-   **Build Tool**: Turbopack for fast development

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Node.js:

-   **Netlify**: Use `npm run build` and deploy `.next` folder
-   **Railway**: Connect GitHub repo with automatic deployments
-   **DigitalOcean App Platform**: Use Node.js buildpack
-   **AWS Amplify**: Connect GitHub with Next.js preset

## Environment Variables

Create `.env.local` for development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="LWNRA Daily Devotionals"
NEXT_PUBLIC_APP_DESCRIPTION="Daily spiritual guidance and reflection"
```

For production, update `NEXT_PUBLIC_APP_URL` to your domain.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Homepage
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots.txt
├── components/           # React components
│   ├── devotional/       # Devotional-specific components
│   ├── layout/          # Layout components
│   ├── ui/              # Reusable UI components
│   └── theme-provider.tsx
├── lib/                 # Utility functions
│   ├── devotional-service.ts
│   └── utils.ts
├── types/               # TypeScript definitions
└── public/              # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and belongs to Living Word NRA.

---

Built with ❤️ for the Living Word NRA community

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# lwnra-devo-web-2
