(function () {
  function readConfig() {
    var el = document.getElementById('site-config-embedded');
    if (!el || !el.textContent) return {};
    try {
      return JSON.parse(el.textContent);
    } catch (e) {
      return {};
    }
  }

  function heroVideo() {
    var v = document.querySelector('.bgVideo');
    if (!v) return;
    var desktopMp4 = v.getAttribute('data-desktop-src');
    var mobileMp4 = v.getAttribute('data-mobile-src');
    if (!desktopMp4 || !mobileMp4) {
      v.muted = true;
      if (v.play) v.play().catch(function () {});
      return;
    }
    function apply() {
      var next = window.innerWidth >= 900 ? desktopMp4 : mobileMp4;
      if (v.getAttribute('data-current-hero-src') === next) return;
      v.setAttribute('data-current-hero-src', next);
      v.src = next;
      v.preload = 'metadata';
      v.muted = true;
      try {
        v.load();
      } catch (e) {}
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    }
    apply();
    window.addEventListener('resize', apply);
  }

  function launchpadCta() {
    var cfg = readConfig();
    var url = (cfg.checkout && cfg.checkout.launchpadUrl) || '#';
    var label = (cfg.checkout && cfg.checkout.ctaLabel) || 'Continue to secure checkout';
    var a = document.getElementById('launchpad-cta');
    if (a) {
      a.href = url;
      a.textContent = label;
    }
  }

  function blockHlForms() {
    document.querySelectorAll('form').forEach(function (f) {
      f.addEventListener(
        'submit',
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    heroVideo();
    launchpadCta();
    blockHlForms();
  });
})();
