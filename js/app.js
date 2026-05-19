const games = [
  {
    id: 0,
    title: 'Eclipse Genesis',
    genre: ['Action', 'RPG'],
    platforms: ['PC', 'PS5', 'Xbox'],
    rating: 9.7,
    releaseYear: 2025,
    category: 'trending',
    playtime: '60+ hrs',
    image: './img/EclipseGenesis.png',
    gradient: 'linear-gradient(135deg, #1a1040, #0d2050, #1a1040)',
    tags: ['Open World', 'Story-Rich', 'Sci-Fi', 'Atmospheric'],
    desc: 'Embark on an epic journey through a shattered universe. Master celestial powers, forge alliances, and uncover the secrets of the Eclipse in this breathtaking open-world masterpiece.',
    reviews: [{
      author: 'IGN',
      stars: 5,
      text: 'One of the best RPGs of the decade.'
    }, {
      author: 'GameSpot',
      stars: 5,
      text: 'Breathtaking scope and incredible depth.'
    }],
    sysReq: {
      os: 'Windows 11',
      cpu: 'Intel i7-13700K',
      ram: '32 GB',
      gpu: 'RTX 4070',
      storage: '120 GB SSD'
    },
    achievements: ['Cosmic Explorer', 'Star Forger', 'Void Walker'],
    isEditorChoice: true,
    isTrending: true
  },
  {
    id: 1,
    title: 'Neon Abyss Online',
    genre: ['Action', 'Multiplayer'],
    platforms: ['PC', 'PS5'],
    rating: 8.9,
    releaseYear: 2025,
    category: 'multiplayer',
    playtime: '200+ hrs',
    image: './img/NeonAbyss.png',
    gradient: 'linear-gradient(135deg, #1a0030, #300050, #1a0030)',
    tags: ['Cyberpunk', 'Competitive', 'Team-Based'],
    desc: 'Dive into a neon-drenched cyberpunk world where tactical team combat meets lightning-fast action.',
    reviews: [{
      author: 'Eurogamer',
      stars: 4,
      text: 'The most exciting multiplayer shooter in years.'
    }],
    sysReq: {
      os: 'Windows 10/11',
      cpu: 'Intel i5-12400',
      ram: '16 GB',
      gpu: 'RTX 3060',
      storage: '80 GB SSD'
    },
    achievements: ['First Blood', 'Cyber Legend'],
    isTrending: true
  },
  {
    id: 2,
    title: 'Whispering Pines',
    genre: ['Horror', 'Indie'],
    platforms: ['PC', 'Switch'],
    rating: 9.2,
    releaseYear: 2024,
    category: 'horror',
    playtime: '8-12 hrs',
    image: './img/WhisperingPines.png',
    gradient: 'linear-gradient(135deg, #0a1a0a, #1a2a0a, #0a1a0a)',
    tags: ['Psychological Horror', 'Atmospheric'],
    desc: 'Lost in a mysterious forest, unravel dark secrets where every shadow hides a story.',
    reviews: [{
      author: 'Kotaku',
      stars: 5,
      text: 'Terrifying and unforgettable.'
    }],
    sysReq: {
      os: 'Windows 10',
      cpu: 'Intel i5-10400',
      ram: '8 GB',
      gpu: 'GTX 1660',
      storage: '25 GB'
    },
    achievements: ['Survivor', 'Truth Seeker'],
    isEditorChoice: true
  },
  {
    id: 3,
    title: 'Starfall Kingdom',
    genre: ['RPG', 'Retro'],
    platforms: ['PC', 'Switch', 'Mobile'],
    rating: 9.0,
    releaseYear: 2024,
    category: 'retro',
    playtime: '40+ hrs',
    image: './img/StarfallKingdom.png',
    gradient: 'linear-gradient(135deg, #2a1a00, #3a2a10, #2a1a00)',
    tags: ['Pixel Art', 'Turn-Based'],
    desc: 'A love letter to 16-bit RPG classics. Explore a vast kingdom and battle ancient evils.',
    reviews: [{
      author: 'Destructoid',
      stars: 5,
      text: 'Pure nostalgia perfected.'
    }],
    sysReq: {
      os: 'Windows 10',
      cpu: 'Any modern CPU',
      ram: '4 GB',
      gpu: 'Integrated',
      storage: '8 GB'
    },
    achievements: ['Royal Knight', 'Dragon Slayer'],
    isEditorChoice: true
  },
  {
    id: 4,
    title: 'Void Runners',
    genre: ['Action', 'Indie'],
    platforms: ['PC', 'PS5', 'Xbox'],
    rating: 8.7,
    releaseYear: 2025,
    category: 'indie',
    playtime: '15-20 hrs',
    image: './img/VoidRunners.png',
    gradient: 'linear-gradient(135deg, #0d0d30, #1a1a40, #0d0d30)',
    tags: ['Parkour', 'Roguelike'],
    desc: 'Run, leap, and dash through procedurally generated voidscapes.',
    reviews: [{
      author: 'Polygon',
      stars: 4,
      text: 'Fluid movement and gorgeous visuals.'
    }],
    sysReq: {
      os: 'Windows 10/11',
      cpu: 'Intel i5-11400',
      ram: '12 GB',
      gpu: 'RTX 3050',
      storage: '30 GB'
    },
    achievements: ['Void Walker', 'Speed Demon']
  },
  {
    id: 5,
    title: 'Emberfall',
    genre: ['RPG', 'Action'],
    platforms: ['PC', 'PS5'],
    rating: 9.4,
    releaseYear: 2025,
    category: 'anticipated',
    playtime: '50+ hrs',
    image: './img/Emberfall.png',
    gradient: 'linear-gradient(135deg, #3a1000, #4a1a00, #3a1000)',
    tags: ['Dark Fantasy', 'Souls-like'],
    desc: 'Enter the crumbling world of Emberfall, where every battle tests your skill.',
    reviews: [{
      author: 'Famitsu',
      stars: 5,
      text: 'A masterpiece of challenge and atmosphere.'
    }],
    sysReq: {
      os: 'Windows 11',
      cpu: 'Intel i7-13700K',
      ram: '32 GB',
      gpu: 'RTX 4080',
      storage: '100 GB SSD'
    },
    achievements: ['Ember Lord', 'Boss Slayer'],
    isTrending: true
  },
  {
    id: 6,
    title: 'Coral Depths',
    genre: ['Indie', 'Adventure'],
    platforms: ['PC', 'Switch'],
    rating: 9.1,
    releaseYear: 2024,
    category: 'indie',
    playtime: '6-10 hrs',
    image: './img/CoralDepths.png',
    gradient: 'linear-gradient(135deg, #002030, #003040, #002030)',
    tags: ['Underwater', 'Relaxing'],
    desc: 'A serene underwater exploration game with hand-drawn visuals.',
    reviews: [{
      author: 'The Guardian',
      stars: 5,
      text: 'A meditative masterpiece.'
    }],
    sysReq: {
      os: 'Windows 10',
      cpu: 'Intel i3',
      ram: '4 GB',
      gpu: 'Integrated',
      storage: '6 GB'
    },
    achievements: ['Deep Diver', 'Reef Explorer'],
    isEditorChoice: true
  },
  {
    id: 7,
    title: 'Titan Arena',
    genre: ['Multiplayer', 'Action'],
    platforms: ['PC', 'PS5', 'Xbox'],
    rating: 8.5,
    releaseYear: 2025,
    category: 'multiplayer',
    playtime: '100+ hrs',
    image: './img/TitanArena.png',
    gradient: 'linear-gradient(135deg, #200010, #300020, #200010)',
    tags: ['Arena Fighter', 'Hero-Based'],
    desc: 'Master unique heroes and dominate the arena in intense 3v3 battles.',
    reviews: [{
      author: 'ESPN Esports',
      stars: 4,
      text: 'Built for competition.'
    }],
    sysReq: {
      os: 'Windows 10/11',
      cpu: 'Intel i5-12400',
      ram: '16 GB',
      gpu: 'RTX 3060 Ti',
      storage: '55 GB'
    },
    achievements: ['Arena Rookie', 'Combo Master']
  },
  {
    id: 8,
    title: 'Haunted Halls',
    genre: ['Horror', 'Retro'],
    platforms: ['PC', 'Switch'],
    rating: 8.8,
    releaseYear: 2024,
    category: 'horror',
    playtime: '5-8 hrs',
    image: './img/HauntedHalls.png',
    gradient: 'linear-gradient(135deg, #1a1a1a, #2a1a2a, #1a1a1a)',
    tags: ['Retro Horror', 'PS1-Style'],
    desc: 'A PS1-style survival horror with fixed camera angles and limited resources.',
    reviews: [{
      author: 'RPS',
      stars: 4,
      text: 'A brilliant throwback that feels fresh and terrifying.'
    }],
    sysReq: {
      os: 'Windows 10',
      cpu: 'Intel i3',
      ram: '4 GB',
      gpu: 'Integrated',
      storage: '3 GB'
    },
    achievements: ['Escape Artist', 'Ghost Photographer']
  },
  {
    id: 9,
    title: 'Skybound Saga',
    genre: ['RPG', 'Adventure'],
    platforms: ['PC', 'PS5', 'Xbox', 'Switch'],
    rating: 9.5,
    releaseYear: 2025,
    category: 'anticipated',
    playtime: '70+ hrs',
    image: './img/SkyboundSaga.png',
    gradient: 'linear-gradient(135deg, #1a2a40, #2a3a50, #1a2a40)',
    tags: ['Sky Pirates', 'Open World'],
    desc: 'Take to the skies in this breathtaking open-world RPG with airship combat.',
    reviews: [{author: 'Metacritic', stars: 5, text: 'A generational RPG.'}],
    sysReq: {
      os: 'Windows 11',
      cpu: 'Intel i7-14700K',
      ram: '32 GB',
      gpu: 'RTX 4070 Ti',
      storage: '130 GB SSD'
    },
    achievements: ['Sky Captain', 'Island Hopper'],
    isTrending: true
  },
  {
    id: 10,
    title: 'Pixel Pioneers',
    genre: ['Retro', 'Indie'],
    platforms: ['PC', 'Mobile'],
    rating: 8.6,
    releaseYear: 2024,
    category: 'retro',
    playtime: '12-18 hrs',
    image: './img/PixelPioneers.png',
    gradient: 'linear-gradient(135deg, #202010, #303020, #202010)',
    tags: ['Pixel Art', 'City Builder'],
    desc: 'Build your dream pixel town in this charming retro city builder.',
    reviews: [{
      author: 'TouchArcade',
      stars: 4,
      text: 'Addictive and charming.'
    }],
    sysReq: {
      os: 'Windows 10',
      cpu: 'Any',
      ram: '2 GB',
      gpu: 'Integrated',
      storage: '2 GB'
    },
    achievements: ['Town Founder', 'Master Builder']
  },
  {
    id: 11,
    title: 'Darkwater',
    genre: ['Horror', 'Action'],
    platforms: ['PC', 'PS5'],
    rating: 9.0,
    releaseYear: 2025,
    category: 'horror',
    playtime: '10-15 hrs',
    image: './img/Darkwater.png',
    gradient: 'linear-gradient(135deg, #001020, #001a30, #001020)',
    tags: ['Survival Horror', 'Underwater'],
    desc: 'Survive the horrors lurking in an underwater research facility.',
    reviews: [{
      author: 'Horror Weekly',
      stars: 5,
      text: 'Claustrophobic and masterfully crafted.'
    }],
    sysReq: {
      os: 'Windows 10/11',
      cpu: 'Intel i5-12400',
      ram: '16 GB',
      gpu: 'RTX 3060',
      storage: '45 GB'
    },
    achievements: ['Deep Survivor', 'Stealth Expert']
  },
  {
    id: 12,
    title: 'Lumina Chronicles',
    genre: ['RPG', 'Indie'],
    platforms: ['PC', 'Switch'],
    rating: 9.3,
    releaseYear: 2024,
    category: 'indie',
    playtime: '25-35 hrs',
    image: './img/LuminaChronicles.png',
    gradient: 'linear-gradient(135deg, #201030, #302040, #201030)',
    tags: ['Hand-Drawn', 'Story-Rich'],
    desc: 'A hand-drawn RPG with a heart-wrenching story and award-winning soundtrack.',
    reviews: [{author: 'NPR', stars: 5, text: 'A work of art.'}],
    sysReq: {
      os: 'Windows 10',
      cpu: 'Intel i5',
      ram: '8 GB',
      gpu: 'GTX 1050',
      storage: '20 GB'
    },
    achievements: ['Chapter One', 'Tearjerker']
  },
  {
    id: 13,
    title: 'Grid Warriors',
    genre: ['Multiplayer', 'Retro'],
    platforms: ['PC', 'Mobile'],
    rating: 8.4,
    releaseYear: 2024,
    category: 'multiplayer',
    playtime: '50+ hrs',
    image: './img/GridWarriors.png',
    gradient: 'linear-gradient(135deg, #101020, #202040, #101020)',
    tags: ['Grid-Based', 'Tactical'],
    desc: 'Outsmart opponents in bite-sized strategic battles on a grid.',
    reviews: [{
      author: 'Pocket Gamer',
      stars: 4,
      text: 'Smart and surprisingly deep.'
    }],
    sysReq: {
      os: 'Windows 10',
      cpu: 'Any',
      ram: '4 GB',
      gpu: 'Integrated',
      storage: '5 GB'
    },
    achievements: ['Grid Master', 'Tactician']
  },
  {
    id: 14,
    title: 'Frostbound',
    genre: ['Action', 'RPG'],
    platforms: ['PC', 'PS5', 'Xbox'],
    rating: 9.6,
    releaseYear: 2025,
    category: 'trending',
    playtime: '45+ hrs',
    image: './img/Frostbound.png',
    gradient: 'linear-gradient(135deg, #1a2a3a, #2a3a4a, #1a2a3a)',
    tags: ['Norse Mythology', 'Winter'],
    desc: 'A frozen Norse-inspired world with visceral combat and a gripping saga.',
    reviews: [{
      author: 'GamesRadar',
      stars: 5,
      text: 'A masterpiece of action and atmosphere.'
    }],
    sysReq: {
      os: 'Windows 11',
      cpu: 'Intel i7-13700K',
      ram: '32 GB',
      gpu: 'RTX 4070',
      storage: '110 GB SSD'
    },
    achievements: ['Frost Warrior', 'Rune Master'],
    isTrending: true,
    isEditorChoice: true
  }
];

const categories = [
  {key: 'trending', title: 'Trending Now', filter: g => g.isTrending},
  {
    key: 'anticipated',
    title: 'Most Anticipated',
    filter: g => g.category === 'anticipated'
  },
  {key: 'indie', title: 'Indie Gems', filter: g => g.category === 'indie'},
  {key: 'rpg', title: 'RPG Collection', filter: g => g.genre.includes('RPG')},
  {
    key: 'multiplayer',
    title: 'Multiplayer Hits',
    filter: g => g.category === 'multiplayer'
  },
  {key: 'horror', title: 'Horror Games', filter: g => g.category === 'horror'},
  {key: 'retro', title: 'Retro Classics', filter: g => g.category === 'retro'},
  {key: 'editors', title: 'Editors\' Choice', filter: g => g.isEditorChoice}
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
  document.getElementById('libBadge').textContent = library.length;
  document.getElementById('statLib').textContent = library.length;
  document.getElementById('statWish').textContent = wishlist.length;
}

function isInLibrary(id) {
  return library.includes(id);
}

function isInWishlist(id) {
  return wishlist.includes(id);
}

function toggleLibraryGame(id, btnEl) {
  if (isInLibrary(id)) {
    library = library.filter(i => i !== id);
    showToast('Removed from library');
    if (btnEl) {
      btnEl.textContent = 'Add to Library';
      btnEl.classList.remove('saved');
    }
  } else {
    library.push(id);
    showToast('Added to library');
    if (btnEl) {
      btnEl.textContent = 'In Library';
      btnEl.classList.add('saved');
    }
  }
  saveState();
  renderLibraryModal();
  updateAllCardButtons();
}

function toggleWishlistGame(id) {
  if (isInWishlist(id)) {
    wishlist = wishlist.filter(i => i !== id);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist');
  }
  saveState();
  renderLibraryModal();
  updateAllCardButtons();
}

function updateAllCardButtons() {
  document.querySelectorAll('.card-action-btn[data-game-id]').forEach(btn => {
    const id = parseInt(btn.dataset.gameId);
    if (btn.dataset.action === 'lib') btn.classList.toggle('saved', isInLibrary(id));
  });
  const heroLibBtn = document.getElementById('heroLibBtn');
  if (heroLibBtn) {
    const hid = parseInt(heroLibBtn.dataset.gameId || '0');
    heroLibBtn.textContent = isInLibrary(hid) ? 'In Library' : 'Add to Library';
    heroLibBtn.classList.toggle('saved', isInLibrary(hid));
  }
}

function renderGameRows() {
  document.getElementById('skeletonRows').innerHTML = '';
  let html = '';
  categories.forEach(cat => {
    const filtered = games.filter(cat.filter);
    if (!filtered.length) return;
    html += `<section class="section"><div class="section-header"><h2 class="section-title">${cat.title}</h2><span class="section-see-all">See All</span></div><div class="game-row">`;
    filtered.forEach(g => html += renderGameCard(g));
    html += '</div></section>';
  });
  document.getElementById('gameRowsContainer').innerHTML = html;
  document.querySelectorAll('.game-row').forEach(row => {
    let isDown = false, startX, scrollLeft;
    row.addEventListener('mousedown', e => {
      isDown = true;
      row.style.cursor = 'grabbing';
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
    });
    row.addEventListener('mouseleave', () => {
      isDown = false;
      row.style.cursor = 'grab';
    });
    row.addEventListener('mouseup', () => {
      isDown = false;
      row.style.cursor = 'grab';
    });
    row.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      row.scrollLeft = scrollLeft - (e.pageX - row.offsetLeft - startX) * 2;
    });
    row.style.cursor = 'grab';
  });
  updateAllCardButtons();
}

function renderGameCard(g) {
  return `<div class="game-card" onclick="openGameDetail(${g.id})"><div class="game-card-img"><img src="${g.image}" alt="${g.title}" class="card-img"><div class="game-card-gradient" style="background:${g.gradient};"></div><div class="game-card-rating">${g.rating}</div></div><div class="game-card-info"><div class="game-card-title">${g.title}</div><div class="game-card-sub">${g.releaseYear} · ${g.playtime}</div></div><div class="game-card-actions" onclick="event.stopPropagation();"><button class="card-action-btn ${isInLibrary(g.id) ? 'saved' : ''}" data-game-id="${g.id}" data-action="lib" onclick="toggleLibraryGame(${g.id}, this)">L</button><button class="card-action-btn ${isInWishlist(g.id) ? 'saved' : ''}" onclick="toggleWishlistGame(${g.id}); this.classList.toggle('saved');">W</button></div></div>`;
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
  document.querySelector('.hero-meta').innerHTML = `<span>Rating <span class="hero-rating">${g.rating}</span></span><span>${g.genre.join(' · ')}</span><span>${g.platforms.join(' · ')}</span><span>${g.releaseYear}</span>`;
  document.querySelector('.hero-desc').textContent = g.desc.substring(0, 180) + '...';
  document.getElementById('recentView').textContent = g.title;
  recentGameId = g.id;
  const btn = document.getElementById('heroLibBtn');
  btn.dataset.gameId = g.id;
  btn.textContent = isInLibrary(g.id) ? 'In Library' : 'Add to Library';
  btn.classList.toggle('saved', isInLibrary(g.id));
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
                <button class="btn btn-primary btn-sm" onclick="toggleLibraryGame(${g.id}, this); updateModalButtons(${g.id});">${isInLibrary(g.id) ? 'In Library' : 'Add to Library'}</button>
                <button class="btn btn-outline btn-sm" onclick="toggleWishlistGame(${g.id}); updateModalButtons(${g.id});">${isInWishlist(g.id) ? 'Wishlisted' : 'Wishlist'}</button>
                <div class="modal-section-title">Achievements</div><div class="achievement-list">${g.achievements.map((a, i) => `<span class="achievement-badge ${i > 2 ? 'locked' : ''}">${a}</span>`).join('')}</div>
                <div class="modal-section-title">Reviews</div>${g.reviews.map(r => `<div class="review-card"><div class="review-author">${r.author} <span class="review-stars">${'★'.repeat(r.stars)}</span></div><div class="review-text">"${r.text}"</div></div>`).join('')}
                <div class="modal-section-title">System Requirements</div><div class="sys-req-grid">${Object.entries(g.sysReq).map(([k, v]) => `<div><strong>${k}</strong>${v}</div>`).join('')}</div>
                <div class="modal-section-title">Similar Games</div><div class="game-row">${games.filter(og => og.id !== g.id).slice(0, 4).map(sg => renderGameCard(sg)).join('')}</div>`;
  document.getElementById('gameModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateModalButtons(id) {
  const btns = document.querySelectorAll('#modalBody .btn-sm');
  if (btns[0]) btns[0].textContent = isInLibrary(id) ? 'In Library' : 'Add to Library';
  if (btns[1]) btns[1].textContent = isInWishlist(id) ? 'Wishlisted' : 'Wishlist';
  updateAllCardButtons();
  updateBadges();
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
  if (searchOpen) {
    document.getElementById('searchInput').focus();
    performSearch();
  } else {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  }
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
                </div>`).join('') : '<p style="color:var(--text-muted);text-align:center;padding:20px;">No games found.</p>';
}

function openLibrary() {
  renderLibraryModal();
  document.getElementById('libraryModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLibrary() {
  document.getElementById('libraryModal').classList.remove('open');
  document.body.style.overflow = '';
}

function renderLibraryModal() {
  const libGames = games.filter(g => isInLibrary(g.id));
  const wishGames = games.filter(g => isInWishlist(g.id));
  document.getElementById('libraryList').innerHTML = libGames.length ? libGames.map(g => `<div style="display:flex;align-items:center;gap:12px;padding:10px;border-radius:var(--radius);background:var(--bg-tertiary);cursor:pointer;" onclick="closeLibrary();openGameDetail(${g.id});"><img src="${g.image}" style="width:50px;height:60px;object-fit:cover;border-radius:8px;"><div style="flex:1;"><strong>${g.title}</strong><br><small>${g.genre.join(', ')}</small></div><button class="btn-sm" style="background:var(--accent2);color:#fff;" onclick="event.stopPropagation();toggleLibraryGame(${g.id});renderLibraryModal();">Remove</button></div>`).join('') : '<p style="color:var(--text-muted);">Your library is empty.</p>';
  document.getElementById('wishlistList').innerHTML = wishGames.length ? wishGames.map(g => `<div style="display:flex;align-items:center;gap:12px;padding:10px;border-radius:var(--radius);background:var(--bg-tertiary);cursor:pointer;" onclick="closeLibrary();openGameDetail(${g.id});"><img src="${g.image}" style="width:50px;height:60px;object-fit:cover;border-radius:8px;"><div style="flex:1;"><strong>${g.title}</strong><br><small>${g.rating} · ${g.releaseYear}</small></div><button class="btn-sm" style="background:var(--accent2);color:#fff;" onclick="event.stopPropagation();toggleWishlistGame(${g.id});renderLibraryModal();">Remove</button></div>`).join('') : '<p style="color:var(--text-muted);">No wishlisted games.</p>';
  updateBadges();
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
  document.getElementById('themeBtn').textContent = currentTheme === 'dark' ? '🌃' : '🏙️';
  saveState();
  showToast(currentTheme === 'dark' ? 'Dark mode' : 'Light mode');
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeBtn').textContent = currentTheme === 'dark' ? '🌃' : '🏙️';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function createParticles() {
  const container = document.getElementById('heroParticles');
  container.innerHTML = '';
  const colors = ['#7c5cfc', '#ff4d8c', '#00d4aa', '#f0b90b', '#ffffff'];
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.classList.add('hero-particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * 6 + 2) + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (Math.random() * 10 + 6) + 's';
    p.style.animationDelay = Math.random() * 8 + 's';
    container.appendChild(p);
  }
}

window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20));
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('searchOverlay').classList.contains('open')) toggleSearch();
    if (document.getElementById('gameModal').classList.contains('open')) closeGameDetail();
    if (document.getElementById('libraryModal').classList.contains('open')) closeLibrary();
    if (document.getElementById('profileModal').classList.contains('open')) closeProfile();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    toggleSearch();
  }
});
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) {
    if (e.target.id === 'gameModal') closeGameDetail();
    if (e.target.id === 'libraryModal') closeLibrary();
    if (e.target.id === 'profileModal') closeProfile();
  }
});

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  createParticles();
  renderSkeletonRows();
  updateBadges();
  setTimeout(() => {
    renderGameRows();
    updateHero(0);
  }, 600);
  setInterval(createParticles, 30000);
});
