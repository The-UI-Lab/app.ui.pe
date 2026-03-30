/**
 * Central registry of all micro-apps.
 *
 * To add a new app:
 *   1. Create a folder under src/apps/<your-app>/
 *   2. Export { mount, unmount, meta } from index.js
 *   3. Add an entry here
 */

export const apps = [
  {
    id: 'color-lab',
    name: 'Color Lab',
    description: 'Generate harmonious palettes, check contrast ratios, and build beautiful CSS gradients — all in one place.',
    icon: '🎨',
    color: '#f093fb',
    iconBg: 'rgba(240, 147, 251, 0.12)',
    iconGlow: 'rgba(240, 147, 251, 0.15)',
    tags: ['design', 'css', 'colors'],
    status: 'live',
    // Internal app - navigates to /src/apps/color-lab/
  },
  {
    id: 'json-explorer',
    name: 'JSON Explorer',
    description: 'Paste, visualize, and navigate JSON data with a beautiful tree view, syntax highlighting, and path copying.',
    icon: '🔍',
    color: '#00d2ff',
    iconBg: 'rgba(0, 210, 255, 0.12)',
    iconGlow: 'rgba(0, 210, 255, 0.15)',
    tags: ['dev-tools', 'json', 'data'],
    status: 'coming-soon',
  },
  {
    id: 'sql-viewer',
    name: 'SQL Viewer',
    description: 'Write, format, and visualize SQL queries with syntax highlighting, schema diagrams, and query explanation.',
    icon: '🗃️',
    color: '#667eea',
    iconBg: 'rgba(102, 126, 234, 0.12)',
    iconGlow: 'rgba(102, 126, 234, 0.15)',
    tags: ['database', 'sql', 'dev-tools'],
    status: 'coming-soon',
    // externalUrl: 'https://sql.ui.pe' // Example of how an external app with a backend is linked
  },
  {
    id: 'regex-lab',
    name: 'Regex Lab',
    description: 'Build, test, and debug regular expressions with real-time matching, group highlighting, and cheatsheet.',
    icon: '🧪',
    color: '#4ade80',
    iconBg: 'rgba(74, 222, 128, 0.12)',
    iconGlow: 'rgba(74, 222, 128, 0.15)',
    tags: ['dev-tools', 'regex', 'testing'],
    status: 'coming-soon',
  },
  {
    id: 'markdown-studio',
    name: 'Markdown Studio',
    description: 'A distraction-free markdown editor with live preview, export to HTML/PDF, and GitHub-flavored support.',
    icon: '✍️',
    color: '#fb923c',
    iconBg: 'rgba(251, 146, 60, 0.12)',
    iconGlow: 'rgba(251, 146, 60, 0.15)',
    tags: ['writing', 'markdown', 'editor'],
    status: 'coming-soon',
  },
  {
    id: 'hash-forge',
    name: 'Hash Forge',
    description: 'Generate and verify MD5, SHA-1, SHA-256, and other cryptographic hashes instantly in your browser.',
    icon: '🔐',
    color: '#f472b6',
    iconBg: 'rgba(244, 114, 182, 0.12)',
    iconGlow: 'rgba(244, 114, 182, 0.15)',
    tags: ['security', 'crypto', 'utility'],
    status: 'coming-soon',
  },
];
