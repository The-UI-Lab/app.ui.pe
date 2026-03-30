import { apps } from './apps-registry.js';
import { ParticleSystem } from './particles.js';
import { createAppCard } from '../components/app-card.js';

export function mountHub(container) {
  // Hub HTML Structure
  container.innerHTML = `
    <div class="hub page page-enter">
      <canvas id="particles" class="particles-canvas"></canvas>

      <main class="hub-hero">
        <div class="hub-badge">
          <span class="badge-dot"></span>
          <span>v1.0 Live</span>
        </div>
        <h1 class="hub-title">
          Explore the <span class="domain">app.ui.pe</span> universe.
        </h1>
        <p class="hub-subtitle">
          A growing constellation of beautiful, focused micro-apps and developer tools. Fast, free, and aesthetically pleasing.
        </p>

        <div class="hub-search-wrap">
          <div class="hub-search glass">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="app-search" placeholder="Search apps by name or category..." autocomplete="off" />
          </div>
        </div>
      </main>

      <section class="hub-section">
        <div class="container">
          <header class="hub-section-header">
            <h2 class="hub-section-title">Available Micro-Apps</h2>
            <span class="hub-app-count" id="app-count">${apps.length} Tools</span>
          </header>

          <div class="apps-grid" id="apps-grid">
            <!-- Cards injected here -->
          </div>

          <div id="no-results" class="hub-no-results" style="display: none;">
            <p>No apps found matching your search.</p>
            <span>Try different keywords like 'css', 'json', or 'tools'.</span>
          </div>
        </div>
      </section>

      <footer class="hub-footer">
        <p>Built with ❤️ by creators, for developers. <a href="https://github.com" target="_blank">Contribute</a>.</p>
      </footer>
    </div>
  `;

  // Initialize Particles
  const canvas = document.getElementById('particles');
  const particleSystem = new ParticleSystem(canvas);
  particleSystem.init();

  // Render App Cards
  const grid = document.getElementById('apps-grid');
  const renderCards = (appsToRender) => {
    grid.innerHTML = '';
    appsToRender.forEach((app, index) => {
      grid.appendChild(createAppCard(app, index));
    });
  };

  renderCards(apps);

  // Search Logic
  const searchInput = document.getElementById('app-search');
  const noResults = document.getElementById('no-results');
  const appCount = document.getElementById('app-count');

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = apps.filter(app =>
      app.name.toLowerCase().includes(term) ||
      app.description.toLowerCase().includes(term) ||
      app.tags.some(tag => tag.toLowerCase().includes(term))
    );

    renderCards(filtered);

    if (filtered.length === 0) {
      grid.style.display = 'none';
      noResults.style.display = 'block';
    } else {
      grid.style.display = 'grid';
      noResults.style.display = 'none';
    }

    appCount.textContent = `${filtered.length} Tool${filtered.length !== 1 ? 's' : ''}`;
  });

  // Return unmount cleanup function
  return () => {
    particleSystem.destroy();
  };
}
