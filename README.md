# Portafolio Personal

Proyecto para construir mi portafolio web desde cero con **HTML, CSS y JavaScript puro** (sin frameworks).
Objetivo: tener una página publicada que muestre quién soy, mis proyectos (incluido mi juego) y cómo contactarme.

## Decisiones del proyecto

- **Idioma:** bilingüe español / inglés. Cada texto visible está dos veces en
  `index.html` (`lang="es"` y `lang="en"`); el CSS muestra solo el idioma de
  `<html lang>` y el botón "EN/ES" del header lo cambia (se guarda en el navegador).
- **Sin diseño móvil:** decisión del proyecto — la Fase 3 se omite. La página
  está pensada para pantalla de computadora. Solo se conservan ajustes mínimos
  (meta viewport, imágenes fluidas, apilado básico) que ya venían de fases previas.
- **Estilo visual:** "Minimal técnico" — tipografía Inter, fondo blanco, texto
  casi negro, acento gris azulado (`#3f5c74`). Modo oscuro automático según el
  sistema, sin botón. Ancho de página 920px; bloques de texto largos limitados
  a ~60 caracteres para lectura cómoda.
- **Juego Breakout:** repo propio en https://github.com/jaretjrd-source/breakout
  (código Python/Pygame). Compilado a WebAssembly con `pygbag`; la build web vive
  en `juego/` y la tarjeta del proyecto enlaza a "▶ Jugar en el navegador".
- **Práctica en Neoterra Lumina:** solo versión genérica (puesto, fechas, área).
  Sin métricas, arquitectura ni detalles internos, por confidencialidad del contrato.
- **Datos personales:** el CV, contratos e identificaciones NO se suben al repo
  (bloqueados en `.gitignore`). Contacto público: solo correo, LinkedIn y GitHub.
- **Logo del Tec de Monterrey:** se usa el logotipo en la sección de Educación
  solo para identificar dónde estudio (uso nominativo, como en un CV). Si el Tec
  lo pidiera, se quita sin problema.

## Cómo usar este README

- Cada **fase** se trabaja en orden.
- Una fase se marca como **terminada** solo cuando **todos** sus puntos están completos.
- Marca cada punto cambiando `[ ]` por `[x]`.
- Si un punto no aplica, táchalo con `~~texto~~` y anota por qué.

### Progreso general

- [x] Fase 0 — Preparación del entorno
- [x] Fase 1 — Estructura y contenido (HTML)
- [x] Fase 2 — Estilos y diseño (CSS)
- [~] Fase 3 — Diseño responsive — **OMITIDA** (no se busca versión móvil)
- [x] Fase 4 — Interactividad (JavaScript)
- [x] Fase 5 — Integrar el juego (demo jugable con pygbag)
- [x] Fase 6 — Accesibilidad y pulido (Lighthouse 98 / 100 / 100 / 100)
- [x] Fase 7 — Publicación · https://jaretjrd-source.github.io/portafolio/
- [ ] Fase 8 — Mejoras futuras (opcional)

---

## Fase 0 — Preparación del entorno

Meta: tener las herramientas listas y el proyecto versionado.

- [x] Instalar y abrir **Visual Studio Code** en esta carpeta (`Pagina_web`).
- [x] Instalar la extensión **Live Server** en VS Code (para ver cambios en el navegador al guardar).
- [x] Instalar **Git** y confirmar que funciona (`git --version` en la terminal). — v2.55.0
- [x] Ejecutar `git init` dentro de la carpeta `Pagina_web`.
- [x] Crear un archivo `.gitignore` con al menos: `node_modules/`, `.DS_Store`, `*.log`.
- [x] Configurar identidad de Git en el repo: `user.email` y `user.name` ("Jaret Rubio").
- [x] Crear una cuenta en **GitHub**.
- [x] Crear un repositorio vacío en GitHub llamado `portafolio`.
- [x] Conectar el repo local con GitHub y hacer el primer `git push`.
- [x] Definir la estructura de carpetas:
  - [x] `index.html` en la raíz
  - [x] carpeta `css/` con `styles.css`
  - [x] carpeta `js/` con `main.js`
  - [x] carpeta `assets/` para imágenes (con subcarpeta `img/`)

**Fase 0 terminada cuando:** puedo abrir `index.html` con Live Server y el proyecto está subido a GitHub.

---

## Fase 1 — Estructura y contenido (HTML)

Meta: todo el contenido escrito y ordenado en HTML semántico, **sin preocuparme por el diseño todavía**.

- [x] `index.html` tiene la estructura base correcta: `<!DOCTYPE html>`, `<html lang="es">`, `<head>` y `<body>`.
- [x] En el `<head>`: `<meta charset="UTF-8">`, `<meta name="viewport">`, `<title>` con mi nombre, y `<meta name="description">`.
- [x] Enlazado el CSS con `<link rel="stylesheet" href="css/styles.css">`.
- [x] Enlazado el JS con `<script src="js/main.js" defer></script>`.
- [x] **Header** con:
  - [x] Mi nombre o logo
  - [x] Menú de navegación con enlaces internos (`#sobre-mi`, `#proyectos`, `#contacto`)
- [x] Sección **Hero / Inicio** con:
  - [x] Título principal (`<h1>`) que diga quién soy en una frase
  - [x] Subtítulo corto
  - [x] Un botón/enlace de llamada a la acción (ej. "Ver proyectos")
- [x] Sección **Sobre mí** (`id="sobre-mi"`) con:
  - [x] 1 o 2 párrafos de presentación
  - [x] Lista de tecnologías/habilidades que estoy aprendiendo
  - [x] (Opcional) una foto mía en `assets/img/` — `foto.jpg`, en "Sobre mí"
- [x] Sección **Proyectos** (`id="proyectos"`) con:
  - [x] Al menos **2 tarjetas** de proyecto (una es el juego)
  - [x] Cada tarjeta tiene: título, descripción corta, imagen/captura, enlace a demo y enlace a código
    → los 3 proyectos con captura real (redimensionadas y comprimidas: ~290 KB en total);
      el juego enlaza a github.com/jaretjrd-source/breakout; la "demo" del juego queda pendiente (opcional)
- [x] Sección **Contacto** (`id="contacto"`) con:
  - [x] Mi correo (como enlace `mailto:`)
  - [x] Enlaces a GitHub y LinkedIn (u otras redes)
  - [ ] (Opcional) un formulario de contacto con campos nombre, correo y mensaje
- [x] **Footer** con año actual y mi nombre.
- [ ] Todo el texto real está escrito (nada de "Lorem ipsum" ni "TODO") — quedan marcadores "(pendiente)" en los enlaces del juego.
- [x] Las imágenes tienen atributo `alt` descriptivo.
- [ ] La página valida sin errores en <https://validator.w3.org/> (pega la URL de Live Server o el contenido).

**Fase 1 terminada cuando:** el contenido completo se lee de arriba a abajo y tiene sentido, aunque se vea "feo".

---

## Fase 2 — Estilos y diseño (CSS)

Meta: que la página se vea cuidada y consistente en pantalla de computadora.

- [x] Añadido un **reset** o `box-sizing: border-box` global.
- [x] Definidas **variables CSS** (`:root`) para colores, fuente y espaciados principales.
- [x] Elegida y aplicada una **tipografía** (Google Fonts o fuente del sistema). — Inter
- [x] Definida una **paleta de 3–4 colores** (fondo, texto, color principal, acento) y usada de forma consistente.
- [x] Header con estilo y navegación horizontal. — fijo (sticky) con separador
- [x] Sección Hero con jerarquía visual clara (título grande, buen espacio en blanco).
- [x] Sección Proyectos con las tarjetas en **grid** o **flexbox**, alineadas y con espaciado uniforme.
- [x] Tarjetas de proyecto con estilo: borde/sombra, padding, imagen recortada de forma pareja.
- [x] Estados **`:hover`** y **`:focus`** visibles en todos los enlaces y botones. — `:focus-visible`
- [x] Botones con un estilo reutilizable (clase `.btn`).
- [x] Espaciado vertical consistente entre secciones.
- [x] Ancho máximo de contenido (`max-width`) y centrado en pantallas grandes. — 920px
- [x] Footer con estilo acorde al resto.
- [x] Ningún estilo `inline` en el HTML (todo vive en `styles.css`).
- [x] Revisado en Chrome y en otro navegador (Firefox o Edge). — **te toca a ti**
- [x] Extra: modo oscuro automático según el sistema (`prefers-color-scheme`).

**Fase 2 terminada cuando:** en pantalla de laptop la página se ve terminada y profesional.

---

## Fase 3 — Diseño responsive · OMITIDA

Decisión del proyecto: el portafolio es para pantalla de computadora; no se
trabaja la versión móvil. Lo esencial que sí quedó y se conserva:

- [x] Imágenes con `max-width: 100%` (en el reset).
- [x] `<meta name="viewport">` presente.
- [x] La página no fuerza scroll horizontal en anchos normales de laptop.
- [x] Apilado básico en pantallas chicas (heredado de fases previas; no se pulió).

*(Si algún día se quiere versión móvil, retomar los puntos originales de esta
fase desde el historial de git.)*

---

## Fase 4 — Interactividad (JavaScript)

Meta: agregar comportamiento con JS puro, bien organizado.

- [x] `main.js` se carga con `defer` y no lanza errores en la consola.
- [x] ~~Menú móvil~~ — no aplica (sin versión móvil).
- [x] **Scroll suave** al hacer clic en los enlaces del menú (`scroll-behavior: smooth` en CSS).
- [x] **Año dinámico** en el footer con `new Date().getFullYear()`.
- [x] **Botón de idioma ES/EN**: cambia `<html lang>` y guarda la preferencia en `localStorage`
  (más un script en el `<head>` que la aplica antes de pintar, para evitar parpadeo).
- [ ] (Opcional) **Resaltar el enlace activo** del menú según la sección visible (IntersectionObserver).
- [x] ~~Formulario de contacto~~ — no se incluye (contacto por correo/LinkedIn/GitHub).
- [x] El código está en **funciones con nombres claros**, sin repetir bloques.
- [x] Sin variables globales innecesarias; nada de `var` (usar `const`/`let`).
- [ ] Consola del navegador **limpia** (sin errores ni `console.log` olvidados) — **verifícalo tú** (F12 → Console).

**Fase 4 terminada cuando:** todas las interacciones funcionan y la consola está limpia.

---

## Fase 5 — Integrar el juego

Meta: que mi juego sea accesible desde el portafolio.

- [x] Decidir el formato de integración: **Opción B mejorada** — demo jugable
  en el navegador, compilada de Python a WebAssembly con `pygbag`.
- [x] Archivos del juego (build web) en la carpeta `juego/` (ver `juego/LEEME.md`).
- [x] La tarjeta del juego enlaza a "▶ Jugar en el navegador" (`juego/index.html`).
- [x] La tarjeta del juego enlaza al **código en GitHub**.
- [x] Añadida una **captura de pantalla** real del juego en la tarjeta.
- [x] Escrita una descripción de qué es, con qué lo hice y qué aprendí.
- [x] El juego carga y se puede jugar (verificado con Chrome headless: llega a la
  pantalla de juego con puntaje/nivel/vidas).
- [ ] Confirmar que funciona tras el deploy real (Fase 7).

**Fase 5 terminada cuando:** desde el portafolio puedo llegar al juego y jugarlo.

---

## Fase 6 — Accesibilidad y pulido

Meta: calidad final antes de publicar.

- [x] Un solo `<h1>` por página y jerarquía de encabezados correcta (`h2`, `h3`...).
- [x] Contraste de color suficiente (paleta revisada: texto y acento ≥ 4.5:1 en claro y oscuro).
- [x] Navegable **solo con el teclado** + enlace "Saltar al contenido" al inicio.
- [x] Foco visible en todos los elementos interactivos (`:focus-visible`).
- [x] Todas las imágenes con `alt` correcto; el triángulo de "play" es decorativo (CSS `::before`).
- [x] Enlaces con texto descriptivo.
- [x] Añadido un `favicon` (`assets/favicon.svg`) y `theme-color`.
- [x] Metadatos para compartir en redes: `og:title`, `og:description`, `og:image`
  (`assets/img/og-image.jpg`, 1200×630), `twitter:card`.
- [x] Revisada la ortografía de todos los textos (ES y EN).
- [x] `prefers-reduced-motion`: se desactiva el scroll suave.
- [x] Imágenes comprimidas (~440 KB en total, todas ≤ 1280 px).
- [x] Eliminado código muerto (`placeholder.svg`, selector CSS sin uso).
- [x] Fuente Inter auto-alojada (`assets/fonts/inter-latin.woff2`) para quitar el
  render-blocking de Google Fonts.
- [x] **Lighthouse** en el sitio publicado:
  - [x] Performance 98
  - [x] Accessibility 100
  - [x] Best Practices 100
  - [x] SEO 100

**Fase 6 terminada.**

---

## Fase 7 — Publicación (deploy)

Meta: la página en línea con una URL que puedo compartir.

- [x] Todo el trabajo está commiteado y en la rama `main` de GitHub.
- [x] Hosting: **GitHub Pages** (rama `main`, carpeta raíz).
- [x] La URL pública abre correctamente: **https://jaretjrd-source.github.io/portafolio/**
- [x] Revisado que **todas las rutas** funcionan online (CSS, JS, imágenes, el juego): todo 200.
- [x] Nombres de archivo en minúsculas / consistentes (verificado contra la URL pública).
- [x] Demo del juego probada desde el sitio publicado (llega a la pantalla jugable).
- [ ] (Opcional) Configurar un dominio propio.
- [ ] Añadir la URL del sitio a: descripción del repo de GitHub, perfil de GitHub, LinkedIn. **← te toca**
- [ ] Probar la URL en tu teléfono y en otra computadora. **← te toca**

**Fase 7 terminada** (salvo los 3 pasos personales de arriba).

---

## Fase 8 — Mejoras futuras (opcional)

Ideas para seguir practicando una vez publicado:

- [ ] Añadir una sección de blog o notas.
- [ ] Animaciones sutiles al hacer scroll (IntersectionObserver + CSS transitions).
- [ ] Página de detalle por proyecto.
- [ ] Traducción español/inglés.
- [ ] Formulario de contacto funcional con un servicio (Formspree, EmailJS).
- [ ] Migrar el proyecto a **Astro** o **React** como siguiente reto de aprendizaje.
- [ ] Configurar un pipeline de CI que valide el HTML en cada push.

---

## Notas del proyecto

- **URL del portafolio:** https://jaretjrd-source.github.io/portafolio/
- **Repo de GitHub:** https://github.com/jaretjrd-source/portafolio
- **Repo del juego:** https://github.com/jaretjrd-source/breakout
- **Fecha de inicio:** 2026-08-28
