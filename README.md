# M S Parenti Portfolio

A React + Vite portfolio website ready for GitHub Pages.

## Local development

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This project is configured to build for a repository hosted at `https://<your-github-username>.github.io/msparenti`.

Install the deploy helper:

```bash
npm install --save-dev gh-pages
```

Then deploy:

```bash
npm run deploy
```

If you prefer, you can also deploy by setting the repository's GitHub Pages branch to `gh-pages` and pushing the `dist/` folder.

## Notes

- `vite.config.js` uses `base: '/msparenti/'` for GitHub Pages path support.
- The app is now configured as a static portfolio site.
- Remove or update any placeholders before publishing.
