import './style.css';

/**
 * Color Lab Micro-App
 * Features: Color picker, Harmony generation, Gradient builder
 */

export function mount(container) {
  const appElement = document.createElement('div');
  appElement.className = 'color-lab container';

  appElement.innerHTML = `
    <header class="cl-header stagger-1">
      <h1 class="cl-title">Color Lab</h1>
      <p class="cl-desc">Generate harmonies, gradients, and check contrast ratios.</p>
    </header>

    <div class="cl-grid">
      <!-- Left Column: Core Controls -->
      <div class="cl-col stagger-2">
        <div class="glass cl-card">
          <h2 class="cl-card-title">Base Color</h2>
          <div class="cl-picker-wrap">
            <input type="color" id="base-color" value="#667eea" class="cl-picker" />
            <div class="cl-hex-display" id="hex-display">#667eea</div>
          </div>

          <div class="cl-rgb-sliders">
            <div class="cl-slider-group">
              <label>R <span id="val-r">102</span></label>
              <input type="range" id="slide-r" min="0" max="255" value="102">
            </div>
            <div class="cl-slider-group">
              <label>G <span id="val-g">126</span></label>
              <input type="range" id="slide-g" min="0" max="255" value="126">
            </div>
            <div class="cl-slider-group">
              <label>B <span id="val-b">234</span></label>
              <input type="range" id="slide-b" min="0" max="255" value="234">
            </div>
          </div>
        </div>

        <div class="glass cl-card">
          <h2 class="cl-card-title">Harmonies</h2>
          <select id="harmony-mode" class="cl-select">
            <option value="analogous">Analogous</option>
            <option value="complementary">Complementary</option>
            <option value="triadic">Triadic</option>
            <option value="split">Split Complementary</option>
          </select>
          <div class="cl-palette" id="palette-display">
            <!-- Palette generated via JS -->
          </div>
        </div>
      </div>

      <!-- Right Column: Tools -->
      <div class="cl-col stagger-3">
        <div class="glass cl-card">
          <h2 class="cl-card-title">Contrast Checker</h2>
          <div class="cl-contrast-preview" id="contrast-preview">
            <span class="cl-contrast-text" id="contrast-text">Readability Test</span>
          </div>
          <div class="cl-contrast-score">
            <div class="cl-score-box">
              <span class="cl-score-label">Ratio</span>
              <span class="cl-score-val" id="contrast-ratio">4.5:1</span>
            </div>
            <div class="cl-score-box">
              <span class="cl-score-label">Normal Text</span>
              <span class="cl-score-badge" id="contrast-normal">AA</span>
            </div>
            <div class="cl-score-box">
              <span class="cl-score-label">Large Text</span>
              <span class="cl-score-badge" id="contrast-large">AAA</span>
            </div>
          </div>
          <button class="cl-btn" id="swap-contrast" style="margin-top: 1rem; width: 100%;">Swap Colors</button>
        </div>

        <div class="glass cl-card">
          <h2 class="cl-card-title">CSS Gradient Builder</h2>
          <div class="cl-gradient-preview" id="gradient-preview"></div>
          <div class="cl-gradient-controls">
            <input type="color" id="grad-color-1" value="#667eea" class="cl-picker-sm" />
            <input type="range" id="grad-angle" min="0" max="360" value="135" style="flex: 1;">
            <input type="color" id="grad-color-2" value="#764ba2" class="cl-picker-sm" />
          </div>
          <div class="cl-code-wrap">
            <code id="gradient-code">background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);</code>
            <button class="cl-icon-btn copy-btn" id="copy-gradient" title="Copy CSS">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(appElement);

  // --- Logic --- //
  let currentColor = { r: 102, g: 126, b: 234 };
  let contrastBg = '#0a0e27';

  // DOM Elements
  const baseColorInput = appElement.querySelector('#base-color');
  const hexDisplay = appElement.querySelector('#hex-display');
  const slideR = appElement.querySelector('#slide-r');
  const slideG = appElement.querySelector('#slide-g');
  const slideB = appElement.querySelector('#slide-b');
  const valR = appElement.querySelector('#val-r');
  const valG = appElement.querySelector('#val-g');
  const valB = appElement.querySelector('#val-b');

  const harmonySelect = appElement.querySelector('#harmony-mode');
  const paletteDisplay = appElement.querySelector('#palette-display');

  const contrastPreview = appElement.querySelector('#contrast-preview');
  const contrastText = appElement.querySelector('#contrast-text');
  const contrastRatio = appElement.querySelector('#contrast-ratio');
  const badgeNormal = appElement.querySelector('#contrast-normal');
  const badgeLarge = appElement.querySelector('#contrast-large');
  const swapContrastBtn = appElement.querySelector('#swap-contrast');

  const gradPreview = appElement.querySelector('#gradient-preview');
  const gradC1 = appElement.querySelector('#grad-color-1');
  const gradC2 = appElement.querySelector('#grad-color-2');
  const gradAngle = appElement.querySelector('#grad-angle');
  const gradCode = appElement.querySelector('#gradient-code');
  const copyGradBtn = appElement.querySelector('#copy-gradient');

  // --- Helpers --- //
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
  };
  const rgbToHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h * 360, s, l];
  };
  const hslToRgb = (h, s, l) => {
    h /= 360;
    let r, g, b;
    if (s === 0) r = g = b = l;
    else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1; if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
  };

  const relLuminance = (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const getContrastRatio = (c1, c2) => {
    const rgb1 = hexToRgb(c1);
    const rgb2 = typeof c2 === 'string' ? hexToRgb(c2) : c2;
    const l1 = relLuminance(rgb1.r, rgb1.g, rgb1.b);
    const l2 = relLuminance(rgb2.r, rgb2.g, rgb2.b);
    let ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    return ratio.toFixed(2);
  };

  // --- Updaters --- //
  const updateBaseFromRGB = () => {
    currentColor = { r: parseInt(slideR.value), g: parseInt(slideG.value), b: parseInt(slideB.value) };
    const hex = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
    baseColorInput.value = hex;
    updateAll(hex);
  };

  const updateBaseFromHex = (e) => {
    const hex = e.target.value;
    const rgb = hexToRgb(hex);
    if(rgb) {
      currentColor = rgb;
      slideR.value = rgb.r; slideG.value = rgb.g; slideB.value = rgb.b;
      updateAll(hex);
    }
  };

  const updateAll = (hexCode) => {
    // Labels
    hexDisplay.textContent = hexCode;
    valR.textContent = currentColor.r;
    valG.textContent = currentColor.g;
    valB.textContent = currentColor.b;
    
    // Gradient update auto match
    gradC1.value = hexCode;

    // Harmonies
    updateHarmonies(hexCode);
    updateContrast(hexCode);
    updateGradient();
  };

  const updateHarmonies = (hex) => {
    const [h, s, l] = rgbToHsl(currentColor.r, currentColor.g, currentColor.b);
    const mode = harmonySelect.value;
    let hues = [];

    if (mode === 'analogous') hues = [h - 30, h, h + 30];
    else if (mode === 'complementary') hues = [h, (h + 180) % 360];
    else if (mode === 'triadic') hues = [h, (h + 120) % 360, (h + 240) % 360];
    else if (mode === 'split') hues = [h, (h + 150) % 360, (h + 210) % 360];

    // Guarantee positive hues
    hues = hues.map(hue => hue < 0 ? hue + 360 : hue);

    paletteDisplay.innerHTML = '';
    hues.forEach(hue => {
      const {r, g, b} = hslToRgb(hue, s, l);
      const colorHex = rgbToHex(r, g, b);
      
      const swatch = document.createElement('div');
      swatch.className = 'cl-swatch';
      swatch.style.backgroundColor = colorHex;
      
      const label = document.createElement('span');
      label.className = 'cl-swatch-label';
      label.textContent = colorHex;

      // Copy on click
      swatch.addEventListener('click', () => {
        navigator.clipboard.writeText(colorHex);
        label.textContent = 'Copied!';
        setTimeout(() => label.textContent = colorHex, 1000);
      });

      swatch.appendChild(label);
      paletteDisplay.appendChild(swatch);
    });
  };

  const updateContrast = (fgHex) => {
    contrastPreview.style.backgroundColor = contrastBg;
    contrastText.style.color = fgHex;
    
    const ratio = getContrastRatio(fgHex, contrastBg);
    contrastRatio.textContent = `${ratio}:1`;

    const getBadgeClass = (pass) => pass ? 'pass' : 'fail';
    
    badgeNormal.textContent = ratio >= 7 ? 'AAA' : (ratio >= 4.5 ? 'AA' : 'Fail');
    badgeNormal.className = `cl-score-badge ${getBadgeClass(ratio >= 4.5)}`;
    
    badgeLarge.textContent = ratio >= 4.5 ? 'AAA' : (ratio >= 3 ? 'AA' : 'Fail');
    badgeLarge.className = `cl-score-badge ${getBadgeClass(ratio >= 3)}`;
  };

  const swapContrast = () => {
    const currentFg = rgbToHex(currentColor.r, currentColor.g, currentColor.b);
    contrastBg = currentFg; // new bg
    // Assuming the new FG should be the old BG? We only track current color (which maps to FG).
    // It's cleaner to just toggle against dark/light
    contrastBg = contrastBg === '#0a0e27' ? '#ffffff' : '#0a0e27';
    updateContrast(currentFg);
  };

  const updateGradient = () => {
    const c1 = gradC1.value;
    const c2 = gradC2.value;
    const ang = gradAngle.value;
    const css = `linear-gradient(${ang}deg, ${c1} 0%, ${c2} 100%)`;
    
    gradPreview.style.background = css;
    gradCode.textContent = `background: ${css};`;
  };

  const copyGradient = () => {
    navigator.clipboard.writeText(gradCode.textContent);
    copyGradBtn.classList.add('copied');
    setTimeout(() => copyGradBtn.classList.remove('copied'), 1000);
  };

  // --- Listeners --- //
  baseColorInput.addEventListener('input', updateBaseFromHex);
  slideR.addEventListener('input', updateBaseFromRGB);
  slideG.addEventListener('input', updateBaseFromRGB);
  slideB.addEventListener('input', updateBaseFromRGB);
  
  harmonySelect.addEventListener('change', () => updateHarmonies(baseColorInput.value));
  swapContrastBtn.addEventListener('click', swapContrast);

  gradC1.addEventListener('input', updateGradient);
  gradC2.addEventListener('input', updateGradient);
  gradAngle.addEventListener('input', updateGradient);
  copyGradBtn.addEventListener('click', copyGradient);

  // Initialize
  updateAll('#667eea');

  return function unmount() {
    // Events on DOM nodes within container are GC'd when container is removed
    appElement.remove();
  };
}
