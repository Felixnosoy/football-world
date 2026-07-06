/* ============================================================
   World Football Hub - script.js
   Contiene: modo oscuro, reloj, fecha, jugador del día,
   renderizado dinámico de noticias/equipos/estadios/galería,
   favoritos, formulario de contacto, botón volver arriba.
   ============================================================ */

/* ---------- Datos ---------- */
const NEWS_DATA = [
  {
    id: 1,
    title: "La FIFA confirma el formato final del Mundial 2026",
    date: "2 de julio de 2026",
    img: "https://picsum.photos/seed/wfh-news1/700/420",
    excerpt: "48 selecciones, 104 partidos y tres países sede: así será la edición más grande de la historia.",
    body: "El Mundial 2026 será el primero disputado por 48 selecciones y organizado conjuntamente por Estados Unidos, México y Canadá. Se jugarán 104 partidos en 16 sedes distintas, con una fase de grupos de 12 grupos de 4 equipos. La final se disputará en el MetLife Stadium de Nueva Jersey. Los organizadores destacan la logística sin precedentes que implica mover a millones de aficionados entre tres países en pocas semanas."
  },
  {
    id: 2,
    title: "Mbappé lidera la tabla de goleadores rumbo al Mundial",
    date: "28 de junio de 2026",
    img: "https://picsum.photos/seed/wfh-news2/700/420",
    excerpt: "El delantero francés llega a la cita mundialista en su mejor momento goleador.",
    body: "Kylian Mbappé se ha consolidado como una de las máximas figuras del fútbol mundial de cara al Mundial 2026. Con una racha goleadora impresionante en la temporada, el francés es señalado por la prensa deportiva como uno de los grandes candidatos al Balón de Oro y a liderar a Francia hacia otra final mundialista."
  },
  {
    id: 3,
    title: "Argentina y Brasil se preparan para un nuevo clásico sudamericano",
    date: "20 de junio de 2026",
    img: "https://picsum.photos/seed/wfh-news3/700/420",
    excerpt: "El Superclásico de las Américas vuelve a encender la previa del Mundial.",
    body: "Los cuerpos técnicos de Argentina y Brasil ultiman detalles para un amistoso de preparación que promete ser uno de los partidos más vistos del año. Ambas selecciones buscan ajustar variantes tácticas antes del inicio del Mundial 2026, en un duelo cargado de historia y rivalidad."
  },
  {
    id: 4,
    title: "Lamine Yamal, la joven promesa que ilusiona a España",
    date: "15 de junio de 2026",
    img: "https://picsum.photos/seed/wfh-news4/700/420",
    excerpt: "A pesar de su corta edad, ya es titular indiscutido de la Roja.",
    body: "Lamine Yamal se ha convertido en una de las revelaciones más comentadas del fútbol europeo. Su desequilibrio, velocidad y madurez futbolística lo colocan como una pieza clave para las aspiraciones de España en el próximo Mundial, generando comparaciones con grandes figuras históricas de la selección."
  },
  {
    id: 5,
    title: "Las sedes del Mundial 2026 ultiman los preparativos",
    date: "10 de junio de 2026",
    img: "https://picsum.photos/seed/wfh-news5/700/420",
    excerpt: "Estadios de Estados Unidos, México y Canadá se preparan para recibir al mundo.",
    body: "Ciudades como Nueva York, Los Ángeles, Ciudad de México, Toronto y Vancouver afinan los últimos detalles de infraestructura, transporte y seguridad para la llegada de millones de aficionados. Se espera que este Mundial rompa récords de asistencia y de recaudación en la historia de la competición."
  },
  {
    id: 6,
    title: "El Balón de Oro 2026 promete una edición histórica",
    date: "3 de junio de 2026",
    img: "https://picsum.photos/seed/wfh-news6/700/420",
    excerpt: "Varios candidatos jóvenes se suman a la pelea por el máximo galardón individual.",
    body: "La lista de candidatos al Balón de Oro 2026 combina a viejas glorias con una nueva generación de futbolistas que han irrumpido con fuerza en las grandes ligas europeas. La proximidad del Mundial añade aún más expectativa a la premiación de este año."
  }
];

const STADIUMS_DATA = [
  {
    name: "MetLife Stadium",
    city: "East Rutherford, Nueva Jersey, EE.UU.",
    capacity: "82,500 espectadores",
    img: "https://picsum.photos/seed/wfh-stadium1/700/460",
    desc: "Sede de la gran final del Mundial 2026, uno de los recintos más modernos de Norteamérica."
  },
  {
    name: "Estadio Azteca",
    city: "Ciudad de México, México",
    capacity: "87,000 espectadores",
    img: "https://picsum.photos/seed/wfh-stadium2/700/460",
    desc: "Único estadio en albergar tres Mundiales (1970, 1986 y 2026), cargado de historia futbolística."
  },
  {
    name: "SoFi Stadium",
    city: "Inglewood, California, EE.UU.",
    capacity: "70,240 espectadores",
    img: "https://picsum.photos/seed/wfh-stadium3/700/460",
    desc: "Uno de los estadios más tecnológicos del mundo, con una pantalla envolvente espectacular."
  },
  {
    name: "AT&T Stadium",
    city: "Arlington, Texas, EE.UU.",
    capacity: "80,000 espectadores",
    img: "https://picsum.photos/seed/wfh-stadium4/700/460",
    desc: "Conocido como 'Jerry World', destaca por su enorme pantalla y su arquitectura imponente."
  }
];

const TEAMS_DATA = [
  { name: "Argentina", code: "ar", rank: 1, captain: "Lionel Messi", coach: "Lionel Scaloni" },
  { name: "Francia", code: "fr", rank: 2, captain: "Kylian Mbappé", coach: "Didier Deschamps" },
  { name: "Inglaterra", code: "gb-eng", rank: 4, captain: "Harry Kane", coach: "Thomas Tuchel" },
  { name: "Brasil", code: "br", rank: 5, captain: "Marquinhos", coach: "Dorival Júnior" },
  { name: "Portugal", code: "pt", rank: 6, captain: "Cristiano Ronaldo", coach: "Roberto Martínez" },
  { name: "España", code: "es", rank: 8, captain: "Álvaro Morata", coach: "Luis de la Fuente" },
  { name: "Alemania", code: "de", rank: 11, captain: "İlkay Gündoğan", coach: "Julian Nagelsmann" }
];

const PLAYERS_OF_DAY = [
  { name: "Lionel Messi", team: "Argentina" },
  { name: "Kylian Mbappé", team: "Francia" },
  { name: "Lamine Yamal", team: "España" },
  { name: "Jude Bellingham", team: "Inglaterra" },
  { name: "Erling Haaland", team: "Noruega" },
  { name: "Vinícius Júnior", team: "Brasil" }
];

const UPCOMING_MATCHES = [
  { teams: "Argentina vs Brasil", date: "12 jul 2026", stage: "Amistoso" },
  { teams: "Francia vs Inglaterra", date: "15 jul 2026", stage: "Amistoso" },
  { teams: "España vs Alemania", date: "18 jul 2026", stage: "Amistoso" },
  { teams: "Portugal vs Países Bajos", date: "22 jul 2026", stage: "Amistoso" }
];

const GALLERY_IMAGES = [
  { seed: "wfh-gallery1", caption: "Celebración de campeones" },
  { seed: "wfh-gallery2", caption: "Ambiente de estadio" },
  { seed: "wfh-gallery3", caption: "Duelo de estrellas" },
  { seed: "wfh-gallery4", caption: "Afición histórica" },
  { seed: "wfh-gallery5", caption: "Momento decisivo" },
  { seed: "wfh-gallery6", caption: "Rumbo a la copa" }
];

/* ---------- Modo oscuro ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-icon").forEach((icon) => {
    icon.className = "theme-icon bi " + (theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill");
  });
}

function initTheme() {
  const saved = localStorage.getItem("wfh-theme") || "light";
  applyTheme(saved);
  document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("wfh-theme", next);
      applyTheme(next);
    });
  });
}

/* ---------- Reloj y fecha ---------- */
function initClock() {
  const clockEls = document.querySelectorAll(".clock-display");
  const dateEls = document.querySelectorAll(".date-display");
  if (!clockEls.length && !dateEls.length) return;

  function tick() {
    const now = new Date();
    const time = now.toLocaleTimeString("es-ES", { hour12: false });
    const date = now.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    clockEls.forEach((el) => (el.textContent = time));
    dateEls.forEach((el) => (el.textContent = "Hoy es: " + date));
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Jugador del día ---------- */
function initPlayerOfDay() {
  const container = document.getElementById("playerOfDay");
  if (!container) return;
  const player = PLAYERS_OF_DAY[Math.floor(Math.random() * PLAYERS_OF_DAY.length)];
  const avatar = "https://ui-avatars.com/api/?name=" + encodeURIComponent(player.name) + "&background=ffb400&color=084d38&size=200&bold=true";
  container.innerHTML = `
    <p class="mb-2 text-uppercase small fw-semibold" style="letter-spacing:1px;">Hoy destacamos a</p>
    <img src="${avatar}" alt="Foto de ${player.name}" loading="lazy">
    <h4 class="mb-1">${player.name}</h4>
    <p class="mb-0 opacity-75">${player.team}</p>
  `;
}

/* ---------- Próximos partidos ---------- */
function renderUpcomingMatches() {
  const container = document.getElementById("upcomingMatches");
  if (!container) return;
  container.innerHTML = UPCOMING_MATCHES.map(
    (m) => `
    <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
      <span><i class="bi bi-calendar-event me-2 text-primary-wfh"></i>${m.teams}</span>
      <span class="badge bg-secondary rounded-pill">${m.date}</span>
    </li>`
  ).join("");
}

/* ---------- Noticias (cards + modales dinámicos) ---------- */
function renderNews() {
  const container = document.getElementById("newsContainer");
  if (!container) return;
  const limit = parseInt(container.getAttribute("data-limit"), 10);
  const items = limit ? NEWS_DATA.slice(0, limit) : NEWS_DATA;

  container.innerHTML = items.map(
    (n) => `
    <div class="col-md-6 col-lg-4">
      <div class="hover-card">
        <div class="card-img-wrap">
          <img src="${n.img}" class="w-100" style="height:200px;object-fit:cover;" alt="${n.title}" loading="lazy">
        </div>
        <div class="p-3">
          <p class="text-muted small mb-1"><i class="bi bi-calendar3 me-1"></i>${n.date}</p>
          <h5 class="mb-2">${n.title}</h5>
          <p class="text-muted">${n.excerpt}</p>
          <button class="btn btn-sm btn-outline-success" data-bs-toggle="modal" data-bs-target="#newsModal${n.id}">
            Leer más <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </div>`
  ).join("");

  const modalsWrap = document.getElementById("newsModals");
  if (modalsWrap) {
    modalsWrap.innerHTML = items.map(
      (n) => `
      <div class="modal fade" id="newsModal${n.id}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${n.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
              <img src="${n.img}" class="img-fluid rounded-xl mb-3" alt="${n.title}">
              <p class="text-muted small"><i class="bi bi-calendar3 me-1"></i>${n.date}</p>
              <p>${n.body}</p>
            </div>
          </div>
        </div>
      </div>`
    ).join("");
  }
}

/* ---------- Estadios ---------- */
function renderStadiums() {
  const container = document.getElementById("stadiumsContainer");
  if (!container) return;
  container.innerHTML = STADIUMS_DATA.map(
    (s) => `
    <div class="col-md-6">
      <div class="hover-card">
        <div class="card-img-wrap">
          <img src="${s.img}" class="w-100" style="height:260px;object-fit:cover;" alt="${s.name}" loading="lazy">
        </div>
        <div class="p-3">
          <h5 class="mb-1">${s.name}</h5>
          <p class="mb-1 text-muted"><i class="bi bi-geo-alt-fill me-1 text-accent"></i>${s.city}</p>
          <p class="mb-2 text-muted"><i class="bi bi-people-fill me-1 text-accent"></i>${s.capacity}</p>
          <p class="mb-0">${s.desc}</p>
        </div>
      </div>
    </div>`
  ).join("");
}

/* ---------- Equipos + favoritos ---------- */
function getFavorites() {
  return JSON.parse(localStorage.getItem("wfh-favorites") || "[]");
}

function saveFavorites(list) {
  localStorage.setItem("wfh-favorites", JSON.stringify(list));
}

function renderTeams() {
  const container = document.getElementById("teamsContainer");
  if (!container) return;
  const favorites = getFavorites();
  const limit = parseInt(container.getAttribute("data-limit"), 10);
  const items = limit ? TEAMS_DATA.slice(0, limit) : TEAMS_DATA;

  container.innerHTML = items.map(
    (t) => `
    <div class="col-md-6 col-lg-4">
      <div class="hover-card p-3 text-center position-relative">
        <button class="fav-btn position-absolute top-0 end-0 m-2 ${favorites.includes(t.name) ? "active" : ""}" data-team="${t.name}" title="Agregar a favoritos">
          <i class="bi ${favorites.includes(t.name) ? "bi-heart-fill" : "bi-heart"}"></i>
        </button>
        <img src="https://flagcdn.com/w160/${t.code}.png" alt="Bandera de ${t.name}" class="mx-auto d-block mb-3 rounded shadow-sm" style="width:110px;">
        <h5 class="mb-1">${t.name}</h5>
        <span class="badge badge-rank mb-2">Ranking FIFA #${t.rank}</span>
        <p class="mb-1"><i class="bi bi-armband me-1 text-accent"></i><strong>Capitán:</strong> ${t.captain}</p>
        <p class="mb-0"><i class="bi bi-clipboard-data me-1 text-accent"></i><strong>DT:</strong> ${t.coach}</p>
      </div>
    </div>`
  ).join("");

  container.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const team = btn.getAttribute("data-team");
      let favs = getFavorites();
      const icon = btn.querySelector("i");
      if (favs.includes(team)) {
        favs = favs.filter((f) => f !== team);
        btn.classList.remove("active");
        icon.className = "bi bi-heart";
        alert("Has quitado a " + team + " de favoritos.");
      } else {
        favs.push(team);
        btn.classList.add("active");
        icon.className = "bi bi-heart-fill";
        alert("Has agregado a " + team + " a favoritos.");
      }
      saveFavorites(favs);
    });
  });
}

/* ---------- Galería ---------- */
function renderGallery() {
  const container = document.getElementById("galleryContainer");
  if (!container) return;
  container.innerHTML = GALLERY_IMAGES.map(
    (g) => `
    <div class="gallery-item">
      <img src="https://picsum.photos/seed/${g.seed}/400/300" alt="${g.caption}" loading="lazy">
      <div class="overlay">${g.caption}</div>
    </div>`
  ).join("");
}

/* ---------- Formulario de contacto ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !correo || !mensaje) {
      alert("Por favor completa todos los campos antes de enviar.");
      return;
    }
    if (!emailPattern.test(correo)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    alert("¡Gracias por contactarnos, " + nombre + "! Hemos recibido tu mensaje.");
    form.reset();
  });
}

/* ---------- Botón volver arriba ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 350);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Inicialización ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initClock();
  initPlayerOfDay();
  renderUpcomingMatches();
  renderNews();
  renderStadiums();
  renderTeams();
  renderGallery();
  initContactForm();
  initBackToTop();
});
