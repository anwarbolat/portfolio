/* Progressive enhancement: all content and navigation also work without JavaScript. */
(() => {
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const canvas = document.querySelector('.hero-sphere canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const points = [];
  for (let latitude = 1; latitude < 18; latitude++) {
    const phi = latitude * Math.PI / 18;
    for (let longitude = 0; longitude < 36; longitude++) {
      const theta = longitude * Math.PI / 18;
      points.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        pink: longitude % 2 === 0
      });
    }
  }
  let frame = 0;
  let visible = false;
  let lastTime = 0;
  let angle = .3;
  function draw() {
    context.clearRect(0, 0, 600, 600);
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const projected = points.map(point => {
      const x = point.x * cosine - point.z * sine;
      const z = point.x * sine + point.z * cosine;
      const y = point.y * .93 - z * .37;
      const depth = point.y * .37 + z * .93;
      return { x, y, depth, pink: point.pink };
    }).sort((a, b) => a.depth - b.depth);
    for (const point of projected) {
      const scale = 1 + point.depth * .12;
      context.beginPath();
      context.arc(300 + point.x * 220 * scale, 300 + point.y * 220 * scale,
        1.6 + (point.depth + 1) * 1.2, 0, Math.PI * 2);
      context.fillStyle = point.pink ? '#df53cb' : '#5368ff';
      context.globalAlpha = .22 + (point.depth + 1) * .35;
      context.fill();
    }
    context.globalAlpha = 1;
  }
  function animate(time) {
    if (time - lastTime > 32) {
      angle += Math.min(time - lastTime, 100) * .00009;
      lastTime = time;
      draw();
    }
    frame = requestAnimationFrame(animate);
  }
  function syncAnimation() {
    cancelAnimationFrame(frame);
    if (visible && !document.hidden && !reducedMotion.matches) {
      lastTime = performance.now();
      frame = requestAnimationFrame(animate);
    } else draw();
  }
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    syncAnimation();
  }).observe(canvas);
  reducedMotion.addEventListener('change', syncAnimation);
  document.addEventListener('visibilitychange', syncAnimation);
  draw();
})();
