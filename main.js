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
