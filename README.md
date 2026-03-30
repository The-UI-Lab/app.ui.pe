# 🌌 app.ui.pe — Micro-App Platform

A blazing fast, framework-free platform hub for specialized micro-apps and developer tools. Built with pure Vanilla JavaScript, CSS variables, and Vite.

![App Hub Preview](https://app.ui.pe/og-image.png)

## 🚀 Architecture

The `app.ui.pe` platform is designed to be as lightweight and SEO-friendly as possible. It utilizes a **Multi-Page Application (MPA)** architecture powered by Vite.

- **Zero Heavy Dependencies**: No React, Vue, Puppeteer, or JSDOM required.
- **Perfect SEO**: Each micro-app (e.g., `/color-lab/`) has its own physical `index.html` file out of the box. This guarantees instant `<head>` parsing and 100/100 Lighthouse scores.
- **External Extensibility**: Apps that require backends (e.g., Next.js hosted on `sql.ui.pe`) can easily be linked in the `apps-registry.js` using the `externalUrl` property, turning the Hub into a highly scalable directory.
- **Glassmorphic Design**: An interactive, particle-powered space theme built entirely with CSS variables for seamless dark mode styling.

## 🛠️ Tech Stack
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Languages**: Vanilla JS (ES6 Modules), HTML5, CSS3
* **Performance**: Hardcoded `JSON-LD` schemas, pre-rendered `meta` tags, accessibility-ready aria attributes.
* **Server**: Uses `serve` for production static hosting on platforms like Dokploy or Vercel.

## 📦 File Structure

```text
├── color-lab/               # Example of an internal micro-app route
│   ├── index.html           # Pre-rendered SEO HTML file for /color-lab/
│   └── color-lab-entry.js   # Initialization script for the specific app
├── dist/                    # Compiled static MPA outputs for production
├── scripts/                 # Utility scripts
├── src/
│   ├── apps/                # Pure JS logic and CSS for individual tools
│   ├── components/          # Reusable Hub components (Navbar, App Card)
│   ├── hub/                 # Landing page logic, Particle systems, and the App Registry
│   └── styles/              # Global design tokens, resets, and animations
├── index.html               # The root landing page HTML (The Hub)
└── vite.config.js           # Configured to build multiple HTML entries (MPA)
```

## 💻 Local Development

### Prerequisites
Make sure you have Node.js installed. We recommend Node v18+.

### Installation

```bash
# Clone the repository
git clone https://github.com/The-UI-Lab/app.ui.pe.git

# Install dependencies
npm install
```

### Starting the Dev Server

```bash
# Spins up the Vite hot-reloading server
npm run dev
```

Visit `http://localhost:3000` to see the hub. You can navigate directly to `/color-lab/` to see the Multi-Page routing in action.

### Building for Production

```bash
# Compiles the static /dist directory
npm run build

# Start a local preview of the production build
npm run preview
```

## 🧩 Adding a New Micro-App

Adding a new tool to the platform is simple:

1. **Create the App Logic**: Go to `src/apps/_template/`, copy it, rename it to your new app (e.g., `src/apps/json-explorer/`), and write your Vanilla JS/CSS logic.
2. **Create the HTML Route**: Create a folder at the project root matching your URL path (e.g., `mkdir json-explorer`). Add an `index.html` inside it. Use `color-lab/index.html` as a guide to hardcode the proper SEO `<title>` and `og:` tags.
3. **Register the HTML File**: Open `vite.config.js` and add your new HTML file to the `rollupOptions.input` list so Vite bundles it automatically.
4. **Register the App Card**: Open `src/hub/apps-registry.js` and add your new app's info to the `apps` array. Change its `status` from `coming-soon` to `live`.

## 🔗 Adding an External App

If you built an app using a framework like Next.js on a different domain (e.g., `https://sql.ui.pe`), you can easily add it to the directory:
1. Open `src/hub/apps-registry.js`.
2. Add the `externalUrl: 'https://sql.ui.pe'` property to the object.
3. The platform card will natively render an `<a>` tag redirecting users seamlessly!

---
*Maintained by The UI Lab for the app.ui.pe ecosystem.*
