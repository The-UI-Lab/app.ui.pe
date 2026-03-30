import './style.css';

/**
 * Micro-App Template
 *
 * Every micro-app should export a `mount` function that returns an `unmount` cleanup function.
 */

export function mount(container) {
  // 1. Create your UI
  const appElement = document.createElement('div');
  appElement.className = 'my-app-container container';

  appElement.innerHTML = `
    <header class="app-header stagger-1">
      <h1>My Micro App</h1>
      <p>A description of what this app does.</p>
    </header>

    <main class="app-content stagger-2">
      <div class="glass p-6 rounded-xl">
        <h2>Content goes here</h2>
        <button id="my-btn" class="base-btn mt-4">Click Me</button>
      </div>
    </main>
  `;

  // 2. Append to container
  container.appendChild(appElement);

  // 3. Add Event Listeners
  const btn = appElement.querySelector('#my-btn');
  const handleClick = () => {
    alert('Button clicked!');
  };
  btn.addEventListener('click', handleClick);

  // 4. Return cleanup function (crucial for SPA routing)
  return function unmount() {
    btn.removeEventListener('click', handleClick);
    // Any other cleanup (intervals, timeouts, global listeners)
    appElement.remove();
  };
}
