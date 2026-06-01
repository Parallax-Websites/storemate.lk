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
