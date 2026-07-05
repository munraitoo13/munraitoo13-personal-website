# munraitoo13.dev

Personal website, blog, and portfolio for Augusto Mendes.

<div align="center">
  <img src="https://i.imgur.com/qbWyu9U.png" alt="Website preview" />
</div>

## Overview

This is a multilingual Next.js application built with the App Router. It combines a public portfolio, a blog powered by MDX, a contact flow with captcha protection, and a private admin area for managing posts.

## Features

- Multilingual content in English, Portuguese, French, and German.
- SEO-focused pages for home, projects, skills, blog, and contact.
- MDX-based blog posts and localized page content.
- Contact form with reCAPTCHA, email delivery, and rate limiting.
- Private admin routes for creating and editing posts.
- Prisma + PostgreSQL for persistence.
- Responsive UI with Tailwind CSS and motion polish.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- next-intl
- Prisma
- PostgreSQL
- MDX
- Tailwind CSS
- react-hook-form
- react-google-recaptcha
- nodemailer

## Getting Started

### Prerequisites

- Node.js 18+
- `pnpm`
- PostgreSQL database

### Install

```bash
pnpm install
```

### Environment variables

Create a `.env.local` file in the project root and set the variables used by the app:

```bash
CAPTCHA_SECRET=
EMAIL=
NEXT_PUBLIC_SITE_KEY=
POSTGRES_DATABASE=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_PRISMA_URL=
POSTGRES_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_URL_NO_SSL=
POSTGRES_USER=
VERCEL_OIDC_TOKEN=
```

### Database

Generate Prisma Client and run migrations:

```bash
pnpm prisma generate
pnpm prisma migrate dev
```

### Development

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

- `pnpm dev` - start the development server
- `pnpm build` - generate Prisma Client and build the app
- `pnpm start` - start the production server
- `pnpm lint` - run Next.js linting

## Project Structure

```txt
src/
├── actions/     server actions
├── app/         App Router routes and layouts
├── components/  reusable UI components
├── hooks/       shared React hooks
├── i18n/        locale config and MDX loaders
├── lib/         shared utilities and clients
└── utils/       formatting and helper functions
```

## Public Areas

- Home
- Projects
- Skills
- Blog
- Contact

## Private Areas

- Login
- Admin dashboard
- Post creation and editing

## Deployment

The app is set up for Vercel deployment with PostgreSQL and environment variables configured through the platform.

## Notes

- Blog posts are stored as records and rendered through MDX.
- The site uses localized metadata and translated page copy for SEO.
- Private routes are protected and unpublished blog posts are restricted to authenticated access.

## License

No license has been specified yet.
