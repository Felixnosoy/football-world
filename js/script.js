/* ============================================================
   World Football Hub - script.js
   Contiene: modo oscuro, reloj, fecha, jugador del día,
   renderizado dinámico de noticias/equipos/estadios/galería,
   favoritos, formulario de contacto, botón volver arriba.
   ============================================================ */

/* ---------- Datos ---------- */
const NEWS_DATA = [
  {
    id: 7,
    title: "Brasil y México quedan eliminados en los octavos de final",
    date: "6 de julio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ghanaian_fans_at_England_versus_Ghana_match_%2810%29.jpg/960px-Ghanaian_fans_at_England_versus_Ghana_match_%2810%29.jpg",
    excerpt: "Noruega e Inglaterra dan la sorpresa y eliminan a dos de las grandes candidatas.",
    body: "La ronda de octavos de final dejó dos golpes fuertes para los favoritos: Noruega eliminó a Brasil por 2-1 y avanzó a cuartos de final por primera vez en su historia reciente, mientras que Inglaterra remontó ante México con un marcador de 3-2. A ellos se suman Marruecos, que goleó 3-0 a Canadá, y Francia, que superó 1-0 a Paraguay. Los cuatro ya esperan rival en cuartos de final."
  },
  {
    id: 8,
    title: "Hoy se juegan dos cruces clave: España-Portugal y EE.UU.-Bélgica",
    date: "6 de julio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Br%C3%B8ndby_players_celebrating_goal_against_FC_Copenhagen.jpg/960px-Br%C3%B8ndby_players_celebrating_goal_against_FC_Copenhagen.jpg",
    excerpt: "España enfrenta a Portugal en Arlington en el duelo del día entre Lamine Yamal y Cristiano Ronaldo.",
    body: "Este lunes 6 de julio se completan dos de los últimos cuatro cruces de octavos de final. Por la tarde, España se mide a Portugal en el AT&T Stadium de Arlington, Texas, en un partido que promete el duelo generacional entre Lamine Yamal y Cristiano Ronaldo. Por la noche, Estados Unidos recibe a Bélgica en Seattle. Los ganadores se unirán a Marruecos, Francia, Noruega e Inglaterra en el cuadro de cuartos de final, que se completará mañana 7 de julio con Argentina-Egipto y Suiza-Colombia."
  },
  {
    id: 9,
    title: "El Mundial 2026 rompe el récord histórico de asistencia de público",
    date: "5 de julio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Giants_Stadium_Hosts_the_1994_World_Cup.jpg/960px-Giants_Stadium_Hosts_the_1994_World_Cup.jpg",
    excerpt: "El torneo ya superó la marca de asistencia total establecida en ediciones anteriores.",
    body: "A pocos días de que arranquen los cuartos de final, la organización del Mundial 2026 confirmó que el torneo ya es, oficialmente, el más visto en persona de la historia de la competición. La ampliación a 48 selecciones y la disputa en tres países sumaron más sedes y más partidos, lo que se tradujo en cifras de asistencia nunca antes vistas para una Copa del Mundo."
  },
  {
    id: 1,
    title: "La FIFA confirma el formato final del Mundial 2026",
    date: "2 de julio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/USMNT_World_Cup_training_20060511.jpg/960px-USMNT_World_Cup_training_20060511.jpg",
    excerpt: "48 selecciones, 104 partidos y tres países sede: así será la edición más grande de la historia.",
    body: "El Mundial 2026 será el primero disputado por 48 selecciones y organizado conjuntamente por Estados Unidos, México y Canadá. Se jugarán 104 partidos en 16 sedes distintas, con una fase de grupos de 12 grupos de 4 equipos. La final se disputará en el MetLife Stadium de Nueva Jersey. Los organizadores destacan la logística sin precedentes que implica mover a millones de aficionados entre tres países en pocas semanas."
  },
  {
    id: 2,
    title: "Mbappé lidera la tabla de goleadores rumbo al Mundial",
    date: "28 de junio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/221000_-_Football_Jason_Rand_action_-_3b_-_Sydney_2000_match_photo.jpg/960px-221000_-_Football_Jason_Rand_action_-_3b_-_Sydney_2000_match_photo.jpg",
    excerpt: "El delantero francés llega a la cita mundialista en su mejor momento goleador.",
    body: "Kylian Mbappé se ha consolidado como una de las máximas figuras del fútbol mundial de cara al Mundial 2026. Con una racha goleadora impresionante en la temporada, el francés es señalado por la prensa deportiva como uno de los grandes candidatos al Balón de Oro y a liderar a Francia hacia otra final mundialista."
  },
  {
    id: 3,
    title: "Argentina y Brasil se preparan para un nuevo clásico sudamericano",
    date: "20 de junio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Fans_celebrate_the_victory_of_the_Brazilian_team_01.jpg/960px-Fans_celebrate_the_victory_of_the_Brazilian_team_01.jpg",
    excerpt: "El Superclásico de las Américas vuelve a encender la previa del Mundial.",
    body: "Los cuerpos técnicos de Argentina y Brasil ultiman detalles para un amistoso de preparación que promete ser uno de los partidos más vistos del año. Ambas selecciones buscan ajustar variantes tácticas antes del inicio del Mundial 2026, en un duelo cargado de historia y rivalidad."
  },
  {
    id: 4,
    title: "Lamine Yamal, la joven promesa que ilusiona a España",
    date: "15 de junio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/251000_-_Football_David_Barber_action_-_3b_-_Sydney_2000_match_photo.jpg/960px-251000_-_Football_David_Barber_action_-_3b_-_Sydney_2000_match_photo.jpg",
    excerpt: "A pesar de su corta edad, ya es titular indiscutido de la Roja.",
    body: "Lamine Yamal se ha convertido en una de las revelaciones más comentadas del fútbol europeo. Su desequilibrio, velocidad y madurez futbolística lo colocan como una pieza clave para las aspiraciones de España en el próximo Mundial, generando comparaciones con grandes figuras históricas de la selección."
  },
  {
    id: 5,
    title: "Las sedes del Mundial 2026 ultiman los preparativos",
    date: "10 de junio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/MetLife_Stadium_2022.jpg/960px-MetLife_Stadium_2022.jpg",
    excerpt: "Estadios de Estados Unidos, México y Canadá se preparan para recibir al mundo.",
    body: "Ciudades como Nueva York, Los Ángeles, Ciudad de México, Toronto y Vancouver afinan los últimos detalles de infraestructura, transporte y seguridad para la llegada de millones de aficionados. Se espera que este Mundial rompa récords de asistencia y de recaudación en la historia de la competición."
  },
  {
    id: 6,
    title: "El Balón de Oro 2026 promete una edición histórica",
    date: "3 de junio de 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/BBVA_Compass_Stadium_Inaugural_Goal_Celebration.jpg/960px-BBVA_Compass_Stadium_Inaugural_Goal_Celebration.jpg",
    excerpt: "Varios candidatos jóvenes se suman a la pelea por el máximo galardón individual.",
    body: "La lista de candidatos al Balón de Oro 2026 combina a viejas glorias con una nueva generación de futbolistas que han irrumpido con fuerza en las grandes ligas europeas. La proximidad del Mundial añade aún más expectativa a la premiación de este año."
  }
];

const STADIUMS_DATA = [
  {
    name: "MetLife Stadium",
    city: "East Rutherford, Nueva Jersey, EE.UU.",
    capacity: "82,500 espectadores",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/MetLife_Stadium_Exterior.jpg/960px-MetLife_Stadium_Exterior.jpg",
    desc: "Sede de la gran final del Mundial 2026, uno de los recintos más modernos de Norteamérica."
  },
  {
    name: "Estadio Azteca",
    city: "Ciudad de México, México",
    capacity: "87,000 espectadores",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Estadio_Azteca1706p1.jpg/960px-Estadio_Azteca1706p1.jpg",
    desc: "Único estadio en albergar tres Mundiales (1970, 1986 y 2026), cargado de historia futbolística."
  },
  {
    name: "SoFi Stadium",
    city: "Inglewood, California, EE.UU.",
    capacity: "70,240 espectadores",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/SoFi_Stadium_2023.jpg/960px-SoFi_Stadium_2023.jpg",
    desc: "Uno de los estadios más tecnológicos del mundo, con una pantalla envolvente espectacular."
  },
  {
    name: "AT&T Stadium",
    city: "Arlington, Texas, EE.UU.",
    capacity: "80,000 espectadores",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Arlington_June_2020_2_%28AT%26T_Stadium%29.jpg/960px-Arlington_June_2020_2_%28AT%26T_Stadium%29.jpg",
    desc: "Conocido como 'Jerry World', destaca por su enorme pantalla y su arquitectura imponente."
  }
];

const TEAMS_DATA = [
  { name: "Argentina", code: "ar", rank: 1, captain: "Lionel Messi", coach: "Lionel Scaloni" },
  { name: "Francia", code: "fr", rank: 2, captain: "Kylian Mbappé", coach: "Didier Deschamps" },
  { name: "Bélgica", code: "be", rank: 3, captain: "Kevin De Bruyne", coach: "Domenico Tedesco" },
  { name: "Inglaterra", code: "gb-eng", rank: 4, captain: "Harry Kane", coach: "Thomas Tuchel" },
  { name: "Brasil", code: "br", rank: 5, captain: "Marquinhos", coach: "Dorival Júnior" },
  { name: "Portugal", code: "pt", rank: 6, captain: "Cristiano Ronaldo", coach: "Roberto Martínez" },
  { name: "Países Bajos", code: "nl", rank: 7, captain: "Virgil van Dijk", coach: "Ronald Koeman" },
  { name: "España", code: "es", rank: 8, captain: "Álvaro Morata", coach: "Luis de la Fuente" },
  { name: "Italia", code: "it", rank: 9, captain: "Gianluigi Donnarumma", coach: "Luciano Spalletti" },
  { name: "Colombia", code: "co", rank: 10, captain: "James Rodríguez", coach: "Néstor Lorenzo" },
  { name: "Alemania", code: "de", rank: 11, captain: "İlkay Gündoğan", coach: "Julian Nagelsmann" },
  { name: "Croacia", code: "hr", rank: 12, captain: "Luka Modrić", coach: "Zlatko Dalić" },
  { name: "Marruecos", code: "ma", rank: 13, captain: "Achraf Hakimi", coach: "Walid Regragui" },
  { name: "Uruguay", code: "uy", rank: 14, captain: "Federico Valverde", coach: "Marcelo Bielsa" },
  { name: "México", code: "mx", rank: 15, captain: "Edson Álvarez", coach: "Javier Aguirre" },
  { name: "Estados Unidos", code: "us", rank: 16, captain: "Christian Pulisic", coach: "Mauricio Pochettino" },
  { name: "Japón", code: "jp", rank: 17, captain: "Wataru Endo", coach: "Hajime Moriyasu" },
  { name: "Senegal", code: "sn", rank: 18, captain: "Kalidou Koulibaly", coach: "Aliou Cissé" }
];

const PLAYERS_OF_DAY = [
  { name: "Lionel Messi", team: "Argentina" },
  { name: "Kylian Mbappé", team: "Francia" },
  { name: "Lamine Yamal", team: "España" },
  { name: "Jude Bellingham", team: "Inglaterra" },
  { name: "Erling Haaland", team: "Noruega" },
  { name: "Vinícius Júnior", team: "Brasil" }
];

const GALLERY_IMAGES = [
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Match_de_football_UAC09.jpg/500px-Match_de_football_UAC09.jpg", caption: "Acción de juego" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Samsunspor_2023_%C5%9Eampiyonluk_%C5%9E%C3%B6leni%2C_saha_i%C5%9Fgali.jpg/500px-Samsunspor_2023_%C5%9Eampiyonluk_%C5%9E%C3%B6leni%2C_saha_i%C5%9Fgali.jpg", caption: "Festejo de campeones" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Fans_celebrate_the_victory_of_the_Brazilian_team_03.jpg/500px-Fans_celebrate_the_victory_of_the_Brazilian_team_03.jpg", caption: "Afición brasileña" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fans_celebrate_the_victory_of_the_Brazilian_team_05.jpg/500px-Fans_celebrate_the_victory_of_the_Brazilian_team_05.jpg", caption: "Pasión de los hinchas" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Estadio_Azteca1706p2.jpg/500px-Estadio_Azteca1706p2.jpg", caption: "Estadio Azteca por dentro" },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/MetLife_Stadium%2C_East_Rutherford_New_Jersey.jpg/500px-MetLife_Stadium%2C_East_Rutherford_New_Jersey.jpg", caption: "Sede de la gran final" }
];

const WORLDCUP_FIXTURES = [
  { teams: "España vs Portugal", date: "6 jul 2026", stage: "Octavos de final", venue: "AT&T Stadium, Arlington" },
  { teams: "Estados Unidos vs Bélgica", date: "6 jul 2026", stage: "Octavos de final", venue: "Seattle" },
  { teams: "Argentina vs Egipto", date: "7 jul 2026", stage: "Octavos de final", venue: "Atlanta" },
  { teams: "Suiza vs Colombia", date: "7 jul 2026", stage: "Octavos de final", venue: "Vancouver" },
  { teams: "Francia vs Marruecos", date: "9 jul 2026", stage: "Cuartos de final", venue: "Gillette Stadium, Foxborough" },
  { teams: "Noruega vs Inglaterra", date: "11 jul 2026", stage: "Cuartos de final", venue: "Hard Rock Stadium, Miami" }
];

const WORLDCUP_QUALIFIED = [
  { team: "Marruecos", code: "ma", beat: "Canadá", score: "3-0" },
  { team: "Francia", code: "fr", beat: "Paraguay", score: "1-0" },
  { team: "Noruega", code: "no", beat: "Brasil", score: "2-1" },
  { team: "Inglaterra", code: "gb-eng", beat: "México", score: "3-2" }
];

const FEATURED_PREDICTION = {
  homeTeam: "España",
  awayTeam: "Portugal",
  homeWinPct: 48,
  drawPct: 26,
  awayWinPct: 26,
  advice: "Estimación ilustrativa del sitio: España parte como ligera favorita por su buen momento colectivo, aunque Portugal cuenta con Cristiano Ronaldo como factor decisivo."
};

const FEATURED_LINEUPS = {
  home: {
    team: "España",
    formation: "4-3-3",
    coach: "Luis de la Fuente",
    startXI: ["Unai Simón", "Pedro Porro", "Pau Cubarsí", "Aymeric Laporte", "Marc Cucurella", "Rodri", "Dani Olmo", "Pedri", "Lamine Yamal", "Mikel Oyarzabal", "Álex Baena"]
  },
  away: {
    team: "Portugal",
    formation: "4-3-3",
    coach: "Roberto Martínez",
    startXI: ["Diogo Costa", "João Cancelo", "Rúben Dias", "Renato Veiga", "João Neves", "Vitinha", "Francisco Conceição", "Bruno Fernandes", "Rafael Leão", "Cristiano Ronaldo"]
  }
};

const TOP_SCORERS = [
  { player: "Kylian Mbappé", team: "Francia", goals: 6 },
  { player: "Lionel Messi", team: "Argentina", goals: 5 },
  { player: "Harry Kane", team: "Inglaterra", goals: 5 },
  { player: "Vinícius Júnior", team: "Brasil", goals: 4 },
  { player: "Lamine Yamal", team: "España", goals: 4 },
  { player: "Jude Bellingham", team: "Inglaterra", goals: 3 }
];

const WORLDCUP_CHAMPIONS = [
  { year: 2022, champion: "Argentina" },
  { year: 2018, champion: "Francia" },
  { year: 2014, champion: "Alemania" },
  { year: 2010, champion: "España" },
  { year: 2006, champion: "Italia" },
  { year: 2002, champion: "Brasil" },
  { year: 1998, champion: "Francia" },
  { year: 1994, champion: "Brasil" }
];

const NEXT_MATCH_DATE = "2026-07-09T16:00:00";
const NEXT_MATCH_LABEL = "Francia vs Marruecos (cuartos de final)";

const POLL_BASE_VOTES = {
  "Argentina": 132,
  "Francia": 98,
  "Brasil": 87,
  "Inglaterra": 61,
  "España": 58,
  "Portugal": 47,
  "Alemania": 41,
  "Países Bajos": 26
};

/* ---------- Modo oscuro ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-bs-theme", theme);
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
  container.innerHTML = WORLDCUP_FIXTURES.map(
    (m) => `
    <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
      <span><i class="bi bi-calendar-event me-2 text-primary-wfh"></i>${m.teams} <span class="text-muted small">(${m.stage})</span></span>
      <span class="badge bg-secondary rounded-pill">${m.date}</span>
    </li>`
  ).join("");
}

/* ---------- Mundial 2026: partidos, tabla, predicción, goleadores ---------- */
function renderWorldCupFixtures() {
  const container = document.getElementById("fixturesContainer");
  if (!container) return;
  container.innerHTML = WORLDCUP_FIXTURES.map(
    (m) => `
    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-transparent gap-2">
      <span><i class="bi bi-calendar-event me-2 text-primary-wfh"></i><strong>${m.teams}</strong></span>
      <span class="text-muted small">${m.stage} · ${m.venue}</span>
      <span class="badge bg-secondary rounded-pill">${m.date}</span>
    </li>`
  ).join("");
}

function renderWorldCupStandings() {
  const container = document.getElementById("standingsContainer");
  if (!container) return;

  container.innerHTML = WORLDCUP_QUALIFIED.map(
    (q) => `
    <div class="col-md-6 col-lg-3">
      <div class="hover-card p-3 text-center">
        <img src="https://flagcdn.com/w160/${q.code}.png" alt="Bandera de ${q.team}" class="mx-auto d-block mb-2 rounded shadow-sm" style="width:70px;">
        <h3 class="h6 mb-1">${q.team}</h3>
        <p class="text-muted small mb-0">Venció a ${q.beat}</p>
        <span class="badge badge-rank">${q.score}</span>
      </div>
    </div>`
  ).join("");
}

function renderFeaturedMatch() {
  const container = document.getElementById("featuredMatchContainer");
  if (!container) return;
  const p = FEATURED_PREDICTION;
  const l = FEATURED_LINEUPS;

  container.innerHTML = `
    <div class="col-lg-6">
      <div class="widget-box h-100">
        <h3 class="h6 mb-3"><i class="bi bi-graph-up-arrow text-accent me-2"></i>Probabilidades de victoria</h3>
        <p class="mb-2 fw-semibold">${p.homeTeam} vs ${p.awayTeam}</p>
        <div class="mb-2">
          <div class="d-flex justify-content-between small text-muted"><span>${p.homeTeam}</span><span>${p.homeWinPct}%</span></div>
          <div class="progress"><div class="progress-bar bg-success" style="width:${p.homeWinPct}%"></div></div>
        </div>
        <div class="mb-2">
          <div class="d-flex justify-content-between small text-muted"><span>Empate</span><span>${p.drawPct}%</span></div>
          <div class="progress"><div class="progress-bar bg-secondary" style="width:${p.drawPct}%"></div></div>
        </div>
        <div class="mb-3">
          <div class="d-flex justify-content-between small text-muted"><span>${p.awayTeam}</span><span>${p.awayWinPct}%</span></div>
          <div class="progress"><div class="progress-bar bg-danger" style="width:${p.awayWinPct}%"></div></div>
        </div>
        <p class="small text-muted mb-0"><i class="bi bi-info-circle me-1"></i>${p.advice}</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="widget-box h-100">
        <h3 class="h6 mb-3"><i class="bi bi-diagram-3 text-accent me-2"></i>Alineaciones probables</h3>
        <div class="row">
          <div class="col-6">
            <p class="fw-semibold mb-1">${l.home.team} <span class="text-muted small">(${l.home.formation})</span></p>
            <ol class="small ps-3">${l.home.startXI.map((name) => "<li>" + name + "</li>").join("")}</ol>
          </div>
          <div class="col-6">
            <p class="fw-semibold mb-1">${l.away.team} <span class="text-muted small">(${l.away.formation})</span></p>
            <ol class="small ps-3">${l.away.startXI.map((name) => "<li>" + name + "</li>").join("")}</ol>
          </div>
        </div>
      </div>
    </div>`;
}

function renderTopScorers() {
  const container = document.getElementById("topScorersContainer");
  if (!container) return;
  container.innerHTML = TOP_SCORERS.map(
    (s, i) => `
    <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent">
      <span><span class="badge badge-rank me-2">${i + 1}</span>${s.player} <span class="text-muted small">(${s.team})</span></span>
      <span class="fw-bold">${s.goals} <i class="bi bi-dribbble"></i></span>
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
      <img src="${g.img}" alt="${g.caption}" loading="lazy">
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

/* ---------- Cuenta regresiva ---------- */
function initCountdown() {
  const daysEl = document.getElementById("cdDays");
  if (!daysEl) return;
  const hoursEl = document.getElementById("cdHours");
  const minutesEl = document.getElementById("cdMinutes");
  const secondsEl = document.getElementById("cdSeconds");
  const labelEl = document.getElementById("countdownLabel");
  const target = new Date(NEXT_MATCH_DATE);
  if (labelEl) labelEl.textContent = NEXT_MATCH_LABEL;

  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    daysEl.textContent = days < 10 ? "0" + days : days;
    hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Encuesta: ¿quién ganará el Mundial? ---------- */
function getPollVotes() {
  const stored = JSON.parse(localStorage.getItem("wfh-poll-votes") || "null");
  return stored || Object.assign({}, POLL_BASE_VOTES);
}

function renderPoll() {
  const container = document.getElementById("pollContainer");
  if (!container) return;
  const votes = getPollVotes();
  const votedTeam = localStorage.getItem("wfh-poll-voted");

  let total = 0;
  for (const team in votes) {
    total += votes[team];
  }

  if (!votedTeam) {
    let buttons = "";
    for (const team in votes) {
      buttons += `<button class="btn btn-outline-success poll-btn" data-team="${team}">${team}</button>`;
    }
    container.innerHTML = `
      <p class="text-muted mb-3">Elige tu favorito para ver los resultados de la comunidad:</p>
      <div class="d-flex flex-wrap gap-2">${buttons}</div>
    `;
    const pollButtons = container.querySelectorAll(".poll-btn");
    for (let i = 0; i < pollButtons.length; i++) {
      pollButtons[i].addEventListener("click", function () {
        const team = this.getAttribute("data-team");
        votes[team] = votes[team] + 1;
        localStorage.setItem("wfh-poll-votes", JSON.stringify(votes));
        localStorage.setItem("wfh-poll-voted", team);
        renderPoll();
      });
    }
  } else {
    let bars = `<p class="mb-3"><i class="bi bi-check-circle-fill text-accent me-1"></i>Votaste por <strong>${votedTeam}</strong>. Resultados de la comunidad:</p>`;
    for (const team in votes) {
      const pct = total ? Math.round((votes[team] / total) * 100) : 0;
      bars += `
        <div class="mb-2">
          <div class="d-flex justify-content-between small text-muted"><span>${team}</span><span>${pct}%</span></div>
          <div class="progress"><div class="progress-bar bg-success" style="width:${pct}%"></div></div>
        </div>`;
    }
    container.innerHTML = bars;
  }
}

/* ---------- Buscador en vivo ---------- */
function initSearch(inputId, containerId) {
  const input = document.getElementById(inputId);
  const container = document.getElementById(containerId);
  if (!input || !container) return;
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    const cards = container.children;
    for (let i = 0; i < cards.length; i++) {
      const text = cards[i].textContent.toLowerCase();
      cards[i].style.display = text.includes(query) ? "" : "none";
    }
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
  renderWorldCupFixtures();
  renderWorldCupStandings();
  renderFeaturedMatch();
  renderTopScorers();
  initCountdown();
  renderPoll();
  initSearch("newsSearch", "newsContainer");
  initSearch("teamsSearch", "teamsContainer");
  initContactForm();
  initBackToTop();
});
