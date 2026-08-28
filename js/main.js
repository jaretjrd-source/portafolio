// ===================================================
// JavaScript del portafolio
// ===================================================

// ---- 1. Año dinámico en el footer ----
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---- 2. Botón de idioma (español / inglés) ----
// El CSS muestra solo el idioma que coincide con <html lang>.
// Aquí solo cambiamos ese atributo y lo recordamos en el navegador.
const langToggle = document.getElementById("lang-toggle");

function applyLang(lang) {
  document.documentElement.lang = lang;
  // El botón muestra el idioma al que se cambiaría
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  langToggle.setAttribute(
    "aria-label",
    lang === "es" ? "Switch to English" : "Cambiar a español"
  );
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // localStorage puede fallar (modo privado); no pasa nada
  }
}

if (langToggle) {
  // Estado inicial según lo que ya tenga <html> (lo puso el script del <head>)
  applyLang(document.documentElement.lang === "en" ? "en" : "es");

  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "es" ? "en" : "es";
    applyLang(next);
  });
}
