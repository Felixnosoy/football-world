# ⚽ World Football Hub

**Vive la pasión del fútbol mundial.**

Portal de noticias, equipos, estadios y estadísticas del fútbol mundial, con seguimiento del Mundial 2026. Proyecto individual desarrollado con HTML5, CSS3, JavaScript y Bootstrap 5, publicado en GitHub Pages.

🔗 **Sitio en vivo:** https://felixnosoy.github.io/football-world/

## Páginas

| Página | Descripción |
|---|---|
| [`index.html`](index.html) | Inicio: hero, carrusel, cuenta regresiva, jugador del día, últimas noticias, equipos destacados, galería |
| [`mundial2026.html`](mundial2026.html) | Seguimiento del Mundial 2026: próximos partidos, clasificados a cuartos de final, encuesta, partido destacado, goleadores, campeones históricos |
| [`noticias.html`](noticias.html) | Noticias con buscador en vivo y modales de lectura completa |
| [`equipos.html`](equipos.html) | Selecciones con buscador, ranking FIFA, capitán, DT y favoritos |
| [`estadios.html`](estadios.html) | Estadios sede del Mundial 2026 |
| [`enlaces.html`](enlaces.html) | Videos de YouTube, mapas de Google Maps y enlaces oficiales |
| [`contacto.html`](contacto.html) | Formulario de contacto y botón de correo directo (mailto) |
| [`privacidad.html`](privacidad.html) | Políticas de privacidad, cookies y créditos de las fotografías |

## Características

- Modo oscuro persistente (`localStorage`), sincronizado con el tema de Bootstrap
- Carrusel, modales y alertas de Bootstrap
- Contenido dinámico generado por JavaScript (noticias, equipos, estadios, galería, partidos)
- Buscador en vivo en Noticias y Equipos
- Encuesta interactiva y sistema de favoritos con `localStorage`
- Cuenta regresiva al próximo partido, reloj y fecha en tiempo real
- Imágenes responsivas con licencia Creative Commons (Wikimedia Commons)
- Metadatos SEO completos (Open Graph, Twitter Card, canonical, favicon propio)

## Tecnologías

HTML5 · CSS3 · JavaScript · Bootstrap 5 · Bootstrap Icons · Google Fonts · Git · GitHub Pages

## Estructura del proyecto

```
football-world/
├── index.html
├── mundial2026.html
├── noticias.html
├── equipos.html
├── estadios.html
├── enlaces.html
├── contacto.html
├── privacidad.html
├── favicon.svg
├── css/
│   └── styles.css
└── js/
    └── script.js
```

## Cómo verlo localmente

No requiere instalación ni backend. Basta con levantar un servidor estático desde la carpeta del proyecto, por ejemplo:

```bash
python -m http.server 8080
```

y abrir `http://localhost:8080/index.html` en el navegador.

## Autor

Proyecto académico individual — Felix David Suero Vazquez.
