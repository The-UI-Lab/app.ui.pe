import"./transitions-wYOwzQnH.js";function _(N){const s=document.createElement("div");s.className="color-lab container",s.innerHTML=`
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
  `,N.appendChild(s);let i={r:102,g:126,b:234},g="#0a0e27";const y=s.querySelector("#base-color"),F=s.querySelector("#hex-display"),h=s.querySelector("#slide-r"),x=s.querySelector("#slide-g"),C=s.querySelector("#slide-b"),P=s.querySelector("#val-r"),D=s.querySelector("#val-g"),j=s.querySelector("#val-b"),A=s.querySelector("#harmony-mode"),E=s.querySelector("#palette-display"),J=s.querySelector("#contrast-preview"),V=s.querySelector("#contrast-text"),z=s.querySelector("#contrast-ratio"),T=s.querySelector("#contrast-normal"),B=s.querySelector("#contrast-large"),K=s.querySelector("#swap-contrast"),O=s.querySelector("#gradient-preview"),S=s.querySelector("#grad-color-1"),M=s.querySelector("#grad-color-2"),R=s.querySelector("#grad-angle"),G=s.querySelector("#gradient-code"),f=s.querySelector("#copy-gradient"),w=(t,e,a)=>"#"+[t,e,a].map(n=>n.toString(16).padStart(2,"0")).join(""),q=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},Q=(t,e,a)=>{t/=255,e/=255,a/=255;const n=Math.max(t,e,a),l=Math.min(t,e,a);let r,c,p=(n+l)/2;if(n===l)r=c=0;else{const d=n-l;switch(c=p>.5?d/(2-n-l):d/(n+l),n){case t:r=(e-a)/d+(e<a?6:0);break;case e:r=(a-t)/d+2;break;case a:r=(t-e)/d+4;break}r/=6}return[r*360,c,p]},U=(t,e,a)=>{t/=360;let n,l,r;if(e===0)n=l=r=a;else{const c=(v,u,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<.16666666666666666?v+(u-v)*6*o:o<.5?u:o<.6666666666666666?v+(u-v)*(.6666666666666666-o)*6:v),p=a<.5?a*(1+e):a+e-a*e,d=2*a-p;n=c(d,p,t+1/3),l=c(d,p,t),r=c(d,p,t-1/3)}return{r:Math.round(n*255),g:Math.round(l*255),b:Math.round(r*255)}},H=(t,e,a)=>{const[n,l,r]=[t,e,a].map(c=>(c/=255,c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)));return .2126*n+.7152*l+.0722*r},W=(t,e)=>{const a=q(t),n=typeof e=="string"?q(e):e,l=H(a.r,a.g,a.b),r=H(n.r,n.g,n.b);return((Math.max(l,r)+.05)/(Math.min(l,r)+.05)).toFixed(2)},L=()=>{i={r:parseInt(h.value),g:parseInt(x.value),b:parseInt(C.value)};const t=w(i.r,i.g,i.b);y.value=t,k(t)},X=t=>{const e=t.target.value,a=q(e);a&&(i=a,h.value=a.r,x.value=a.g,C.value=a.b,k(e))},k=t=>{F.textContent=t,P.textContent=i.r,D.textContent=i.g,j.textContent=i.b,S.value=t,I(),$(t),b()},I=t=>{const[e,a,n]=Q(i.r,i.g,i.b),l=A.value;let r=[];l==="analogous"?r=[e-30,e,e+30]:l==="complementary"?r=[e,(e+180)%360]:l==="triadic"?r=[e,(e+120)%360,(e+240)%360]:l==="split"&&(r=[e,(e+150)%360,(e+210)%360]),r=r.map(c=>c<0?c+360:c),E.innerHTML="",r.forEach(c=>{const{r:p,g:d,b:v}=U(c,a,n),u=w(p,d,v),o=document.createElement("div");o.className="cl-swatch",o.style.backgroundColor=u;const m=document.createElement("span");m.className="cl-swatch-label",m.textContent=u,o.addEventListener("click",()=>{navigator.clipboard.writeText(u),m.textContent="Copied!",setTimeout(()=>m.textContent=u,1e3)}),o.appendChild(m),E.appendChild(o)})},$=t=>{J.style.backgroundColor=g,V.style.color=t;const e=W(t,g);z.textContent=`${e}:1`;const a=n=>n?"pass":"fail";T.textContent=e>=7?"AAA":e>=4.5?"AA":"Fail",T.className=`cl-score-badge ${a(e>=4.5)}`,B.textContent=e>=4.5?"AAA":e>=3?"AA":"Fail",B.className=`cl-score-badge ${a(e>=3)}`},Y=()=>{const t=w(i.r,i.g,i.b);g=t,g=g==="#0a0e27"?"#ffffff":"#0a0e27",$(t)},b=()=>{const t=S.value,e=M.value,n=`linear-gradient(${R.value}deg, ${t} 0%, ${e} 100%)`;O.style.background=n,G.textContent=`background: ${n};`},Z=()=>{navigator.clipboard.writeText(G.textContent),f.classList.add("copied"),setTimeout(()=>f.classList.remove("copied"),1e3)};return y.addEventListener("input",X),h.addEventListener("input",L),x.addEventListener("input",L),C.addEventListener("input",L),A.addEventListener("change",()=>I(y.value)),K.addEventListener("click",Y),S.addEventListener("input",b),M.addEventListener("input",b),R.addEventListener("input",b),f.addEventListener("click",Z),k("#667eea"),function(){s.remove()}}const ee=document.getElementById("content");_(ee);
