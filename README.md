# munraitoo13.dev

Personal website, curated engineering portfolio, and technical blog for **Augusto Mendes** (`munraitoo13`).

## Overview

A fast, Zero-DB Next.js App Router application designed around a flat dark TUI-inspired interface (`Instrument Sans` + `JetBrains Mono`), bilingual copy (`en-US` and `pt-BR`), curated engineering work, structured experience/skills matrices, and git-versioned MDX articles.

## Tech Stack

- **Framework:** Next.js 14.2.35 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS v4 + `@tailwindcss/typography`
- **Localization:** `next-intl` (`en-US`, `pt-BR`)
- **Blog:** Static MDX files parsed with `gray-matter` and rendered via `next-mdx-remote/rsc` + `remark-gfm`
- **Contact:** Server Action with Zod validation, honeypot protection, in-memory IP rate limiting, and Nodemailer (SMTP)

## Routes

- `/` — Hero, interactive featured projects switcher, experience summary, technical stack matrix, latest article, and direct contact
- `/projects` — Curated engineering systems
- `/experiences` — Work history, FIAP Software Engineering education, academic systems, and languages
- `/skills` — Categorized technical stack
- `/blog` & `/blog/[slug]` — Static MDX articles
- `/contact` — Direct email + contact form

## Publishing a Blog Post

Create a new `.mdx` file inside `content/blog/<slug>.mdx`:

```mdx
---
title: "Post Title"
description: "Short summary for cards and Open Graph metadata."
date: "2026-11-24"
locale: "en-US"
tags: ["architecture", "nextjs"]
featured: false
published: true
---

Article content in Markdown / MDX...
```

Push to `main` and Vercel builds and publishes `/blog/<slug>` automatically (including updating `/sitemap.xml`).

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

### Environment Variables (optional for local preview, needed for `/contact` email dispatch)

```bash
EMAIL=munraitoo13@gmail.com
PASSWORD=        # Google App Password
NEXT_PUBLIC_GA_ID=G-D8094R1DSH
```

## Scripts

- `pnpm dev` — start development server
- `pnpm build` — build production bundle
- `pnpm start` — serve production build
- `pnpm lint` — run Next.js linting
