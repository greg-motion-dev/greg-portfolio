@AGENTS.md

# CLAUDE.md

## Project Overview

Personal portfolio website for Greg — Creative Frontend Engineer.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, GSAP, and React Three Fiber.
Target: deployed by end of October 2026.

## Tech Stack

- Framework: Next.js 16 (App Router, src/ directory)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4
- Animation: GSAP + ScrollTrigger, Framer Motion
- 3D: React Three Fiber + Drei
- Package manager: npm

## Commands

| Command         | Purpose          |
| --------------- | ---------------- |
| `npm run dev`   | Start dev server |
| `npm run build` | Production build |
| `npm run lint`  | Run ESLint       |

## Folder Structure

src/components/ui/ → small reusable components
src/components/sections/ → page sections (Hero, About, Projects etc.)
src/components/three/ → all R3F / Three.js components
src/data/ → TypeScript data files (projects.ts, skills.ts)
src/hooks/ → custom React hooks
src/types/ → shared TypeScript types
public/models/ → GLTF/GLB files

## Coding Conventions

- Always use TypeScript — no `any` types unless absolutely temporary
- Use named exports (not default exports) for components
- Component files: PascalCase (e.g. HeroSection.tsx)
- Use Tailwind for layout/spacing, GSAP for animation — not CSS transitions
- Keep R3F components isolated inside src/components/three/

## Important Notes

- Owner is still learning TypeScript, GSAP and R3F — explain reasoning when writing new patterns
- Do NOT install a CMS — content lives in src/data/\*.ts files
- Framer Motion is for micro-interactions only, GSAP for scroll/timeline animations
