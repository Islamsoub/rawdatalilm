document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  var navToggle = document.querySelector('.nav-toggle');
  var nav       = document.querySelector('header nav');

  navToggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('open');
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });

  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  var items = document.querySelectorAll('.faq-list dt');

  items.forEach(function (dt) {
    function toggle() {
      var isOpen = dt.classList.contains('active');

      items.forEach(function (item) {
        item.classList.remove('active');
        item.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        dt.classList.add('active');
        dt.setAttribute('aria-expanded', 'true');
      }
    }

    dt.addEventListener('click', toggle);

    dt.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
});
