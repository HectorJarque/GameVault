  const games = [
  { id: 0, title: 'Eclipse Genesis', genre: ['Action', 'RPG'], platforms: ['PC', 'PS5', 'Xbox'], rating: 9.7, releaseYear: 2025, category: 'trending', playtime: '60+ h', image: './img/EclipseGenesis.png', tags: ['Mundo abierto', 'Historia rica', 'Ciencia ficción'], desc: 'Embárcate en un viaje épico a través de un universo destrozado. Domina poderes celestiales, forja alianzas y descubre los secretos del Eclipse en esta impresionante obra maestra de mundo abierto.', reviews: [{ author: 'IGN', stars: 5, text: 'Uno de los mejores RPG de la década.' }], sysReq: { os: 'Windows 11', cpu: 'Intel i7-13700K', ram: '32 GB', gpu: 'RTX 4070', storage: '120 GB SSD' }, achievements: ['Explorador cósmico', 'Forjador de estrellas'], isEditorChoice: true, isTrending: true },
  { id: 1, title: 'Neon Abyss Online', genre: ['Action', 'Multiplayer'], platforms: ['PC', 'PS5'], rating: 8.9, releaseYear: 2025, category: 'multiplayer', playtime: '200+ h', image: './img/NeonAbyss.png', tags: ['Cyberpunk', 'Competitivo'], desc: 'Sumérgete en un mundo cyberpunk lleno de neón donde el combate táctico en equipo se une a una acción ultrarrápida.', reviews: [{ author: 'Eurogamer', stars: 4, text: 'El shooter multijugador más emocionante en años.' }], sysReq: { os: 'Windows 10/11', cpu: 'Intel i5-12400', ram: '16 GB', gpu: 'RTX 3060', storage: '80 GB SSD' }, achievements: ['Primera sangre', 'Leyenda cibernética'], isTrending: true },
  { id: 2, title: 'Whispering Pines', genre: ['Horror', 'Indie'], platforms: ['PC', 'Switch'], rating: 9.2, releaseYear: 2024, category: 'horror', playtime: '8-12 h', image: './img/WhisperingPines.png', tags: ['Terror psicológico', 'Atmosférico'], desc: 'Perdido en un bosque misterioso, desvela oscuros secretos donde cada sombra esconde una historia.', reviews: [{ author: 'Kotaku', stars: 5, text: 'Aterrador e inolvidable.' }], sysReq: { os: 'Windows 10', cpu: 'Intel i5-10400', ram: '8 GB', gpu: 'GTX 1660', storage: '25 GB' }, achievements: ['Superviviente', 'Buscador de la verdad'], isEditorChoice: true },
  { id: 3, title: 'Starfall Kingdom', genre: ['RPG', 'Retro'], platforms: ['PC', 'Switch', 'Mobile'], rating: 9.0, releaseYear: 2024, category: 'retro', playtime: '40+ h', image: './img/StarfallKingdom.png', tags: ['Pixel Art', 'Combate por turnos'], desc: 'Una carta de amor a los clásicos RPG de 16 bits. Explora un vasto reino y lucha contra antiguos males.', reviews: [{ author: 'Destructoid', stars: 5, text: 'Nostalgia pura perfeccionada.' }], sysReq: { os: 'Windows 10', cpu: 'Cualquier CPU moderno', ram: '4 GB', gpu: 'Integrada', storage: '8 GB' }, achievements: ['Caballero real', 'Cazador de dragones'], isEditorChoice: true },
  { id: 4, title: 'Void Runners', genre: ['Action', 'Indie'], platforms: ['PC', 'PS5', 'Xbox'], rating: 8.7, releaseYear: 2025, category: 'indie', playtime: '15-20 h', image: './img/VoidRunners.png', tags: ['Parkour', 'Roguelike'], desc: 'Corre, salta y deslízate por paisajes del vacío generados proceduralmente.', reviews: [{ author: 'Polygon', stars: 4, text: 'Movimiento fluido y gráficos preciosos.' }], sysReq: { os: 'Windows 10/11', cpu: 'Intel i5-11400', ram: '12 GB', gpu: 'RTX 3050', storage: '30 GB' }, achievements: ['Caminante del vacío', 'Demonio de la velocidad'] },
  { id: 5, title: 'Emberfall', genre: ['RPG', 'Action'], platforms: ['PC', 'PS5'], rating: 9.4, releaseYear: 2025, category: 'anticipated', playtime: '50+ h', image: './img/Emberfall.png', tags: ['Fantasía oscura', 'Souls-like'], desc: 'Entra en el mundo en ruinas de Emberfall, donde cada batalla pone a prueba tu habilidad.', reviews: [{ author: 'Famitsu', stars: 5, text: 'Una obra maestra de desafío y atmósfera.' }], sysReq: { os: 'Windows 11', cpu: 'Intel i7-13700K', ram: '32 GB', gpu: 'RTX 4080', storage: '100 GB SSD' }, achievements: ['Señor de las ascuas', 'Asesino de jefes'], isTrending: true },
  { id: 6, title: 'Coral Depths', genre: ['Indie', 'Adventure'], platforms: ['PC', 'Switch'], rating: 9.1, releaseYear: 2024, category: 'indie', playtime: '6-10 h', image: './img/CoralDepths.png', tags: ['Submarino', 'Relajante'], desc: 'Un sereno juego de exploración submarina con gráficos dibujados a mano.', reviews: [{ author: 'The Guardian', stars: 5, text: 'Una obra maestra meditativa.' }], sysReq: { os: 'Windows 10', cpu: 'Intel i3', ram: '4 GB', gpu: 'Integrada', storage: '6 GB' }, achievements: ['Buzo profundo', 'Explorador de arrecifes'], isEditorChoice: true },
  { id: 7, title: 'Titan Arena', genre: ['Multiplayer', 'Action'], platforms: ['PC', 'PS5', 'Xbox'], rating: 8.5, releaseYear: 2025, category: 'multiplayer', playtime: '100+ h', image: './img/TitanArena.png', tags: ['Arena', 'Héroes'], desc: 'Domina héroes únicos y domina la arena en intensas batallas 3v3.', reviews: [{ author: 'ESPN Esports', stars: 4, text: 'Construido para la competición.' }], sysReq: { os: 'Windows 10/11', cpu: 'Intel i5-12400', ram: '16 GB', gpu: 'RTX 3060 Ti', storage: '55 GB' }, achievements: ['Novato en la arena', 'Maestro de combos'] },
  { id: 8, title: 'Haunted Halls', genre: ['Horror', 'Retro'], platforms: ['PC', 'Switch'], rating: 8.8, releaseYear: 2024, category: 'horror', playtime: '5-8 h', image: './img/HauntedHalls.png', tags: ['Terror retro', 'Estilo PS1'], desc: 'Un survival horror con cámaras fijas y recursos limitados, como en los clásicos.', reviews: [{ author: 'RPS', stars: 4, text: 'Un brillante retroceso que se siente fresco y aterrador.' }], sysReq: { os: 'Windows 10', cpu: 'Intel i3', ram: '4 GB', gpu: 'Integrada', storage: '3 GB' }, achievements: ['Artista del escape', 'Fotógrafo de fantasmas'] },
  { id: 9, title: 'Skybound Saga', genre: ['RPG', 'Adventure'], platforms: ['PC', 'PS5', 'Xbox', 'Switch'], rating: 9.5, releaseYear: 2025, category: 'anticipated', playtime: '70+ h', image: './img/SkyboundSaga.png', tags: ['Piratas del cielo', 'Mundo abierto'], desc: 'Surca los cielos en este impresionante RPG de mundo abierto con combate de aeronaves.', reviews: [{ author: 'Metacritic', stars: 5, text: 'Un RPG generacional.' }], sysReq: { os: 'Windows 11', cpu: 'Intel i7-14700K', ram: '32 GB', gpu: 'RTX 4070 Ti', storage: '130 GB SSD' }, achievements: ['Capitán del cielo', 'Saltador de islas'], isTrending: true },
  { id: 10, title: 'Pixel Pioneers', genre: ['Retro', 'Indie'], platforms: ['PC', 'Mobile'], rating: 8.6, releaseYear: 2024, category: 'retro', playtime: '12-18 h', image: './img/PixelPioneers.png', tags: ['Pixel Art', 'Construcción de ciudades'], desc: 'Construye la ciudad pixelada de tus sueños en este encantador constructor de ciudades retro.', reviews: [{ author: 'TouchArcade', stars: 4, text: 'Adictivo y encantador.' }], sysReq: { os: 'Windows 10', cpu: 'Cualquiera', ram: '2 GB', gpu: 'Integrada', storage: '2 GB' }, achievements: ['Fundador del pueblo', 'Maestro constructor'] },
  { id: 11, title: 'Darkwater', genre: ['Horror', 'Action'], platforms: ['PC', 'PS5'], rating: 9.0, releaseYear: 2025, category: 'horror', playtime: '10-15 h', image: './img/Darkwater.png', tags: ['Survival Horror', 'Submarino'], desc: 'Sobrevive a los horrores que acechan en una instalación de investigación submarina.', reviews: [{ author: 'Horror Weekly', stars: 5, text: 'Claustrofóbico y magistralmente elaborado.' }], sysReq: { os: 'Windows 10/11', cpu: 'Intel i5-12400', ram: '16 GB', gpu: 'RTX 3060', storage: '45 GB' }, achievements: ['Superviviente de las profundidades', 'Experto en sigilo'] },
  { id: 12, title: 'Lumina Chronicles', genre: ['RPG', 'Indie'], platforms: ['PC', 'Switch'], rating: 9.3, releaseYear: 2024, category: 'indie', playtime: '25-35 h', image: './img/LuminaChronicles.png', tags: ['Dibujado a mano', 'Historia rica'], desc: 'Un RPG dibujado a mano con una historia desgarradora y una banda sonora premiada.', reviews: [{ author: 'NPR', stars: 5, text: 'Una obra de arte.' }], sysReq: { os: 'Windows 10', cpu: 'Intel i5', ram: '8 GB', gpu: 'GTX 1050', storage: '20 GB' }, achievements: ['Capítulo uno', 'Lagrimómetro'] },
  { id: 13, title: 'Grid Warriors', genre: ['Multiplayer', 'Retro'], platforms: ['PC', 'Mobile'], rating: 8.4, releaseYear: 2024, category: 'multiplayer', playtime: '50+ h', image: './img/GridWarriors.png', tags: ['Cuadrícula', 'Táctico'], desc: 'Supera a tus oponentes en batallas estratégicas breves sobre una cuadrícula.', reviews: [{ author: 'Pocket Gamer', stars: 4, text: 'Inteligente y sorprendentemente profundo.' }], sysReq: { os: 'Windows 10', cpu: 'Cualquiera', ram: '4 GB', gpu: 'Integrada', storage: '5 GB' }, achievements: ['Maestro de la cuadrícula', 'Estratega'] },
  { id: 14, title: 'Frostbound', genre: ['Action', 'RPG'], platforms: ['PC', 'PS5', 'Xbox'], rating: 9.6, releaseYear: 2025, category: 'trending', playtime: '45+ h', image: './img/Frostbound.png', tags: ['Mitología nórdica', 'Invierno'], desc: 'Un mundo helado inspirado en la mitología nórdica con combate visceral y una saga épica.', reviews: [{ author: 'GamesRadar', stars: 5, text: 'Una obra maestra de acción y atmósfera.' }], sysReq: { os: 'Windows 11', cpu: 'Intel i7-13700K', ram: '32 GB', gpu: 'RTX 4070', storage: '110 GB SSD' }, achievements: ['Guerrero de la escarcha', 'Maestro de runas'], isTrending: true, isEditorChoice: true }
  ];

  const categories = [
  { key: 'trending', title: 'Tendencias', filter: g => g.isTrending },
  { key: 'anticipated', title: 'Más esperados', filter: g => g.category === 'anticipated' },
  { key: 'indie', title: 'Joyas indie', filter: g => g.category === 'indie' },
  { key: 'rpg', title: 'Colección RPG', filter: g => g.genre.includes('RPG') },
  { key: 'multiplayer', title: 'Éxitos multijugador', filter: g => g.category === 'multiplayer' },
  { key: 'horror', title: 'Terror', filter: g => g.category === 'horror' },
  { key: 'retro', title: 'Clásicos retro', filter: g => g.category === 'retro' },
  { key: 'editors', title: 'Selección del editor', filter: g => g.isEditorChoice }
  ];

  let library = JSON.parse(localStorage.getItem('gamevault_library') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('gamevault_wishlist') || '[]');
  let currentTheme = localStorage.getItem('gamevault_theme') || 'dark';
  let searchFilter = 'all';
  let recentGameId = 0;
  let searchOpen = false;

  function saveState() {
  localStorage.setItem('gamevault_library', JSON.stringify(library));
  localStorage.setItem('gamevault_wishlist', JSON.stringify(wishlist));
  localStorage.setItem('gamevault_theme', currentTheme);
  updateBadges();
}

  function updateBadges() {
  document.getElementById('statLib').textContent = library.length;
  document.getElementById('statWish').textContent = wishlist.length;
}

  function isInLibrary(id) { return library.includes(id); }
  function isInWishlist(id) { return wishlist.includes(id); }

  function toggleLibraryGame(id, btnEl) {
  if (isInLibrary(id)) {
  library = library.filter(i => i !== id);
  showToast('Eliminado de la biblioteca');
  if (btnEl) { btnEl.textContent = 'Añadir a biblioteca'; btnEl.classList.remove('saved'); }
} else {
  library.push(id);
  showToast('Añadido a la biblioteca');
  if (btnEl) { btnEl.textContent = 'En biblioteca'; btnEl.classList.add('saved'); }
}
  saveState();
  renderLibraryModal();
  updateAllCardButtons();
}

  function toggleWishlistGame(id) {
  if (isInWishlist(id)) {
  wishlist = wishlist.filter(i => i !== id);
  showToast('Eliminado de la lista de deseos');
} else {
  wishlist.push(id);
  showToast('Añadido a la lista de deseos');
}
  saveState();
  renderLibraryModal();
  updateAllCardButtons();
}

  function updateAllCardButtons() {
  document.querySelectorAll('.card-action-btn[data-game-id]').forEach(btn => {
    const id = parseInt(btn.dataset.gameId);
    if (btn.dataset.action === 'lib') btn.classList.toggle('saved', isInLibrary(id));
    if (btn.dataset.action === 'wish') btn.classList.toggle('saved', isInWishlist(id));
  });
  const heroLibBtn = document.getElementById('heroLibBtn');
  if (heroLibBtn) {
  const hid = parseInt(heroLibBtn.dataset.gameId || '0');
  heroLibBtn.textContent = isInLibrary(hid) ? 'En biblioteca' : 'Añadir a biblioteca';
  heroLibBtn.classList.toggle('saved', isInLibrary(hid));
}
}

  function renderGameRows() {
  document.getElementById('skeletonRows').innerHTML = '';
  let html = '';
  categories.forEach(cat => {
  const filtered = games.filter(cat.filter);
  if (!filtered.length) return;
  html += `<section class="section"><div class="section-header"><h2 class="section-title">${cat.title}</h2><button class="section-see-all" onclick="showToast('Esto te llevaría a ver todos los juegos de ${cat.title.toLowerCase()}, implementación a futuro.')">Ver todo</button></div><div class="game-row">`;
  filtered.forEach(g => html += renderGameCard(g));
  html += '</div></section>';
});
  document.getElementById('gameRowsContainer').innerHTML = html;
  document.querySelectorAll('.game-row').forEach(row => {
  let isDown = false, startX, scrollLeft;
  row.addEventListener('mousedown', e => { isDown = true; row.style.cursor = 'grabbing'; startX = e.pageX - row.offsetLeft; scrollLeft = row.scrollLeft; });
  row.addEventListener('mouseleave', () => { isDown = false; row.style.cursor = 'grab'; });
  row.addEventListener('mouseup', () => { isDown = false; row.style.cursor = 'grab'; });
  row.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); row.scrollLeft = scrollLeft - (e.pageX - row.offsetLeft - startX) * 2; });
  row.style.cursor = 'grab';
});
  updateAllCardButtons();
  lucide.createIcons();
}

  function renderGameCard(g) {
  return `<div class="game-card" onclick="openGameDetail(${g.id})"><div class="game-card-img"><img src="${g.image}" alt="${g.title}" class="card-img"><div class="game-card-rating"><i data-lucide="star" style="width:12px;height:12px;"></i> ${g.rating}</div></div><div class="game-card-info"><div class="game-card-title">${g.title}</div><div class="game-card-sub">${g.releaseYear} · ${g.playtime}</div></div><div class="game-card-actions" onclick="event.stopPropagation();"><button class="card-action-btn ${isInLibrary(g.id) ? 'saved' : ''}" data-game-id="${g.id}" data-action="lib" onclick="toggleLibraryGame(${g.id}, this)" title="Biblioteca"><i data-lucide="bookmark" style="width:16px;height:16px;"></i></button><button class="card-action-btn ${isInWishlist(g.id) ? 'saved' : ''}" onclick="toggleWishlistGame(${g.id}); this.classList.toggle('saved');" title="Lista de deseos"><i data-lucide="heart" style="width:16px;height:16px;"></i></button></div></div>`;
}

  function renderSkeletonRows() {
  let html = '';
  for (let i = 0; i < 4; i++) html += `<section class="section"><div class="skeleton" style="width:200px;height:28px;margin-bottom:16px;"></div><div class="game-row">${'<div class="skeleton-card skeleton"></div>'.repeat(6)}</div></section>`;
  document.getElementById('skeletonRows').innerHTML = html;
}

  function updateHero(gameId) {
  const g = games.find(g => g.id === gameId) || games[0];
  document.getElementById('heroTitle').textContent = g.title;
  document.getElementById('heroVisual').querySelector('.hero-visual-inner').innerHTML = `<img src="${g.image}" alt="${g.title}" class="hero-img">`;
  document.querySelector('.hero-meta').innerHTML = `<span><i data-lucide="star" style="width:16px;height:16px;color:var(--gold);"></i> <span class="hero-rating">${g.rating}</span></span><span>${g.genre.join(' · ')}</span><span>${g.platforms.join(' · ')}</span><span>${g.releaseYear}</span>`;
  document.querySelector('.hero-desc').textContent = g.desc.substring(0, 180) + '...';
  document.getElementById('recentView').textContent = g.title;
  recentGameId = g.id;
  const btn = document.getElementById('heroLibBtn');
  btn.dataset.gameId = g.id;
  btn.textContent = isInLibrary(g.id) ? 'En biblioteca' : 'Añadir a biblioteca';
  btn.classList.toggle('saved', isInLibrary(g.id));
  lucide.createIcons();
}

  function openGameDetail(id) {
  const g = games.find(g => g.id === id);
  if (!g) return;
  recentGameId = id;
  document.getElementById('recentView').textContent = g.title;
  document.getElementById('modalHero').innerHTML = `<img src="${g.image}" alt="${g.title}" class="modal-hero-img">`;
  document.getElementById('modalBody').innerHTML = `
      <h2 class="modal-title">${g.title}</h2>
      <div class="modal-meta-row">${g.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
      <p class="modal-desc">${g.desc}</p>
      <button class="btn btn-primary btn-sm" onclick="toggleLibraryGame(${g.id}, this); updateModalButtons(${g.id});"><i data-lucide="bookmark" style="width:16px;height:16px;"></i> ${isInLibrary(g.id) ? 'En biblioteca' : 'Añadir a biblioteca'}</button>
      <button class="btn btn-outline btn-sm" onclick="toggleWishlistGame(${g.id}); updateModalButtons(${g.id});"><i data-lucide="heart" style="width:16px;height:16px;"></i> ${isInWishlist(g.id) ? 'En lista de deseos' : 'Añadir a deseos'}</button>
      <div class="modal-section-title">Logros</div><div class="achievement-list">${g.achievements.map((a, i) => `<span class="achievement-badge ${i > 1 ? 'locked' : ''}"><i data-lucide="trophy" style="width:14px;height:14px;"></i> ${a}</span>`).join('')}</div>
      <div class="modal-section-title">Reseñas</div>${g.reviews.map(r => `<div class="review-card"><div class="review-author">${r.author} <span class="review-stars">${'★'.repeat(r.stars)}</span></div><div class="review-text">"${r.text}"</div></div>`).join('')}
      <div class="modal-section-title">Requisitos del sistema</div><div class="sys-req-grid">${Object.entries(g.sysReq).map(([k, v]) => `<div><strong>${k}</strong>${v}</div>`).join('')}</div>
      <div class="modal-section-title">Juegos similares</div><div class="game-row">${games.filter(og => og.id !== g.id).slice(0, 4).map(sg => renderGameCard(sg)).join('')}</div>`;
  document.getElementById('gameModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

  function updateModalButtons(id) {
  const btns = document.querySelectorAll('#modalBody .btn-sm');
  if (btns[0]) btns[0].innerHTML = `<i data-lucide="bookmark" style="width:16px;height:16px;"></i> ${isInLibrary(id) ? 'En biblioteca' : 'Añadir a biblioteca'}`;
  if (btns[1]) btns[1].innerHTML = `<i data-lucide="heart" style="width:16px;height:16px;"></i> ${isInWishlist(id) ? 'En lista de deseos' : 'Añadir a deseos'}`;
  updateAllCardButtons();
  updateBadges();
  lucide.createIcons();
}

  function closeGameDetail() {
  document.getElementById('gameModal').classList.remove('open');
  document.body.style.overflow = '';
}

  function toggleSearch() {
  searchOpen = !searchOpen;
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.toggle('open', searchOpen);
  document.body.style.overflow = searchOpen ? 'hidden' : '';
  if (searchOpen) { document.getElementById('searchInput').focus(); performSearch(); }
  else { document.getElementById('searchInput').value = ''; document.getElementById('searchResults').innerHTML = ''; }
}

  function setSearchFilter(filter, el) {
  searchFilter = filter;
  document.querySelectorAll('#filterChips .filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  performSearch();
}

  function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  let filtered = games;
  if (query) filtered = games.filter(g => `${g.title} ${g.genre.join(' ')} ${g.tags.join(' ')}`.toLowerCase().includes(query));
  if (searchFilter !== 'all') filtered = filtered.filter(g => g.genre.includes(searchFilter) || g.category === searchFilter.toLowerCase());
  document.getElementById('searchResults').innerHTML = filtered.length ? filtered.map(g => `
      <div class="search-result-item" onclick="openGameDetail(${g.id}); toggleSearch();">
        <div class="search-result-img"><img src="${g.image}" alt="${g.title}"></div>
        <div class="search-result-info"><div class="search-result-title">${g.title}</div><div class="search-result-meta">${g.rating} · ${g.genre.join(', ')}</div></div>
      </div>`).join('') : '<p style="color:var(--text-muted);text-align:center;padding:20px;">No se encontraron juegos.</p>';
}

  function openLibrary() { renderLibraryModal(); document.getElementById('libraryModal').classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeLibrary() { document.getElementById('libraryModal').classList.remove('open'); document.body.style.overflow = ''; }

  function renderLibraryModal() {
  const libGames = games.filter(g => isInLibrary(g.id));
  const wishGames = games.filter(g => isInWishlist(g.id));
  document.getElementById('libraryList').innerHTML = libGames.length ? libGames.map(g => `<div style="display:flex;align-items:center;gap:12px;padding:10px;border-radius:var(--radius);background:var(--bg-tertiary);cursor:pointer;" onclick="closeLibrary();openGameDetail(${g.id});"><img src="${g.image}" style="width:50px;height:60px;object-fit:cover;border-radius:8px;"><div style="flex:1;"><strong>${g.title}</strong><br><small>${g.genre.join(', ')}</small></div><button class="btn-sm" style="background:var(--accent2);color:#fff;" onclick="event.stopPropagation();toggleLibraryGame(${g.id});renderLibraryModal();">Eliminar</button></div>`).join('') : '<p style="color:var(--text-muted);">Tu biblioteca está vacía.</p>';
  document.getElementById('wishlistList').innerHTML = wishGames.length ? wishGames.map(g => `<div style="display:flex;align-items:center;gap:12px;padding:10px;border-radius:var(--radius);background:var(--bg-tertiary);cursor:pointer;" onclick="closeLibrary();openGameDetail(${g.id});"><img src="${g.image}" style="width:50px;height:60px;object-fit:cover;border-radius:8px;"><div style="flex:1;"><strong>${g.title}</strong><br><small>${g.rating} · ${g.releaseYear}</small></div><button class="btn-sm" style="background:var(--accent2);color:#fff;" onclick="event.stopPropagation();toggleWishlistGame(${g.id});renderLibraryModal();">Eliminar</button></div>`).join('') : '<p style="color:var(--text-muted);">No hay juegos en la lista de deseos.</p>';
  updateBadges();
  lucide.createIcons();
}

  function openProfile() {
  updateBadges();
  document.getElementById('profileModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

  function closeProfile() {
  document.getElementById('profileModal').classList.remove('open');
  document.body.style.overflow = '';
}

  function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  saveState();
  showToast(currentTheme === 'dark' ? 'Modo oscuro' : 'Modo claro');
}

  function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

  window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20));
  window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
  if (document.getElementById('searchOverlay').classList.contains('open')) toggleSearch();
  if (document.getElementById('gameModal').classList.contains('open')) closeGameDetail();
  if (document.getElementById('libraryModal').classList.contains('open')) closeLibrary();
  if (document.getElementById('profileModal').classList.contains('open')) closeProfile();
}
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); toggleSearch(); }
});
  document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) {
  if (e.target.id === 'gameModal') closeGameDetail();
  if (e.target.id === 'libraryModal') closeLibrary();
  if (e.target.id === 'profileModal') closeProfile();
}
});

  function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

  document.addEventListener('DOMContentLoaded', () => {
  renderSkeletonRows();
  updateBadges();
  setTimeout(() => { renderGameRows(); updateHero(0); }, 600);
  lucide.createIcons();
});
