const fallbackPortfolioItems = [
  {
    title: "Campana institucional",
    type: "Diseno de post",
    image: "",
    link: ""
  },
  {
    title: "Cobertura audiovisual",
    type: "Edicion de video",
    image: "",
    link: ""
  },
  {
    title: "Identidad de marca",
    type: "Branding",
    image: "",
    link: ""
  },
  {
    title: "Contenido para redes",
    type: "Social media",
    image: "",
    link: ""
  },
  {
    title: "Pieza publicitaria",
    type: "Diseno grafico",
    image: "",
    link: ""
  },
  {
    title: "Motion graphics",
    type: "After Effects",
    image: "",
    link: ""
  }
];

function createPortfolioItem(item) {
  const hasImage = Boolean(item.image);
  const hasLink = Boolean(item.link);

  return `
    <article class="portfolio-item">
      ${hasImage
        ? `<img class="portfolio-thumb" src="${item.image}" alt="${item.title}" loading="lazy">`
        : `<div class="portfolio-thumb thumb-placeholder">Imagen de Cloudinary pendiente</div>`}
      <div class="portfolio-body">
        <h3>${item.title}</h3>
        <p class="portfolio-meta">${item.type}</p>
        <div class="portfolio-actions">
          ${hasLink
            ? `<a class="btn btn-outline-primary" href="${item.link}" target="_blank" rel="noopener noreferrer">Ver pieza</a>`
            : `<button class="btn btn-outline-secondary" disabled>Link pendiente</button>`}
        </div>
      </div>
    </article>
  `;
}

async function loadPortfolioItems() {
  try {
    const response = await fetch("js/portfolio-items.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (!Array.isArray(data) || !data.length) return fallbackPortfolioItems;

    return data.map((item) => ({
      title: item.title || "Pieza multimedia",
      type: item.type || "Diseno multimedia",
      image: item.image || "",
      link: item.link || ""
    }));
  } catch (_error) {
    return fallbackPortfolioItems;
  }
}

async function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  const items = await loadPortfolioItems();
  grid.innerHTML = items.map(createPortfolioItem).join("");
}

function setCurrentYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function enableActiveNavOnScroll() {
  const links = Array.from(document.querySelectorAll("#navMenu .nav-link"));
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href");
      if (!id || !id.startsWith("#")) return null;
      const section = document.querySelector(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) return;

      const activeId = `#${visible[0].target.id}`;
      links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === activeId));
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: [0.15, 0.35, 0.6]
    }
  );

  sections.forEach(({ section }) => observer.observe(section));
}

renderPortfolio();
setCurrentYear();
enableActiveNavOnScroll();
