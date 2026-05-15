# NekoBot Public Site

Public GitHub Pages site for **NekoBot**, a Windows streaming overlay companion for OBS, Streamer.bot, reusable media sources, and optional local CosyVoice TTS.

NekoBot helps streamers create one full-scene OBS browser-source overlay, place multiple trigger-driven boxes inside it, bind those boxes to Streamer.bot commands/actions/events, and show text, media, URL, or TTS sources on stream.

This repository contains the public website, documentation, screenshots, release links, SEO metadata, sitemap, and GitHub Pages assets. It intentionally does not include private/internal application source code.

## Useful Links

- Website: https://arnietw.github.io/NekoBot/
- Documentation: https://arnietw.github.io/NekoBot/docs/
- Quick setup: https://arnietw.github.io/NekoBot/docs/quick-setup.html
- Releases: https://github.com/ArnieTW/NekoBot/releases
- Issues: https://github.com/ArnieTW/NekoBot/issues
- ArnieTW links: https://linktr.ee/ArnieTW

## Keywords

NekoBot, OBS overlay, OBS browser source, Streamer.bot, Streamerbot, Twitch overlay, stream effects, media commands, TTS overlay, CosyVoice TTS, local TTS, streaming tools, trigger bindings, browser-source overlay, stream alerts, meme overlay.

## Publishing

Use this folder as the root of a public repository, or copy it into the `gh-pages` branch of a public repo.

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

Upload NekoBot release packages through GitHub Releases, not into this site repository. The releases page links to GitHub Releases so the public site can stay documentation-only.

## Screenshots

Screenshots live in `assets/screenshots/` and are referenced by the documentation.
They can be regenerated from a running local NekoBot instance with a headless
browser capture workflow.

The public pages link to `https://github.com/ArnieTW/NekoBot/releases` and `https://github.com/ArnieTW/NekoBot/releases/latest`.

## Search Metadata

The site includes page-specific titles/descriptions, Open Graph metadata, Twitter card metadata, canonical links, `robots.txt`, `sitemap.xml`, and homepage JSON-LD structured data.
