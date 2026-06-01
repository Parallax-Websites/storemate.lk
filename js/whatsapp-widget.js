(function () {
  var PHONE   = '94777672155';
  var MESSAGE = 'Hi Storemate! I would like to know more about the platform.';
  var HREF    = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(MESSAGE);

  /* ── Styles ── */
  var style = document.createElement('style');
  style.textContent =
    '.wa-widget{position:fixed;bottom:24px;right:24px;z-index:9990;}' +
    '.wa-btn-wrap{position:relative;width:56px;height:56px;}' +
    '.wa-pulse{position:absolute;inset:0;border-radius:50%;background:rgba(37,211,102,0.4);pointer-events:none;animation:wa-pulse 2.2s ease-out infinite;}' +
    '@keyframes wa-pulse{0%{transform:scale(1);opacity:0.8;}100%{transform:scale(2);opacity:0;}}' +
    '.wa-btn{position:relative;z-index:1;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,0.5);text-decoration:none;transition:transform 0.2s,box-shadow 0.2s;}' +
    '.wa-btn:hover{transform:scale(1.1);box-shadow:0 8px 28px rgba(37,211,102,0.6);}' +
    '.wa-tooltip{position:absolute;bottom:66px;right:0;background:#1a1a1a;color:#fff;font-size:13px;font-weight:600;line-height:1.4;padding:10px 16px;border-radius:12px;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,0.2);pointer-events:none;opacity:0;transform:translateY(6px);transition:opacity 0.18s,transform 0.18s;}' +
    '.wa-tooltip::after{content:"";position:absolute;bottom:-6px;right:20px;width:12px;height:6px;background:#1a1a1a;clip-path:polygon(0 0,100% 0,50% 100%);}' +
    '.wa-tooltip small{display:block;font-size:11px;font-weight:400;color:rgba(255,255,255,0.5);margin-top:2px;}' +
    '.wa-tooltip.wa-show{opacity:1;transform:translateY(0);}' +
    '@media(max-width:600px){.wa-widget{bottom:16px;right:16px;}.wa-btn-wrap{width:50px;height:50px;}.wa-btn{width:50px;height:50px;}.wa-pulse{inset:0;}}';
  document.head.appendChild(style);

  /* ── HTML ── */
  var widget = document.createElement('div');
  widget.className = 'wa-widget';
  widget.innerHTML =
    '<div class="wa-btn-wrap">' +
      '<div class="wa-pulse"></div>' +
      '<a class="wa-btn" href="' + HREF + '" target="_blank" rel="noopener noreferrer" aria-label="Chat with Storemate on WhatsApp">' +
        '<svg width="26" height="26" viewBox="0 0 32 32" fill="none">' +
          '<path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.48 1.65 6.38L3 29l6.82-1.62A13 13 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#fff"/>' +
          '<path d="M16 5.2A10.8 10.8 0 005.2 16c0 2.02.56 3.9 1.53 5.51l.27.43-1.14 4.17 4.28-1.12.42.25A10.8 10.8 0 1016 5.2z" fill="#25D366"/>' +
          '<path d="M12.07 10.2c-.28-.62-.57-.63-.83-.64l-.7-.01c-.25 0-.64.09-.98.46-.33.37-1.27 1.24-1.27 3.02s1.3 3.5 1.48 3.74c.18.25 2.52 4.03 6.2 5.48 3.07 1.21 3.7.97 4.36.91.67-.06 2.15-.88 2.46-1.73.3-.85.3-1.57.21-1.73-.09-.15-.34-.24-.7-.42-.37-.18-2.15-1.06-2.49-1.18-.33-.12-.57-.18-.81.18-.24.37-.93 1.18-1.14 1.42-.21.25-.42.28-.79.1-.36-.19-1.53-.56-2.91-1.8-1.08-.96-1.8-2.14-2.01-2.5-.21-.37-.02-.57.16-.75.16-.17.37-.43.55-.64.18-.22.24-.37.37-.61.12-.25.06-.46-.03-.64-.1-.19-.8-1.98-1.13-2.71z" fill="#fff"/>' +
        '</svg>' +
      '</a>' +
      '<div class="wa-tooltip">Chat with us on WhatsApp<small>Sales &amp; support</small></div>' +
    '</div>';

  document.body.appendChild(widget);

  /* ── Tooltip via JS ── */
  var btn     = widget.querySelector('.wa-btn');
  var tooltip = widget.querySelector('.wa-tooltip');

  btn.addEventListener('mouseenter', function () { tooltip.classList.add('wa-show'); });
  btn.addEventListener('mouseleave', function () { tooltip.classList.remove('wa-show'); });
  btn.addEventListener('focus',      function () { tooltip.classList.add('wa-show'); });
  btn.addEventListener('blur',       function () { tooltip.classList.remove('wa-show'); });
})();
