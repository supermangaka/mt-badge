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
    "top-left": { top: "20px", left: "20px" },
    "top-right": { top: "20px", right: "20px" },
    "bottom-left": { bottom: "20px", left: "20px" },
    "bottom-right": { bottom: "20px", right: "20px" },
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
    "background:rgba(20,18,16,.65) !important;backdrop-filter:blur(10px) !important;-webkit-backdrop-filter:blur(10px) !important;" +
    "border:1.5px solid rgba(255,255,255,.35) !important;" +
    "box-shadow:0 4px 14px rgba(0,0,0,.35),0 0 0 1px rgba(0,0,0,.25) !important;" +
    "transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease !important}" +
    "a.portfolio-badge:hover,a.portfolio-badge:focus-visible{transform:translateY(-3px) scale(1.04) !important;" +
    "border-color:rgba(255,255,255,.55) !important;" +
    "box-shadow:0 8px 22px rgba(0,0,0,.45),0 0 0 1px rgba(0,0,0,.3) !important}" +
    "a.portfolio-badge img{display:block !important;height:100% !important;width:auto !important;" +
    "max-width:none !important;pointer-events:none !important}";
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