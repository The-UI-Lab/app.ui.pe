import '../src/styles/index.css';
import '../src/styles/transitions.css';
import { createNavbar } from '../src/components/navbar.js';
import { mount } from '../src/apps/color-lab/index.js';

const appContainer = document.getElementById('app');

// 1. Setup Page Container
appContainer.className = 'page page-enter micro-app-page';

// 2. Inject Navbar
const appName = "Color Lab";
appContainer.appendChild(createNavbar(appName));

// 3. Create Micro-App content wrapper
const contentContainer = document.createElement('div');
appContainer.appendChild(contentContainer);

// 4. Mount the app
mount(contentContainer);
