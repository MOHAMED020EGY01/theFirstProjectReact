<!--
  README.md for project_1
  Generated: tailored to the repo files (React + TypeScript + Vite + SCSS)
-->

# Project 1 — React + TypeScript + Vite ✨⚡

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![SCSS](https://img.shields.io/badge/SCSS-C76395?logo=sass&logoColor=white)](https://sass-lang.com)

> A compact, component-driven starter built with React, TypeScript, Vite and SCSS — perfect for rapid prototyping or small UI projects. This repo includes an example Alert component with animated icons and theme variants.

---

## 🚀 Introduction

This repository (Project 1) demonstrates a small, well-structured React application using TypeScript and Vite for ultra-fast development. Components are styled with modular SCSS and show practical patterns: typed props, theme mixins, and lightweight animations.

Use it as a learning reference or a starting point for larger projects.

## ✨ Highlights / Features

- Type-safe React components using TypeScript
- Fast HMR-powered development with Vite
- Component-level SCSS with variables, mixins and animations
- Example `Alert` component with 4 theme variants: success, error, warning, info
- ESLint-ready configuration and sensible NPM scripts

---

## 📁 Project Structure

Top level (relevant files and folders):

- `package.json` — scripts & dependencies
- `vite.config.ts` — Vite configuration (React plugin)
- `src/` — application source
  - `App.tsx` — app entry (example usage of `Alert`)
  - `main.tsx` — React bootstrap (vdom mount)
  - `App.scss` / `index.css` — global styles
  - `components/Alert/` — Alert component implementation
    - `index.tsx` — React component
    - `index.scss` — SCSS styles and animations
  - `types/alertType.ts` — alert type union
  - `interface/alertInterface.ts` — component props interface

You can explore the source to see how types and styles integrate with components.

---

## 🛠 Installation & Quick Start

Prerequisites: Node.js (v16+ recommended)

1. Install dependencies

```bash
npm install
```

2. Start the development server (Vite)

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

Available scripts (from `package.json`):

- `dev` — start Vite dev server
- `build` — run `tsc -b` then `vite build`
- `preview` — serve the built app locally
- `lint` — run ESLint across the project

---

## 📌 Code examples (from this project)

1) `alertType` (typed union)

```ts
// src/types/alertType.ts
export type alertType =
  'success' |
  'error' |
  'warning' |
  'info';
```

2) `Alert` component (core structure)

```tsx
// src/components/Alert/index.tsx
import type { FC } from 'react';
import './index.scss';
import { X } from 'lucide-react';
import type { AlertProps } from '../../interface/alertInterface';

const Alert: FC<AlertProps> = ({ title, message, type, iconSvg }) => (
  <div className={`alert-${type}`}>
    <div className="alert-header">
      <div className="alert-title">
        {iconSvg}
        <h3>{title}</h3>
      </div>
      <span className="alert-close"><X /></span>
    </div>
    <p>{message}</p>
  </div>
);

export default Alert;
```

3) SCSS mixin & animation (snippet)

```scss
// src/components/Alert/index.scss (excerpt)
$success: #22c55e;
$backgroundGreen: #22c55e55;

@mixin themeAlert($name, $bgColor, $borderColor) {
  .alert-#{$name} {
    width: 500px;
    background-color: $bgColor;
    border: dotted 3px $borderColor;
    border-radius: 10px;

    .iconSvg {
      animation: alternates 2s infinite ease-in-out;
    }
  }
}

@keyframes alternates {
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1) rotate(45deg); }
  50% { transform: scale(1) rotate(0deg); }
  75% { transform: scale(0.8) rotate(-45deg); }
  100% { transform: scale(1) rotate(0deg); }
}

@include themeAlert('success', $backgroundGreen, $success);
```

---

## 🧾 Technologies Used

| Technology | Role |
|---|---|
| React ⚛️ | Component-based UI library used to build the app |
| TypeScript 🔷 | Type-safe development, interfaces & enums |
| Vite ⚡ | Dev server and build tool for fast HMR and builds |
| SCSS 💅 | Enhanced CSS with variables, nesting and mixins |
| lucide-react | Lightweight SVG icon set used for alert icons |

---

## 🎨 UI & Animations

The Alert component uses animated icons (CSS keyframes) and subtle transitions for show/hide effects. Styles are organized with a reusable mixin `themeAlert` so adding new alert themes is trivial.

---

## 🖼️ Screenshots / Demo

There are example alerts rendered in `src/App.tsx`. To see the UI, run the dev server and open the URL shown by Vite (usually `http://localhost:5173`).

If you'd like, I can add screenshot images under `public/` (or a `docs/` folder) and include them here.

---

## 👨‍💻 Developer

Mohamed — Full Stack Web Developer

- Skills: HTML, CSS, JavaScript, Bootstrap, jQuery, PHP, MySQL, Laravel, React
- GitHub: https://github.com/MOHAMED020EGY01
- LinkedIn: https://www.linkedin.com/in/your-linkedin (replace with your URL)
- Portfolio: https://your-portfolio.example (replace with your URL)

---

## 📝 Notes & Next Steps

- Replace placeholder social links (LinkedIn, Portfolio) with accurate URLs.
- Add screenshots to `public/` and update this README for a polished demo section.
- Consider adding tests (Vitest or Jest) and a CI workflow for automated checks.

Thanks for checking out this project — happy building! 💻🔥
