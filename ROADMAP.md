# NekoBot Roadmap

NekoBot is a local-first streaming overlay companion for OBS and Streamer.bot. The goal is to make one full-scene browser overlay handle many stream effects: text, media, URL embeds, audio/video cues, TTS, and trigger-driven behavior.

This roadmap is directional, not a promise of exact dates. Priorities can change based on stability, streamer feedback, and release testing.

## Current Focus

- Stabilize the public setup flow for OBS, Streamer.bot, overlays, sources, triggers, and TTS.
- Keep GitHub Releases clear and easy to download for Windows and Linux users.
- Improve public documentation with screenshots for every important setup page and component.
- Make NekoBot easier to discover through GitHub, Google Search, and the public documentation site.

## Near Term

- Improve first-run onboarding so new users can create a working overlay faster.
- Tighten Streamer.bot connection guidance, trigger discovery, and troubleshooting.
- Expand overlay setup examples for common streamer workflows:
  - chat message boxes
  - command-triggered media
  - timed meme/audio/video cues
  - conditional trigger behavior
- Improve release notes and download metadata for each platform package.
- Continue refining screenshots and documentation when UI controls change.

## Overlay And Source Tools

- Make box inspection clearer for layout, appearance, trigger, and source settings.
- Improve source management for reusable media and text sources.
- Expand Add Source documentation and examples for:
  - text
  - media
  - URL/browser content
  - TTS
  - common trigger, chroma, animation, typography, and preview options
- Improve guidance for using one OBS overlay scene with multiple boxes inside it.

## Triggers And Logic

- Improve Add Trigger explanations and examples for commands, actions, raw events, and custom sequencing.
- Keep expanding Argument Control documentation for trigger tokens and autocomplete.
- Improve IF/Else documentation, including nested conditions and drag-to-reorder behavior.
- Add more real-world trigger recipes once the public docs have enough stable examples.

## TTS

- Improve setup guidance for model download, model selection, voice testing, and settings.
- Document voice cloning behavior where it applies.
- Add clearer warnings around model size, local hardware, performance, and generated voice usage.
- Improve examples for TTS sources inside overlays.

## Releases And Platforms

- Windows remains the primary tested desktop package.
- Linux desktop and Linux headless builds are available for testing.
- Runtime-only releases are separate from app releases and should stay filtered from the public download page.
- Future platform work depends on packaging stability and user testing feedback.

## Documentation And Search

- Keep the public site focused on practical setup, component reference, and examples.
- Maintain `sitemap.xml`, `robots.txt`, Open Graph metadata, canonical links, and GitHub repository metadata.
- Add public-facing examples and screenshots when they help users understand actual workflows.
- Use GitHub Issues for bug reports, documentation gaps, and feature requests.

## Possible Later Work

- More reusable source templates.
- More ready-made overlay examples.
- Better import/export or sharing flows for overlay setups.
- Richer diagnostics for failed triggers, missing media, or disconnected Streamer.bot sessions.
- More automated release validation for download assets and public documentation links.

## Feedback

Use GitHub Issues for bugs, setup problems, and feature requests:

https://github.com/ArnieTW/NekoBot/issues
