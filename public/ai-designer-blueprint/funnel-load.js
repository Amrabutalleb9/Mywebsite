(function () {
  function funnelConfigUrl() {
    var u = new URL(window.location.href);
    var segs = u.pathname.split("/").filter(Boolean);
    if (segs[segs.length - 1] === "index.html") segs.pop();
    if (segs.length) segs.pop();
    u.pathname = "/" + segs.join("/") + "/funnel.config.json";
    return u.href;
  }

  function applyConfig(cfg) {
    if (!cfg || typeof cfg !== "object") return;
    document.querySelectorAll("[data-checkout]").forEach(function (el) {
      var k = el.getAttribute("data-checkout");
      if (cfg.checkouts && cfg.checkouts[k]) el.setAttribute("href", cfg.checkouts[k]);
    });
    document.querySelectorAll("[data-download]").forEach(function (el) {
      var k = el.getAttribute("data-download");
      if (cfg.downloads && cfg.downloads[k]) el.setAttribute("href", cfg.downloads[k]);
    });
  }

  fetch(funnelConfigUrl())
    .then(function (r) {
      if (!r.ok) throw new Error("config fetch failed");
      return r.json();
    })
    .then(applyConfig)
    .catch(function () {});
})();
