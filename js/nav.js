(function () {
  var toggle = document.getElementById('mobile-toggle');
  var nav    = document.getElementById('site-nav');

  /* ── Hamburger open/close ── */
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
      toggle.classList.toggle('toggle-active');
    });
  }

  /* ── Product dropdown: click-accordion on mobile ── */
  document.querySelectorAll('.nav-dropdown-trigger').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.innerWidth > 760) return;
      e.stopPropagation();
      var parent = btn.closest('.nav-dropdown');
      if (!parent) return;
      var isOpen = parent.classList.contains('is-open');
      /* close any other open dropdowns */
      document.querySelectorAll('.nav-dropdown.is-open').forEach(function (d) {
        d.classList.remove('is-open');
      });
      if (!isOpen) parent.classList.add('is-open');
    });
  });

  /* ── Close nav when a menu link is clicked ── */
  if (nav) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        if (toggle) toggle.classList.remove('toggle-active');
        document.querySelectorAll('.nav-dropdown.is-open').forEach(function (d) {
          d.classList.remove('is-open');
        });
      });
    });
  }

  /* ── Close nav on outside click ── */
  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target) && toggle && !toggle.contains(e.target)) {
      nav.classList.remove('nav-open');
      if (toggle) toggle.classList.remove('toggle-active');
      document.querySelectorAll('.nav-dropdown.is-open').forEach(function (d) {
        d.classList.remove('is-open');
      });
    }
  });
})();

/* ── Scroll-to-top button (mobile) ── */
(function () {
  var btn = document.createElement('button');
  btn.className = 'scroll-top-btn';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';
  document.body.appendChild(btn);

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function update() {
    if (window.pageYOffset > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
