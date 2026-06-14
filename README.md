<div align="center">

# Sergio Ariza - Portfolio

**Personal portfolio & blog** of Sergio Ariza, Software Engineer based in Barcelona, Spain - built with Astro v6, React, Tailwind CSS v4, shadcn/ui, and MDX.

[![Astro](https://img.shields.io/badge/Astro-v6-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[**Live Site**](https://sergioariza.github.io)

</div>

## About

This repo powers my personal site: bio, work history, skills, project showcase, and a blog. Content lives in a couple of typed data files (`src/data/resume.tsx`, `src/data/config.ts`) and MDX posts under `src/content/blog/`; everything else is presentation.

It's based on the [Starfolio](https://github.com/webrating/starfolio) Astro template - see [Credits](#credits).

## Stack

- [Astro v6](https://astro.build) - static site generator
- [React](https://react.dev) - interactive islands
- [Tailwind CSS v4](https://tailwindcss.com) - styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [Cloudflare Workers](https://workers.cloudflare.com) - deployment adapter (via `@astrojs/cloudflare`)
- [pnpm](https://pnpm.io) - package manager

## Local development

**Prerequisites:** Node.js >= 22.12.0, pnpm

```bash
pnpm install
pnpm dev
```

Open <http://localhost:4321>.

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm generate-types` | Regenerate Cloudflare/Wrangler types |

## Content & configuration

| File | Controls |
| --- | --- |
| `src/data/resume.tsx` | Name, bio, work, education, projects, skills, social links |
| `src/data/config.ts` | Site URL, SEO, theme colors, font size |
| `src/content/blog/*.mdx` | Blog posts |

**Adding a blog post:** create a `.mdx` file under `src/content/blog/` with frontmatter:

```mdx
---
title: "Post Title"
publishedAt: "2025-01-01"
summary: "One-line description shown in the post list."
image: "https://..."   # optional cover image
---

Content here - full MDX, components, code blocks, everything.
```

**Changing theme colors:** grab a theme from [ui.shadcn.com/themes](https://ui.shadcn.com/themes) or [tweakcn.com](https://tweakcn.com), copy the CSS variables into the `light` / `dark` blocks in `src/data/config.ts` (strip the `--` prefix, camelCase the names, e.g. `card-foreground` -> `cardForeground`).

**Changing fonts:** install a variable font via Fontsource (`pnpm add @fontsource-variable/<font-name>`), then swap the `@import` and `--font-sans` / `--font-mono` values in `src/styles/global.css`.

## Project structure

```
src/
├── content/blog/     # MDX blog posts
├── data/
│   ├── resume.tsx    # Personal data (bio, work, projects, skills)
│   └── config.ts     # Site settings & theme
├── components/       # UI components
├── layouts/
│   └── Layout.astro  # HTML shell, reads from config.ts
├── pages/
│   ├── index.astro
│   └── blog/
└── styles/
    └── global.css    # Font imports & Tailwind base
public/               # Static assets (images, favicon)
```

## Deployment

Deployed via Cloudflare Workers/Pages using `@astrojs/cloudflare`. Run `pnpm build` and deploy the `dist/` output (or let Cloudflare build it directly from the repo).

## Credits

- [Starfolio](https://github.com/webrating/starfolio) - the Astro template this site is built on
- [dillionverma/portfolio](https://github.com/dillionverma/portfolio) - the original Next.js portfolio that inspired Starfolio
- [Astro](https://astro.build), [shadcn/ui](https://ui.shadcn.com), [Tailwind CSS](https://tailwindcss.com)

## License

[MIT](LICENSE)
