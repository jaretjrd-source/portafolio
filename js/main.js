// ===================================================
// JavaScript del portafolio
// ===================================================

// ---- 1. Año dinámico en el footer ----
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---- 2. Botón de idioma (inglés / alemán) ----
// El CSS muestra solo el idioma que coincide con <html lang>.
// Aquí solo cambiamos ese atributo y lo recordamos en el navegador.
const langToggle = document.getElementById("lang-toggle");

function applyLang(lang) {
  document.documentElement.lang = lang;
  // El botón muestra el idioma al que se cambiaría
  langToggle.textContent = lang === "de" ? "EN" : "DE";
  langToggle.setAttribute(
    "aria-label",
    lang === "de" ? "Switch to English" : "Auf Deutsch umschalten"
  );
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // localStorage puede fallar (modo privado); no pasa nada
  }
}

if (langToggle) {
  // Estado inicial según lo que ya tenga <html> (lo puso el script del <head>).
  // Predeterminado: inglés.
  applyLang(document.documentElement.lang === "de" ? "de" : "en");

  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "de" ? "en" : "de";
    applyLang(next);
  });
}
