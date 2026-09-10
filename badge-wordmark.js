(function () {
  var script = document.currentScript;
  var ds = (script && script.dataset) || {};

  // Настройки по умолчанию — можно переопределить прямо в теге <script data-...>
  // для конкретного проекта, не трогая этот файл.
  var PORTFOLIO_URL = ds.url || "https://meteor-developer.vercel.app";
  var POSITION = ds.position || "bottom-right"; // top-left | top-right | bottom-left | bottom-right
  var HEIGHT = ds.height || "40"; // высота плашки в px, ширина считается по пропорциям картинки
  // путь до svg — по умолчанию грузится с jsDelivr CDN из репозитория mt-badge;
  // переопределить можно через data-logo="/другой/путь.svg"
  var LOGO_SRC = ds.logo || "https://cdn.jsdelivr.net/gh/supermangaka/mt-badge@main/meteor-wordmark-transparent.svg";

  var posMap = {
    "top-left": { top: "calc(20px + env(safe-area-inset-top, 0px))", left: "calc(20px + env(safe-area-inset-left, 0px))" },
    "top-right": { top: "calc(20px + env(safe-area-inset-top, 0px))", right: "calc(20px + env(safe-area-inset-right, 0px))" },
    "bottom-left": { bottom: "calc(20px + env(safe-area-inset-bottom, 0px))", left: "calc(20px + env(safe-area-inset-left, 0px))" },
    "bottom-right": { bottom: "calc(20px + env(safe-area-inset-bottom, 0px))", right: "calc(20px + env(safe-area-inset-right, 0px))" },
  };
  var pos = posMap[POSITION] || posMap["bottom-right"];

  // !important везде — чтобы стили сайта-хоста не могли перебить позиционирование бейджа.
  var style = document.createElement("style");
  style.textContent =
    "a.portfolio-badge{all:initial !important;box-sizing:border-box !important;" +
    "position:fixed !important;" +
    (pos.top ? "top:" + pos.top + " !important;" : "") +
    (pos.bottom ? "bottom:" + pos.bottom + " !important;" : "") +
    (pos.left ? "left:" + pos.left + " !important;" : "") +
    (pos.right ? "right:" + pos.right + " !important;" : "") +
    "z-index:2147483647 !important;" +
    "display:flex !important;align-items:center !important;justify-content:center !important;" +
    "height:" + HEIGHT + "px !important;padding:0 14px !important;" +
    "border-radius:999px !important;overflow:hidden !important;cursor:pointer !important;" +
    "-webkit-tap-highlight-color:transparent !important;touch-action:manipulation !important;" +
    "background:linear-gradient(rgba(20,18,16,.75),rgba(20,18,16,.75)) padding-box," +
    "linear-gradient(90deg,#FF8A1E,#FF3D6E,#B23BE0,#3D5BFF) border-box !important;" +
    "backdrop-filter:blur(10px) !important;-webkit-backdrop-filter:blur(10px) !important;" +
    "border:1.5px solid transparent !important;" +
    "box-shadow:0 4px 14px rgba(0,0,0,.35) !important;" +
    "transition:transform .2s ease,box-shadow .2s ease,filter .2s ease !important}" +
    "a.portfolio-badge:hover,a.portfolio-badge:focus-visible{transform:translateY(-3px) scale(1.04) !important;" +
    "filter:saturate(1.3) brightness(1.08) !important;" +
    "box-shadow:0 8px 22px rgba(0,0,0,.45) !important}" +
    "a.portfolio-badge:active{transform:scale(0.94) !important;" +
    "box-shadow:0 2px 8px rgba(0,0,0,.4) !important}" +
    "a.portfolio-badge img{display:block !important;height:100% !important;width:auto !important;" +
    "max-width:none !important;pointer-events:none !important}" +
    "@media (max-width:420px){a.portfolio-badge{height:" + (parseInt(HEIGHT) - 4) + "px !important;padding:0 11px !important}" +
    (pos.bottom ? "a.portfolio-badge{bottom:calc(14px + env(safe-area-inset-bottom, 0px)) !important}" : "") +
    (pos.right ? "a.portfolio-badge{right:calc(14px + env(safe-area-inset-right, 0px)) !important}" : "") +
    (pos.left ? "a.portfolio-badge{left:calc(14px + env(safe-area-inset-left, 0px)) !important}" : "") +
    "}";
  document.head.appendChild(style);

  var link = document.createElement("a");
  link.href = PORTFOLIO_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "portfolio-badge";
  link.setAttribute("aria-label", "Портфолио разработчика — METEOR");

  var img = document.createElement("img");
  img.src = LOGO_SRC;
  img.alt = "METEOR";
  link.appendChild(img);

  document.body.appendChild(link);
})();