(function () {
  function loadStyle(href) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  function wrapImages() {
    var imgs = document.querySelectorAll(
      ".col-md-9 img, #content article img, article img, .md-content img"
    );
    imgs.forEach(function (img) {
      if (img.closest("a.glightbox, a.image-zoom")) return;
      if (img.classList.contains("no-zoom")) return;

      var anchor = document.createElement("a");
      anchor.href = img.currentSrc || img.src;
      anchor.className = "glightbox image-zoom";
      anchor.setAttribute("data-gallery", "docs-images");
      anchor.setAttribute("data-type", "image");
      if (img.alt) anchor.setAttribute("data-title", img.alt);

      img.parentNode.insertBefore(anchor, img);
      anchor.appendChild(img);
    });
  }

  function init() {
    wrapImages();
    if (typeof GLightbox === "undefined") return;
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: false,
      zoomable: true,
      draggable: true,
      openEffect: "fade",
      closeEffect: "fade",
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    Promise.all([
      loadStyle("https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/css/glightbox.min.css"),
      loadScript("https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js"),
    ])
      .then(init)
      .catch(function (err) {
        console.warn("Image lightbox failed to load:", err);
      });
  });
})();
