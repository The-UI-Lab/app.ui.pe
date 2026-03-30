import"./transitions-DM5T28o2.js";function te(m=""){const n=document.createElement("nav");if(n.className="navbar glass",n.innerHTML=`
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

      ${m?`
        <div class="navbar-breadcrumb">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span class="navbar-app-name">${m}</span>
        </div>
      `:""}

      <div class="navbar-actions">
        <a href="https://github.com" target="_blank" rel="noopener" class="navbar-link" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  `,!document.getElementById("navbar-styles")){const c=document.createElement("style");c.id="navbar-styles",c.textContent=`
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
    `,document.head.appendChild(c)}return n}function ae(m){const n=document.createElement("div");n.className="color-lab container",n.innerHTML=`
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
  `,m.appendChild(n);let c={r:102,g:126,b:234},u="#0a0e27";const y=n.querySelector("#base-color"),j=n.querySelector("#hex-display"),x=n.querySelector("#slide-r"),f=n.querySelector("#slide-g"),C=n.querySelector("#slide-b"),P=n.querySelector("#val-r"),D=n.querySelector("#val-g"),U=n.querySelector("#val-b"),B=n.querySelector("#harmony-mode"),T=n.querySelector("#palette-display"),J=n.querySelector("#contrast-preview"),O=n.querySelector("#contrast-text"),V=n.querySelector("#contrast-ratio"),M=n.querySelector("#contrast-normal"),G=n.querySelector("#contrast-large"),_=n.querySelector("#swap-contrast"),K=n.querySelector("#gradient-preview"),w=n.querySelector("#grad-color-1"),R=n.querySelector("#grad-color-2"),H=n.querySelector("#grad-angle"),I=n.querySelector("#gradient-code"),S=n.querySelector("#copy-gradient"),k=(t,e,a)=>"#"+[t,e,a].map(r=>r.toString(16).padStart(2,"0")).join(""),L=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},Q=(t,e,a)=>{t/=255,e/=255,a/=255;const r=Math.max(t,e,a),o=Math.min(t,e,a);let s,l,p=(r+o)/2;if(r===o)s=l=0;else{const d=r-o;switch(l=p>.5?d/(2-r-o):d/(r+o),r){case t:s=(e-a)/d+(e<a?6:0);break;case e:s=(a-t)/d+2;break;case a:s=(t-e)/d+4;break}s/=6}return[s*360,l,p]},W=(t,e,a)=>{t/=360;let r,o,s;if(e===0)r=o=s=a;else{const l=(g,v,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<.16666666666666666?g+(v-g)*6*i:i<.5?v:i<.6666666666666666?g+(v-g)*(.6666666666666666-i)*6:g),p=a<.5?a*(1+e):a+e-a*e,d=2*a-p;r=l(d,p,t+1/3),o=l(d,p,t),s=l(d,p,t-1/3)}return{r:Math.round(r*255),g:Math.round(o*255),b:Math.round(s*255)}},N=(t,e,a)=>{const[r,o,s]=[t,e,a].map(l=>(l/=255,l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4)));return .2126*r+.7152*o+.0722*s},X=(t,e)=>{const a=L(t),r=typeof e=="string"?L(e):e,o=N(a.r,a.g,a.b),s=N(r.r,r.g,r.b);return((Math.max(o,s)+.05)/(Math.min(o,s)+.05)).toFixed(2)},q=()=>{c={r:parseInt(x.value),g:parseInt(f.value),b:parseInt(C.value)};const t=k(c.r,c.g,c.b);y.value=t,E(t)},Y=t=>{const e=t.target.value,a=L(e);a&&(c=a,x.value=a.r,f.value=a.g,C.value=a.b,E(e))},E=t=>{j.textContent=t,P.textContent=c.r,D.textContent=c.g,U.textContent=c.b,w.value=t,$(),z(t),h()},$=t=>{const[e,a,r]=Q(c.r,c.g,c.b),o=B.value;let s=[];o==="analogous"?s=[e-30,e,e+30]:o==="complementary"?s=[e,(e+180)%360]:o==="triadic"?s=[e,(e+120)%360,(e+240)%360]:o==="split"&&(s=[e,(e+150)%360,(e+210)%360]),s=s.map(l=>l<0?l+360:l),T.innerHTML="",s.forEach(l=>{const{r:p,g:d,b:g}=W(l,a,r),v=k(p,d,g),i=document.createElement("div");i.className="cl-swatch",i.style.backgroundColor=v;const b=document.createElement("span");b.className="cl-swatch-label",b.textContent=v,i.addEventListener("click",()=>{navigator.clipboard.writeText(v),b.textContent="Copied!",setTimeout(()=>b.textContent=v,1e3)}),i.appendChild(b),T.appendChild(i)})},z=t=>{J.style.backgroundColor=u,O.style.color=t;const e=X(t,u);V.textContent=`${e}:1`;const a=r=>r?"pass":"fail";M.textContent=e>=7?"AAA":e>=4.5?"AA":"Fail",M.className=`cl-score-badge ${a(e>=4.5)}`,G.textContent=e>=4.5?"AAA":e>=3?"AA":"Fail",G.className=`cl-score-badge ${a(e>=3)}`},Z=()=>{const t=k(c.r,c.g,c.b);u=t,u=u==="#0a0e27"?"#ffffff":"#0a0e27",z(t)},h=()=>{const t=w.value,e=R.value,r=`linear-gradient(${H.value}deg, ${t} 0%, ${e} 100%)`;K.style.background=r,I.textContent=`background: ${r};`},ee=()=>{navigator.clipboard.writeText(I.textContent),S.classList.add("copied"),setTimeout(()=>S.classList.remove("copied"),1e3)};return y.addEventListener("input",Y),x.addEventListener("input",q),f.addEventListener("input",q),C.addEventListener("input",q),B.addEventListener("change",()=>$(y.value)),_.addEventListener("click",Z),w.addEventListener("input",h),R.addEventListener("input",h),H.addEventListener("input",h),S.addEventListener("click",ee),E("#667eea"),function(){n.remove()}}const A=document.getElementById("app");A.className="page page-enter micro-app-page";const ne="Color Lab";A.appendChild(te(ne));const F=document.createElement("div");A.appendChild(F);ae(F);
