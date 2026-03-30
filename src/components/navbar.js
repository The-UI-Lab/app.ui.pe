/**
 * Shared Navbar Component
 * Glassmorphism navigation bar with breadcrumb and back-to-hub.
 */

export function createNavbar(appName = '') {
  const nav = document.createElement('nav');
  nav.className = 'navbar glass';
  nav.innerHTML = `
    <div class="navbar-inner">
      <a href="#/" class="navbar-brand" aria-label="Back to hub">
        <div class="navbar-logo">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
            <defs>
              <linearGradient id="nav-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#667eea"/>
                <stop offset="100%" stop-color="#764ba2"/>
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="url(#nav-g)"/>
            <text x="32" y="44" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="28" fill="white">ui</text>
          </svg>
        </div>
        <span class="navbar-domain">app.ui.pe</span>
      </a>

      ${appName ? `
        <div class="navbar-breadcrumb">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span class="navbar-app-name">${appName}</span>
        </div>
      ` : ''}

      <div class="navbar-actions">
        <a href="https://github.com" target="_blank" rel="noopener" class="navbar-link" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  `;

  // Add navbar styles inline (scoped)
  if (!document.getElementById('navbar-styles')) {
    const style = document.createElement('style');
    style.id = 'navbar-styles';
    style.textContent = `
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: var(--z-navbar);
        height: 64px;
        border-bottom: 1px solid var(--glass-border);
      }

      .navbar-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--space-6);
        height: 100%;
        display: flex;
        align-items: center;
        gap: var(--space-4);
      }

      .navbar-brand {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        text-decoration: none;
        transition: opacity var(--duration-fast);
      }

      .navbar-brand:hover {
        opacity: 0.8;
      }

      .navbar-logo {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .navbar-domain {
        font-weight: 700;
        font-size: var(--text-sm);
        font-family: var(--font-mono);
        color: var(--color-text-muted);
      }

      .navbar-breadcrumb {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        color: var(--color-text-subtle);
      }

      .navbar-app-name {
        font-weight: 600;
        font-size: var(--text-sm);
        color: var(--color-text);
      }

      .navbar-actions {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: var(--space-3);
      }

      .navbar-link {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-md);
        color: var(--color-text-subtle);
        transition: all var(--duration-fast);
      }

      .navbar-link:hover {
        color: var(--color-text);
        background: rgba(255, 255, 255, 0.06);
      }
    `;
    document.head.appendChild(style);
  }

  return nav;
}
