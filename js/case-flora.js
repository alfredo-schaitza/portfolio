// Dados dos pilares
let pilares = [
    {
        bg: '#264fec',
        icon: 'M4 34L24 44L44 34M4 24L24 34L44 24M24 4L4 14L24 24L44 14L24 4Z',
        title: 'Multimarca',
        subtitle: 'Adaptável',
        details: `O grupo atua de forma multimarca, atendendo universos visuais, tonais e culturais distintos. Cada marca possui sua própria personalidade: O Boticário, Eudora, Quem Disse, Berenice?, entre outras, e todas coexistem em produtos e fluxos que, apesar das diferenças de identidade, compartilham infraestrutura e jornadas comuns. Era preciso criar uma base semântica capaz de sustentar essas diferenças sem multiplicar o trabalho, garantindo coerência funcional entre marcas e preservando o caráter único de cada uma.`
    },
    {
        bg: '#1a36a3',
        icon: 'M34 42V38C34 35.8783 33.1571 33.8434 31.6569 32.3431C30.1566 30.8429 28.1217 30 26 30H10C7.87827 30 5.84344 30.8429 4.34315 32.3431C2.84285 33.8434 2 35.8783 2 38V42M46 42V38C45.9987 36.2275 45.4087 34.5055 44.3227 33.1046C43.2368 31.7037 41.7163 30.7031 40 30.26M32 6.26C33.7208 6.7006 35.2461 7.7014 36.3353 9.10462C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7863 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76M26 14C26 18.4183 22.4183 22 18 22C13.5817 22 10 18.4183 10 14C10 9.58172 13.5817 6 18 6C22.4183 6 26 9.58172 26 14Z',
        title: 'MultiCLIENTE',
        subtitle: 'Versátil',
        details: `O Grupo Boticário é, na prática, um ecossistema que conecta dezenas de tipos de públicos e contextos. Há as revendedoras autônomas e seus clientes de venda direta; os consumidores finais que compram no e-commerce; as consultoras e operadores de loja que usam sistemas de frente de caixa e retaguarda de loja; os franqueados que gerenciam resultados, compras e equipes; os parceiros B2B como farmácias e mercados; profissionais de beleza que atuam em salões; vendedores de marketplace; sistemas para chão de fábrica e para colaboradores administrativos. Essa diversidade exigia que o mesmo conjunto de componentes funcionasse para diferentes níveis de letramento digital, tamanhos de tela, ambientes de uso e demandas de negócio. Cada botão, cada campo de formulário e cada mensagem precisava se adaptar sem perder consistência.`
    },
    {
        bg: '#0f226a',
        icon: 'M44 24C44 35.0457 35.0457 44 24 44M44 24C44 12.9543 35.0457 4 24 4M44 24H4M24 44C12.9543 44 4 35.0457 4 24M24 44C29.0026 38.5233 31.8455 31.4159 32 24C31.8455 16.5841 29.0026 9.47671 24 4M24 44C18.9974 38.5233 16.1545 31.4159 16 24C16.1545 16.5841 18.9974 9.47671 24 4M4 24C4 12.9543 12.9543 4 24 4',
        title: 'Multiplataforma',
        subtitle: 'Robusto',
        details: `O sistema deveria existir em múltiplas plataformas. Foi criado, portanto, um núcleo voltado a React e Flutter, as principais stacks de front-end do grupo, além de uma camada adicional, chamada Flora Source. Essa camada consistia em diretrizes e tokens para produtos que, por limitação técnica ou de backlog, não poderiam adotar a biblioteca diretamente. Assim, mesmo sem componentes codificados, esses produtos poderiam seguir os mesmos fundamentos visuais, semânticos e de acessibilidade, preservando a coerência em todo o ecossistema.`
    },
    {
        bg: '#31458d',
        iconType: 'img',
        iconSrc: '../../assets/cases/flora/eye.svg',
        title: 'A11Y by design',
        subtitle: 'Inclusivo',
        details: `A acessibilidade foi tratada como princípio e não como etapa. Desde o início, estabeleceu-se conformidade com as diretrizes da WCAG 2.1 no nível AA, cobrindo contraste, navegação por teclado, foco visível, leitura por leitores de tela e touch targets mínimos de 48 por 48 pixels. O processo de qualidade e testes foi conduzido por uma dupla de especialistas em acessibilidade, composta por uma pessoa cega e outra vidente, garantindo a avaliação técnica. Essa escolha refletia não apenas o compromisso do grupo com diversidade e inclusão, mas também uma decisão estratégica: a acessibilidade é um diferencial competitivo que amplia o alcance de mercado e melhora a experiência de todos os usuários, não apenas daqueles com deficiência.`
    },
    {
        bg: '#5e72bb',
        icon: 'M14 14H14.02M41.18 26.82L26.84 41.16C26.4685 41.5319 26.0274 41.8269 25.5418 42.0282C25.0562 42.2295 24.5357 42.3331 24.01 42.3331C23.4843 42.3331 22.9638 42.2295 22.4782 42.0282C21.9926 41.8269 21.5515 41.5319 21.18 41.16L4 24V4H24L41.18 21.18C41.925 21.9295 42.3432 22.9433 42.3432 24C42.3432 25.0567 41.925 26.0705 41.18 26.82Z',
        title: 'Auto TAgueamento',
        subtitle: 'Mensurável',
        details: `A mensuração foi concebida como parte da arquitetura. Cada componente passou a carregar consigo uma camada de eventos integrada nativamente ao Google Tag Manager, tornando todas as interações rastreáveis desde o primeiro deploy. Essa decisão uniu design, engenharia e dados em um mesmo ponto de partida: as experiências deixaram de ser apenas visuais e passaram a ser mensuráveis. O sucesso, no Flora, sempre esteve ancorado em evidências.`
    }
];

const pilaresEn = [
    {
        title: 'Multi-brand',
        subtitle: 'Adaptable',
        details: `The group operates as a multi-brand ecosystem, covering distinct visual, tonal, and cultural universes. Each brand has its own personality: O Boticario, Eudora, Quem Disse, Berenice?, among others, and all of them coexist in products and flows that, despite identity differences, share infrastructure and common journeys. We needed a semantic foundation able to sustain these differences without multiplying effort, ensuring functional coherence across brands while preserving each brand's unique character.`
    },
    {
        title: 'Multi-client',
        subtitle: 'Versatile',
        details: `Grupo Boticario is, in practice, an ecosystem connecting dozens of audience types and contexts. There are independent resellers and their direct-sales customers; end consumers buying through e-commerce; in-store consultants and operators using POS and store-backoffice systems; franchisees managing results, purchasing, and teams; B2B partners such as pharmacies and supermarkets; beauty professionals in salons; marketplace sellers; shop-floor systems and administrative staff tools. This diversity required the same component set to work across different levels of digital literacy, screen sizes, usage environments, and business demands. Every button, every input, and every message had to adapt without losing consistency.`
    },
    {
        title: 'Multi-platform',
        subtitle: 'Robust',
        details: `The system had to exist across multiple platforms. A core was built for React and Flutter, the group's main front-end stacks, plus an additional layer called Flora Source. This layer provided guidelines and tokens for products that, due to technical or backlog constraints, could not directly adopt the library. This way, even without coded components, these products could still follow the same visual, semantic, and accessibility foundations, preserving coherence across the entire ecosystem.`
    },
    {
        title: 'A11Y by design',
        subtitle: 'Inclusive',
        details: `Accessibility was treated as a principle, not a phase. From day one, we targeted WCAG 2.1 AA compliance, covering contrast, keyboard navigation, visible focus, screen-reader support, and minimum touch targets of 48 by 48 pixels. Quality and testing were conducted by an accessibility specialist duo, composed of one blind person and one sighted person, ensuring technical quality. This decision reflected not only the group's commitment to diversity and inclusion, but also a strategic choice: accessibility is a competitive differentiator that expands market reach and improves the experience for all users, not only users with disabilities.`
    },
    {
        title: 'Auto-tagging',
        subtitle: 'Measurable',
        details: `Measurement was conceived as part of the architecture. Each component started carrying a native event layer integrated with Google Tag Manager, making all interactions trackable from the first deploy. This decision aligned design, engineering, and data from a shared starting point: experiences stopped being only visual and became measurable. At Flora, success has always been grounded in evidence.`
    }
];

const caseCopy = {
    pt: {
        htmlLang: 'pt-BR',
        loadingText: 'Carregando Flora Design System...',
        backText: 'Conheça o Alfredo',
        contactText: 'Entre em contato'
    },
    en: {
        htmlLang: 'en-US',
        loadingText: 'Loading Flora Design System...',
        backText: 'Meet Alfredo',
        contactText: 'Get in touch'
    }
};

function setText(selector, value) {
    const el = document.querySelector(selector);
    if (!el || typeof value !== 'string') return;
    el.textContent = value;
}

function setHTML(selector, value) {
    const el = document.querySelector(selector);
    if (!el || typeof value !== 'string') return;
    el.innerHTML = value;
}

function setTexts(selector, values) {
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((node, index) => {
        if (typeof values[index] !== 'string') return;
        node.textContent = values[index];
    });
}

function setTextKeepingIcon(selector, value) {
    const el = document.querySelector(selector);
    if (!el || typeof value !== 'string') return;
    const icon = el.querySelector('img, svg');
    if (!icon) {
        el.textContent = value;
        return;
    }
    el.innerHTML = `${icon.outerHTML}${value}`;
}

function setRowsKeepingIcon(selector, values) {
    const rows = document.querySelectorAll(selector);
    rows.forEach((row, index) => {
        if (typeof values[index] !== 'string') return;
        const icon = row.querySelector('img, svg');
        if (!icon) {
            row.textContent = values[index];
            return;
        }
        row.innerHTML = `${icon.outerHTML}${values[index]}`;
    });
}

function setNthText(selector, index, value) {
    const nodes = document.querySelectorAll(selector);
    const node = nodes[index];
    if (!node || typeof value !== 'string') return;
    node.textContent = value;
}

function setAria(selector, value) {
    const el = document.querySelector(selector);
    if (!el || typeof value !== 'string') return;
    el.setAttribute('aria-label', value);
}

function applyCaseLanguage(lang) {
    const current = caseCopy[lang] ? lang : 'pt';
    const t = caseCopy[current];

    document.documentElement.lang = t.htmlLang;
    setText('.loading-text', t.loadingText);
    setText('.hero-back__text', t.backText);
    setTextKeepingIcon('.btn-contact', t.contactText);

    if (current === 'pt') return;

    // Hero
    setAria('.abertura-card', 'Opening');
    setAria('.abertura-row', 'Samples and case navigation');
    setAria('.hero-menu', 'Case navigation');
    setText('.hero-menu__section:nth-child(1) .hero-menu__title', 'Introduction');
    setTexts('.hero-menu__section:nth-child(1) .hero-menu__subitem', ['Context & Problem', 'Key results']);
    setText('.hero-menu__section:nth-child(2) .hero-menu__title', 'Process');
    setTexts('.hero-menu__section:nth-child(2) .hero-menu__subitem', ['Foundation', 'Proof of concept', 'Scale']);
    setText('.hero-menu__section:nth-child(3) .hero-menu__title', 'Future');

    // Context
    setText('#contexto .section-subtitle', 'Context & Problem');
    setText('#contexto .section-title', 'The invisible cost of lacking a design language');
    setText('#contexto .section-description', 'In 2019, Grupo Boticario started internalizing digital interfaces, previously maintained by external vendors, taking ownership of experience, code, and the way digital products were conceived. This transition exposed structural fragmentation across systems and channels, such as e-commerce, direct sales, franchises, and internal environments, which showed disconnected visual and behavioral patterns. At the same time, product squads, still being formed, made design and development decisions in isolation, without shared references or agreements, generating rework, inconsistent experiences, and misalignment between areas.');
    setAria('.compare-list', 'Benefits and challenges');
    setTexts('.compare-cell--positive p', [
        'Digital products internalized;',
        'Higher speed and control over the experience;',
        'Design, Engineering, and Product recognized as strategic capabilities;',
        'Formation of the first squads.'
    ]);
    setTexts('.compare-cell--negative p', [
        'Products with distinct behaviors and visual styles;',
        'Inconsistency and weak brand recognition;',
        'Design and development decisions made in isolation;',
        'Rework, misalignment, and inconsistent experience.'
    ]);

    // Results
    setText('#resultados .section-subtitle', 'Key Results');
    setHTML('#resultados .results-title', '<span class="text-black">Design at scale as a </span><span class="text-primary">business transformation driver.</span>');
    setText('#resultados .section-description', 'From this context, Flora emerged as a design language that became more than a component system: it became a conceptual infrastructure for Grupo Boticario\'s digital ecosystem. Since inception, Flora was designed to be multi-brand, multi-platform, and multi-client, with accessibility and measurement embedded as native properties.');
    setTexts('.result-card .result-label', ['Squads', 'Cycle Time', 'CSAT', 'Customer Experience']);
    setTexts('.result-card .result-description', [
        'Building consistent, coherent, high-impact experiences.',
        'Cycle time reduction accelerating value delivery.',
        'Internal customer as a promoter of the ecosystem.',
        'Higher task-completion success rate in critical flows.'
    ]);

    // Process
    setAria('#processo', 'Process');
    setText('.processo-kicker', 'Process');
    setHTML('.processo-title', 'Build<br/>Approach');
    setAria('.processo-cols', 'Process stages');
    setAria('.processo-col--fundamentacao', 'Cultural adoption and foundation');
    setAria('.processo-col--poc', 'Proof of concept');
    setAria('.processo-col--escala', 'Scale');
    setText('.processo-col--fundamentacao .processo-phase-title', 'Cultural adoption & foundation');
    setText('.processo-col--fundamentacao .processo-phase-subtitle', 'Global macro view');
    setText('.processo-col--poc .processo-phase-title', 'Proof of concept');
    setText('.processo-col--poc .processo-phase-subtitle', 'Convergence and focus');
    setText('.processo-col--escala .processo-phase-title', 'Scale');
    setText('.processo-col--escala .processo-phase-subtitle', 'Continuous evolution');

    // Foundation and themes
    setText('#fundamentacao .dark-kicker', 'Cultural Adoption & Foundation');
    setText('#fundamentacao .section-title', 'Thinking at scale means designing for the entire ecosystem.');
    setText('#fundamentacao .dark-description', 'The first practical stage of building Flora was cultural adoption. The proposal, although technically solid, required stakeholder buy-in, cross-area alignment, and a shared understanding that a design system is not just a component repository, but a way of thinking and operating. Awareness materials, presentations, and working sessions were carried out with technology, product, and design leaders. This process created backlog space in squads and consolidated the support needed to build the first proof of concept.');
    setNthText('.section-dark .section-title.white', 1, 'Immersion establishes the premises that guide the process');
    setText('.section-dark__inner .section-description.white', 'The immersion phase combined deep analysis of branding and tone-of-voice guidelines across brands, mapping of patterns, components, and behaviors present in all digital products, structured interviews with Brand, Product, Engineering, and Design stakeholders, as well as future internal users, and benchmarking against multi-brand design systems from major market players. From this process, the premises that guided the entire project were established.');
    setNthText('.section-dark .section-title.white', 2, 'The foundation is materialized in a user-centered semantic token structure');
    setTexts('.theme-title', [
        'Themed and accessible color system',
        'Agnostic and harmonic spacing',
        'Responsive and versatile typography',
        'Brand characterization styles'
    ]);
    setTexts('.theme-subtitle', [
        'Context-oriented, reinforcing interaction patterns and preserving accessibility across all usage contexts.',
        'Native proportion across PXs, PTs, and DPs, defining composition rules in 4 and 8-unit scales.',
        'Legibility, hierarchy, and composition optimized by breakpoint.',
        'Tailored tone of voice for each brand.'
    ]);

    // POC and steps
    setText('.intro-kicker', 'Hypothesis validation');
    setHTML('.intro-title', 'Proof of Concept<br/>and Craft Driving<br/>Concrete<br/>Results.');
    setText('.intro-text', 'The first practical application of the language happened in the Reseller Registration Portal, a project that became decisive to validate the system. The portal\'s original plan included building two separate websites, one for O Boticario and another for Eudora, both with the same flow structure and objective: registering new resellers. After identifying this duplication, we proposed a single themed and scalable architecture capable of representing both brands without code duplication. This decision immediately reduced technical effort and opened the path to validate Flora\'s reuse and acceleration potential in a real environment.');
    setTexts('.problema-list p', ['Infrastructure', 'Immersion', 'Prototyping', 'Testing', 'Development', 'Team']);
    setText('.section-theming .section-subtitle.white', 'Results');
    setText('.section-theming .section-title.white', 'Roadmap acceleration in 5 months and reduced maintenance effort');
    setText('.section-theming .section-description.white', 'At the end of the cycle, the portal was delivered in four weeks, versus the six months originally planned for independent development of the two websites. The delivery proved that quality and speed are not opposites: when the foundation is solid, craft accelerates.');
    setTexts('.etapas-title', ['Immersion', 'Definition', 'Concept & Validation', 'Specification']);
    setTexts('.etapas-subtitle', [
        'Data analysis, stakeholder interviews, reseller support team interviews, and user surveys.',
        'Pain points, opportunities, and success criteria.',
        'Data analysis, stakeholder interviews, reseller support team interviews, and user surveys.',
        'Documentation of generated components and handoff to development.'
    ]);

    // Scale and growth
    setText('.escala-kicker', 'Scale');
    setText('.escala-title', 'After the proof-of-concept success, scaling Flora meant scaling outcomes');
    setText('.escala-text', 'POC success secured executive sponsorship and enabled a dedicated Flora team. The initial goal targeted onboarding three digital products in the first cycle and, surpassing expectations, nineteen products were integrated in the first year. This expansion was enabled by combining two strategies: coupling and inner source contribution.');
    setText('.escala-impact__title', 'Measurable impact across all business dimensions');
    setTexts('.escala-metric__title', ['Operations', 'System', 'Experience', 'Product', 'Business']);
    setTexts('.escala-metric:nth-child(2) .escala-metric__item', ['-60% bug rate', '-18% screen load time']);
    setTexts('.escala-metric:nth-child(3) .escala-metric__item', ['+12% task-completion success rate', '78pts average NPS across e-commerce and direct sales channels']);
    setTexts('.escala-metric:nth-child(4) .escala-metric__item', ['+11% E-commerce GMV', '+16% Direct Sales GMV in digital channels']);
    setText('.escala-metric:nth-child(5) .escala-metric__item', 'Real revenue increase');

    setText('.crescimento-title', 'Fast growth, however, brought valuable learnings');
    setText('.crescimento-col--left .crescimento-kicker', 'Growth & Challenges');
    setText('.crescimento-col--left .crescimento-text', 'This accelerated growth had direct business impact, but also exposed structural challenges typical of a scaling phase. These points made clear the need to evolve the strategy to sustain growth without compromising coherence, quality, and efficiency.');
    setText('.mosaic-label', 'Adoption');
    setText('.mosaic-desc', 'Adoption target exceeded by 600%;');
    setRowsKeepingIcon('.mosaic-row', ['Parallel libraries;', 'Documentation debt;', 'Inconsistent measurement.']);
    setText('.crescimento-block .crescimento-kicker', 'Governance & Strategy');
    setText('.crescimento-block .crescimento-text', 'Based on pain points identified during early expansion, a governance strategy was structured around two complementary fronts.');
    setRowsKeepingIcon('.crescimento-split__title', ['Inner Source', 'Coupling']);
    setTexts('.crescimento-split .crescimento-text', [
        'In more mature squads, the inner source model was adopted, where teams themselves contributed system evolutions, later reviewed by the Flora team for quality, accessibility, and consistency, enabling organic library growth.',
        'In less mature contexts, the Flora team worked in a coupled model with squads, co-creating components and screens in real context and transferring knowledge directly, accelerating Design Language adoption.'
    ]);

    // Maturity, future, and conclusion
    setText('.perenidade-kicker', 'Longevity & Maturity');
    setText('.perenidade-title', 'Once consolidated, Flora evolved to a new stage');
    setText('.perenidade-text', 'Compositions group multiple components into complete journey modules, such as login, registration, and checkout. They encapsulate visual structure, spacing rules, states, and event instrumentation, representing the highest level of system maturity, where the Design System evolves from a library into a reusable experience platform.');
    setTexts('.perenidade-item__title', ['Compositions', 'Consistency', 'Systemic', 'Living', 'Measurable']);
    setTexts('.perenidade-item__text', [
        'Critical flows componentized: login, registration, cart, checkout, etc.',
        'Experience and visual consistency.',
        'Journeys measured and monitored at scale.',
        'Continuous iteration.',
        'High task-completion rates.'
    ]);
    setAria('.perenidade-arrow--left', 'Previous');
    setAria('.perenidade-arrow--right', 'Next');

    setAria('#futuro', 'Future');
    setText('.futuro-top .section-subtitle', 'Future');
    setText('.futuro-top .futuro-title', 'Documentation as an agnostic language through AI');
    setText('.futuro-top .futuro-description', 'The integration between Figma MCP and language models is enabling automated generation of components and variations directly from textual guidelines. Since Flora documentation is essentially textual and semantic, it is natively understandable by language models. This opens the path to a future where documentation feeds both Figma and code simultaneously, ensuring full consistency between design intent and technical implementation.');
    setTexts('.futuro-card__title', ['Designers', 'AI', 'Developers']);
    setTexts('.futuro-card__text', [
        'Define the language and intent that guide the whole system.',
        'Transforms documentation into execution, connecting design and code at scale.',
        'Implement the same language in scalable, agnostic code.',
        'AI as a scaling tool, not a replacement. Authorship and human reasoning are preserved while decision speed expands.'
    ]);
    setText('.futuro-bottom .section-subtitle', 'Conclusion');
    setHTML('.futuro-title--impacto', 'Its impact reflects a <span class="futuro-highlight">cultural transformation.</span>');
    setText('.futuro-description--right', 'Flora started as an applied proof of concept and became Grupo Boticario\'s design language. Accessibility, measurement, and consistency stopped being isolated commitments and became structural. The system now works as a design infrastructure, a semantic, measurable, and scalable foundation that connects people, technologies, and brands under the same set of rules and meanings. Every product, whether a direct-sales app or a shop-floor system, now expresses the group\'s identity coherently and accessibly. The result is a more integrated, agile, and design-driven company.');

    // Dynamic content rendered by JS
    pilares = pilares.map((pilar, index) => ({
        ...pilar,
        ...(pilaresEn[index] || {})
    }));
}

async function detectCaseLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') return saved;

    const params = new URLSearchParams(window.location.search);
    const forcedLang = params.get('lang');
    if (forcedLang === 'pt' || forcedLang === 'en') return forcedLang;

    const lusophoneCountries = new Set(['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL']);

    try {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 1500);
        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        window.clearTimeout(timeout);

        if (response.ok) {
            const payload = await response.json();
            const countryCode = String(payload.country_code || '').toUpperCase();
            if (countryCode) return lusophoneCountries.has(countryCode) ? 'pt' : 'en';
        }
    } catch (_) {
        // fallback to browser locale
    }

    const browserLocale = (navigator.language || '').toLowerCase();
    return browserLocale.startsWith('pt') ? 'pt' : 'en';
}

// Fun��o para criar os pilares
function renderPilares() {
    const pilaresContainer = document.getElementById('pilares');
    if (!pilaresContainer) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // reset container
    pilaresContainer.className = 'pilares-container pilares-v2';
    pilaresContainer.innerHTML = '';

    // shell
    const shell = document.createElement('div');
    shell.className = 'pilares-shell';

    const rail = document.createElement('div');
    rail.className = 'pilares-rail';

    shell.appendChild(rail);
    pilaresContainer.appendChild(shell);

    const cards = [];

    let closeTimer = null;

    let panel = null;
    let panelText = null;
    if (!isMobile) {
        panel = document.createElement('aside');
        panel.className = 'pilares-panel';
        panel.setAttribute('aria-hidden', 'true');

        const panelInner = document.createElement('div');
        panelInner.className = 'pilares-panel__inner';

        panelText = document.createElement('p');
        panelText.className = 'pilares-panel__text';
        panelInner.appendChild(panelText);
        panel.appendChild(panelInner);

        // panel lives inside the rail so it can open between items
        rail.appendChild(panel);
    }

    const ensureSheet = () => {
        if (!isMobile) return null;
        let backdrop = document.querySelector('.pilares-sheet-backdrop');
        let sheet = document.querySelector('.pilares-sheet');
        if (backdrop && sheet) {
            return { backdrop, sheet };
        }

        backdrop = document.createElement('div');
        backdrop.className = 'pilares-sheet-backdrop';

        sheet = document.createElement('div');
        sheet.className = 'pilares-sheet';

        const close = document.createElement('button');
        close.type = 'button';
        close.className = 'pilares-sheet__close';
        close.setAttribute('aria-label', 'Fechar');
        close.textContent = 'X';

        const inner = document.createElement('div');
        inner.className = 'pilares-sheet__inner';

        const icon = document.createElement('div');
        icon.className = 'pilares-sheet__icon';

        const title = document.createElement('p');
        title.className = 'pilares-sheet__title';

        const subtitle = document.createElement('p');
        subtitle.className = 'pilares-sheet__subtitle';

        const desc = document.createElement('p');
        desc.className = 'pilares-sheet__desc';

        inner.appendChild(icon);
        inner.appendChild(title);
        inner.appendChild(subtitle);
        inner.appendChild(desc);

        sheet.appendChild(close);
        sheet.appendChild(inner);

        document.body.appendChild(backdrop);
        document.body.appendChild(sheet);

        const closeSheet = () => {
            backdrop.classList.remove('is-visible');
            sheet.classList.remove('is-visible');
            document.body.classList.remove('pilares-sheet-open');
        };

        backdrop.addEventListener('click', closeSheet);
        close.addEventListener('click', closeSheet);

        sheet.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        return { backdrop, sheet };
    };

    const buildIconElement = (pilar) => {
        let iconEl;
        if (pilar.iconType === 'img' && pilar.iconSrc) {
            const src = pilar.iconSrc;
            if (src.toLowerCase().endsWith('.svg')) {
                const wrap = document.createElement('span');
                wrap.className = 'pilar-icon pilar-icon--svg';
                wrap.setAttribute('aria-hidden', 'true');

                fetch(src)
                    .then((r) => r.text())
                    .then((svgText) => {
                        wrap.innerHTML = svgText;
                        const svg = wrap.querySelector('svg');
                        if (!svg) return;

                        svg.removeAttribute('width');
                        svg.removeAttribute('height');
                        if (!svg.getAttribute('viewBox')) svg.setAttribute('viewBox', '0 0 48 48');
                        svg.classList.add('pilar-icon__svg');
                        svg.setAttribute('fill', 'none');

                        svg.querySelectorAll('path, circle, rect, line, polyline, polygon').forEach((el) => {
                            const fill = (el.getAttribute('fill') || '').toLowerCase();
                            if (fill && fill !== 'none') el.setAttribute('fill', 'none');
                            if (!el.getAttribute('stroke')) el.setAttribute('stroke', 'currentColor');
                            el.setAttribute('stroke', 'currentColor');
                            if (!el.getAttribute('stroke-width')) el.setAttribute('stroke-width', '2');
                            el.setAttribute('stroke-linecap', 'round');
                            el.setAttribute('stroke-linejoin', 'round');
                        });
                    })
                    .catch(() => {
                        wrap.innerHTML = '';
                        const img = document.createElement('img');
                        img.className = 'pilar-icon';
                        img.alt = '';
                        img.setAttribute('aria-hidden', 'true');
                        img.src = src;
                        wrap.appendChild(img);
                    });

                iconEl = wrap;
            } else {
                const img = document.createElement('img');
                img.className = 'pilar-icon';
                img.alt = '';
                img.setAttribute('aria-hidden', 'true');
                img.src = src;
                iconEl = img;
            }
        } else {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'pilar-icon');
            svg.setAttribute('fill', 'none');
            svg.setAttribute('viewBox', '0 0 48 48');

            if (Array.isArray(pilar.icon)) {
                pilar.icon.forEach(iconPath => {
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', iconPath);
                    path.setAttribute('stroke', 'currentColor');
                    path.setAttribute('stroke-linecap', 'round');
                    path.setAttribute('stroke-linejoin', 'round');
                    path.setAttribute('stroke-width', '2');
                    svg.appendChild(path);
                });
            } else {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', pilar.icon);
                path.setAttribute('stroke', 'currentColor');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('stroke-width', '2');
                svg.appendChild(path);
            }
            iconEl = svg;
        }

        return iconEl;
    };

    function getExpandMs() {
        const raw = getComputedStyle(pilaresContainer).getPropertyValue('--pilares-expand-ms').trim();
        if (raw.endsWith('ms')) return parseFloat(raw);
        if (raw.endsWith('s')) return parseFloat(raw) * 1000;
        return 600;
    }

    function clearActive(immediate = false) {
        if (isMobile) return;
        if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }
        panel.classList.remove('is-visible');
        panel.setAttribute('aria-hidden', 'true');
        cards.forEach((c) => {
            c.classList.remove('is-active');
            c.setAttribute('aria-expanded', 'false');
        });

        if (immediate) {
            shell.classList.remove('has-active');
            panelText.textContent = '';
            return;
        }

        shell.classList.remove('has-active');
        const duration = getExpandMs();
        closeTimer = setTimeout(() => {
            panelText.textContent = '';
            closeTimer = null;
        }, duration);
    }

    function setActive(index) {
        if (isMobile) return;
        const card = cards[index];
        if (!card) return;
        if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }

        // move panel right after the selected card (opens between items)
        const next = card.nextElementSibling;
        if (next !== panel) {
            rail.insertBefore(panel, next);
        }

        shell.classList.add('has-active');
        panel.classList.add('is-visible');
        panel.setAttribute('aria-hidden', 'false');

        cards.forEach((c, i) => {
            const active = i === index;
            c.classList.toggle('is-active', active);
            c.setAttribute('aria-expanded', active ? 'true' : 'false');
        });

        panelText.textContent = pilares[index].details || '';
    }

    pilares.forEach((pilar, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'pilar-card';
        btn.style.backgroundColor = pilar.bg;
        btn.setAttribute('aria-expanded', 'false');

        // icon
        const iconEl = buildIconElement(pilar);

        // content (title + subtitle) anchored at bottom
        const content = document.createElement('div');
        content.className = 'pilar-content';

        const title = document.createElement('p');
        title.className = 'pilar-title';
        title.textContent = pilar.title;

        const subtitle = document.createElement('p');
        subtitle.className = 'pilar-subtitle';
        subtitle.textContent = pilar.subtitle;

        content.appendChild(title);
        content.appendChild(subtitle);

        btn.appendChild(iconEl);
        btn.appendChild(content);

        const onActivate = () => {
            if (isMobile) {
                const sheet = ensureSheet();
                if (!sheet) return;
                const { backdrop, sheet: sheetEl } = sheet;
                const iconWrap = sheetEl.querySelector('.pilares-sheet__icon');
                const titleEl = sheetEl.querySelector('.pilares-sheet__title');
                const subtitleEl = sheetEl.querySelector('.pilares-sheet__subtitle');
                const descEl = sheetEl.querySelector('.pilares-sheet__desc');

                iconWrap.innerHTML = '';
                iconWrap.appendChild(buildIconElement(pilar));
                titleEl.textContent = pilar.title || '';
                subtitleEl.textContent = pilar.subtitle || '';
                descEl.textContent = pilar.details || '';

                backdrop.classList.add('is-visible');
                sheetEl.classList.add('is-visible');
                document.body.classList.add('pilares-sheet-open');
                return;
            }

            const already = btn.classList.contains('is-active');
            if (already) {
                clearActive();
            } else {
                setActive(index);
            }
        };

        btn.addEventListener('click', onActivate);
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onActivate();
            }
            if (e.key === 'Escape') {
                clearActive();
            }
        });

        rail.appendChild(btn);
        cards.push(btn);
    });

    // default: all closed until first click
    clearActive(true);

    // allow closing by clicking the description panel
    if (panel) {
        panel.addEventListener('click', () => {
            if (shell.classList.contains('has-active')) {
                clearActive();
            }
        });
    }
}


// Fun��o para esconder o loading
function hideLoading() {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) loading.classList.add('hidden');
    }, 500);
}

function initCaseScrollFx() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealElements = [];
    const parallaxElements = [];

    const register = (selector, config = {}) => {
        const nodes = Array.from(document.querySelectorAll(selector));
        nodes.forEach((el, index) => {
            const delayStart = Number(config.delayStart || 0);
            const delayStep = Number(config.delayStep || 0);
            const delay = delayStart + (delayStep * index);

            if (config.reveal !== false) {
                el.classList.add('fx-reveal');
                el.style.setProperty('--fx-delay', `${delay}ms`);
                revealElements.push(el);
            }

            if (config.parallax) {
                el.classList.add('fx-parallax');
                el.dataset.fxSpeed = String(config.parallax);
                el.dataset.fxMax = String(config.max || 36);
                parallaxElements.push(el);
            }
        });
    };

    register('.hero-back', { parallax: 0.1, max: 14, delayStart: 0 });
    register('.abertura-card', { parallax: 0.18, max: 34, delayStart: 40 });
    register('.section-context .context-images, .section-context .context-content', { parallax: 0.14, max: 24, delayStart: 20, delayStep: 0 });
    register('.section-results .results-text', { parallax: 0.12, max: 20, delayStart: 20 });
    register('.section-results .result-card', { parallax: 0.12, max: 22, delayStart: 40, delayStep: 0 });
    register('.section-processo .processo-header, .section-processo .processo-col', { parallax: 0.1, max: 18, delayStart: 20, delayStep: 0 });
    register('.section-dark .dark-content, .section-dark__inner', { parallax: 0.1, max: 16, delayStart: 20 });
    register('.themes-grid-2x2 .themes-cell', { parallax: 0.1, max: 16, delayStart: 20, delayStep: 0 });
    register('.section-intro .intro-grid', { parallax: 0.12, max: 18, delayStart: 20 });
    register('.section-problema .problema-left, .section-problema .problema-right', { parallax: 0.14, max: 22, delayStart: 20, delayStep: 0 });
    register('.section-theming .theming-media, .section-theming .theming-text', { parallax: 0.12, max: 20, delayStart: 20, delayStep: 0 });
    register('.section-etapas .etapas-card', { parallax: 0.1, max: 14, delayStart: 20, delayStep: 0 });
    register('.section-escala .escala-content, .section-escala .escala-impact, .section-escala .escala-metric', { parallax: 0.12, max: 20, delayStart: 20, delayStep: 0 });
    register('.section-crescimento .crescimento-title, .section-crescimento .crescimento-col--left, .section-crescimento .crescimento-col--right', { parallax: 0.14, max: 24, delayStart: 20, delayStep: 0 });
    register('.section-perenidade .perenidade-grid, .section-perenidade .perenidade-item, .section-perenidade .perenidade-nav', { parallax: 0.12, max: 18, delayStart: 20, delayStep: 0 });
    register('.section-futuro .futuro-top, .section-futuro .futuro-bottom', { parallax: 0.12, max: 20, delayStart: 20, delayStep: 0 });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.14,
        rootMargin: '0px 0px -12% 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));

    let rafId = 0;
    let scrollingDown = true;
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop || 0;

    const updateParallax = () => {
        rafId = 0;

        if (!scrollingDown) {
            parallaxElements.forEach((el) => {
                el.style.setProperty('--fx-parallax-shift', '0px');
            });
            return;
        }

        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight * 0.5;

        parallaxElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.bottom < -120 || rect.top > viewportHeight + 120) return;

            const speed = Number(el.dataset.fxSpeed || 0.12);
            const maxShift = Number(el.dataset.fxMax || 30);
            const elementCenter = rect.top + (rect.height * 0.5);
            const normalized = (elementCenter - viewportCenter) / viewportCenter;
            const shift = Math.max(-maxShift, Math.min(maxShift, -normalized * maxShift * speed * 2));

            el.style.setProperty('--fx-parallax-shift', `${shift.toFixed(2)}px`);
        });
    };

    const scheduleParallax = () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        scrollingDown = currentScrollTop >= lastScrollTop;
        lastScrollTop = currentScrollTop;

        if (rafId) return;
        rafId = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', scheduleParallax, { passive: true });
    window.addEventListener('resize', scheduleParallax);
    scheduleParallax();
}

const LOTTIE_SCRIPT_CANDIDATES = [
    'https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js',
    'https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js'
];

function loadExternalScript(src) {
    return new Promise((resolve, reject) => {
        const existing = Array.from(document.scripts).find((s) => s.src === src);
        if (existing) {
            if (window.lottie || window.bodymovin) {
                resolve();
                return;
            }
            let settled = false;
            const onLoad = () => {
                if (settled) return;
                settled = true;
                resolve();
            };
            const onError = () => {
                if (settled) return;
                settled = true;
                reject(new Error(`Falha ao carregar ${src}`));
            };

            existing.addEventListener('load', onLoad, { once: true });
            existing.addEventListener('error', onError, { once: true });

            // Se o script j� terminou o ciclo de carga, evita Promise pendurada.
            window.setTimeout(() => {
                if (settled) return;
                if (window.lottie || window.bodymovin) {
                    settled = true;
                    resolve();
                } else {
                    settled = true;
                    reject(new Error(`Timeout ao carregar ${src}`));
                }
            }, 1200);
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
        document.head.appendChild(script);
    });
}

async function ensureLottieRuntime() {
    if (window.lottie || window.bodymovin) return window.lottie || window.bodymovin;

    for (const src of LOTTIE_SCRIPT_CANDIDATES) {
        try {
            await loadExternalScript(src);
            if (window.lottie || window.bodymovin) return window.lottie || window.bodymovin;
        } catch (_) {
            // tenta o pr�ximo CDN
        }
    }

    return null;
}

function isIOSDevice() {
    const ua = window.navigator.userAgent || '';
    const platform = window.navigator.platform || '';
    const maxTouchPoints = window.navigator.maxTouchPoints || 0;
    return /iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && maxTouchPoints > 1);
}

function initLottieAnimations(lottieInstance) {
    if (!lottieInstance) return;

    const animations = [
        {
            id: 'lottie-brand',
            path: '../../assets/cases/flora/lottie/shade.json',
            renderer: 'svg'
        },
        {
            id: 'lottie-spacing',
            path: '../../assets/cases/flora/lottie/responsive.json',
            renderer: 'svg'
        },
        {
            id: 'lottie-typography',
            path: '../../assets/cases/flora/lottie/type.json',
            renderer: 'svg'
        },
        {
            id: 'lottie-theming',
            path: '../../assets/cases/flora/lottie/theming.json',
            renderer: 'svg',
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        }
    ];

    animations.forEach((item) => {
        const container = document.getElementById(item.id);
        if (!container) return;

        lottieInstance.loadAnimation({
            container,
            renderer: item.renderer || 'svg',
            loop: true,
            autoplay: true,
            path: item.path,
            rendererSettings: item.rendererSettings
        });
    });
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    const lang = await detectCaseLanguage();
    applyCaseLanguage(lang);

    try {
        renderPilares();
    } catch (err) {
        console.error('Erro ao renderizar pilares:', err);
    }

    try {
        initCaseScrollFx();
    } catch (err) {
        console.error('Erro ao inicializar efeitos de scroll:', err);
    }

    hideLoading();

    ensureLottieRuntime()
        .then((lottieInstance) => {
            if (!lottieInstance) {
                console.warn('Lottie runtime indisponivel.');
                return;
            }
            initLottieAnimations(lottieInstance);
        })
        .catch((err) => {
            console.error('Erro ao inicializar Lottie:', err);
        });

    // Perenidade carousel arrows
    (function initPerenidadeCarousel() {
        const track = document.getElementById('perenidade-track');
        const left = document.querySelector('.perenidade-arrow--left');
        const right = document.querySelector('.perenidade-arrow--right');
        const steps = Array.from(document.querySelectorAll('.perenidade-step'));
        if (!track || !left || !right) return;

        const scrollBy = () => Math.max(320, Math.round(track.clientWidth * 0.6));

        const updateStepper = () => {
            if (!steps.length) return;
            const maxScroll = track.scrollWidth - track.clientWidth;
            const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
            const index = Math.max(0, Math.min(steps.length - 1, Math.round(progress * (steps.length - 1))));
            steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
        };

        left.addEventListener('click', () => {
            track.scrollBy({ left: -scrollBy(), behavior: 'smooth' });
        });

        right.addEventListener('click', () => {
            track.scrollBy({ left: scrollBy(), behavior: 'smooth' });
        });

        let rafId = 0;
        track.addEventListener('scroll', () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = 0;
                updateStepper();
            });
        }, { passive: true });

        window.addEventListener('resize', updateStepper);
        updateStepper();
    })();

    // Problema: manter altura das imagens igual � coluna esquerda
    (function syncProblema() {
        const section = document.querySelector('.section-problema');
        const left = document.querySelector('.problema-left');
        const right = document.querySelector('.problema-right');
        if (!section || !left || !right) return;

        const update = () => {
            const h = left.offsetHeight;
            if (!h) return;
            section.style.setProperty('--problema-h', `${h}px`);
            right.style.height = `${h}px`;
        };

        update();

        const ro = new ResizeObserver(update);
        ro.observe(left);

        window.addEventListener('resize', update);

        right.querySelectorAll('img').forEach((img) => {
            if (img.complete) return;
            img.addEventListener('load', update, { once: true });
        });
    })();

    // Crescimento: manter altura da coluna direita igual à esquerda
    (function syncCrescimento() {
        const section = document.querySelector('.section-crescimento');
        const left = document.querySelector('.crescimento-col--left');
        const right = document.querySelector('.crescimento-col--right');
        if (!section || !left || !right) return;

        const update = () => {
            if (window.innerWidth <= 1024) {
                section.style.setProperty('--crescimento-h', 'auto');
                return;
            }
            const h = left.offsetHeight;
            if (!h) return;
            section.style.setProperty('--crescimento-h', `${h}px`);
        };

        update();

        const ro = new ResizeObserver(update);
        ro.observe(left);

        window.addEventListener('resize', update);

        right.querySelectorAll('img').forEach((img) => {
            if (img.complete) return;
            img.addEventListener('load', update, { once: true });
        });
    })();

    
    // Adicionar smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hover removido nos cards (layout estatico conforme Figma)
});


// Processo � hover apenas na �rea desenhada (SVG �nico) (v1.0.31)
(function () {
  const section = document.querySelector('.section-processo--graph');
  if (!section || section.dataset.procHoverInit === '1') return;
  section.dataset.procHoverInit = '1';

  const cols = Array.from(section.querySelectorAll('.processo-cols .processo-col'));
  if (!cols.length) return;

  const classes = ['is-proc-col-1','is-proc-col-2','is-proc-col-3'];

  function clear() {
    classes.forEach(c => section.classList.remove(c));
  }

  cols.forEach((col, idx) => {
    const cls = classes[idx] || null;

    col.addEventListener('mouseenter', () => {
      clear();
      if (cls) section.classList.add(cls);
    });

    col.addEventListener('mouseleave', () => {
      clear();
    });

    // Acessibilidade: foco via teclado tamb�m aciona
    col.addEventListener('focus', () => {
      clear();
      if (cls) section.classList.add(cls);
    });

    col.addEventListener('blur', () => {
      clear();
    });
  });
})();


// (Removido) Pilares � altura igual ao item mais alto (v1.0.33)
// Esse bloco causava heights gigantes por medir em estados tempor�rios durante a anima��o.





