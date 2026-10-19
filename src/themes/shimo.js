// Shimo Docs: white square page on a #f7f7f7 canvas, a 30px/700 title, 15px body text at 1.7 line-height,
// neutral grays and one accessible Shimo blue. Measured from the Shimo editor (2026-10).
export default {
  name: "shimo",
  summary: "Shimo Docs — white sheet, #f7f7f7 canvas, hairlines, 30px title",
  label: { zh: '石墨文档', 'zh-Hant': '石墨文件', en: 'Shimo Docs', ja: 'Shimo', he: 'שימו' }, // lang-ok: viewer-facing theme labels
  scope: [
  "page"
],
  tokens: {
  "common": {
    "--radius": "4px",
    "--bw": "1px",
    "--shadow": "none",
    "--font-sans": "-apple-system, \"system-ui\", \"PingFang SC\", \"Helvetica Neue\", \"Segoe UI\", Roboto, \"Microsoft YaHei\", \"Hiragino Sans GB\", Tahoma, Arial, sans-serif",
    "--font-mono": "ui-monospace, SFMono-Regular, \"JetBrains Mono\", Menlo, Consolas, \"Liberation Mono\", monospace"
  },
  "light": {
    "--bg": "#f7f7f7",
    "--paper": "#ffffff",
    "--ink": "#3a3a3a",
    "--ink-2": "#6b6b6b",
    "--ink-3": "#9a9a9a",
    "--line": "#e7e7e7",
    "--line-2": "#efefef",
    "--fill": "#f5f5f5",
    "--accent": "#2b68c2",
    "--accent-bg": "#eaf2fe",
    "--ok": "#237d4a",
    "--ok-bg": "#e9f7ef",
    "--err": "#c03535",
    "--err-bg": "#fdecec",
    "--warn": "#996200",
    "--warn-bg": "#fdf4e3",
    "--head-bg": "#f2f2f2",
    "--head-fg": "#666666",
    "--node-fill": "#ffffff",
    "--node-stroke": "#d9d9d9",
    "--node-width": "1px",
    "--node-radius": "4px",
    "--node-shadow": "none",
    "--node-text": "#3a3a3a",
    "--hi-fill": "#eaf2fe",
    "--hi-stroke": "#2b68c2",
    "--hi-text": "#1c4f96",
    "--edge-color": "#a8a8a8",
    "--edge-width": "1.2px",
    "--edge-label": "#6b6b6b",
    "--actor-fill": "#f5f5f5",
    "--actor-stroke": "#d9d9d9",
    "--actor-text": "#3a3a3a",
    "--note-fill": "#fff8e6",
    "--note-stroke": "#e8d9a8",
    "--note-width": "1px",
    "--note-radius": "4px",
    "--cluster-fill": "#f7f7f7",
    "--cluster-stroke": "#e5e5e5",
    "--lifeline-color": "#d9d9d9",
    "--series-1": "#2b68c2",
    "--series-2": "#2f8f5b",
    "--series-3": "#d97706",
    "--series-4": "#d14343",
    "--series-5": "#7c5cd6",
    "--series-6": "#0e8a8a"
  },
  "dark": {
    "--bg": "#131313",
    "--paper": "#1f1f1f",
    "--ink": "#e6e6e6",
    "--ink-2": "#b0b0b0",
    "--ink-3": "#7d7d7d",
    "--line": "#333333",
    "--line-2": "#262626",
    "--fill": "#262626",
    "--accent": "#7fb2f0",
    "--accent-bg": "#1b2b40",
    "--ok": "#6fd39a",
    "--ok-bg": "#163224",
    "--err": "#ff8f8f",
    "--err-bg": "#3a1d1f",
    "--warn": "#e8bd6a",
    "--warn-bg": "#352b16",
    "--head-bg": "#2a2a2a",
    "--head-fg": "#c8c8c8",
    "--node-fill": "#262626",
    "--node-stroke": "#3d3d3d",
    "--node-width": "1px",
    "--node-radius": "4px",
    "--node-shadow": "none",
    "--node-text": "#e6e6e6",
    "--hi-fill": "#1b2b40",
    "--hi-stroke": "#7fb2f0",
    "--hi-text": "#cfe4ff",
    "--edge-color": "#666666",
    "--edge-width": "1.2px",
    "--edge-label": "#b0b0b0",
    "--actor-fill": "#242424",
    "--actor-stroke": "#3d3d3d",
    "--actor-text": "#e6e6e6",
    "--note-fill": "#3a3117",
    "--note-stroke": "#5f5130",
    "--note-width": "1px",
    "--note-radius": "4px",
    "--cluster-fill": "#202020",
    "--cluster-stroke": "#343434",
    "--lifeline-color": "#3d3d3d",
    "--series-1": "#7fb2f0",
    "--series-2": "#6fd39a",
    "--series-3": "#f0c15c",
    "--series-4": "#ff9d8a",
    "--series-5": "#b79bff",
    "--series-6": "#5cd0cf"
  }
},
  css: `
/* Measured from the Shimo editor (2026-10): #f7f7f7 canvas, 816px page, 30px/700 title, 14.67px/1.7 body, 100px side padding. */
& .am-sheet, & .am-doc {
  background: var(--paper);
  border: 0;
  border-radius: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.13);
}
& .am-sheet { max-width: 1320px; margin: 24px auto 48px; padding: 56px 64px 64px; }
& .am-doc { margin: 24px auto 48px; padding: 56px 64px 64px; }

/* Page head: a 30px bold document title with no rule under it. */
& .am-head { margin-bottom: 28px; padding: 0; border-bottom: 0; }
& .am-head h1 { font-size: 30px; line-height: 1.4; font-weight: 700; letter-spacing: 0; }
& .am-sub { margin-top: 10px; font-size: 15px; line-height: 1.7; color: var(--ink-2); }
& .am-head-meta { margin-top: 16px; gap: 4px 16px; }
& .am-head-meta b { font-size: 11px; letter-spacing: 0.02em; }

/* Body: 15px at 1.7, close to the editor 14.67px at 1.7. */
& .am-intro { margin-top: 20px; max-width: 72ch; }
& .am-md, & .am-intro { font-size: 15px; line-height: 1.7; }
& .am-md p, & .am-md li, & .am-md blockquote { font-size: 15px; line-height: 1.7; }
& .am-md a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }

/* Panels: sections of a document, not cards. */
& .am-panel { background: transparent; border: 0; border-radius: 0; box-shadow: none; }
& .am-panel-head { border-bottom: 1px solid var(--line); min-height: 40px; }
& .am-panel-id { min-width: 22px; height: 22px; margin: 9px 10px 9px 0; padding: 0 6px; border-radius: 3px; font-size: 12px; font-weight: 600; }
& .am-panel-head h2 { padding: 8px 0; font-size: 16px; font-weight: 700; }
& .am-panel-body { padding: 14px 0 18px; }
& .am-panel-meta { padding-inline: 0 8px; font-size: 11px; }

/* Tables: a light gray header and thin rules, as in Shimo. */
& .am-md table { border-collapse: collapse; font-size: 14px; }
& .am-md th {
  font: 600 14px/1.5 var(--font-sans); color: var(--ink); text-align: start;
  background: var(--fill); border: 1px solid var(--line); padding: 8px 12px;
}
& .am-md th[align="right"] { text-align: right; }
& .am-md th[align="center"] { text-align: center; }
& .am-md td { border: 1px solid var(--line); padding: 8px 12px; background: transparent; }
& .am-md tbody tr:nth-child(even) td { background: transparent; }

/* Code blocks, inline code and quotes. */
& .am-code { background: var(--fill); border: 1px solid var(--line-2); border-radius: 4px; font-size: 13px; line-height: 1.6; }
& .am-md :not(pre) > code { background: var(--fill); border: 1px solid var(--line-2); border-radius: 3px; }
& .am-md blockquote { border-inline-start: 3px solid var(--line); color: var(--ink-2); background: var(--fill); padding: 8px 14px; }

/* Highlight blocks. */
& .am-callout { border-radius: 4px; padding: 12px 14px; }
& .am-callout-title { margin-bottom: 6px; }

/* Toolbar buttons: light gray outlined buttons. */
& .am-toolbar { gap: 8px; }
& .am-btn, & .am-pick { border-radius: 4px; border-color: var(--line); color: var(--ink-2); font-size: 12px; }
& .am-btn:hover, & .am-pick:hover { background: var(--fill); border-color: var(--line); color: var(--ink); }
& .am-btn:focus-visible, & .am-pick:focus-within { outline-color: var(--accent); }

/* Ask boxes, the table of contents and small headings. */
& .am-ask { background: var(--fill); border-color: var(--line); border-radius: 4px; }
& .am-ask-q { font-weight: 600; }
& .am-toc a { border-inline-start-color: var(--line-2); }
& .am-toc a:hover { color: var(--ink); border-inline-start-color: var(--accent); }
& .am-md h3 { font-size: 15px; }
& .am-md h4 { font-size: 14px; }

/* No paper shadow in dark mode. */
&[data-mode="dark"] .am-sheet, &[data-mode="dark"] .am-doc { box-shadow: none; }
@media (prefers-color-scheme: dark) {
  &[data-mode="auto"] .am-sheet, &[data-mode="auto"] .am-doc { box-shadow: none; }
}
@media print {
  & .am-sheet, & .am-doc { box-shadow: none; border: 0; margin: 0; padding: 0; max-width: none; }
}
@media (max-width: 760px) {
  & .am-sheet, & .am-doc { margin: 12px; padding: 28px 20px 32px; }
  & .am-head h1 { font-size: 24px; }
}
`,
};
