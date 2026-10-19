# Answer me with HTML in Shimo Style: install guide for AI agents

> This file is written for the AI agent that installs the project. A person can follow it too.

Install **Answer me with HTML in Shimo Style** for me. Execute all steps below autonomously. Do not ask me anything,
except once in Step 1 if Node.js is missing or older than 20. At the end, send one short report.

OBJECTIVE: the skill is installed for the agent you run in, and `am` can render a page in the Shimo Docs theme.

DONE WHEN: `node <skill dir>/scripts/am.mjs --version` prints a version number and `am list` includes `shimo`, or in
Claude Code `claude plugin list` shows `answer-me-with-html-in-shimo-style` as enabled.

## Rules

- Do not ask me questions, except the Node.js question in Step 1.
- Run only the commands in this file. The CLI is already bundled in the skill; do not build it.
- Install **one** way per agent. A skill and a plugin with the same name load twice and conflict.
- Never remove an existing install. If one exists, keep it and skip Step 3.
- Put the commands of one step in a single shell call, so I approve as few prompts as possible.

## Step 1: Check Node.js

```bash
node --version
```

You need v20 or newer. If it is older or missing, show me the exact command for my system and ask me once:

| System | Command |
| :--- | :--- |
| macOS with Homebrew | `brew install node` |
| Windows | `winget install OpenJS.NodeJS.LTS` |
| Linux, or macOS without Homebrew | `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh \| bash`, then `. ~/.nvm/nvm.sh && nvm install --lts` |

If I agree, run it, then run `node --version` again. If I say no, stop and tell me.

## Step 2: Check for an existing install

```bash
ls -d ~/.agents/skills/answer-me-with-html-in-shimo-style ~/.claude/skills/answer-me-with-html-in-shimo-style 2>/dev/null; claude plugin list 2>/dev/null | grep answer-me-with-html-in-shimo-style
```

- Nothing found: go to Step 3.
- Found and it is how Step 3 would install for you: update it (`npx -y skills update answer-me-with-html-in-shimo-style -y`
  for a skill, `claude plugin update answer-me-with-html-in-shimo-style@answer-me-with-html-in-Shimo-Style` for the
  plugin), then go to Step 4.
- Found but installed another way: keep it, skip Step 3, and say so in the report.

## Step 3: Install

### Claude Code

```bash
claude plugin marketplace add kanzakivnw/answer-me-with-html-in-Shimo-Style
claude plugin install answer-me-with-html-in-shimo-style@answer-me-with-html-in-Shimo-Style
```

The plugin loads in the next session, or after I run `/reload-plugins`. Say so in the report.

### DeepSeek Harness

```bash
dsh plugin --profile <profile> add github:kanzakivnw/answer-me-with-html-in-Shimo-Style
```

Use the profile I run in (`web` is the shipped one). `dsh plugin add` needs `pnpm` on `PATH`. The skill appears in the
next DSH session of that profile.

### Every other agent (Codex, Cursor, OpenCode, ...)

```bash
npx -y skills add kanzakivnw/answer-me-with-html-in-Shimo-Style -g -y -a <your agent name>
```

Use the agent name that `npx -y skills add --help` documents. For Claude Code it is `claude-code`. If the installer
does not know your name, stop and put the error in the report.

### Manual install

```bash
git clone --depth 1 https://github.com/kanzakivnw/answer-me-with-html-in-Shimo-Style.git /tmp/answer-me-with-html-in-shimo-style
mkdir -p ~/.agents/skills
cp -R /tmp/answer-me-with-html-in-shimo-style/skills/answer-me-with-html-in-shimo-style ~/.agents/skills/answer-me-with-html-in-shimo-style
```

## Step 4: Check that it works

For a skill install:

```bash
dir=$(ls -d ~/.agents/skills/answer-me-with-html-in-shimo-style ~/.claude/skills/answer-me-with-html-in-shimo-style 2>/dev/null | head -1)
node "$dir/scripts/am.mjs" --version
node "$dir/scripts/am.mjs" list | head -20
node "$dir/scripts/am.mjs" theme check shimo --no-open
```

`list` must show `shimo`, and `theme check` must print `0 errors, 0 warnings`. Then render a small page:

```bash
node "$dir/scripts/am.mjs" render - --no-open <<'EOF'
---
title: Install check
---
## A It works

The Shimo Docs theme is the default.
EOF
```

For a plugin install, run `claude plugin list` and check that it is enabled. Do not wait for the reload.

## Step 5: Final report

Send one message with:

1. What you installed, and how.
2. The result of the check, and the path of the page you rendered.
3. What I still need to do, if anything (for example `/reload-plugins`), or "nothing".
4. How to change settings: `am config` in a terminal, or `/answer-me-with-html-in-shimo-style:config` in Claude Code.
5. One line: the default theme is `shimo`; `am config set theme auto` restores the content-based choice.

## Troubleshooting

| Problem | Cause and fix |
| :--- | :--- |
| `node: command not found`, or Node older than 20 | Go back to Step 1 and offer to install it. |
| The skill is not found after install | Start a new session. In Claude Code, run `/reload-plugins`. |
| `shimo` missing from `am list` | The installed copy is stale. Reinstall from this repository. |
| `npx` cannot reach the network | Use the manual install in Step 3. |
