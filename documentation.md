# Portfolio Documentation

This file tracks the implementation details and changelog of the portfolio project.

## Changelog
- **Initial Setup**: Created tracking documentation.
- **Next.js Init**: Setup App Router with Tailwind CSS v4, framer-motion, lucide-react, next-themes.
- **Layout & Structure**: Built a responsive layout with Sidebar and Header.
- **Command Menu**: Implemented a functional ⌘K interface using `cmdk` for search and routing.
- **Theme Support**: Implemented dark/light mode via `next-themes`.
- **Content Pages**: Added Introduction, About, Projects, Skills, Experience, and Education parsing the provided CV.

## Variables & Placeholders TO DO
*(Elements requiring manual modification)*

- [ ] Ensure `Resume/Sai_Venkat_CV.pdf` exists directly inside `public/` directory so the link works correctly. Currently, your link `Resume/Sai_Venkat_CV.pdf` may break if the Resume folder isn't in `public/`.
- [ ] You can update the `siteConfig` or `metadata` in `src/app/layout.tsx` for SEO optimization.
- [ ] Check link to your actual resume in `src/app/page.tsx`, `src/components/layout/Header.tsx`.
