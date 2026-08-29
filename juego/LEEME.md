# juego/ — versión web de Breakout

Estos archivos son una **compilación generada** del juego Breakout
(repo: https://github.com/jaretjrd-source/breakout) a WebAssembly con
[pygbag](https://github.com/pygame-web/pygbag). No se editan a mano.

- `index.html` — página que carga el juego
- `breakout.apk`, `breakout.tar.gz` — el código del juego empaquetado
- `favicon.png`

La tarjeta "Breakout" del portafolio enlaza a `juego/index.html`.

## Cómo regenerarlo

En el repo del juego, con el entorno que tiene `pygame`:

```
pip install pygbag
python -m pygbag --build --disable-sound-format-error .
```

Luego copiar `build/web/*` aquí.

## Notas

- Necesita conexión: la primera carga descarga el runtime de Python/pygame
  desde `pygame-web.github.io` (se queda en caché después).
- Hay que servirlo por HTTP (Live Server o el deploy), no abrirlo con `file://`.
- El sonido arranca después del primer clic (regla de los navegadores).
