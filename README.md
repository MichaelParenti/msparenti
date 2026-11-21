# Michael Parenti Portfolio

Standalone Vite + React portfolio site. It requires no API keys or environment variables.

## Development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

The GitHub Actions workflow builds the site and deploys it to GitHub Pages whenever
you push to `main`. In the repository's **Settings → Pages**, set the build and
deployment source to **GitHub Actions**. The production build uses the
`/msparenti/` project-site path; local development continues to use `/`.
