// ============ HRC Studio — Página Projetos ============

const projects = [
  { slug: '5stars',   title: 'Five Stars Barbearia',     category: 'Identidade visual',          count: 16 },
  { slug: 'tarquini', title: 'Dre Tarquini Fotografia',  category: 'Branding & apresentação',    count: 9  },
  { slug: 'hrc',      title: 'HRC Studio',               category: 'Branding interno',           count: 9  },
  { slug: 'ntc',      title: 'New Trade Concept',        category: 'Apresentação corporativa',   count: 13 },
  { slug: 'malaga',   title: 'Málaga',                   category: 'Identidade visual',          count: 7  },
];

function imagesFor(p) {
  const arr = [];
  for (let i = 0; i < p.count; i++) {
    arr.push(`assets/projects/${p.slug}/${String(i).padStart(2, '0')}.jpg`);
  }
  return arr;
}

// ---- Render grid de capas ----
const grid = document.getElementById('projectsGrid');
grid.innerHTML = projects.map((p) => `
  <button class="project-card" data-slug="${p.slug}">
    <div class="project-cover">
      <img src="${imagesFor(p)[0]}" alt="${p.title}" loading="lazy" />
    </div>
    <div class="project-meta">
      <span class="eyebrow">${p.category}</span>
      <h3>${p.title}</h3>
      <span class="project-count">${p.count} imagens →</span>
    </div>
  </button>
`).join('');

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.project-card');
  if (!card) return;
  openAlbum(card.dataset.slug);
});

// ---- Album modal ----
const album = document.getElementById('album');
const albumGrid = document.getElementById('albumGrid');
const albumTitle = document.getElementById('albumTitle');
const albumCat = document.getElementById('albumCat');
let currentImages = [];

function openAlbum(slug) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return;
  currentImages = imagesFor(p);
  albumTitle.textContent = p.title;
  albumCat.textContent = p.category;
  albumGrid.innerHTML = currentImages.map((src, i) => `
    <button class="album-item" data-i="${i}">
      <img src="${src}" alt="${p.title} — imagem ${i + 1}" loading="lazy" />
    </button>
  `).join('');
  album.hidden = false;
  document.body.style.overflow = 'hidden';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

document.getElementById('albumClose').addEventListener('click', () => {
  album.hidden = true;
  document.body.style.overflow = '';
});

albumGrid.addEventListener('click', (e) => {
  const it = e.target.closest('.album-item');
  if (!it) return;
  openLightbox(parseInt(it.dataset.i, 10));
});

// ---- Lightbox ----
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  updateLightbox();
  lb.hidden = false;
}
function updateLightbox() {
  lbImg.src = currentImages[lbIndex];
  lbCounter.textContent = `${lbIndex + 1} / ${currentImages.length}`;
}
function nextImg() { lbIndex = (lbIndex + 1) % currentImages.length; updateLightbox(); }
function prevImg() { lbIndex = (lbIndex - 1 + currentImages.length) % currentImages.length; updateLightbox(); }

document.getElementById('lbClose').addEventListener('click', () => { lb.hidden = true; });
document.getElementById('lbNext').addEventListener('click', nextImg);
document.getElementById('lbPrev').addEventListener('click', prevImg);
lb.addEventListener('click', (e) => { if (e.target === lb) lb.hidden = true; });
document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') lb.hidden = true;
  if (e.key === 'ArrowRight') nextImg();
  if (e.key === 'ArrowLeft') prevImg();
});

// ---- Header scroll ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

document.getElementById('year').textContent = new Date().getFullYear();
