# Grey — Portfolio

A one-page portfolio for Ajose Jesuferanmi ("Grey"), built with React 18, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Stack.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   └── Footer.jsx
├── data/
│   └── projects.js     — all 7 project entries (name, description, live link, repo link)
└── App.jsx
```

## Notes / things to double check

- **Repo links**: I couldn't confirm the exact repo name for each individual
  project, so every "Repo" button on a project card currently points to your
  GitHub profile (`github.com/Grey-fxtm0`). Open `src/data/projects.js` and
  swap the `repo` field for each project with the direct repo URL once you
  have them handy — it's a one-line change per project.
- **Font**: the reference image used "Anja," which isn't available as a free
  webfont I can legally embed. I used **Fredoka** instead — a free Google
  Font with the same bold, rounded, friendly character. Swap it in
  `index.html` and `tailwind.config.js` if you have a licensed copy of Anja
  you'd rather use.
- **Colors**: Martian Green `#99CC33` and Dark Green `#003333` from your
  palette image, defined in `tailwind.config.js` as `martian` and `dark`.
- **Project descriptions** were written from what's visible on each live
  site — reword any that don't match what the project actually does.
