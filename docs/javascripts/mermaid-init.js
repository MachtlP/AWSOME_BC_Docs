(function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  function prepareMermaidBlocks() {
    document.querySelectorAll("pre code.language-mermaid, pre code.mermaid").forEach(function (code) {
      var pre = code.parentElement;
      var div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = code.textContent;
      pre.replaceWith(div);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    prepareMermaidBlocks();
    if (!document.querySelector(".mermaid")) return;

    loadScript("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js")
      .then(function () {
        mermaid.initialize({
          startOnLoad: true,
          theme: "neutral",
          flowchart: { curve: "basis", htmlLabels: true },
          securityLevel: "loose",
        });
        mermaid.run();
      })
      .catch(function (err) {
        console.warn("Mermaid failed to load:", err);
      });
  });
})();
