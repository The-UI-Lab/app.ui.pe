/**
 * App Card Component
 * Reusable card with gradient border glow, 3D tilt, and stagger animation.
 */

export function createAppCard(app, index = 0) {
  const isLive = app.status === 'live';
  
  // Use anchor tag for native routing and SEO
  const card = document.createElement(isLive ? 'a' : 'article');
  card.className = 'app-card glass';
  card.style.setProperty('--card-accent', app.color);
  card.style.setProperty('--card-icon-bg', app.iconBg);
  card.style.setProperty('--card-icon-glow', app.iconGlow);
  card.style.animationDelay = `${0.1 + index * 0.08}s`;

  if (isLive) {
    if (app.externalUrl) {
      card.href = app.externalUrl;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
    } else {
      // Direct root relative path, matching the Vite HTML output
      card.href = `/${app.id}/`;
    }
  }

  card.innerHTML = `
    <div class="app-card-icon">${app.icon}</div>
    <div class="app-card-arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
    <h3 class="app-card-title">${app.name}</h3>
    <p class="app-card-desc">${app.description}</p>
    <div class="app-card-footer">
      <div class="app-card-tags">
        ${app.tags.map(t => `<span class="app-card-tag">${t}</span>`).join('')}
      </div>
      <span class="app-card-status ${app.status}">${isLive ? '● Live' : 'Coming Soon'}</span>
    </div>
  `;

  // 3D tilt effect on mouse move
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });

  if (!isLive) {
    card.style.cursor = 'default';
    card.style.opacity = '0'; // will be set by animation
  }

  return card;
}
