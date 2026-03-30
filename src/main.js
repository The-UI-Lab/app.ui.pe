import './styles/index.css';
import './styles/hub.css';
import './styles/transitions.css';

import { mountHub } from './hub/hub.js';

// The Hub entry point - just mounts the landing page directly.
// No SPA routing required. Micro-apps are fully static separate HTML pages.
const appContainer = document.getElementById('app');
mountHub(appContainer);

