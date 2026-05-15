# NekoBot Public Page

This folder is a standalone GitHub Pages site for public documentation and GitHub release links.
It intentionally contains no NekoBot application source code.

## Publishing

Use this folder as the root of a separate public repository, or copy it into the
`gh-pages` branch of a public repo.

Suggested public repo layout:

```text
nekobot-site/
  .nojekyll
  index.html
  styles.css
  docs/
  releases/
```

Then enable GitHub Pages:

1. Open the public repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set source to `Deploy from a branch`.
4. Select the branch and `/root`.

## Release Files

Upload NekoBot release packages through GitHub Releases, not into this site
repository. The releases page links to GitHub Releases so the public site can stay
documentation-only.

## Screenshots

Screenshots live in `assets/screenshots/` and are referenced by the documentation.
They can be regenerated from a running local NekoBot instance with a headless
browser capture workflow.

The public pages link to `https://github.com/ArnieTW/NekoBot/releases` and
`https://github.com/ArnieTW/NekoBot/releases/latest`.
