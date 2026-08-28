# Portafolio Personal

Proyecto para construir mi portafolio web desde cero con **HTML, CSS y JavaScript puro** (sin frameworks).
Objetivo: tener una página publicada que muestre quién soy, mis proyectos (incluido mi juego) y cómo contactarme.

## Cómo usar este README

- Cada **fase** se trabaja en orden.
- Una fase se marca como **terminada** solo cuando **todos** sus puntos están completos.
- Marca cada punto cambiando `[ ]` por `[x]`.
- Si un punto no aplica, táchalo con `~~texto~~` y anota por qué.

### Progreso general

- [x] Fase 0 — Preparación del entorno
- [ ] Fase 1 — Estructura y contenido (HTML)
- [ ] Fase 2 — Estilos y diseño (CSS)
- [ ] Fase 3 — Diseño responsive
- [ ] Fase 4 — Interactividad (JavaScript)
- [ ] Fase 5 — Integrar el juego
- [ ] Fase 6 — Accesibilidad y pulido
- [ ] Fase 7 — Publicación (deploy)
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

- [ ] `index.html` tiene la estructura base correcta: `<!DOCTYPE html>`, `<html lang="es">`, `<head>` y `<body>`.
- [ ] En el `<head>`: `<meta charset="UTF-8">`, `<meta name="viewport">`, `<title>` con mi nombre, y `<meta name="description">`.
- [ ] Enlazado el CSS con `<link rel="stylesheet" href="css/styles.css">`.
- [ ] Enlazado el JS con `<script src="js/main.js" defer></script>`.
- [ ] **Header** con:
  - [ ] Mi nombre o logo
  - [ ] Menú de navegación con enlaces internos (`#sobre-mi`, `#proyectos`, `#contacto`)
- [ ] Sección **Hero / Inicio** con:
  - [ ] Título principal (`<h1>`) que diga quién soy en una frase
  - [ ] Subtítulo corto
  - [ ] Un botón/enlace de llamada a la acción (ej. "Ver proyectos")
- [ ] Sección **Sobre mí** (`id="sobre-mi"`) con:
  - [ ] 1 o 2 párrafos de presentación
  - [ ] Lista de tecnologías/habilidades que estoy aprendiendo
  - [ ] (Opcional) una foto mía en `assets/img/`
- [ ] Sección **Proyectos** (`id="proyectos"`) con:
  - [ ] Al menos **2 tarjetas** de proyecto (una es el juego)
  - [ ] Cada tarjeta tiene: título, descripción corta, imagen/captura, enlace a demo y enlace a código
- [ ] Sección **Contacto** (`id="contacto"`) con:
  - [ ] Mi correo (como enlace `mailto:`)
  - [ ] Enlaces a GitHub y LinkedIn (u otras redes)
  - [ ] (Opcional) un formulario de contacto con campos nombre, correo y mensaje
- [ ] **Footer** con año actual y mi nombre.
- [ ] Todo el texto real está escrito (nada de "Lorem ipsum" ni "TODO").
- [ ] Las imágenes tienen atributo `alt` descriptivo.
- [ ] La página valida sin errores en <https://validator.w3.org/>.

**Fase 1 terminada cuando:** el contenido completo se lee de arriba a abajo y tiene sentido, aunque se vea "feo".

---

## Fase 2 — Estilos y diseño (CSS)

Meta: que la página se vea cuidada y consistente en pantalla de computadora.

- [ ] Añadido un **reset** o `box-sizing: border-box` global.
- [ ] Definidas **variables CSS** (`:root`) para colores, fuente y espaciados principales.
- [ ] Elegida y aplicada una **tipografía** (Google Fonts o fuente del sistema).
- [ ] Definida una **paleta de 3–4 colores** (fondo, texto, color principal, acento) y usada de forma consistente.
- [ ] Header con estilo y navegación horizontal.
- [ ] Sección Hero con jerarquía visual clara (título grande, buen espacio en blanco).
- [ ] Sección Proyectos con las tarjetas en **grid** o **flexbox**, alineadas y con espaciado uniforme.
- [ ] Tarjetas de proyecto con estilo: borde/sombra, padding, imagen recortada de forma pareja.
- [ ] Estados **`:hover`** y **`:focus`** visibles en todos los enlaces y botones.
- [ ] Botones con un estilo reutilizable (clase `.btn`).
- [ ] Espaciado vertical consistente entre secciones.
- [ ] Ancho máximo de contenido (`max-width`) y centrado en pantallas grandes.
- [ ] Footer con estilo acorde al resto.
- [ ] Ningún estilo `inline` en el HTML (todo vive en `styles.css`).
- [ ] Revisado en Chrome y en otro navegador (Firefox o Edge).

**Fase 2 terminada cuando:** en pantalla de laptop la página se ve terminada y profesional.

---

## Fase 3 — Diseño responsive

Meta: que se vea bien en móvil, tablet y escritorio.

- [ ] Probado con las **DevTools** en modo dispositivo (móvil 375px, tablet 768px, escritorio 1280px).
- [ ] El texto nunca se sale de la pantalla ni obliga a hacer scroll horizontal.
- [ ] Definidos **media queries** para al menos un breakpoint (ej. `max-width: 768px`).
- [ ] En móvil, el menú de navegación es usable (menú hamburguesa **o** enlaces apilados legibles).
- [ ] Las tarjetas de proyecto pasan a **1 columna** en móvil.
- [ ] Imágenes con `max-width: 100%` para que no desborden.
- [ ] Tamaños de fuente ajustados para móvil (título hero no gigante).
- [ ] Áreas táctiles (botones/enlaces) de mínimo ~44px de alto en móvil.
- [ ] Probado en un **teléfono real** (abriendo la URL de Live Server en la red local o tras el deploy).

**Fase 3 terminada cuando:** la página es cómoda de leer y navegar en un móvil real.

---

## Fase 4 — Interactividad (JavaScript)

Meta: agregar comportamiento con JS puro, bien organizado.

- [ ] `main.js` se carga con `defer` y no lanza errores en la consola.
- [ ] **Menú móvil**: el botón hamburguesa abre y cierra la navegación.
- [ ] **Scroll suave** al hacer clic en los enlaces del menú (`scroll-behavior` en CSS o JS).
- [ ] **Año dinámico** en el footer con `new Date().getFullYear()`.
- [ ] (Opcional) **Botón de modo oscuro/claro** que cambia una clase en `<body>` y recuerda la preferencia con `localStorage`.
- [ ] (Opcional) **Resaltar el enlace activo** del menú según la sección visible (IntersectionObserver).
- [ ] Si hay formulario de contacto:
  - [ ] Validación básica en JS (campos no vacíos, correo con formato válido)
  - [ ] Mensaje de éxito o error visible para el usuario
- [ ] El código está en **funciones con nombres claros**, sin repetir bloques.
- [ ] Sin variables globales innecesarias; nada de `var` (usar `const`/`let`).
- [ ] Consola del navegador **limpia** (sin errores ni `console.log` olvidados).

**Fase 4 terminada cuando:** todas las interacciones funcionan y la consola está limpia.

---

## Fase 5 — Integrar el juego

Meta: que mi juego sea accesible desde el portafolio.

- [ ] Decidir el formato de integración:
  - [ ] Opción A: página propia `juego.html` con el juego embebido
  - [ ] Opción B: enlace a una demo publicada aparte
- [ ] Copiar los archivos del juego a una carpeta `juego/` (o dejar claro el enlace externo).
- [ ] La tarjeta del juego en "Proyectos" enlaza a la demo funcionando.
- [ ] La tarjeta del juego enlaza al **código en GitHub**.
- [ ] Añadida una **captura de pantalla** real del juego en la tarjeta.
- [ ] Escrita una descripción de 2–3 líneas: qué es, con qué lo hice, qué aprendí.
- [ ] El juego carga y se puede jugar desde el sitio publicado (probado tras el deploy).

**Fase 5 terminada cuando:** desde el portafolio puedo llegar al juego y jugarlo.

---

## Fase 6 — Accesibilidad y pulido

Meta: calidad final antes de publicar.

- [ ] Un solo `<h1>` por página y jerarquía de encabezados correcta (`h2`, `h3`...).
- [ ] Contraste de color suficiente (revisado con el checker de las DevTools o WebAIM).
- [ ] Navegable **solo con el teclado** (Tab llega a todos los enlaces/botones en orden lógico).
- [ ] Foco visible en todos los elementos interactivos.
- [ ] Todas las imágenes con `alt` correcto (vacío `alt=""` solo si son decorativas).
- [ ] Enlaces con texto descriptivo (nada de "clic aquí").
- [ ] Añadido un `favicon` en `assets/`.
- [ ] Metadatos para compartir en redes: `og:title`, `og:description`, `og:image`.
- [ ] Revisada la ortografía de todos los textos.
- [ ] Ejecutado **Lighthouse** (DevTools) y logrado:
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 90
  - [ ] Best Practices ≥ 90
  - [ ] SEO ≥ 90
- [ ] Probado sin conexión lenta que las imágenes no pesen de más (comprimidas).
- [ ] Eliminado todo código muerto y comentado que no se use.

**Fase 6 terminada cuando:** Lighthouse pasa los 4 puntajes y la navegación por teclado funciona.

---

## Fase 7 — Publicación (deploy)

Meta: la página en línea con una URL que puedo compartir.

- [ ] Todo el trabajo está commiteado y en la rama `main` de GitHub.
- [ ] Elegido el hosting: **GitHub Pages** (o Netlify / Vercel).
- [ ] Configurado el deploy:
  - [ ] GitHub Pages: activado en Settings → Pages, rama `main`, carpeta raíz
  - [ ] (o) Netlify/Vercel: repo conectado y build configurado
- [ ] La URL pública abre correctamente.
- [ ] Revisado que **todas las rutas** funcionan online (CSS, JS, imágenes, el juego): sin errores 404 en la consola.
- [ ] Revisadas mayúsculas/minúsculas en nombres de archivos (los servidores distinguen, Windows no).
- [ ] Probada la URL en móvil real y en otra computadora.
- [ ] (Opcional) Configurado un dominio propio.
- [ ] Añadida la URL del sitio a: descripción del repo de GitHub, mi perfil de GitHub, mi LinkedIn.
- [ ] Actualizado este README con la URL final del portafolio.

**Fase 7 terminada cuando:** cualquier persona puede abrir mi portafolio desde un enlace y todo funciona.

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

- **URL del portafolio:** _(pendiente — completar en Fase 7)_
- **Repo de GitHub:** https://github.com/jaretjrd-source/portafolio
- **Fecha de inicio:** 2026-08-28
