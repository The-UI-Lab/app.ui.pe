import './styles/index.css';
import './styles/hub.css';
import './styles/transitions.css';

import { mountHub } from './hub/hub.js';
import { apps } from './hub/apps-registry.js';
import { createNavbar } from './components/navbar.js';

const appContainer = document.getElementById('app');
let currentAppModule = null;
let currentAppUnmount = null;

/**
 * Handle route changes based on window.location.hash
 */
async function handleRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const isHub = hash === '/';

  // Extract app ID from hash (e.g., #/color-lab -> color-lab)
  const appId = hash.startsWith('/') ? hash.slice(1) : hash;

  // Cleanup exactly what is currently mounted
  if (currentAppUnmount) {
    // Add exit animation to current view
    const currentView = appContainer.firstElementChild;
    if (currentView) {
      currentView.classList.replace('page-enter', 'page-exit');
      await new Promise(r => setTimeout(r, 300)); // wait for exit animation
    }

    try {
      currentAppUnmount();
    } catch (e) {
      console.error('Error during unmount:', e);
    }
    currentAppUnmount = null;
  }

  appContainer.innerHTML = '';

  if (isHub) {
    // Mount Hub Landing Page
    document.title = 'app.ui.pe — Micro-App Hub';
    currentAppUnmount = mountHub(appContainer);
  } else {
    // Mount specific Micro-App
    const appConfig = apps.find(a => a.id === appId);

    if (!appConfig) {
      // 404 App Not Found
      appContainer.innerHTML = `
        <div class="page page-enter micro-app-page" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
          ${createNavbar().outerHTML}
          <h1 style="font-size: 3rem; margin-bottom: 1rem;">404</h1>
          <p style="color: var(--color-text-muted);">Micro-app not found.</p>
          <a href="#/" style="margin-top: 2rem; color: var(--color-primary);">Return to Hub</a>
        </div>
      `;
      return;
    }

    if (appConfig.status !== 'live' || !appConfig.load) {
      // Coming Soon App
      appContainer.innerHTML = `
        <div class="page page-enter micro-app-page" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
          ${createNavbar(appConfig.name).outerHTML}
          <div style="font-size: 4rem; margin-bottom: 1rem;">${appConfig.icon}</div>
          <h1 style="font-size: 2rem; margin-bottom: 1rem;">${appConfig.name} is building...</h1>
          <p style="color: var(--color-text-muted);">This micro-app is coming soon.</p>
          <a href="#/" style="margin-top: 2rem; color: var(--color-primary);">Return to Hub</a>
        </div>
      `;
      return;
    }

    // Lazy load and mount Live Micro-App
    document.title = `${appConfig.name} — app.ui.pe`;

    // Show loading state
    appContainer.innerHTML = `
      <div class="page page-enter micro-app-page">
        ${createNavbar(appConfig.name).outerHTML}
        <div class="page-loader"><div class="spinner"></div></div>
      </div>
    `;

    try {
      const module = await appConfig.load();
      // Clear loader, keep navbar wrapper ready
      appContainer.innerHTML = '';

      // Create a wrapper for the app to handle navbar and transitions
      const wrapper = document.createElement('div');
      wrapper.className = 'page page-enter micro-app-page';

      // Insert Navbar
      wrapper.appendChild(createNavbar(appConfig.name));

      // Create a specific container for the micro-app content
      const appContentContainer = document.createElement('div');
      wrapper.appendChild(appContentContainer);
      appContainer.appendChild(wrapper);

      // Mount the micro-app into its container
      currentAppUnmount = module.mount(appContentContainer);
    } catch (e) {
      console.error(`Failed to load app ${appId}:`, e);
      appContainer.innerHTML = `
        <div class="page page-enter micro-app-page" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
          ${createNavbar(appConfig.name).outerHTML}
          <h1 style="color: #ef4444; margin-bottom: 1rem;">Failed to load application</h1>
          <p style="color: var(--color-text-muted);">${e.message}</p>
          <a href="#/" style="margin-top: 2rem; color: var(--color-primary);">Return to Hub</a>
        </div>
      `;
    }
  }
}

// Initialize Router
window.addEventListener('hashchange', handleRoute);
handleRoute(); // initial load
