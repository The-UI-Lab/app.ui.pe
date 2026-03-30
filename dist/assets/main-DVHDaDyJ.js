import"./transitions-DM5T28o2.js";const p=[{id:"color-lab",name:"Color Lab",description:"Generate harmonious palettes, check contrast ratios, and build beautiful CSS gradients — all in one place.",icon:"🎨",color:"#f093fb",iconBg:"rgba(240, 147, 251, 0.12)",iconGlow:"rgba(240, 147, 251, 0.15)",tags:["design","css","colors"],status:"live"},{id:"json-explorer",name:"JSON Explorer",description:"Paste, visualize, and navigate JSON data with a beautiful tree view, syntax highlighting, and path copying.",icon:"🔍",color:"#00d2ff",iconBg:"rgba(0, 210, 255, 0.12)",iconGlow:"rgba(0, 210, 255, 0.15)",tags:["dev-tools","json","data"],status:"coming-soon"},{id:"sql-viewer",name:"SQL Viewer",description:"Write, format, and visualize SQL queries with syntax highlighting, schema diagrams, and query explanation.",icon:"🗃️",color:"#667eea",iconBg:"rgba(102, 126, 234, 0.12)",iconGlow:"rgba(102, 126, 234, 0.15)",tags:["database","sql","dev-tools"],status:"coming-soon"},{id:"regex-lab",name:"Regex Lab",description:"Build, test, and debug regular expressions with real-time matching, group highlighting, and cheatsheet.",icon:"🧪",color:"#4ade80",iconBg:"rgba(74, 222, 128, 0.12)",iconGlow:"rgba(74, 222, 128, 0.15)",tags:["dev-tools","regex","testing"],status:"coming-soon"},{id:"markdown-studio",name:"Markdown Studio",description:"A distraction-free markdown editor with live preview, export to HTML/PDF, and GitHub-flavored support.",icon:"✍️",color:"#fb923c",iconBg:"rgba(251, 146, 60, 0.12)",iconGlow:"rgba(251, 146, 60, 0.15)",tags:["writing","markdown","editor"],status:"coming-soon"},{id:"hash-forge",name:"Hash Forge",description:"Generate and verify MD5, SHA-1, SHA-256, and other cryptographic hashes instantly in your browser.",icon:"🔐",color:"#f472b6",iconBg:"rgba(244, 114, 182, 0.12)",iconGlow:"rgba(244, 114, 182, 0.15)",tags:["security","crypto","utility"],status:"coming-soon"}];class u{constructor(i){this.canvas=i,this.ctx=i.getContext("2d"),this.particles=[],this.mouse={x:-1e3,y:-1e3},this.animationId=null,this.isRunning=!1,this.config={particleCount:80,maxDistance:150,mouseRadius:200,baseSpeed:.3,particleMinSize:1,particleMaxSize:2.5,lineOpacity:.12,particleOpacity:.6,colors:["#667eea","#764ba2","#00d2ff","#f093fb"]},this._onResize=this._resize.bind(this),this._onMouse=this._trackMouse.bind(this)}init(){this._resize(),this._createParticles(),this.isRunning=!0,this._animate(),window.addEventListener("resize",this._onResize),window.addEventListener("mousemove",this._onMouse)}destroy(){this.isRunning=!1,this.animationId&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this._onResize),window.removeEventListener("mousemove",this._onMouse)}_resize(){const i=window.devicePixelRatio||1;this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*i,this.canvas.height=this.height*i,this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.ctx.scale(i,i),this.width<768&&(this.config.particleCount=40,this.config.maxDistance=100)}_createParticles(){this.particles=[];for(let i=0;i<this.config.particleCount;i++)this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:(Math.random()-.5)*this.config.baseSpeed,vy:(Math.random()-.5)*this.config.baseSpeed,size:this.config.particleMinSize+Math.random()*(this.config.particleMaxSize-this.config.particleMinSize),color:this.config.colors[Math.floor(Math.random()*this.config.colors.length)],opacity:.3+Math.random()*.5,pulseSpeed:.01+Math.random()*.02,pulsePhase:Math.random()*Math.PI*2})}_trackMouse(i){this.mouse.x=i.clientX,this.mouse.y=i.clientY}_animate(){if(!this.isRunning)return;this.ctx.clearRect(0,0,this.width,this.height);const i=Date.now()*.001;for(const t of this.particles){const e=Math.sin(i*t.pulseSpeed*60+t.pulsePhase)*.5+.5,s=t.x-this.mouse.x,o=t.y-this.mouse.y,c=Math.sqrt(s*s+o*o);if(c<this.config.mouseRadius){const r=(1-c/this.config.mouseRadius)*.02;t.vx+=s*r,t.vy+=o*r}t.x+=t.vx,t.y+=t.vy,t.vx*=.99,t.vy*=.99,t.x<-10&&(t.x=this.width+10),t.x>this.width+10&&(t.x=-10),t.y<-10&&(t.y=this.height+10),t.y>this.height+10&&(t.y=-10);const l=t.size*(.8+e*.4);this.ctx.beginPath(),this.ctx.arc(t.x,t.y,l,0,Math.PI*2),this.ctx.fillStyle=t.color,this.ctx.globalAlpha=t.opacity*(.6+e*.4),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,l*3,0,Math.PI*2);const n=this.ctx.createRadialGradient(t.x,t.y,0,t.x,t.y,l*3);n.addColorStop(0,t.color),n.addColorStop(1,"transparent"),this.ctx.fillStyle=n,this.ctx.globalAlpha=.08,this.ctx.fill()}this.ctx.globalAlpha=1;for(let t=0;t<this.particles.length;t++)for(let e=t+1;e<this.particles.length;e++){const s=this.particles[t],o=this.particles[e],c=s.x-o.x,l=s.y-o.y,n=Math.sqrt(c*c+l*l);if(n<this.config.maxDistance){const r=(1-n/this.config.maxDistance)*this.config.lineOpacity;this.ctx.beginPath(),this.ctx.moveTo(s.x,s.y),this.ctx.lineTo(o.x,o.y),this.ctx.strokeStyle=s.color,this.ctx.globalAlpha=r,this.ctx.lineWidth=.5,this.ctx.stroke()}}this.ctx.globalAlpha=1,this.animationId=requestAnimationFrame(()=>this._animate())}}function m(a,i=0){const t=a.status==="live",e=document.createElement(t?"a":"article");return e.className="app-card glass",e.style.setProperty("--card-accent",a.color),e.style.setProperty("--card-icon-bg",a.iconBg),e.style.setProperty("--card-icon-glow",a.iconGlow),e.style.animationDelay=`${.1+i*.08}s`,t&&(a.externalUrl?(e.href=a.externalUrl,e.target="_blank",e.rel="noopener noreferrer"):e.href=`/${a.id}/`),e.innerHTML=`
    <div class="app-card-icon">${a.icon}</div>
    <div class="app-card-arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
    <h3 class="app-card-title">${a.name}</h3>
    <p class="app-card-desc">${a.description}</p>
    <div class="app-card-footer">
      <div class="app-card-tags">
        ${a.tags.map(s=>`<span class="app-card-tag">${s}</span>`).join("")}
      </div>
      <span class="app-card-status ${a.status}">${t?"● Live":"Coming Soon"}</span>
    </div>
  `,e.addEventListener("mousemove",s=>{const o=e.getBoundingClientRect(),c=s.clientX-o.left,l=s.clientY-o.top,n=o.width/2,r=o.height/2,h=(l-r)/r*-5,d=(c-n)/n*5;e.style.transform=`perspective(800px) rotateX(${h}deg) rotateY(${d}deg) translateY(-4px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)"}),t||(e.style.cursor="default",e.style.opacity="0"),e}function y(a){a.innerHTML=`
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
            <span class="hub-app-count" id="app-count">${p.length} Tools</span>
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
  `;const i=document.getElementById("particles"),t=new u(i);t.init();const e=document.getElementById("apps-grid"),s=n=>{e.innerHTML="",n.forEach((r,h)=>{e.appendChild(m(r,h))})};s(p);const o=document.getElementById("app-search"),c=document.getElementById("no-results"),l=document.getElementById("app-count");return o.addEventListener("input",n=>{const r=n.target.value.toLowerCase(),h=p.filter(d=>d.name.toLowerCase().includes(r)||d.description.toLowerCase().includes(r)||d.tags.some(g=>g.toLowerCase().includes(r)));s(h),h.length===0?(e.style.display="none",c.style.display="block"):(e.style.display="grid",c.style.display="none"),l.textContent=`${h.length} Tool${h.length!==1?"s":""}`}),()=>{t.destroy()}}const f=document.getElementById("app");y(f);
