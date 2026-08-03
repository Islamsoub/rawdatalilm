/* Rawdat Al-Ilm — main.js
   Shared between index.html (EN) and index-ar.html (AR).
   Single behavior: FAQ accordion. */

(function () {
  const items = document.querySelectorAll('[data-faq]');
  items.forEach((el) => {
    el.addEventListener('click', () => {
      const wasOpen = el.classList.contains('open');
      items.forEach((i) => i.classList.remove('open'));
      if (!wasOpen) el.classList.add('open');
    });
  });
})();

(function () {
  const btn = document.querySelector('.nav-toggle');
  const panel = document.getElementById('mobile-nav');
  if (!btn || !panel) return;
  const close = () => { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    panel.hidden = open;
    btn.setAttribute('aria-expanded', String(!open));
  });
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
