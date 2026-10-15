# Digilink Corporation

Digilink is a responsive marketing site for a nearshore customer experience and contact-center partner based in Isla de Margarita. It is built with Nuxt, Nuxt UI, and Tailwind CSS.

## Stack

- Nuxt 4 and Vue 3
- Nuxt UI
- Tailwind CSS 4
- Iconify Lucide icons
- TypeScript and ESLint

## Requirements

- Node.js 20 or newer
- pnpm 12 or newer

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

## Scripts

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `pnpm dev`       | Run the local Nuxt development server. |
| `pnpm build`     | Create a production build.             |
| `pnpm preview`   | Preview the production build locally.  |
| `pnpm lint`      | Run ESLint across the project.         |
| `pnpm typecheck` | Run Nuxt and TypeScript checks.        |

## Project Structure

```text
app/
  assets/
    css/main.css              Tailwind and Nuxt UI entry point
    images/                   Local image assets and logo
  components/
    AppHeader.vue             Shared responsive navigation
    AppFooter.vue             Shared footer
    landing/                  Landing-page sections
  layouts/default.vue         Application layout
  pages/index.vue             Landing-page composition and SEO metadata
```

Each landing-page section is a focused Vue component. Visual styling belongs in Tailwind utility classes in the template; `app/assets/css/main.css` is reserved for Tailwind, Nuxt UI, and global accessibility or scrolling defaults.

## Content and Assets

Update copy or section-specific imagery in the matching component under `app/components/landing`. Place project-owned images in `app/assets/images` and import them from the component that uses them.

## Production

Create and preview a production build locally:

```bash
pnpm build
pnpm preview
```

The home route is configured for prerendering in `nuxt.config.ts`.
