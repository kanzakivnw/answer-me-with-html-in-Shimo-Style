<p align="center">
  <img src="docs/logo.svg" width="64" height="64" alt="Answer me with HTML in Shimo Style logo">
</p>

<h1 align="center">Answer me with HTML in Shimo Style</h1>

<p align="center">
  <b>An agent skill that answers hard questions with a one-page HTML in Shimo Docs style.</b>
</p>

<p align="center">
  <img src="docs/images/shimo-light.png" alt="A rendered answer page using the Shimo Docs theme: white paper on a light gray canvas, a bold title, tables and diagrams with thin gray rules" width="100%">
</p>

<p align="center">
  <sub>Default light theme. Run <code>am config set mode dark</code> (or use the page toolbar) for the dark variant.</sub>
</p>

A fork of [QingYunA/answer-me-with-html](https://github.com/QingYunA/answer-me-with-html) (MIT) that turns the Shimo Docs
look into a **built-in theme and the default theme**. The CLI, draft format, components, explainer videos and settings
come from the original project. The Shimo theme is new: white square page on a `#f7f7f7` canvas, a 30px/700 document
title, 15px/1.7 body text, neutral grays, thin rules, and one accessible Shimo blue for links and highlights.

## What you get

- One standalone HTML file per answer. No server, no dependencies to install after the skill is installed.
- The Shimo Docs theme is `shimo`, built in and set as the default. `theme: auto` still picks paper / blueprint by content.
- Light and dark palettes both pass the theme's contrast checks (0 errors, 0 warnings).
- Tables, code blocks, callouts, flow / sequence / ER diagrams, charts, timelines, trees and math all follow the theme.
- The original features remain: `am render`, `am patch`, `am video`, STE writing checks, page comments and the reply loop.

## Install

You need [Node.js](https://nodejs.org/) 20 or newer. There is no `npm install` step: the CLI is bundled inside the skill.

### Let your agent install it

Paste this into Claude Code, Codex, Cursor, OpenCode, DeepSeek Harness or another agent:

> Install Answer me with HTML in Shimo Style: read
> https://raw.githubusercontent.com/kanzakivnw/answer-me-with-html-in-Shimo-Style/main/INSTALL.md and follow it.

### One command

```bash
npx skills add kanzakivnw/answer-me-with-html-in-Shimo-Style
```

The installer ([vercel-labs/skills](https://github.com/vercel-labs/skills)) asks which agents to install into.

### Claude Code plugin

```
/plugin marketplace add kanzakivnw/answer-me-with-html-in-Shimo-Style
/plugin install answer-me-with-html-in-shimo-style@answer-me-with-html-in-Shimo-Style
```

### DeepSeek Harness plugin

```bash
dsh plugin --profile web add github:kanzakivnw/answer-me-with-html-in-Shimo-Style
```

### Manual install

```bash
git clone --depth 1 https://github.com/kanzakivnw/answer-me-with-html-in-Shimo-Style.git /tmp/answer-me-with-html-in-shimo-style
cp -R /tmp/answer-me-with-html-in-shimo-style/skills/answer-me-with-html-in-shimo-style ~/.claude/skills/answer-me-with-html-in-shimo-style
```

Other skill folders: Codex `~/.codex/skills/`, Cursor `~/.cursor/skills/`, OpenCode `~/.config/opencode/skill/`,
DeepSeek Harness `~/.dsh/skills/`.

## Use

Ask a question the way you always do:

```
> Explain the TCP three-way handshake
> Redis or Memcached for our cache?
> Map out how the modules in this repo fit together
```

The agent writes a short Markdown draft and runs the bundled CLI. The page goes to
`~/.answer-me-with-html/pages/` (the same data folder as the original project; install one or the other, because
settings and pages are shared). Open it in a browser.

Change settings with the agent (`config`), or directly:

```bash
am config                      # show settings; theme defaults to shimo
am config set theme auto       # content-based theme choice
am config set theme shimo      # back to the Shimo Docs theme
am config set mode dark        # dark palette
am list                        # templates, themes, components
```

On the page itself, the top-right toolbar switches theme and light/dark mode, opens comments, and copies the reply
Markdown back to the agent.

## The Shimo theme

The theme follows measurements from the Shimo editor (2026-10):

| Element | Value |
| :--- | :--- |
| Canvas | `#f7f7f7` |
| Page | white, square corners, `0 1px 5px rgba(0,0,0,.13)` shadow |
| Document title | 30px, weight 700 |
| Body | 15px, line-height 1.7 |
| Grays | text `#3a3a3a` / `#6b6b6b` / `#9a9a9a`; rules `#e7e7e7` |
| Accent | `#2b68c2` (links, highlights, focus) |
| Tables | `#f5f5f5` header, 1px `#e7e7e7` rules |

The theme file lives in the source at `src/themes/shimo.js`. A user theme with the same name in
`~/.answer-me-with-html/themes/shimo.json` would shadow it; do not install one if you want this built-in version.

## Development

```bash
npm ci
npm run build     # rebuild skills/answer-me-with-html-in-shimo-style/scripts/am.mjs
npm test
```

`skills/answer-me-with-html-in-shimo-style/scripts/am.mjs` is generated. Edit `src/`, then run `npm run build` and
commit both.

## Always-on mode (optional)

To add a small page to every conclusion, paste this rule into your agent's rules file (for example `CLAUDE.md` or
`AGENTS.md`):

> [answer-me-with-html-in-shimo-style always-on] When you give a conclusion, summary, plan, comparison, review or explanation, also render a small page with the bundled CLI; render with `--no-open` and put the page link on the last line of the reply in the format described in the skill's `SKILL.md`.

## Credits and license

Forked from [Answer me with HTML](https://github.com/QingYunA/answer-me-with-html) by QingYunA, MIT.
The Shimo theme, fork branding and default-theme change are by [kanzakivnw](https://github.com/kanzakivnw).
See [LICENSE](LICENSE) and [NOTICE](NOTICE). The Bangers font that a theme can embed is under the
[SIL Open Font License 1.1](skills/answer-me-with-html-in-shimo-style/licenses/OFL-Bangers.txt).
