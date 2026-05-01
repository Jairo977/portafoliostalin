/* ---- Embedded portfolio data (evita CORS en file://) ---- */
function fetchItems() {
  return Promise.resolve([
    { title:"Crédito Directo — Campaña Visual", type:"Institucional", category:"institucional", tools:["Photoshop","Illustrator"], client:"Cooperativa", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/CREDITO-DIRECTO_nc57ew.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/CREDITO-DIRECTO_nc57ew.png" },
    { title:"Gigantografía Mockup — Material Corporativo", type:"Institucional", category:"institucional", tools:["Photoshop","Illustrator"], client:"Cliente corporativo", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581879/gigantografia-en-color-Negro-Mockup002_ejshgk.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581879/gigantografia-en-color-Negro-Mockup002_ejshgk.jpg" },
    { title:"Intro Institucional — Motion Graphics", type:"Video & Motion", category:"video", tools:["After Effects","Premiere Pro"], client:"Iglesia / Institución", image:"https://res.cloudinary.com/deaaxxswq/video/upload/so_0/INTRO_IGLESIA002_AF002_r7nuac.jpg", link:"https://res.cloudinary.com/deaaxxswq/video/upload/v1777581507/INTRO_IGLESIA002_AF002_r7nuac.mp4", resourceType:"video" },
    { title:"Casa Latacunga Market — Animación GIF", type:"Video & Motion", category:"video", tools:["After Effects","Photoshop"], client:"Casa Latacunga", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579495/CASA-LATACUNGA-MARKET_aqr7r4.gif", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579495/CASA-LATACUNGA-MARKET_aqr7r4.gif" },
    { title:"Nutrifamily — Post Nutricionista", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop","Illustrator"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581953/nutricionista003_yex5j1.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581953/nutricionista003_yex5j1.jpg" },
    { title:"Nutrifamily — Diseño de Contenido 01", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop","Illustrator"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581953/img002_zsedkc.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581953/img002_zsedkc.jpg" },
    { title:"Nutrifamily — Diseño de Contenido 02", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop","Illustrator"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581953/img003_y19j7e.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581953/img003_y19j7e.jpg" },
    { title:"Nutrifamily — Frutos Secos", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581979/FRUTOS-SECOS_bag7ti.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581979/FRUTOS-SECOS_bag7ti.jpg" },
    { title:"Nutrifamily — Pieza Visual 03", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop","Illustrator"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img005_zswz1e.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img005_zswz1e.jpg" },
    { title:"Nutrifamily — Pieza Visual 04", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img004_qiskph.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img004_qiskph.jpg" },
    { title:"Nutrifamily — Pieza Visual 05", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img006_rzm37b.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img006_rzm37b.jpg" },
    { title:"Nutrifamily — Pieza Visual 06", type:"Nutrifamily", category:"nutrifamily", tools:["Photoshop"], client:"Nutrifamily", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img007_oj8ewu.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/img007_oj8ewu.jpg" },
    { title:"Inversef — Departamento Quitumbe", type:"Inversef", category:"inversef", tools:["Photoshop","Illustrator"], client:"Inversef Inmobiliaria", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777580183/DEPARTAMENTO-QUITUMBE001_fyarf0.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777580183/DEPARTAMENTO-QUITUMBE001_fyarf0.jpg" },
    { title:"Inversef — 800 Metros Proyecto", type:"Inversef", category:"inversef", tools:["Photoshop","Illustrator"], client:"Inversef Inmobiliaria", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579919/800-metros-marzo-2025_kmj8ln.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579919/800-metros-marzo-2025_kmj8ln.png" },
    { title:"Inversef — Señalado los Terrenos", type:"Inversef", category:"inversef", tools:["Photoshop","Illustrator"], client:"Inversef Inmobiliaria", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/SE%C3%91ALADO-LOS-TERRENOS002_xcax9i.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/SE%C3%91ALADO-LOS-TERRENOS002_xcax9i.png" },
    { title:"Inversef — Calles Mejoradas", type:"Inversef", category:"inversef", tools:["Illustrator","Photoshop"], client:"Inversef Inmobiliaria", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/CALLES-MEJORADAS003_fcyhs3.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/CALLES-MEJORADAS003_fcyhs3.png" },
    { title:"Inversef — Áreas Recreativas", type:"Inversef", category:"inversef", tools:["Illustrator","Photoshop"], client:"Inversef Inmobiliaria", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581277/AREAS-RECREATIVAS_lg7wd7.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581277/AREAS-RECREATIVAS_lg7wd7.png" },
    { title:"Inversef — Pin de Ubicación", type:"Inversef", category:"inversef", tools:["Illustrator"], client:"Inversef Inmobiliaria", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/pin-de-ubicacion002_xixmrd.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581278/pin-de-ubicacion002_xixmrd.png" },
    { title:"Inversef — Marcar el Terreno", type:"Inversef", category:"inversef", tools:["Illustrator","Photoshop"], client:"Inversef Inmobiliaria", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579919/marcar-el-terreno_guirgt.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579919/marcar-el-terreno_guirgt.png" },
    { title:"Tarjeta de Presentación — Branding Corporativo", type:"Branding", category:"branding", tools:["Illustrator","InDesign"], client:"Cliente corporativo", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581305/tarjeta-de-presentacion-contornos_nj0hto.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581305/tarjeta-de-presentacion-contornos_nj0hto.jpg" },
    { title:"José Ruiz — Identidad Visual 01", type:"Branding", category:"branding", tools:["Illustrator","Photoshop"], client:"José Ruiz", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578139/jose-ruiz004_wglgqk.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578139/jose-ruiz004_wglgqk.png" },
    { title:"José Ruiz — Identidad Visual 02", type:"Branding", category:"branding", tools:["Illustrator","Photoshop"], client:"José Ruiz", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578139/jose-ruiz005_ov0ikh.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578139/jose-ruiz005_ov0ikh.png" },
    { title:"José Ruiz — Material de Marca", type:"Branding", category:"branding", tools:["Illustrator"], client:"José Ruiz", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578138/jose_ruiz001_h9futx.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578138/jose_ruiz001_h9futx.png" },
    { title:"Foto Perfil — Retoque Profesional", type:"Branding", category:"branding", tools:["Photoshop"], client:"Perfil profesional", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581979/FOTO-PERFIL-FACEBOOK_s4cflg.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581979/FOTO-PERFIL-FACEBOOK_s4cflg.jpg" },
    { title:"Evento Alex Dey — Diseño Promocional", type:"Social Media", category:"social", tools:["Photoshop","Illustrator"], client:"Evento", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777576385/EVENTO-ALEX-DEY_myy93r.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777576385/EVENTO-ALEX-DEY_myy93r.jpg" },
    { title:"José Ventas — Post Motivacional", type:"Social Media", category:"social", tools:["Photoshop"], client:"José Ruiz Ventas", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578181/JOSE-VENTAS_k8v3ks.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578181/JOSE-VENTAS_k8v3ks.jpg" },
    { title:"Live — Consejos y Estrategias", type:"Social Media", category:"social", tools:["Photoshop"], client:"José Ruiz", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579303/live_jose_consejos_y_estrategias_kks2jc.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579303/live_jose_consejos_y_estrategias_kks2jc.png" },
    { title:"Live 18 — Post Viernes", type:"Social Media", category:"social", tools:["Photoshop"], client:"José Ruiz", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578314/live18viernes_gfoeel.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578314/live18viernes_gfoeel.jpg" },
    { title:"Derechos y Acciones — Contenido Educativo", type:"Social Media", category:"social", tools:["Photoshop","Illustrator"], client:"Cliente", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578162/DERECHOS-Y-ACCIONES003_cvcrzi.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777578162/DERECHOS-Y-ACCIONES003_cvcrzi.jpg" },
    { title:"Feliz Día del Padre — Post Especial", type:"Social Media", category:"social", tools:["Photoshop"], client:"Social Media", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/FELIZ-DIA-PAPA-EDIT-cuadrado_r50udj.jpg", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777581952/FELIZ-DIA-PAPA-EDIT-cuadrado_r50udj.jpg" },
    { title:"Se Constante — Contenido Motivacional", type:"Social Media", category:"social", tools:["Photoshop"], client:"Social Media", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777577932/SE-CONSTANTE002_alwjoq.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777577932/SE-CONSTANTE002_alwjoq.png" },
    { title:"El Fracaso Impulsa al Éxito — Quote", type:"Social Media", category:"social", tools:["Photoshop"], client:"Social Media", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777576334/el_fracaso_impulsa_al_exito_vicgpk.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777576334/el_fracaso_impulsa_al_exito_vicgpk.png" },
    { title:"Imagen para Estados — Historia Digital", type:"Social Media", category:"social", tools:["Photoshop"], client:"Social Media", image:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579865/imagen-para-estados002_r0s9sh.png", link:"https://res.cloudinary.com/deaaxxswq/image/upload/v1777579865/imagen-para-estados002_r0s9sh.png" }
  ]);
}

/* ---- Category labels ---- */
const CAT_LABEL = {
  institucional: 'Institucional',
  nutrifamily:   'Nutrifamily',
  inversef:      'Inversef',
  branding:      'Branding',
  social:        'Social Media',
  video:         'Video & Motion',
};

const TOOL_META = {
  'Photoshop': { kind: 'mono', label: 'Ps', start: '#001e36', end: '#31a8ff' },
  'Illustrator': { kind: 'mono', label: 'Ai', start: '#2c1400', end: '#ff9a00' },
  'Premiere Pro': { kind: 'mono', label: 'Pr', start: '#1e0936', end: '#d86dff' },
  'After Effects': { kind: 'mono', label: 'Ae', start: '#140f2e', end: '#9f7bff' },
  'InDesign': { kind: 'mono', label: 'Id', start: '#3d0625', end: '#ff5fa2' },
  'Blender': { kind: 'mono', label: 'Bl', start: '#1a2740', end: '#ff8a00' },
  'Fotografía': { kind: 'glyph', icon: 'bi-camera-fill', start: '#123f73', end: '#2aa7ff' },
  'Iluminación': { kind: 'glyph', icon: 'bi-lightbulb-fill', start: '#5a3d04', end: '#ffc447' },
  'Fotografía / Iluminación': { kind: 'glyph', icon: 'bi-camera-reels-fill', start: '#25426f', end: '#70c4ff' },
  'IA Generativa': { kind: 'glyph', icon: 'bi-stars', start: '#17334f', end: '#6dd3ff' },
  'Branding': { kind: 'glyph', icon: 'bi-award-fill', start: '#4f2604', end: '#ff9f45' },
  'Branding & Manuales': { kind: 'glyph', icon: 'bi-journal-richtext', start: '#0f365d', end: '#58b0ff' },
  'Social Media & Campañas': { kind: 'glyph', icon: 'bi-megaphone-fill', start: '#3c1d5e', end: '#bc7dff' },
  'Campañas 360°': { kind: 'glyph', icon: 'bi-bullseye', start: '#0b3d3d', end: '#49d6c8' },
  'Adobe Firefly': { kind: 'mono', label: 'Ff', start: '#5a1a0a', end: '#ff7e47' },
  'Midjourney': { kind: 'mono', label: 'Mj', start: '#1d2436', end: '#6a7cff' },
  'ChatGPT': { kind: 'glyph', icon: 'bi-cpu-fill', start: '#0d3a32', end: '#41d39f' },
};

const CATEGORY_ORDER = ['institucional', 'nutrifamily', 'inversef', 'branding', 'social', 'video'];

const CATEGORY_INTROS = {
  institucional: 'Aquí reúno piezas institucionales y corporativas donde priorizo claridad, confianza visual y presencia profesional.',
  nutrifamily: 'En esta colección muestro el trabajo que desarrollé para Nutrifamily, cuidando cercanía, frescura y coherencia de marca.',
  inversef: 'Aquí presento mi línea visual para Inversef, enfocada en captar atención rápida y comunicar atributos comerciales con fuerza.',
  branding: 'En esta parte comparto proyectos donde construyo identidad, aplicaciones de marca y sistemas visuales consistentes.',
  social: 'Aquí agrupo piezas pensadas para redes sociales, con impacto visual inmediato y mensajes diseñados para detener el scroll.',
  video: 'En esta sección muestro trabajos audiovisuales y motion graphics donde combino ritmo, narrativa y presencia de marca.',
};

const FEATURED_CASES = [
  {
    title: 'Crédito Directo — Campaña Visual',
    eyebrow: 'Selección destacada',
    headline: 'Diseño financiero con presencia institucional',
    summary: 'En esta campaña combiné claridad comercial y confianza visual para comunicar una oferta de forma directa, sólida y profesional.',
    points: ['Jerarquía clara', 'Tono corporativo', 'Enfoque comercial'],
  },
  {
    title: 'Intro Institucional — Motion Graphics',
    eyebrow: 'Motion & video',
    headline: 'Movimiento con peso de marca',
    summary: 'En esta pieza audiovisual trabajé una entrada con fuerza para ordenar la atención y proyectar seriedad desde los primeros segundos.',
    points: ['Narrativa breve', 'Impacto audiovisual', 'Ritmo institucional'],
  },
  {
    title: 'Tarjeta de Presentación — Branding Corporativo',
    eyebrow: 'Branding aplicado',
    headline: 'Identidad que se sostiene en lo tangible',
    summary: 'Aquí llevé el branding a una pieza física con criterio editorial, buena legibilidad y una ejecución que transmite orden y profesionalismo.',
    points: ['Aplicación real', 'Criterio tipográfico', 'Detalle material'],
  },
];

function getToolMeta(name) {
  if (TOOL_META[name]) return TOOL_META[name];

  const compact = name
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('') || name.slice(0, 2).toUpperCase();

  return {
    kind: 'mono',
    label: compact,
    start: '#163b69',
    end: '#4cb6ff',
  };
}

function renderToolBadge(name) {
  const meta = getToolMeta(name);
  const iconContent = meta.kind === 'glyph'
    ? `<i class="bi ${meta.icon}" aria-hidden="true"></i>`
    : `<span class="tool-badge__mono" aria-hidden="true">${meta.label}</span>`;

  return `
    <span class="tool-badge">
      <span class="tool-badge__icon ${meta.kind === 'glyph' ? 'is-glyph' : 'is-mono'}" style="--icon-start:${meta.start}; --icon-end:${meta.end};">
        ${iconContent}
      </span>
      <span class="tool-badge__label">${name}</span>
    </span>
  `;
}

function decorateStaticTools() {
  document.querySelectorAll('[data-tool]').forEach((node) => {
    const name = node.dataset.tool?.trim() || node.textContent.trim();
    if (!name) return;
    node.innerHTML = renderToolBadge(name);
  });
}

/* ---- Build portfolio card ---- */
function buildCard(item) {
  const cat   = item.category || 'general';
  const label = CAT_LABEL[cat] || cat;
  const tools = (item.tools || []).map((tool) => `<span class="tool-tag">${renderToolBadge(tool)}</span>`).join('');
  const isVideo = item.resourceType === 'video';

  const thumb = item.image
    ? `<img class="portfolio-thumb" src="${item.image}" alt="${item.title}" loading="lazy">`
    : `<div class="portfolio-thumb-placeholder"><span>Sin imagen</span></div>`;

  const article = document.createElement('article');
  article.className = 'portfolio-item reveal';
  article.dataset.category = cat;
  article.innerHTML = `
    <div class="portfolio-thumb-wrap">
      ${thumb}
      <div class="thumb-overlay"><i class="bi bi-${isVideo ? 'play-circle-fill' : 'zoom-in'}"></i></div>
      <span class="portfolio-category-badge">${label}</span>
    </div>
    <div class="portfolio-body">
      <h3>${item.title}</h3>
      ${item.client ? `<p class="portfolio-client"><i class="bi bi-person-fill"></i> ${item.client}</p>` : ''}
      <div class="portfolio-tools">${tools}</div>
    </div>`;

  article.addEventListener('click', () => openLightbox(item, label));
  return article;
}

function buildFeaturedCase(feature, item, isHero = false) {
  const cat = item.category || 'general';
  const label = CAT_LABEL[cat] || cat;
  const article = document.createElement('article');
  article.className = `featured-case ${isHero ? 'featured-case--hero' : ''} reveal`;
  article.tabIndex = 0;
  article.setAttribute('role', 'button');
  article.setAttribute('aria-label', `Abrir proyecto destacado: ${item.title}`);
  article.innerHTML = `
    <div class="featured-case__media">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
    </div>
    <div class="featured-case__content">
      <span class="featured-case__eyebrow">${feature.eyebrow}</span>
      <div class="featured-case__meta">
        <span><i class="bi bi-grid-1x2-fill"></i> ${label}</span>
        ${item.client ? `<span><i class="bi bi-briefcase-fill"></i> ${item.client}</span>` : ''}
      </div>
      <h3>${feature.headline}</h3>
      <p>${feature.summary}</p>
      <ul class="featured-case__points">
        ${feature.points.map((point) => `<li>${point}</li>`).join('')}
      </ul>
      <button class="featured-case__cta" type="button">
        Ver proyecto <i class="bi bi-arrow-up-right"></i>
      </button>
    </div>
  `;

  const open = () => openLightbox(item, label);
  article.addEventListener('click', open);
  article.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
  article.querySelector('.featured-case__cta')?.addEventListener('click', (event) => {
    event.stopPropagation();
    open();
  });
  return article;
}

function renderFeaturedShowcase(items) {
  const showcase = document.getElementById('featuredShowcase');
  if (!showcase) return;

  const featuredItems = FEATURED_CASES
    .map((feature) => {
      const item = items.find((entry) => entry.title === feature.title);
      return item ? { feature, item } : null;
    })
    .filter(Boolean);

  showcase.innerHTML = '';
  if (!featuredItems.length) return;

  const [heroCase, ...stackCases] = featuredItems;
  showcase.appendChild(buildFeaturedCase(heroCase.feature, heroCase.item, true));

  if (stackCases.length) {
    const stack = document.createElement('div');
    stack.className = 'featured-stack';
    stackCases.forEach(({ feature, item }) => {
      stack.appendChild(buildFeaturedCase(feature, item));
    });
    showcase.appendChild(stack);
  }
}

function renderPortfolioGroups(items) {
  const container = document.getElementById('portfolioGroups');
  if (!container) return;

  container.innerHTML = '';

  CATEGORY_ORDER.forEach((category) => {
    const groupItems = items.filter((item) => item.category === category);
    if (!groupItems.length) return;

    const section = document.createElement('section');
    section.className = 'portfolio-group reveal';
    section.id = `group-${category}`;
    section.innerHTML = `
      <div class="portfolio-group__head">
        <div>
          <span class="portfolio-group__eyebrow">${CAT_LABEL[category]}</span>
          <h3>${CAT_LABEL[category]}</h3>
          <p>${CATEGORY_INTROS[category] || ''}</p>
        </div>
        <div class="portfolio-group__count">
          <strong>${groupItems.length}</strong>
          <span>${groupItems.length === 1 ? 'proyecto' : 'proyectos'}</span>
        </div>
      </div>
      <div class="portfolio-group__grid"></div>
    `;

    const grid = section.querySelector('.portfolio-group__grid');
    groupItems.forEach((item) => grid?.appendChild(buildCard(item)));
    container.appendChild(section);
  });
}

function updatePortfolioMetrics(items) {
  const projects = items.length;
  const categories = new Set(items.map((item) => item.category).filter(Boolean)).size;
  const tools = new Set(items.flatMap((item) => item.tools || [])).size;

  const metricProjects = document.getElementById('metricProjects');
  const metricCategories = document.getElementById('metricCategories');
  const metricTools = document.getElementById('metricTools');

  if (metricProjects) metricProjects.textContent = String(projects);
  if (metricCategories) metricCategories.textContent = String(categories);
  if (metricTools) metricTools.textContent = String(tools);
}

function hydrateFilterCounts(items) {
  const counts = items.reduce((acc, item) => {
    const cat = item.category || 'general';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  document.querySelectorAll('.filter-btn[data-category]').forEach((button) => {
    const category = button.dataset.category || '';
    const count = counts[category] || 0;
    button.querySelector('.filter-count')?.remove();
    const badge = document.createElement('span');
    badge.className = 'filter-count';
    badge.textContent = String(count);
    button.appendChild(badge);
  });
}

/* ---- Render grid ---- */
let allItems = [];
async function renderPortfolio() {
  allItems = await fetchItems();
  updatePortfolioMetrics(allItems);
  renderFeaturedShowcase(allItems);
  renderPortfolioGroups(allItems);
  hydrateFilterCounts(allItems);
  observeCards();
}

/* ---- Portfolio nav ---- */
function initFilters() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;
  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const targetId = btn.dataset.target;
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ---- Scroll reveal + skill bars ---- */
function observeCards() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible', 'in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.portfolio-item.reveal, .reveal').forEach(el => io.observe(el));
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.portfolio-item)').forEach(el => io.observe(el));
}

function initSkillBars() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('animated'));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skills-grid').forEach(el => io.observe(el));
}

/* ---- Lightbox ---- */
function openLightbox(item, label) {
  const body    = document.getElementById('lightboxBody');
  const info    = document.getElementById('lightboxInfo');
  const box     = document.getElementById('lightbox');
  const overlay = document.getElementById('lightboxOverlay');
  if (!body || !box || !overlay) return;

  const isVideo = item.resourceType === 'video';
  const tools   = (item.tools || []).join(', ');

  if (isVideo) {
    body.innerHTML = `<video src="${item.link}" controls autoplay muted style="width:100%;max-height:70vh;background:#000"></video>`;
  } else {
    body.innerHTML = `<img src="${item.link || item.image}" alt="${item.title}" style="width:100%;max-height:70vh;object-fit:contain;background:#000">`;
  }

  info.innerHTML = `
    <h3>${item.title}</h3>
    <p>${label}${item.client ? ' · ' + item.client : ''}${tools ? ' · ' + tools : ''}</p>`;

  box.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const box     = document.getElementById('lightbox');
  const overlay = document.getElementById('lightboxOverlay');
  const body    = document.getElementById('lightboxBody');
  if (!box) return;
  box.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if (body) body.innerHTML = '';
}

/* ---- Nav scroll + active ---- */
function initNav() {
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  toggle && toggle.addEventListener('click', () => {
    links && links.classList.toggle('open');
  });

  // close on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => links && links.classList.remove('open'));
  });

  // active on scroll
  const sections = Array.from(document.querySelectorAll('section[id], header[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const io = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;
    const id = visible[0].target.id;
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
  }, { rootMargin: '-40% 0px -40% 0px', threshold: [0.1, 0.4] });
  sections.forEach(s => io.observe(s));
}

/* ---- Footer year ---- */
function setYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---- Mobile dock active state ---- */
function initMobileDock() {
  const dockLinks = Array.from(document.querySelectorAll('.mobile-dock__link[data-section]'));
  if (!dockLinks.length) return;

  const sections = dockLinks
    .map((link) => {
      const id = link.dataset.section;
      const section = document.getElementById(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    dockLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visible.length) return;
    setActive(visible[0].target.id);
  }, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: [0.2, 0.45, 0.7],
  });

  sections.forEach(({ section }) => observer.observe(section));
}

/* ---- Add reveal class to static sections ---- */
function markReveals() {
  document.querySelectorAll('.info-card, .skill-block, .soft-item, .stat-card').forEach(el => {
    el.classList.add('reveal');
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  decorateStaticTools();
  markReveals();
  initNav();
  initMobileDock();
  initFilters();
  setYear();
  renderPortfolio().then(() => {
    initReveal();
    initSkillBars();
  });

  // Lightbox close
  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxOverlay')?.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
});
