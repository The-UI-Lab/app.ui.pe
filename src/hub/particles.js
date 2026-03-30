/**
 * Particle Constellation System
 * Canvas-based floating particles with connecting lines and mouse interaction.
 */

export class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.animationId = null;
    this.isRunning = false;

    this.config = {
      particleCount: 80,
      maxDistance: 150,
      mouseRadius: 200,
      baseSpeed: 0.3,
      particleMinSize: 1,
      particleMaxSize: 2.5,
      lineOpacity: 0.12,
      particleOpacity: 0.6,
      colors: ['#667eea', '#764ba2', '#00d2ff', '#f093fb'],
    };

    this._onResize = this._resize.bind(this);
    this._onMouse = this._trackMouse.bind(this);
  }

  init() {
    this._resize();
    this._createParticles();
    this.isRunning = true;
    this._animate();

    window.addEventListener('resize', this._onResize);
    window.addEventListener('mousemove', this._onMouse);
  }

  destroy() {
    this.isRunning = false;
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('mousemove', this._onMouse);
  }

  _resize() {
    const dpr = window.devicePixelRatio || 1;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);

    // Adjust particle count for mobile
    if (this.width < 768) {
      this.config.particleCount = 40;
      this.config.maxDistance = 100;
    }
  }

  _createParticles() {
    this.particles = [];
    for (let i = 0; i < this.config.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * this.config.baseSpeed,
        vy: (Math.random() - 0.5) * this.config.baseSpeed,
        size: this.config.particleMinSize + Math.random() * (this.config.particleMaxSize - this.config.particleMinSize),
        color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
        opacity: 0.3 + Math.random() * 0.5,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
  }

  _trackMouse(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  _animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);
    const time = Date.now() * 0.001;

    // Update and draw particles
    for (const p of this.particles) {
      // Pulse size
      const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulsePhase) * 0.5 + 0.5;

      // Mouse repulsion
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const mouseDist = Math.sqrt(dx * dx + dy * dy);

      if (mouseDist < this.config.mouseRadius) {
        const force = (1 - mouseDist / this.config.mouseRadius) * 0.02;
        p.vx += dx * force;
        p.vy += dy * force;
      }

      // Apply velocity with damping
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Wrap around edges
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      // Draw particle
      const currentSize = p.size * (0.8 + pulse * 0.4);
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.opacity * (0.6 + pulse * 0.4);
      this.ctx.fill();

      // Glow effect
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, currentSize * 3, 0, Math.PI * 2);
      const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 3);
      glow.addColorStop(0, p.color);
      glow.addColorStop(1, 'transparent');
      this.ctx.fillStyle = glow;
      this.ctx.globalAlpha = 0.08;
      this.ctx.fill();
    }

    // Draw connecting lines
    this.ctx.globalAlpha = 1;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.config.maxDistance) {
          const opacity = (1 - dist / this.config.maxDistance) * this.config.lineOpacity;
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.strokeStyle = a.color;
          this.ctx.globalAlpha = opacity;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    this.ctx.globalAlpha = 1;
    this.animationId = requestAnimationFrame(() => this._animate());
  }
}
