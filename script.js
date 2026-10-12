// Obsah webu se bere ze souboru data.js — tady už většinou nic měnit nemusíš.

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const projectsEl = document.getElementById("projects");

const nazevKategorie = id => (KATEGORIE.find(k => k.id === id) || {}).nazev || "";

/* ---------- Úvodní fotka ---------- */
const heroImg = document.getElementById("hero-img");
heroImg.src = UVODNI_FOTKA.soubor;
heroImg.alt = UVODNI_FOTKA.nazev;

/* ---------- Galerie ---------- */
function vykresliGalerii(kategorie) {
  const fotky = kategorie === "vse" ? GALERIE : GALERIE.filter(f => f.kategorie === kategorie);
  grid.innerHTML = "";
  fotky.forEach((foto, i) => {
    const btn = document.createElement("button");
    btn.className = "tile";
    btn.style.animationDelay = `${i * 40}ms`;
    btn.innerHTML = `
      <img src="${foto.soubor}" alt="${foto.nazev}" loading="lazy">
      <span class="tile-info">
        <span class="tile-title">${foto.nazev}</span>
        <span class="tile-cat">${nazevKategorie(foto.kategorie)}</span>
      </span>`;
    btn.addEventListener("click", () =>
      otevritLightbox(fotky.map(f => ({ src: f.soubor, popis: f.nazev })), i));
    grid.appendChild(btn);
  });
}

function vytvorFiltry() {
  const vse = [{ id: "vse", nazev: "Vše" }, ...KATEGORIE];
  vse.forEach(k => {
    const b = document.createElement("button");
    b.className = "filter";
    b.textContent = k.nazev;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", k.id === "vse");
    b.addEventListener("click", () => {
      filters.querySelectorAll(".filter").forEach(f => f.setAttribute("aria-selected", "false"));
      b.setAttribute("aria-selected", "true");
      vykresliGalerii(k.id);
    });
    filters.appendChild(b);
  });
}

/* ---------- Projekty ---------- */
function vykresliProjekty() {
  PROJEKTY.forEach((p, idx) => {
    const el = document.createElement("article");
    el.className = "project";
    const cislo = String(idx + 1).padStart(2, "0");
    el.innerHTML = `
      <div class="project-meta">
        <span class="project-num">${cislo}</span>
        <h3>${p.nazev}</h3>
        <p class="project-date">${p.datum}</p>
        <p class="project-desc">${p.popis}</p>
        <ul class="project-tags">${p.technika.map(t => `<li>${t}</li>`).join("")}</ul>
      </div>
      <div class="project-photos">
        ${p.fotky.map((src, i) => `
          <button class="project-photo" data-i="${i}">
            <img src="${src}" alt="${p.nazev} — fotka ${i + 1}" loading="lazy">
          </button>`).join("")}
      </div>`;
    const sada = p.fotky.map((src, i) => ({ src, popis: `${p.nazev} · ${i + 1}/${p.fotky.length}` }));
    el.querySelectorAll(".project-photo").forEach(b =>
      b.addEventListener("click", () => otevritLightbox(sada, Number(b.dataset.i))));
    projectsEl.appendChild(el);
  });
}

/* ---------- Lightbox (zvětšení fotky) ---------- */
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCaption = document.getElementById("lb-caption");
let sadaFotek = [];
let aktualni = 0;

function ukazFotku() {
  const f = sadaFotek[aktualni];
  lbImg.src = f.src;
  lbImg.alt = f.popis;
  lbCaption.textContent = f.popis;
}

function otevritLightbox(sada, index) {
  sadaFotek = sada;
  aktualni = index;
  ukazFotku();
  lb.showModal();
  document.body.style.overflow = "hidden";
}

function posun(smer) {
  aktualni = (aktualni + smer + sadaFotek.length) % sadaFotek.length;
  ukazFotku();
}

document.getElementById("lb-close").addEventListener("click", () => lb.close());
document.getElementById("lb-prev").addEventListener("click", () => posun(-1));
document.getElementById("lb-next").addEventListener("click", () => posun(1));
lb.addEventListener("close", () => (document.body.style.overflow = ""));
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
document.addEventListener("keydown", e => {
  if (!lb.open) return;
  if (e.key === "ArrowLeft") posun(-1);
  if (e.key === "ArrowRight") posun(1);
});

// Swipe na mobilu
let startX = null;
lb.addEventListener("touchstart", e => (startX = e.touches[0].clientX), { passive: true });
lb.addEventListener("touchend", e => {
  if (startX === null) return;
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 50) posun(dx < 0 ? 1 : -1);
  startX = null;
});

/* ---------- Start ---------- */
vytvorFiltry();
vykresliGalerii("vse");
vykresliProjekty();
document.getElementById("year").textContent = new Date().getFullYear();
