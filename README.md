# Professional Portfolio Website

A modern, responsive portfolio for **Sagar Kumar** built with **React + Vite + TailwindCSS + Framer Motion**.

## Folder Structure

```text
codeyoung/
├── public/
│   ├── images/
│   │   ├── project-ai-web.svg
│   │   ├── project-slash-ai.svg
│   │   └── project-sql.svg
│   └── resume-sagar-kumar.pdf
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── SectionTitle.tsx
│   │   └── SkillsSection.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── postcss.config.js
├── tailwind.config.js
└── package.json
```

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**.
