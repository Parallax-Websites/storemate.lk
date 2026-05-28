(function () {
  'use strict';

  var STORAGE_KEY = 'sm_cookie_consent';

  /* Already decided — do nothing */
  if (localStorage.getItem(STORAGE_KEY)) return;

  /* ── Inject styles ──────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    '#sm-cookie-overlay{',
    '  position:fixed;inset:0;z-index:9998;',
    '  background:rgba(6,11,22,0.55);',
    '  backdrop-filter:blur(4px);',
    '  -webkit-backdrop-filter:blur(4px);',
    '  opacity:0;transition:opacity .35s ease;pointer-events:none;',
    '}',
    '#sm-cookie-overlay.sm-visible{opacity:1;pointer-events:auto;}',

    '#sm-cookie-banner{',
    '  position:fixed;bottom:0;left:0;right:0;z-index:9999;',
    '  display:flex;justify-content:center;',
    '  padding:0 20px 32px;',
    '  transform:translateY(110%);',
    '  transition:transform .45s cubic-bezier(.22,.68,0,1.2);',
    '}',
    '#sm-cookie-banner.sm-visible{transform:translateY(0);}',

    '#sm-cookie-card{',
    '  width:100%;max-width:720px;',
    '  background:linear-gradient(145deg,#0d1a30,#0a1220);',
    '  border:1px solid rgba(255,255,255,0.1);',
    '  border-radius:20px;',
    '  padding:28px 32px;',
    '  display:grid;',
    '  grid-template-columns:auto 1fr;',
    '  gap:20px 24px;',
    '  align-items:center;',
    '  box-shadow:0 -4px 40px rgba(0,0,0,.45),0 0 0 1px rgba(33,83,192,.15);',
    '}',

    '#sm-cookie-icon{',
    '  width:52px;height:52px;',
    '  background:rgba(33,83,192,.15);',
    '  border:1px solid rgba(33,83,192,.25);',
    '  border-radius:14px;',
    '  display:flex;align-items:center;justify-content:center;',
    '  font-size:1.5rem;flex-shrink:0;',
    '  grid-row:1/3;',
    '}',

    '#sm-cookie-heading{',
    '  font-family:inherit;',
    '  font-size:.95rem;font-weight:700;',
    '  color:#fff;margin:0 0 4px;',
    '}',
    '#sm-cookie-body{',
    '  font-family:inherit;',
    '  font-size:.82rem;color:rgba(255,255,255,.55);',
    '  line-height:1.65;margin:0;',
    '}',
    '#sm-cookie-body a{color:rgba(255,255,255,.75);text-decoration:underline;text-underline-offset:2px;}',
    '#sm-cookie-body a:hover{color:#fff;}',

    '#sm-cookie-actions{',
    '  grid-column:2;',
    '  display:flex;gap:10px;flex-wrap:wrap;align-items:center;',
    '  margin-top:4px;',
    '}',

    '.sm-cookie-btn{',
    '  font-family:inherit;',
    '  font-size:.82rem;font-weight:700;',
    '  padding:10px 22px;border-radius:10px;',
    '  cursor:pointer;border:none;',
    '  transition:transform .18s,box-shadow .18s,background .18s,opacity .18s;',
    '  white-space:nowrap;',
    '}',
    '.sm-cookie-btn:hover{transform:translateY(-2px);}',
    '.sm-cookie-btn:active{transform:translateY(0);}',

    '#sm-cookie-accept{',
    '  background:linear-gradient(135deg,#2153c0,#1a3e96);',
    '  color:#fff;',
    '  box-shadow:0 4px 14px rgba(33,83,192,.4);',
    '}',
    '#sm-cookie-accept:hover{box-shadow:0 6px 20px rgba(33,83,192,.55);}',

    '#sm-cookie-reject{',
    '  background:transparent;',
    '  color:rgba(255,255,255,.55);',
    '  border:1px solid rgba(255,255,255,.15);',
    '}',
    '#sm-cookie-reject:hover{color:#fff;border-color:rgba(255,255,255,.4);}',

    /* Responsive */
    '@media(max-width:580px){',
    '  #sm-cookie-card{',
    '    grid-template-columns:1fr;',
    '    padding:24px 20px;gap:14px;',
    '  }',
    '  #sm-cookie-icon{grid-row:auto;width:40px;height:40px;font-size:1.2rem;border-radius:10px;}',
    '  #sm-cookie-actions{grid-column:1;margin-top:0;}',
    '  .sm-cookie-btn{flex:1;text-align:center;}',
    '}',
  ].join('');
  document.head.appendChild(style);

  /* ── Build DOM ──────────────────────────────────────────── */
  var overlay = document.createElement('div');
  overlay.id = 'sm-cookie-overlay';

  var banner = document.createElement('div');
  banner.id = 'sm-cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-modal', 'true');
  banner.setAttribute('aria-label', 'Cookie consent');

  banner.innerHTML = [
    '<div id="sm-cookie-card">',
    '  <div id="sm-cookie-icon" aria-hidden="true">🍪</div>',
    '  <div>',
    '    <p id="sm-cookie-heading">We use cookies</p>',
    '    <p id="sm-cookie-body">',
    '      We use cookies to improve your experience, analyse site traffic, and personalise content.',
    '      Read our <a href="#">Privacy Policy</a> to learn more.',
    '    </p>',
    '  </div>',
    '  <div id="sm-cookie-actions">',
    '    <button class="sm-cookie-btn" id="sm-cookie-accept">Accept All</button>',
    '    <button class="sm-cookie-btn" id="sm-cookie-reject">Decline</button>',
    '  </div>',
    '</div>',
  ].join('');

  document.body.appendChild(overlay);
  document.body.appendChild(banner);

  /* ── Show with delay ────────────────────────────────────── */
  setTimeout(function () {
    overlay.classList.add('sm-visible');
    banner.classList.add('sm-visible');
    document.getElementById('sm-cookie-accept').focus();
  }, 900);

  /* ── Dismiss ────────────────────────────────────────────── */
  function dismiss(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    overlay.classList.remove('sm-visible');
    banner.style.transition = 'transform .35s cubic-bezier(.4,0,1,1)';
    banner.classList.remove('sm-visible');
    setTimeout(function () {
      overlay.remove();
      banner.remove();
      style.remove();
    }, 400);
  }

  document.getElementById('sm-cookie-accept').addEventListener('click', function () {
    dismiss('accepted');
  });

  document.getElementById('sm-cookie-reject').addEventListener('click', function () {
    dismiss('rejected');
  });

  /* Dismiss on overlay click */
  overlay.addEventListener('click', function () {
    dismiss('rejected');
  });

  /* Dismiss on Escape key */
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') {
      dismiss('rejected');
      document.removeEventListener('keydown', handler);
    }
  });
})();
