// ============================================================
// i18n (PT/EN) – idioma baseado no navegador
// ============================================================

function detectLocale() {
  const langs = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || "en"];

  return langs.some((l) => (l || "").toLowerCase().startsWith("pt")) ? "pt" : "en";
}

const LOCALE = detectLocale();

const I18N = {
  pt: {
    menu: {
      sobre: "SOBRE MIM",
      trajetoria: "TRAJETÓRIA",
      case: "CASE DE SUCESSO",
      publicacoes: "PUBLICAÇÕES",
    },
    aboutLabel: "UM NACO SOBRE MIM",
    timelineTitle: "Minha trajetória conecta criatividade, craft, operações e\nestratégia.",
    caseDescription:
      "Conheça a linguagem de design que criou consistência, velocidade\ne eficiência...",
    caseCta: "VEJA O CASE",
    articlesTitle: "Um pouco sobre o \nque tenho a dizer",
    carouselPrevAria: "Anterior",
    carouselNextAria: "Próxima",
    timelineToggleAriaPrefix: "Alternar detalhes da experiência",
    about: {
      defaultHtml: `
        <span class="about-curiosity-title">Mixologista amador /</span><br>
        <span class="about-curiosity-title">Crossfiteiro /</span><br>
        <span class="about-curiosity-title">Pai e marido /</span>
      `,
      curiosity: {
        family: {
          title: "Pai e marido/",
          body:
            "Curitibano, construí minha vida ao lado da Angélica e agora vivemos a alegria de criar a Aurora. Nossa casa também é da Tokyo, uma labra-lata gigante e carinhosa. Gostamos das pequenas rotinas: almoçar sempre nos mesmos lugares, ser reconhecidos na porta dos restaurantes, viver a cidade com calma.",
        },
        drink: {
          title: "Mixologista amador/",
          body:
            "Minha recomendação é o Macunaíma, um clássico brasileiro.<br>45 ml de cachaça branca, 10 ml de xarope de açúcar, 20 ml de suco de limão e 7 ml de Fernet Branca.<br>O ajuste que faz toda a diferença é reduzir o açúcar em relação à receita tradicional.",
        },
        crossfit: {
          title: "Crossfiteiro/",
          body:
            "PRs de quem tenta ser forte, mas nem sempre consegue:<br>Deadlift — 415 lbs<br>Clean &amp; Jerk — 255 lbs<br>Snatch — 175 lbs<br>Back Squat — 345 lbs.",
        },
      },
    },
  },

  en: {
    menu: {
      sobre: "ABOUT",
      trajetoria: "JOURNEY",
      case: "CASE STUDY",
      publicacoes: "WRITING",
    },
    aboutLabel: "A BIT ABOUT ME",
    timelineTitle: "My journey connects creativity, craft, operations, and\nstrategy.",
    caseDescription:
      "Explore the design language that enabled consistency, speed,\nand efficiency...",
    caseCta: "VIEW CASE",
    articlesTitle: "A few things I'd \nlike to share",
    carouselPrevAria: "Previous",
    carouselNextAria: "Next",
    timelineToggleAriaPrefix: "Toggle experience details",
    about: {
      defaultHtml: `
        <span class="about-curiosity-title">Amateur mixologist /</span><br>
        <span class="about-curiosity-title">CrossFitter /</span><br>
        <span class="about-curiosity-title">Husband and dad /</span>
      `,
      curiosity: {
        family: {
          title: "Husband and dad/",
          body:
            "Born and raised in Curitiba, I built my life alongside Angélica and now we get to raise Aurora together. Our home also belongs to Tokyo, a big and affectionate rescue dog. We love simple routines: revisiting the same restaurants, being recognized at the door, and enjoying the city at a slower pace.",
        },
        drink: {
          title: "Amateur mixologist/",
          body:
            "My recommendation is the Macunaíma, a Brazilian classic.<br>45 ml cachaça, 10 ml simple syrup, 20 ml lime juice, and 7 ml Fernet Branca.<br>The tweak that makes it more balanced is using less sugar than the traditional recipe.",
        },
        crossfit: {
          title: "CrossFitter/",
          body:
            "A few PRs from someone who tries to be strong (and sometimes succeeds):<br>Deadlift — 415 lbs<br>Clean &amp; Jerk — 255 lbs<br>Snatch — 175 lbs<br>Back Squat — 345 lbs.",
        },
      },
    },
  },
};

function t() {
  return I18N[LOCALE] || I18N.en;
}

// ============================================================
// IMAGENS DO HERO
// ============================================================

const HERO_IMAGES = {
  portrait: "assets/portrait.png",
  sobre: "assets/destaque-sobre.png",
  trajetoria: "assets/destaque-trajetoria.png",
  publicacoes: "assets/destaque-publicacoes.png",
  case: "assets/destaque-case.png",
};

// ------------------------------------------------------------
// Preload (evita wipe "invisível" quando a imagem ainda não carregou)
// ------------------------------------------------------------

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ src, ok: true });
    img.onerror = () => resolve({ src, ok: false });
    img.src = src;
  });
}

async function preloadHeroImages() {
  const sources = Object.values(HERO_IMAGES);
  const results = await Promise.all(sources.map(preloadImage));

  const failed = results.filter((r) => !r.ok).map((r) => r.src);
  if (failed.length) {
    console.warn("[HERO] Falha ao carregar imagens:", failed);
  }
}

// ============================================================
// APLICA TRADUÇÕES ESTÁTICAS (HTML) – PT/EN
// ============================================================

function applyStaticTranslations() {
  const dict = t();

  // lang do documento
  document.documentElement.lang = LOCALE === "pt" ? "pt-BR" : "en";

  // menu
  const menuLinks = document.getElementById("menu-links");
  if (menuLinks) {
    const map = dict.menu;
    const setMenu = (key, label) => {
      const a = menuLinks.querySelector(`.menu-item[data-image="${key}"] a`);
      if (a) a.textContent = label;
    };
    setMenu("sobre", map.sobre);
    setMenu("trajetoria", map.trajetoria);
    setMenu("case", map.case);
    setMenu("publicacoes", map.publicacoes);
  }

  // rótulo vertical "Um naco sobre mim"
  const aboutLabel = document.querySelector(".about-label-vertical span");
  if (aboutLabel) aboutLabel.textContent = dict.aboutLabel;

  // título trajetória
  const timelineTitle = document.getElementById("timeline-title");
  if (timelineTitle) timelineTitle.textContent = dict.timelineTitle;

  // case description + CTA
  const caseDesc = document.querySelector(".case-description");
  if (caseDesc) caseDesc.textContent = dict.caseDescription;

  const caseBtn = document.querySelector(".case-button");
  if (caseBtn) caseBtn.textContent = dict.caseCta;

  // publicações title
  const articlesTitle = document.getElementById("articles-title");
  if (articlesTitle) articlesTitle.textContent = dict.articlesTitle;

  // aria carousel
  const prev = document.getElementById("carousel-prev");
  const next = document.getElementById("carousel-next");
  if (prev) prev.setAttribute("aria-label", dict.carouselPrevAria);
  if (next) next.setAttribute("aria-label", dict.carouselNextAria);
}

// ============================================================
// FUNDO – glow flutuante sutil
// ============================================================

function initFloatingGlow() {
  const glow = document.querySelector(".bg-glow");
  if (!glow) return;

  glow.style.transform =
    "translate(-50%, -50%) translate(40vw, 20vh) scale(1)";

  function moveGlow() {
    const x = Math.random() * 140 - 20;
    const y = Math.random() * 140 - 20;
    const scale = 0.7 + Math.random() * 0.4;
    const duration = 18000 + Math.random() * 6000;

    glow.style.transitionDuration = duration + "ms";
    glow.style.transform =
      `translate(-50%, -50%) translate(${x}vw, ${y}vh) scale(${scale})`;

    setTimeout(moveGlow, duration);
  }

  setTimeout(moveGlow, 500);
}

// ============================================================
// SCROLL SUAVE (centralizando seção quando possível)
// ============================================================

function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;

  let focusElement = target;

  if (hash === "#sobre") {
    const aboutInner = document.querySelector(".section-about .about-inner");
    if (aboutInner) focusElement = aboutInner;
  }

  const rect = focusElement.getBoundingClientRect();
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop || 0;

  const targetTop =
    rect.top + currentScroll - (window.innerHeight - rect.height) / 2;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

// ============================================================
// HERO – MENU + WIPE DE IMAGEM + DIMMING (com preload + anti-race)
// ============================================================

function buildMenu() {
  const menuContainer = document.getElementById("menu-links");
  const heroBg = document.getElementById("hero-bg");
  const heroBgNext = document.getElementById("hero-bg-next");

  if (!menuContainer || !heroBg || !heroBgNext) return;

  heroBg.src = HERO_IMAGES.portrait;

  const CONFIG = {
    sobre: { hash: "#sobre", imageKey: "sobre" },
    trajetoria: { hash: "#trajetoria", imageKey: "trajetoria" },
    case: { hash: "#case", imageKey: "case" },
    publicacoes: { hash: "#publicacoes", imageKey: "publicacoes" },
  };

  // ---------------------------
  // Carregamento no próprio elemento que anima (mais robusto)
  // ---------------------------
  let wipeToken = 0;

  function waitForImageElement(imgEl, src, timeoutMs = 2500) {
    return new Promise((resolve) => {
      if (!imgEl) return resolve(false);

      const tokenAtCall = wipeToken;

      const done = (ok) => {
        if (tokenAtCall !== wipeToken) return resolve(false);
        cleanup();
        resolve(ok);
      };

      const cleanup = () => {
        clearTimeout(timer);
        imgEl.removeEventListener("load", onLoad);
        imgEl.removeEventListener("error", onError);
      };

      const onLoad = () => done(true);
      const onError = () => done(false);

      const timer = setTimeout(() => done(false), timeoutMs);

      imgEl.addEventListener("load", onLoad, { once: true });
      imgEl.addEventListener("error", onError, { once: true });

      imgEl.src = src;
      if (imgEl.complete && imgEl.naturalWidth > 0) done(true);
    });
  }

  async function runWipeTo(imageKey) {
    const newSrc = HERO_IMAGES[imageKey];
    if (!newSrc) return;

    wipeToken++;

    heroBgNext.classList.remove("hero-bg-wipe-in");
    heroBgNext.style.clipPath = "inset(0 100% 0 0)";
    heroBgNext.style.opacity = "1";

    const ok = await waitForImageElement(heroBgNext, newSrc);
    if (!ok) {
      if (imageKey !== "portrait") return runWipeTo("portrait");
      return;
    }

    void heroBgNext.offsetWidth;
    heroBgNext.classList.add("hero-bg-wipe-in");

    const onTransitionEnd = (evt) => {
      if (evt.propertyName !== "clip-path") return;

      heroBg.src = newSrc;
      heroBgNext.classList.remove("hero-bg-wipe-in");
      heroBgNext.removeEventListener("transitionend", onTransitionEnd);
    };

    heroBgNext.addEventListener("transitionend", onTransitionEnd);
  }

  // ---------------------------
  // Event delegation: não quebra se o DOM do menu for atualizado (i18n)
  // ---------------------------
  let currentItem = null;

  function setMenuState(activeItem) {
    if (!activeItem) {
      menuContainer.classList.remove("is-dimmed");
      menuContainer.querySelectorAll(".menu-item").forEach((el) => el.classList.remove("is-active"));
      return;
    }
    menuContainer.classList.add("is-dimmed");
    menuContainer.querySelectorAll(".menu-item").forEach((el) => el.classList.remove("is-active"));
    activeItem.classList.add("is-active");
  }

  menuContainer.addEventListener("click", (evt) => {
    const link = evt.target.closest(".menu-item a");
    if (!link) return;

    const item = link.closest(".menu-item");
    if (!item) return;

    const key = item.dataset.image;
    const cfg = CONFIG[key];
    if (!cfg) return;

    evt.preventDefault();
    scrollToHash(cfg.hash);
  });

  menuContainer.addEventListener("mouseover", (evt) => {
    const item = evt.target.closest(".menu-item");
    if (!item || !menuContainer.contains(item)) return;
    if (currentItem === item) return;

    const key = item.dataset.image;
    const cfg = CONFIG[key];
    if (!cfg) return;

    currentItem = item;
    setMenuState(item);
    runWipeTo(cfg.imageKey);
  });

  menuContainer.addEventListener("mouseout", (evt) => {
    const item = evt.target.closest(".menu-item");
    if (!item || !menuContainer.contains(item)) return;

    const to = evt.relatedTarget;
    if (to && item.contains(to)) return;

    currentItem = null;
    setMenuState(null);
    runWipeTo("portrait");
  });

  menuContainer.addEventListener("mouseleave", () => {
    currentItem = null;
    setMenuState(null);
    runWipeTo("portrait");
  });
}

// ============================================================
// PARALLAX – hero + sobre mim
// ============================================================

function setupScrollParallax() {
  const heroInner = document.querySelector(".hero-inner");
  const aboutInner = document.querySelector(".section-about .about-inner");

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.scrollY || 0;

      if (heroInner) {
        const yOffset = scrolled * -0.12;
        heroInner.style.setProperty("--hero-parallax", `${yOffset}px`);
      }

      if (aboutInner) {
        const rect = aboutInner.getBoundingClientRect();
        const vh = window.innerHeight;
        const ratio = 1 - Math.min(Math.max(rect.top / vh, 0), 1);
        aboutInner.style.setProperty(
          "--about-parallax-offset",
          ratio * -80 + "px"
        );
      }
    },
    { passive: true }
  );
}

// ============================================================
// SOBRE MIM – fade-in na entrada
// ============================================================

function initAboutAnimations() {
  const nodes = [
    ...document.querySelectorAll(".about-main-photo-pill"),
    ...document.querySelectorAll(".about-photo-rect"),
    document.querySelector(".about-card-group"),
  ].filter(Boolean);

  if (!nodes.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  nodes.forEach((el, i) => {
    el.classList.add("fade-in-up");
    el.style.transitionDelay = `${i * 0.15}s`;
    observer.observe(el);
  });
}

// ============================================================
// SOBRE MIM – ícones (+) sobre imagens
// ============================================================

function initAboutIcons() {
  const iconSvg = `
    <svg class="about-icon-svg" viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <circle cx="24" cy="24" r="18" fill="none" stroke="white" stroke-width="2"></circle>
      <path d="M24 16V32M16 24H32" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"></path>
    </svg>
  `;

  document.querySelectorAll(".about-photo-icon").forEach((el) => {
    if (!el.innerHTML.trim()) el.innerHTML = iconSvg;
  });

  const pill = document.querySelector(".about-main-photo-pill");
  if (pill && !pill.querySelector(".about-photo-icon")) {
    const div = document.createElement("div");
    div.className = "about-photo-icon";
    div.innerHTML = iconSvg;
    pill.appendChild(div);
  }
}

// ============================================================
// SOBRE MIM – hover troca conteúdo do card (PT/EN)
// ============================================================

function initAboutHoverCard() {
  const cardParagraph = document.querySelector(".about-card-secondary p");
  const mosaic = document.querySelector(".about-layout");
  const familyWrapper = document.querySelector(".about-main-photo-pill");
  const drinkWrapper = document.querySelector(".about-photo-drink");
  const crossfitWrapper = document.querySelector(".about-photo-crossfit");

  if (!cardParagraph || !mosaic) return;

  const dict = t().about;

  cardParagraph.classList.add("about-curiosity", "is-visible");
  cardParagraph.innerHTML = dict.defaultHtml;

  let animationTimeout = null;

  function animateTo(html) {
    if (animationTimeout) clearTimeout(animationTimeout);

    cardParagraph.classList.remove("is-entering", "is-visible");
    cardParagraph.classList.add("is-leaving");

    animationTimeout = setTimeout(() => {
      cardParagraph.classList.remove("is-leaving");
      cardParagraph.innerHTML = html;

      cardParagraph.classList.add("is-entering");
      void cardParagraph.offsetWidth;
      cardParagraph.classList.add("is-visible");
    }, 180);
  }

  function showCuriosity(key) {
    const data = dict.curiosity[key];
    if (!data) return;

    animateTo(`
      <span class="about-curiosity-title"><strong>${data.title}</strong></span><br>
      <span class="about-curiosity-body">${data.body}</span>
    `);
  }

  function resetCuriosity() {
    animateTo(dict.defaultHtml);
  }

  if (familyWrapper) {
    familyWrapper.addEventListener("mouseenter", () => showCuriosity("family"));
  }
  if (drinkWrapper) {
    drinkWrapper.addEventListener("mouseenter", () => showCuriosity("drink"));
  }
  if (crossfitWrapper) {
    crossfitWrapper.addEventListener("mouseenter", () => showCuriosity("crossfit"));
  }

  mosaic.addEventListener("mouseleave", resetCuriosity);
}

// ============================================================
// ABOUT – Fit para 80vh reduzindo APENAS o mosaico (sem mexer na fonte)
// Requer CSS usando --about-layout-h e --about-row-h (conforme sugerido)
// ============================================================

function fitAboutMediaTo80vh() {
  const section = document.querySelector(".section.section-about");
  const layout = document.querySelector(".section.section-about .about-layout");
  if (!section || !layout) return;

  // limpa valores anteriores para medir natural
  section.style.removeProperty("--about-layout-h");
  section.style.removeProperty("--about-row-h");

  // altura máxima disponível: 80vh menos padding vertical REAL da seção
  const styles = getComputedStyle(section);
  const padTop = parseFloat(styles.paddingTop) || 0;
  const padBottom = parseFloat(styles.paddingBottom) || 0;
  const maxH = window.innerHeight * 0.8 - padTop - padBottom;

  // mede altura natural do mosaico
  const currentH = layout.getBoundingClientRect().height;

  // se couber, não mexe
  if (currentH <= maxH) return;

  // define nova altura do mosaico (piso para não amassar demais)
  const newLayoutH = Math.max(420, Math.floor(maxH));

  // calcula row-gap real para dividir as duas linhas
  const photosGrid = section.querySelector(".about-photos-grid");
  const pgStyles = photosGrid ? getComputedStyle(photosGrid) : null;
  const rowGap = pgStyles ? (parseFloat(pgStyles.rowGap) || 0) : 0;

  const rowH = Math.max(160, Math.floor((newLayoutH - rowGap) / 2));

  section.style.setProperty("--about-layout-h", `${newLayoutH}px`);
  section.style.setProperty("--about-row-h", `${rowH}px`);
}

// ============================================================
// TIMELINE (PT/EN)
// ============================================================

function buildTimeline() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  const dict = t();

  const JOBS = {
    pt: [
  {
    period: "2021 - 2025",
    role: "UX Manager",
    company: "Grupo Boticário",
    details: [
      "<strong>Responsabilidades</strong>",
      "Liderança da Gerência de UX Core, atuando em frentes estruturantes como Design System, Design Ops, Acessibilidade/Design Inclusivo e Content Design, com times multidisciplinares e até 30 pessoas sob gestão direta e indireta.",
      "Desenho organizacional e escala da área de UX, apoiando a evolução de um time inicial de 10 designers para uma estrutura com mais de 200 profissionais, integrada a Produto, Dados e Engenharia.",
      "Definição de visão estratégica, ritos, processos e governança de UX para suportar uma operação digital multimarcas, multicanal e multitecnologia.",
      "Atuação como liderança técnica e estratégica, influenciando decisões executivas e garantindo alinhamento entre estratégia de negócio, experiência do usuário e excelência de execução.",
      "<strong>Resultados</strong>",
      "Implementação e escala de um Design System corporativo multimarcas e multitecnologia (React e Flutter), impactando toda a cadeia de valor do Grupo Boticário.",
      "Consolidação da cultura de UX como competência central da companhia, contribuindo para o crescimento da área de tecnologia de aproximadamente 300 para 3000 pessoas.",
      "Estruturação, padronização e otimização do processo de UX e sua integração com ferramentas como Jira e Business Map, aumentando eficiência operacional, previsibilidade e visibilidade para a liderança.",
      "Liderança na criação de agentes de IA para acessibilidade, automatizando descrições de imagens e ampliando inclusão e conversão para pessoas com deficiência visual."
    ],
  },

  {
    period: "2019 - 2021",
    role: "Technical Leader | User Experience Consultant",
    company: "Grupo Boticário",
    details: [
      "<strong>Responsabilidades</strong>",
      "Liderança técnica de UX na internalização de experiências digitais antes desenvolvidas por parceiros externos, estruturando squads multidisciplinares e processos end to end.",
      "Concepção do Design System do Grupo Boticário e estruturação inicial da área de Design Ops, conectando design, engenharia e produto em escala.",
      "Contratação, mentoria e desenvolvimento de designers, além da definição de ritos, métodos e boas práticas para garantir qualidade e consistência.",
      "Atuação como consultor estratégico, influenciando decisões de produto e tecnologia em um contexto de transformação digital acelerada.",
      "<strong>Resultados</strong>",
      "Internalização bem-sucedida de múltiplos produtos digitais críticos, aumentando autonomia, qualidade e velocidade de entrega.",
      "Criação das bases do Design System que viria a sustentar a operação digital multimarcas da companhia nos anos seguintes.",
      "Fortalecimento da percepção de UX e Tecnologia como áreas estratégicas, deixando de ser vistas apenas como suporte ou infraestrutura.",
      "Evolução da maturidade de design da organização, com maior integração entre UX, Dados, Produto e Engenharia."
    ],
  },

  {
    period: "2018 - 2019",
    role: "Design Lead",
    company: "Mirum Agency",
    details: [
      "<strong>Responsabilidades</strong>",
      "Liderança de projetos estratégicos e de novos negócios, atuando desde a construção de escopo, proposta, orçamento e conceituação até a entrega final.",
      "Definição de padrões de qualidade, processos e direcionais de design para times atuando em diferentes contas e modelos de alocação.",
      "Atuação hands-on como principal designer em projetos complexos, conduzindo processos de design ponta a ponta em contextos ágeis e colaborativos.",
      "Relacionamento direto com clientes, traduzindo necessidades de negócio em experiências digitais de alto impacto.",
      "<strong>Resultados</strong>",
      "Entrega de projetos de alta complexidade para marcas como Hellmann’s, Porto Seguro, Nextel, Cyrela e Grupo Boticário, com impacto direto em engajamento, conversão e geração de leads.",
      "Estruturação de ativações digitais internacionais (Brasil e México) para Hellmann’s, fortalecendo relacionamento e encantamento com a marca.",
      "Transformação do site da Porto Seguro em um dos principais canais de captação e contratação de serviços da companhia."
    ],
  },

  {
    period: "2013 - 2017",
    role: "Senior User Experience Designer",
    company: "Mirum Agency",
    details: [
      "<strong>Responsabilidades</strong>",
      "Condução de projetos de UX end to end, desde pesquisa e definição do problema até conceituação, validação e entrega.",
      "Atuação em contextos remotos e alocado no cliente, garantindo proximidade com stakeholders e entendimento profundo do negócio.",
      "Aplicação de métodos colaborativos como Design Sprints, workshops e testes com usuários.",
      "Tradução de necessidades complexas de negócio em experiências digitais intuitivas, engajadoras e orientadas a resultados.",
      "<strong>Resultados</strong>",
      "Redesign de experiências digitais para grandes marcas, com ganhos expressivos em conversão, engajamento e satisfação do usuário.",
      "Criação de soluções como planos modulares para Nextel, aumentando contratação e adequação às necessidades do usuário.",
      "Digitalização da experiência de empreendimentos de super luxo da Cyrela, impulsionando encantamento e agendamento de visitas.",
      "Reconhecimento como designer sênior de referência para novos projetos e desafios estratégicos."
    ],
  },
],

    en: [
  {
    period: "2021 - 2025",
    role: "UX Manager",
    company: "Grupo Boticário",
    details: [
      "<strong>Responsibilities</strong>",
      "Led the Core UX organization, covering foundational disciplines such as Design System, Design Ops, Accessibility & Inclusive Design, and Content Design, managing multidisciplinary teams with up to 30 people through direct and indirect leadership.",
      "Designed and scaled the UX organizational structure, supporting the evolution from an initial team of 10 designers to a cross-functional organization with more than 200 professionals integrated with Product, Data, and Engineering.",
      "Defined UX strategic vision, rituals, processes, and governance to support a multi-brand, multi-channel, and multi-technology digital operation.",
      "Acted as a technical and strategic leader, influencing executive-level decisions and ensuring alignment between business strategy, user experience, and execution excellence.",
      "<strong>Results</strong>",
      "Implemented and scaled a corporate Design System across multiple brands and technologies (React and Flutter), impacting the entire value chain of Grupo Boticário.",
      "Established UX as a core organizational capability, contributing to the growth of the technology organization from approximately 300 to 3,000 people.",
      "Structured, standardized, and optimized UX processes and their integration with tools such as Jira and Business Map, increasing operational efficiency, predictability, and leadership visibility.",
      "Led the creation of AI-powered accessibility agents, automating image descriptions and expanding inclusion and conversion for visually impaired users."
    ],
  },

  {
    period: "2019 - 2021",
    role: "Technical Leader | User Experience Consultant",
    company: "Grupo Boticário",
    details: [
      "<strong>Responsibilities</strong>",
      "Provided technical UX leadership during the internalization of digital experiences previously developed by external partners, structuring multidisciplinary squads and end-to-end processes.",
      "Conceived the Grupo Boticário Design System and established the initial Design Ops structure, connecting design, engineering, and product at scale.",
      "Recruited, mentored, and developed designers, while defining rituals, methods, and best practices to ensure quality and consistency.",
      "Acted as a strategic consultant, influencing product and technology decisions in a fast-paced digital transformation context.",
      "<strong>Results</strong>",
      "Successfully internalized multiple critical digital products, increasing delivery speed, quality, and organizational autonomy.",
      "Laid the foundations of the Design System that would later sustain the company’s multi-brand digital operation.",
      "Strengthened the perception of UX and Technology as strategic partners, rather than support or infrastructure functions.",
      "Advanced the organization’s design maturity through deeper integration between UX, Data, Product, and Engineering."
    ],
  },

  {
    period: "2018 - 2019",
    role: "Design Lead",
    company: "Mirum Agency",
    details: [
      "<strong>Responsibilities</strong>",
      "Led strategic projects and new business initiatives, from scoping, proposals, budgeting, and concept development through final delivery.",
      "Defined design quality standards, processes, and guidelines for teams operating across multiple client accounts and engagement models.",
      "Worked hands-on as the lead designer on complex projects, driving end-to-end design processes in agile and highly collaborative environments.",
      "Maintained direct client relationships, translating business needs into high-impact digital experiences.",
      "<strong>Results</strong>",
      "Delivered high-complexity digital projects for brands such as Hellmann’s, Porto Seguro, Nextel, Cyrela, and Grupo Boticário, driving measurable improvements in engagement, conversion, and lead generation.",
      "Structured international digital activations (Brazil and Mexico) for Hellmann’s, strengthening brand engagement and customer connection.",
      "Transformed Porto Seguro’s website into one of the company’s primary channels for service acquisition and conversion."
    ],
  },

  {
    period: "2013 - 2017",
    role: "Senior User Experience Designer",
    company: "Mirum Agency",
    details: [
      "<strong>Responsibilities</strong>",
      "Led end-to-end UX projects, from research and problem definition to concept development, validation, and delivery.",
      "Worked in both remote and client-embedded contexts, ensuring close collaboration with stakeholders and deep business understanding.",
      "Applied collaborative methods such as Design Sprints, workshops, and user testing to drive informed decision-making.",
      "Translated complex business requirements into intuitive, engaging, and results-oriented digital experiences.",
      "<strong>Results</strong>",
      "Redesigned digital experiences for major brands, achieving significant gains in conversion, engagement, and user satisfaction.",
      "Created solutions such as modular plans for Nextel, increasing adoption and better aligning offerings with user needs.",
      "Digitized the experience of ultra-luxury real estate developments for Cyrela, boosting engagement and visit scheduling.",
      "Recognized as a senior designer of reference for high-impact projects and strategic challenges."
    ],
  },
],

  };

  const jobs = LOCALE === "pt" ? JOBS.pt : JOBS.en;

  timeline.innerHTML = "";

  jobs.forEach((job, index) => {
    const item = document.createElement("article");
    item.className = "timeline-item";

    const row = document.createElement("div");
    row.className = "timeline-row";

    const period = document.createElement("div");
    period.className = "timeline-period";
    period.textContent = job.period;

    const role = document.createElement("div");
    role.className = "timeline-role";
    role.textContent = job.role;

    const company = document.createElement("div");
    company.className = "timeline-company";
    company.textContent = job.company;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "icon-button";
    button.setAttribute("aria-label", `${dict.timelineToggleAriaPrefix} ${index + 1}`);

    const svgNS = "http://www.w3.org/2000/svg";
    const iconSvg = document.createElementNS(svgNS, "svg");
    iconSvg.setAttribute("viewBox", "0 0 48 48");
    iconSvg.setAttribute("width", "48");
    iconSvg.setAttribute("height", "48");
    iconSvg.classList.add("icon-svg");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M24 10V38M24 38L38 24M24 38L10 24");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "white");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    iconSvg.appendChild(path);
    button.appendChild(iconSvg);

    row.append(period, role, company, button);
    item.appendChild(row);

    const details = document.createElement("div");
    details.className = "timeline-details";

    const inner = document.createElement("div");
    inner.className = "timeline-details-inner";

    const ul = document.createElement("ul");
    job.details.forEach((txt) => {
  const li = document.createElement("li");

  // Títulos de seção (Responsabilidades / Resultados)
  if (
    txt === "<strong>Responsabilidades</strong>" ||
    txt === "<strong>Resultados</strong>" ||
    txt === "<strong>Responsibilities</strong>" ||
    txt === "<strong>Results</strong>"
  ) {
    li.classList.add("timeline-section-title");
    li.innerHTML = txt;
  } else {
    li.innerHTML = txt;
  }

  ul.appendChild(li);
});


    inner.appendChild(ul);
    details.appendChild(inner);
    item.appendChild(details);

    const toggle = () => toggleTimelineItem(item, timeline);

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });

    row.addEventListener("click", (e) => {
      if (button.contains(e.target)) return;
      toggle();
    });

    timeline.appendChild(item);
  });
}

function toggleTimelineItem(item, container) {
  const isOpen = item.classList.contains("is-open");

  container
    .querySelectorAll(".timeline-item")
    .forEach((el) => el.classList.remove("is-open"));

  if (!isOpen) item.classList.add("is-open");
}

// ============================================================
// CAROUSEL PUBLICAÇÕES (PT/EN)
// ============================================================

function buildCarousel() {
  const track = document.getElementById("carousel-track");
  const dotsContainer = document.getElementById("carousel-progress");
  const btnPrev = document.getElementById("carousel-prev");
  const btnNext = document.getElementById("carousel-next");

  if (!track || !dotsContainer || !btnPrev || !btnNext) return;

  const articlesPT = [
    {
      id: "03",
      tagImage: "assets/ux-collective.png",
      lang: "PT",
      cover: "assets/piramide.png",
      title: "A pirâmide de métricas como partitura para orquestração de produtos digitais",
      description:
        "Métricas bem compostas orquestram times com harmonia; mal alinhadas, viram ruído. Este artigo afina essa orquestra.",
      link: "#",
    },
    {
      id: "02",
      tagImage: "assets/bootcamp.png",
      lang: "EN",
      cover: "assets/pyramid.png",
      title: "The Metrics Pyramid as a score for orchestrating digital products",
      description:
        "Metrics are like musical scores: when well composed, they orchestrate teams with harmony and purpose. But when each instrument plays its own tune...",
      link: "#",
    },
    {
      id: "01",
      tagImage: "assets/GB-tech.png",
      lang: "PT",
      cover: "assets/ds-article.png",
      title: "Cultivando Design Systems no Grupo Boticário",
      description:
        "Nossa história com DS começa como a de diversas outras ...e desenvolvedoras apaixonadas pela construção de interfaces...",
      link: "#",
    },
  ];

  const articlesEN = [
    {
      id: "03",
      tagImage: "assets/ux-collective.png",
      lang: "PT",
      cover: "assets/piramide.png",
      title: "The Metrics Pyramid as a score for orchestrating digital products (PT)",
      description:
        "A Portuguese version about using a pragmatic metrics hierarchy to orchestrate product decisions and team alignment.",
      link: "#",
    },
    {
      id: "02",
      tagImage: "assets/bootcamp.png",
      lang: "EN",
      cover: "assets/pyramid.png",
      title: "The Metrics Pyramid as a score for orchestrating digital products",
      description:
        "Metrics are like musical scores: when well composed, they orchestrate teams with harmony and purpose. But when each instrument plays its own tune...",
      link: "#",
    },
    {
      id: "01",
      tagImage: "assets/GB-tech.png",
      lang: "PT",
      cover: "assets/ds-article.png",
      title: "Design Systems at Grupo Boticário (PT)",
      description:
        "A Portuguese article about how we grew and matured a multi-brand Design System and the organization around it.",
      link: "#",
    },
  ];

  const articles = LOCALE === "pt" ? articlesPT : articlesEN;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  articles.forEach((article) => {
    const slide = document.createElement("article");
    slide.className = "carousel-item";

    const link = document.createElement("a");
    link.className = "carousel-link";
    link.href = article.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const tagRow = document.createElement("div");
    tagRow.className = "carousel-tag-row";

    const tagImg = document.createElement("img");
    tagImg.src = article.tagImage;
    tagImg.alt = `Publication ${article.id} badge`;

    const lang = document.createElement("span");
    lang.className = "carousel-lang";
    lang.textContent = article.lang;

    tagRow.append(tagImg, lang);

    const coverWrapper = document.createElement("div");
    coverWrapper.className = "carousel-cover";

    const cover = document.createElement("img");
    cover.src = article.cover;
    cover.alt = `Cover image for publication ${article.id}`;
    coverWrapper.appendChild(cover);

    const title = document.createElement("h3");
    title.className = "carousel-body-title";
    title.textContent = article.title;

    const desc = document.createElement("p");
    desc.className = "carousel-body-text";
    desc.textContent = article.description;

    link.append(tagRow, coverWrapper, title, desc);
    slide.appendChild(link);
    track.appendChild(slide);
  });

  const slides = Array.from(track.children);
  const dots = [];
  let currentIndex = 0;
  let slideWidth = 0;

  function updateSlideWidth() {
    if (!slides.length) return;
    const first = slides[0];
    const style = window.getComputedStyle(first);
    const marginRight = parseFloat(style.marginRight) || 0;
    slideWidth = first.getBoundingClientRect().width + marginRight;
  }

  updateSlideWidth();
  window.addEventListener("resize", () => {
    updateSlideWidth();
    updateCarousel();
  });

  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "carousel-dot";
    if (i === 0) dot.classList.add("is-active");
    dotsContainer.appendChild(dot);
    dots.push(dot);

    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
    });
  });

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === currentIndex);
    });
  }

  btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  updateCarousel();
}

// ============================================================
// INIT – animação inicial do hero + bootstrap geral
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {
  applyStaticTranslations();

  const heroBg = document.getElementById("hero-bg");

  await preloadHeroImages();

  // Wipe inicial
  if (heroBg) {
    heroBg.src = HERO_IMAGES.portrait;

    const prevTransition = heroBg.style.transition;
    heroBg.style.transition = "none";
    heroBg.style.clipPath = "inset(0 100% 0 0)";

    void heroBg.offsetWidth;
    heroBg.style.transition = prevTransition;

    requestAnimationFrame(() => {
      heroBg.style.clipPath = "inset(0 0 0 0)";
    });
  }

  // textos do menu
  const items = Array.from(document.querySelectorAll(".menu-item"));
  items.forEach((item, i) => {
    setTimeout(() => item.classList.add("visible"), 500 + i * 250);
  });

  initFloatingGlow();
  buildMenu();
  buildTimeline();
  buildCarousel();
  setupScrollParallax();
  initAboutAnimations();
  initAboutIcons();
  initAboutHoverCard();

  // FIT do bloco Sobre Mim (reduz mídia, não tipografia)
  fitAboutMediaTo80vh();
  window.addEventListener("resize", fitAboutMediaTo80vh);
});

// ============================================================
// FADE IN / FADE OUT DAS SEÇÕES (fade-section)
// ============================================================

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        entry.target.classList.remove("is-hidden");
      } else {
        entry.target.classList.add("is-hidden");
        entry.target.classList.remove("is-visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-section").forEach((sec) => {
  fadeObserver.observe(sec);
});
