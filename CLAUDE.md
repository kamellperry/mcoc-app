# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # Start development server (http://localhost:3000)
bun run build    # Production build
bun run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 app using the App Router with React 19 and Tailwind CSS 4.

### UI Component System

The project uses a custom component library built on **Base UI** (`@base-ui/react`) primitives with **shadcn** styling patterns:

- Components live in `components/ui/` and wrap Base UI primitives (e.g., `Button` wraps `@base-ui/react/button`)
- Variants are defined using `class-variance-authority` (cva)
- The `cn()` utility in `lib/utils.ts` merges Tailwind classes using `clsx` and `tailwind-merge`

### Styling

- **Tailwind CSS 4** with CSS-based configuration in `app/globals.css`
- Design tokens use CSS custom properties with OKLCH color space
- Dark mode via `.dark` class selector
- Additional component styles from `@silk-hq/components` and `tw-animate-css`

### Path Aliases

`@/*` maps to the project root (configured in tsconfig.json).
