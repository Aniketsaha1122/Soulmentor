// ============================================
// SoulMentor — 3D Particle System
// Lightweight canvas-based ambient background
// ============================================

class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.animationId = null;
    this.running = false;

    // Mood color palettes
    this.moodColors = {
      neutral: ['#9b59b6', '#1abc9c', '#e8a87c', '#8e44ad', '#ffffff'],
      sad: ['#3498db', '#2c3e50', '#5dade2', '#85c1e9', '#aed6f1'],
      happy: ['#f39c12', '#e8a87c', '#f1c40f', '#e74c3c', '#ff6b81'],
      inspired: ['#9b59b6', '#e8a87c', '#f1c40f', '#1abc9c', '#ffffff'],
      angry: ['#e74c3c', '#c0392b', '#e8a87c', '#d35400', '#ff6b81']
    };
    this.currentMood = 'neutral';
    this.targetColors = this.moodColors.neutral;
    this.currentColors = [...this.moodColors.neutral];

    this.resize();
    this.initParticles();

    // Event listeners
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initParticles() {
    // Mobile optimization: Reduce particle count based on screen size and device capabilities
    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 480;
    const hasLowPerformance = navigator.deviceMemory && navigator.deviceMemory < 4;
    
    let count;
    if (isSmallMobile || hasLowPerformance) {
      count = Math.min(20, Math.floor((window.innerWidth * window.innerHeight) / 60000));
    } else if (isMobile) {
      count = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 30000));
    } else {
      count = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    }
    
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    const z = Math.random();
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      z: z,
      size: (1 + Math.random() * 3) * (0.3 + z * 0.7),
      speedX: (Math.random() - 0.5) * 0.3 * (0.3 + z * 0.7),
      speedY: -(0.1 + Math.random() * 0.4) * (0.3 + z * 0.7),
      opacity: (0.1 + Math.random() * 0.5) * (0.3 + z * 0.7),
      colorIndex: Math.floor(Math.random() * 5),
      pulseSpeed: 0.005 + Math.random() * 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
      angle: Math.random() * Math.PI * 2
    };
  }

  setMood(mood) {
    if (this.moodColors[mood]) {
      this.currentMood = mood;
      this.targetColors = this.moodColors[mood];
    }
  }

  lerpColor(a, b, t) {
    // Simple hex color lerp
    const ah = a.replace('#', '');
    const bh = b.replace('#', '');
    const ar = parseInt(ah.substring(0, 2), 16);
    const ag = parseInt(ah.substring(2, 4), 16);
    const ab = parseInt(ah.substring(4, 6), 16);
    const br = parseInt(bh.substring(0, 2), 16);
    const bg = parseInt(bh.substring(2, 4), 16);
    const bb = parseInt(bh.substring(4, 6), 16);
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return `#${rr.toString(16).padStart(2, '0')}${rg.toString(16).padStart(2, '0')}${rb.toString(16).padStart(2, '0')}`;
  }

  update() {
    const time = Date.now() * 0.001;

    // Lerp colors toward target
    for (let i = 0; i < this.currentColors.length; i++) {
      this.currentColors[i] = this.lerpColor(this.currentColors[i], this.targetColors[i], 0.01);
    }

    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const mouseOffsetX = (this.mouseX - centerX) / centerX;
    const mouseOffsetY = (this.mouseY - centerY) / centerY;

    for (const p of this.particles) {
      // Base movement
      p.x += p.speedX + Math.sin(time + p.pulseOffset) * 0.1;
      p.y += p.speedY;

      // Mouse parallax (depth-based)
      p.x += mouseOffsetX * p.z * 0.5;
      p.y += mouseOffsetY * p.z * 0.3;

      // Wrap around edges
      if (p.y < -10) { p.y = this.canvas.height + 10; p.x = Math.random() * this.canvas.width; }
      if (p.y > this.canvas.height + 10) { p.y = -10; }
      if (p.x < -10) p.x = this.canvas.width + 10;
      if (p.x > this.canvas.width + 10) p.x = -10;

      // Pulse opacity
      p.currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset));
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Disable particle connections on mobile for better performance
    const shouldDrawConnections = window.innerWidth >= 768;

    for (const p of this.particles) {
      const color = this.currentColors[p.colorIndex];
      const glow = p.size * 3;

      // Draw glow
      const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
      gradient.addColorStop(0, color + Math.round(p.currentOpacity * 80).toString(16).padStart(2, '0'));
      gradient.addColorStop(1, color + '00');

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      // Draw core
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = color + Math.round(p.currentOpacity * 255).toString(16).padStart(2, '0');
      this.ctx.fill();
    }

    // Draw connections between nearby particles (desktop only)
    if (shouldDrawConnections) {
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const a = this.particles[i];
          const b = this.particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.15 * Math.min(a.z, b.z);
            this.ctx.beginPath();
            this.ctx.moveTo(a.x, a.y);
            this.ctx.lineTo(b.x, b.y);
            this.ctx.strokeStyle = `rgba(155, 89, 182, ${opacity})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }
      }
    }
  }

  animate() {
    if (!this.running) return;
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  start() {
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}

window.ParticleSystem = ParticleSystem;
