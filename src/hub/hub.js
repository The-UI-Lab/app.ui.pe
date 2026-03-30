import { apps } from './apps-registry.js';
import { ParticleSystem } from './particles.js';
import { createAppCard } from '../components/app-card.js';

export function mountHub(container) {
  // HTML Structure is now pre-rendered in index.html for instant FCP/LCP.
  
  // Initialize Particles
  const canvas = document.getElementById('particles');
  const particleSystem = new ParticleSystem(canvas);
  particleSystem.init();

  // Hydrate Initial App Count
  const initialAppCount = document.getElementById('app-count');
  if (initialAppCount) {
    initialAppCount.textContent = `${apps.length} Tool${apps.length !== 1 ? 's' : ''}`;
  }

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
