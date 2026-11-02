/* Progressive enhancement: content and navigation work without JavaScript. */
(() => {
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('.hero-wrapper');
  const sphere = hero?.querySelector('.sphere');

  if (sphere) {
    // The original twelve planes, each with thirty-six staggered dots.
    const fragment = document.createDocumentFragment();
    for (let planeIndex = 1; planeIndex <= 12; planeIndex++) {
      const plane = document.createElement('div');
      plane.className = 'plane';
      plane.style.transform = `rotateY(${planeIndex * 15}deg)`;
      for (let spokeIndex = 1; spokeIndex <= 36; spokeIndex++) {
        const spoke = document.createElement('div');
        spoke.className = 'spoke';
        spoke.style.transform = `rotateZ(${spokeIndex * 10}deg)`;
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.backgroundColor = spokeIndex % 2 === 0 ? '#DF53CB' : '#364EE5';
        const step = Math.min(spokeIndex, 36 - spokeIndex);
        const delay = step === 18 ? .95 : step * .05;
        dot.style.animationDelay = `${delay}s`;
        spoke.append(dot);
        plane.append(spoke);
      }
      fragment.append(plane);
    }
    sphere.append(fragment);
    hero.classList.add('motion-ready');
    let visible = true;
    function syncHero() {
      hero.classList.toggle('motion-paused', !visible || document.hidden || reducedMotion.matches);
    }
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      syncHero();
    }).observe(hero);
    document.addEventListener('visibilitychange', syncHero);
    reducedMotion.addEventListener('change', syncHero);
    syncHero();
  }

  const cursor = document.querySelector('.cursors');
  if (!cursor) return;
  const balls = [...cursor.children];
  const message = cursor.querySelector('p');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const positions = balls.map(() => ({ x: 0, y: 0 }));
  let enabled = false;
  let frame = 0;
  let lastTime = 0;
  let aimX = 0;
  let aimY = 0;
  let hoveredImage = null;
  let messageHeight = 0;

  function hideCursor() {
    cancelAnimationFrame(frame);
    frame = 0;
    cursor.hidden = true;
    message.classList.remove('visible');
    hoveredImage = null;
    document.documentElement.classList.remove('has-cursor-trail');
  }
  function syncCursor() {
    enabled = finePointer.matches && !reducedMotion.matches && !document.hidden;
    hideCursor();
  }
  function animate(time) {
    // One animation loop updates all dots and stops when the trail settles.
    const elapsed = Math.min((time - lastTime) / (1000 / 60) || 1, 3);
    lastTime = time;
    let moving = false;
    balls.forEach((ball, index) => {
      const position = positions[index];
      const blend = 1 - Math.pow(1 - (.3 - index * .01), elapsed);
      position.x += (aimX - position.x) * blend;
      position.y += (aimY - position.y) * blend;
      ball.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`;
      if (Math.abs(aimX - position.x) + Math.abs(aimY - position.y) > .1) moving = true;
    });
    frame = moving ? requestAnimationFrame(animate) : 0;
  }
  function updateMessage(target) {
    const image = target instanceof Element ? target.closest('img[data-hover]') : null;
    if (image === hoveredImage) return;
    hoveredImage = image;
    message.textContent = image?.getAttribute('data-hover') || '';
    message.classList.toggle('visible', !!image);
    messageHeight = image ? message.offsetHeight : 0;
  }
  function placeMessage() {
    const left = aimX > innerWidth / 2;
    cursor.classList.toggle('label-left', left);
    if (hoveredImage) {
      const room = (left ? aimX : innerWidth - aimX) - 56;
      message.style.width = `${Math.min(400, Math.max(1, room))}px`;
      messageHeight = message.offsetHeight;
    }
    cursor.classList.toggle('label-above', aimY + messageHeight + 20 > innerHeight);
  }
  document.addEventListener('pointermove', event => {
    if (!enabled || event.pointerType !== 'mouse') return;
    aimX = event.clientX;
    aimY = event.clientY;
    if (cursor.hidden) {
      positions.forEach(position => { position.x = aimX; position.y = aimY; });
      cursor.hidden = false;
      document.documentElement.classList.add('has-cursor-trail');
    }
    updateMessage(event.target);
    placeMessage();
    if (!frame) {
      lastTime = performance.now();
      frame = requestAnimationFrame(animate);
    }
  }, { passive: true });
  document.addEventListener('scroll', () => {
    if (cursor.hidden) return;
    updateMessage(document.elementFromPoint(aimX, aimY));
    placeMessage();
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', hideCursor);
  document.addEventListener('keydown', hideCursor);
  window.addEventListener('blur', hideCursor);
  document.addEventListener('visibilitychange', syncCursor);
  finePointer.addEventListener('change', syncCursor);
  reducedMotion.addEventListener('change', syncCursor);
  syncCursor();
})();
