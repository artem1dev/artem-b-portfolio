# Artem B. — Portfolio

Personal portfolio site for Artem B., a senior full-stack engineer. A single-page
site covering background, selected work, skills, education and contact details,
built from the content of his CV.

## Stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · lucide-react

## Development

```bash
npm install
npm run dev      # local dev server
npm run build
npm run lint
```

## Editing content

All copy, links and lists live in [`src/data/content.js`](src/data/content.js) —
the components read from it, so changing what the site says never requires
touching JSX.

Static assets are served from `public/`: the CV offered by the "Download CV"
button, the profile photo and the favicon.
