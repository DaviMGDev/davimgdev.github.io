import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DATA_DIR = path.join(__dirname, 'data');
const PROJECTS_DIR = path.join(DATA_DIR, 'projects');
const STACK_FILE = path.join(DATA_DIR, 'stack.json');
const LANG_FILE = path.join(DATA_DIR, 'languages.json');
const TEMPLATE_FILE = path.join(__dirname, 'index.template.html');
const OUTPUT_FILE = path.join(__dirname, 'index.html');

// Helper to escape HTML where needed
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 1. Load Projects
function loadProjects() {
  const files = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith('.json'));
  const projects = files.map(file => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf8');
    return JSON.parse(raw);
  });
  projects.sort((a, b) => (a.order || 99) - (b.order || 99));
  return projects;
}

// 2. Load Stack
function loadStack() {
  const raw = fs.readFileSync(STACK_FILE, 'utf8');
  return JSON.parse(raw);
}

// 3. Load Languages
function loadLanguages() {
  const raw = fs.readFileSync(LANG_FILE, 'utf8');
  return JSON.parse(raw);
}

// Render HTML for Projects
function renderProjectsHtml(projects) {
  return projects.map(p => {
    const featuredClass = p.featured ? ' featured' : '';
    const ariaLabel = p.featured ? `${p.title.en} — Featured project` : `${p.title.en} project`;
    const screenshot = p.screenshots && p.screenshots[0] ? p.screenshots[0] : { src: '', alt: '' };
    
    // Badges HTML
    const badgesHtml = (p.badges || []).map(b => {
      const primaryClass = b.primary ? ' primary' : '';
      return `                <span class="badge${primaryClass}">${escapeHtml(b.name)}</span>`;
    }).join('\n');

    // Actions HTML
    const linkIcon = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M10 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter"/></svg>`;
    const liveIcon = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="11" height="11" stroke="currentColor" stroke-width="1.5"/><path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"/></svg>`;

    const actionLinks = [];
    if (p.links?.demo) {
      actionLinks.push(`                <a href="${p.links.demo}" target="_blank" rel="noopener noreferrer" class="link link-external">\n                  ${liveIcon} <span data-i18n="projects.${p.id}.live">Live Demo</span> ${linkIcon}\n                </a>`);
    }
    if (p.links?.github) {
      actionLinks.push(`                <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="link link-external">\n                  <span data-i18n="projects.${p.id}.link">View on GitHub</span> ${linkIcon}\n                </a>`);
    }
    const actionsHtml = actionLinks.join('\n');

    return `            <!-- ${p.id} -->
            <article class="card${featuredClass}" aria-label="${escapeHtml(ariaLabel)}">
              <img class="card-thumb" src="${screenshot.src}" alt="${escapeHtml(screenshot.alt || p.title.en)}" width="${screenshot.width || 800}" height="${screenshot.height || 500}" loading="lazy">
              <div class="card-body">
              <h3 class="headline-pixel card-title" data-i18n="projects.${p.id}.title">${p.title.en}</h3>
              <p class="card-subtitle">
                <span class="code-pixel text-secondary" data-i18n="projects.${p.id}.subtitle">
                  ${p.subtitle.en}
                </span>
              </p>
              <p class="card-text" data-i18n="projects.${p.id}.desc">
                ${p.description.en}
              </p>
              <div class="row collapse gap-sm badge-row">
${badgesHtml}
              </div>
              <div class="card-actions">
${actionsHtml}
              </div>
              </div>
            </article>`;
  }).join('\n\n');
}

// Render HTML for Tech Stack Carousel
function renderStackHtml(stack) {
  return stack.map(cat => {
    return `              <div class="carousel-item"><span class="carousel-cat" data-i18n="stack.${cat.id}">${escapeHtml(cat.category.en)}</span><span class="carousel-tech" data-i18n="stack.${cat.id}_val">${escapeHtml(cat.value.en)}</span></div>`;
  }).join('\n');
}

// Render HTML for Languages & Strengths
function renderLanguagesHtml(langData) {
  const spokenHtml = langData.spoken.map(s => {
    return `            <span class="badge" data-i18n="lang.${s.id}">${escapeHtml(s.badge.en)}</span>`;
  }).join('\n');

  const strengthsHtml = langData.strengths.map(st => {
    return `            <li data-i18n="lang.${st.id}">${st.en}</li>`;
  }).join('\n');

  return { spokenHtml, strengthsHtml };
}

// Extract translations map for projects, stack, languages
function buildTranslationsMap(projects, stack, langData) {
  const en = {};
  const pt = {};

  // Projects
  for (const p of projects) {
    en[`projects.${p.id}.title`] = p.title.en;
    pt[`projects.${p.id}.title`] = p.title.pt;

    en[`projects.${p.id}.subtitle`] = p.subtitle.en;
    pt[`projects.${p.id}.subtitle`] = p.subtitle.pt;

    en[`projects.${p.id}.desc`] = p.description.en;
    pt[`projects.${p.id}.desc`] = p.description.pt;

    en[`projects.${p.id}.link`] = 'View on GitHub';
    pt[`projects.${p.id}.link`] = 'Ver no GitHub';

    if (p.links?.demo) {
      en[`projects.${p.id}.live`] = 'Live Demo';
      pt[`projects.${p.id}.live`] = 'Demo ao Vivo';
    }
  }

  // Stack
  for (const cat of stack) {
    en[`stack.${cat.id}`] = cat.category.en;
    pt[`stack.${cat.id}`] = cat.category.pt;

    en[`stack.${cat.id}_val`] = cat.value.en;
    pt[`stack.${cat.id}_val`] = cat.value.pt;
  }

  // Languages & Strengths
  for (const s of langData.spoken) {
    en[`lang.${s.id}`] = s.badge.en;
    pt[`lang.${s.id}`] = s.badge.pt;
  }
  for (const st of langData.strengths) {
    en[`lang.${st.id}`] = st.en;
    pt[`lang.${st.id}`] = st.pt;
  }

  return { en, pt };
}

function formatTranslations(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `          ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
    .join('\n');
}

export function build() {
  console.log('Reading data files...');
  const projects = loadProjects();
  const stack = loadStack();
  const langData = loadLanguages();

  console.log(`Loaded ${projects.length} projects, ${stack.length} stack categories, ${langData.spoken.length} spoken languages, ${langData.strengths.length} strengths.`);

  const projectsHtml = renderProjectsHtml(projects);
  const stackHtml = renderStackHtml(stack);
  const { spokenHtml, strengthsHtml } = renderLanguagesHtml(langData);
  const translations = buildTranslationsMap(projects, stack, langData);

  return {
    projectsHtml,
    stackHtml,
    spokenHtml,
    strengthsHtml,
    translations,
  };
}

// When run directly as a script
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (!fs.existsSync(TEMPLATE_FILE)) {
    console.error(`Error: Template file not found at ${TEMPLATE_FILE}`);
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_FILE, 'utf8');
  const { projectsHtml, stackHtml, spokenHtml, strengthsHtml, translations } = build();

  let output = template;
  output = output.replace('<!-- SLOT:PROJECTS -->', projectsHtml);
  output = output.replace('<!-- SLOT:STACK -->', stackHtml);
  output = output.replace('<!-- SLOT:LANGUAGES_SPOKEN -->', spokenHtml);
  output = output.replace('<!-- SLOT:LANGUAGES_STRENGTHS -->', strengthsHtml);
  output = output.replace('/* SLOT:CONTENT_TRANSLATIONS_EN */', formatTranslations(translations.en));
  output = output.replace('/* SLOT:CONTENT_TRANSLATIONS_PT */', formatTranslations(translations.pt));

  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
  console.log(`Generated ${OUTPUT_FILE} successfully!`);
}
