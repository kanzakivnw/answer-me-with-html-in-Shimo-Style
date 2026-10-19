// The selectors a theme's decoration css (the `css` field of a theme file, after the leading &) may target.
// This list is a compatibility contract: base.css keeps every class named here, so a theme file written against it
// keeps working in later versions (CONTRIBUTING.md, "Theme compatibility"). Add to it freely; never remove or rename an entry.
// test/theme-files.test.js checks that every class in the list exists in base.css.
export const THEME_SELECTORS = Object.freeze([
  // The page head: title, intro and the line of meta tags.
  '.am-head', '.am-head h1', '.am-head-meta', '.am-sub', '.am-intro',
  // A panel: the head (ID, title, meta) and the body that holds the components.
  '.am-panel', '.am-panel--bare', '.am-panel-head', '.am-panel-head h2', '.am-panel-id', '.am-panel-meta', '.am-panel-body',
  // Prose, callouts and key-value tables.
  '.am-md', '.am-md table', '.am-md th', '.am-md td', '.am-md a', '.am-md blockquote', '.am-md h3', '.am-md h4',
  '.am-callout', '.am-callout--ok', '.am-callout--warn', '.am-callout--err', '.am-callout-title', '.am-kv',
  // The page sheet / doc frame, code blocks, the Ask box, the table of contents and the toolbar buttons.
  '.am-sheet', '.am-doc', '.am-code', '.am-ask', '.am-ask-q', '.am-toc a', '.am-toolbar', '.am-btn', '.am-pick',
  // The panel comment button (inside the panel head) and its "has a comment" state, so it stays visible on a dark or coloured head.
  '.am-comment-btn', '.am-comment-btn--on',
  // The drawing frame and its rulers (blueprint).
  '.am-frame', '.am-ruler',
]);
