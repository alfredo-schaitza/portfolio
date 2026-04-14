document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  const menuItems = Array.from(document.querySelectorAll('.menu-item'));
  const trajectoryItems = Array.from(document.querySelectorAll('.trajectory-item'));

  const copy = {
    pt: {
      htmlLang: 'pt-BR',
      aria: {
        sidebar: 'Menu lateral',
        top: 'Voltar ao topo',
        nav: 'Navegação principal',
        social: 'Redes sociais',
        carouselDots: 'Navegação do carrossel',
        prev: 'Anterior',
        next: 'Próximo'
      },
      menu: ['Sobre Mim', 'Trajetória', 'Cases de Sucesso', 'Samples', 'Publicações'],
      heroSubtitle: 'STAFF PRODUCT DESIGNER |\nTECHNICAL LEADERSHIP | DESIGN STRATEGY |\nDESIGN OPS | DESIGN SYSTEMS',
      heroBtn: 'MAIS SOBRE MIM',
      about: [
        { title: 'Pai & Marido', subtitle: 'Meu melhor eu' },
        { title: 'Crossfiteiro', subtitle: 'Todos os dias às 6h' },
        { title: 'Comidas & Drinks', subtitle: 'Para compartilhar' },
        { title: 'Games', subtitle: 'Para descontrair' }
      ],
      trajectory: {
        eyebrow: 'TRAJETÓRIA',
        title: 'CARREIRA ORIENTADA A IMPACTO E ESCALA',
        intro: `Staff Product Designer com mais de 15 anos de experiência na construção de produtos digitais escaláveis, design systems robustos e frameworks orientados a impacto. Minha trajetória combina atuação como Individual Contributor sênior e liderança formal, sendo minha experiência mais recente em gestão. Ao longo dessa jornada, identifiquei que meu maior impacto ocorre como IC, especialmente no craft, na geração de conceitos, na fluência em métricas, na experimentação estruturada e na proximidade com usuários, transformando evidências em decisões estratégicas e valor tangível para o negócio.
            <br /><br />
            A vivência em gestão ampliou minha visão sistêmica, capacidade de priorização em contextos complexos e influência organizacional, além de fortalecer minha atuação como mentor de designers em diferentes níveis de maturidade. Especializado em Design de Interação, Design Systems e Product Design orientado a métricas, liderei a idealização e a escala do Flora no Grupo Boticário, hoje presente em mais de 100 squads, impulsionando ganhos de eficiência, evolução de maturidade e melhorias mensuráveis na experiência de usuários finais e internos.`,
        acting: 'ATUAÇÃO',
        outcomes: 'ENTREGAS E RESULTADOS',
        jobs: [
          {
            role: 'UX Manager',
            acting: [
              'Liderança da Gerência de UX Core, atuando em frentes estruturantes como Design System, Design Ops, Acessibilidade/Design Inclusivo e Content Design, com times multidisciplinares e até 30 pessoas sob gestão direta e indireta.',
              'Desenho organizacional e escala da área de UX, apoiando a evolução de um time inicial de 10 designers para uma estrutura com mais de 200 profissionais, integrada a Produto, Dados e Engenharia.',
              'Definição de visão estratégica, ritos, processos e governança de UX para suportar uma operação digital multimarcas, multicanal e multitecnologia.',
              'Atuação como liderança técnica e estratégica, influenciando decisões executivas e garantindo alinhamento entre estratégia de negócio, experiência do usuário e excelência de execução.'
            ],
            outcomes: [
              'Implementação e escala de um Design System corporativo multimarcas e multitecnologia (React e Flutter), impactando toda a cadeia de valor do Grupo Boticário.',
              'Consolidação da cultura de UX como competência central da companhia, contribuindo para o crescimento da área de tecnologia de aproximadamente 300 para 3000 pessoas.',
              'Desenvolvimento de repositórios de pesquisa conectados a IA.',
              'Criação do fluxo padrão de trabalho de UX, desdobrado no Businessmap (ferramenta similar ao Jira), permitindo mensurar eficiência operacional do trabalho de UX em relação aos resultados atingidos pelas entregas.',
              'Definição de ritos de troca entre times e dentro das squads.',
              'Estruturação dos ritos do chapter de design.',
              'Estruturação do processo de levelling de UX considerando prismas de Product Design, Research e Content Design.',
              'Seleção, gestão e governança das ferramentas utilizadas por todo o chapter, abrangendo pesquisa, prototipação, experimentação e testes com usuários.',
              'Desenvolvimento de agentes de IA para acessibilidade, realizando descrição automatizada de imagens para ampliar acesso a pessoas com deficiência visual.'
            ]
          },
          {
            role: 'Staff Product Designer / Technical Leader',
            acting: [
              'Liderança técnica de UX na internalização de experiências digitais antes desenvolvidas por parceiros externos, estruturando squads multidisciplinares e processos end to end.',
              'Concepção do Design System do Grupo Boticário e estruturação inicial da área de Design Ops, conectando design, engenharia e produto em escala.',
              'Contratação, mentoria e desenvolvimento de designers, além da definição de ritos, métodos e boas práticas para garantir qualidade e consistência.',
              'Atuação como consultor estratégico, influenciando decisões de produto e tecnologia em um contexto de transformação digital acelerada.'
            ],
            outcomes: [
              'Internalização de múltiplos produtos digitais, concepção de novos produtos ao longo do processo e estruturação de soluções digitais em diferentes frentes:',
              'E-commerce',
              'Experiências digitais em loja',
              'Produtos para revendedores',
              'Sistemas de backoffice',
              'Criação das bases do Design System que viria a sustentar a operação digital multimarcas da companhia nos anos seguintes.',
              'Fortalecimento da percepção de UX e Tecnologia como áreas estratégicas, deixando de ser vistas apenas como suporte ou infraestrutura.',
              'Evolução da maturidade de design da organização, com maior integração entre UX, Dados, Produto e Engenharia.'
            ]
          },
          {
            role: 'Design Lead / Technical Design Leader',
            acting: [
              'Liderança de projetos estratégicos e de novos negócios, atuando desde a construção de escopo, proposta, orçamento e conceituação até a entrega final.',
              'Definição de padrões de qualidade, processos e direcionais de design para times atuando em diferentes contas e modelos de alocação.',
              'Atuação hands-on como principal designer em projetos complexos, conduzindo processos de design ponta a ponta em contextos ágeis e colaborativos.',
              'Relacionamento direto com clientes, traduzindo necessidades de negócio em experiências digitais de alto impacto.'
            ],
            outcomes: [
              'Entrega de projetos de alta complexidade para marcas como Hellmann’s, Porto Seguro, Nextel, Cyrela e Grupo Boticário, com impacto direto em engajamento, conversão e geração de leads.',
              'Estruturação de ativações digitais internacionais (Brasil e México) para Hellmann’s, fortalecendo relacionamento e encantamento com a marca.',
              'Transformação do site da Porto Seguro em um dos principais canais de captação e contratação de serviços da companhia.'
            ]
          },
          {
            role: 'Senior Visual Designer',
            acting: [
              'Condução de projetos de UX end to end, desde pesquisa e definição do problema até conceituação, validação e entrega.',
              'Atuação em contextos remotos e alocado no cliente, garantindo proximidade com stakeholders e entendimento profundo do negócio.',
              'Aplicação de métodos colaborativos como Design Sprints, workshops e testes com usuários.',
              'Tradução de necessidades complexas de negócio em experiências digitais intuitivas, engajadoras e orientadas a resultados.'
            ],
            outcomes: [
              'Redesign de experiências digitais para grandes marcas, com ganhos expressivos em conversão, engajamento e satisfação do usuário.',
              'Criação de soluções como planos modulares para Nextel, aumentando contratação e adequação às necessidades do usuário.',
              'Digitalização da experiência de empreendimentos de super luxo da Cyrela, impulsionando encantamento e agendamento de visitas.',
              'Reconhecimento como designer sênior de referência para novos projetos e desafios estratégicos.'
            ]
          }
        ]
      },
      caseStudy: {
        eyebrow: 'FLORA DESIGN LANGUAGE',
        title: 'CONSISTÊNCIA, VELOCIDADE E EFICIÊNCIA EM UM DOS MAIORES ECOSSISTEMAS DIGITAIS DO PAÍS.',
        button: 'CASE COMPLETO',
        url: 'cases/flora/',
        carouselImg: 'assets/home/carrossel-pt.png'
      },
      samples: {
        eyebrow: 'SAMPLES',
        title: 'PROJETOS QUE MARCARAM MINHA TRAJETÓRIA'
      },
      publications: {
        eyebrow: 'PUBLICAÇÕES',
        title: 'UM POUCO SOBRE O QUE TENHO A DIZER'
      }
    },
    en: {
      htmlLang: 'en-US',
      aria: {
        sidebar: 'Side menu',
        top: 'Back to top',
        nav: 'Main navigation',
        social: 'Social links',
        carouselDots: 'Carousel navigation',
        prev: 'Previous',
        next: 'Next'
      },
      menu: ['About Me', 'Journey', 'Success Cases', 'Samples', 'Publications'],
      heroSubtitle: 'PRODUCT DESIGNER |\nEND-TO-END DELIVERY | DESIGN STRATEGY |\nDESIGN OPS | DESIGN SYSTEMS',
      heroBtn: 'MORE ABOUT ME',
      about: [
        { title: 'Father & Husband', subtitle: 'My best self' },
        { title: 'CrossFitter', subtitle: 'Every day at 6am' },
        { title: 'Food & Drinks', subtitle: 'To share' },
        { title: 'Games', subtitle: 'To unwind' }
      ],
      trajectory: {
        eyebrow: 'JOURNEY',
        title: 'A CAREER FOCUSED ON IMPACT AND SCALE',
        intro: `Product Designer with over 15 years of experience designing digital products end-to-end, from discovery and concept through user validation and delivery. My work combines interaction design and visual design craft with a strong foundation in design systems and design ops, always connecting product decisions to measurable outcomes.
            <br /><br />
            At Grupo Boticário, I designed and shipped products across multiple squads while leading the creation and scaling of Flora, a multi-brand, multi-technology design system now used by 100+ teams. In parallel, I worked as a design ops specialist, improving internal processes, implementing tooling, and raising the quality and predictability of design delivery across the organization.`,
        acting: 'SCOPE',
        outcomes: 'DELIVERIES AND RESULTS',
        jobs: [
          {
            role: 'Product Design & Design Ops Specialist',
            acting: [
              'Worked end-to-end across the product design process, from discovery and concept through validation and delivery, with a strong focus on visual design, interaction design, and craft quality.',
              'Led the evolution of Flora, Grupo Boticário\'s design system, across all layers: from foundational decisions and reusable, customizable component architecture to product design and feature delivery alongside dedicated squads. The work was hands-on in both design system and product design, including direct consultation and mentorship for product squads.',
              'Designed and built an internal product management framework and dashboard to consolidate visibility into digital product metrics, foster shared accountability across Design, Product, and Engineering, and align cross-functional teams around business outcomes.',
              'Built AI-powered research repositories to expand access to user data and support the development of more user-centered digital products.',
              'Managed the internal UX toolstack, including Hotjar, Maze, Miro, and Figma, covering vendor relationships, cost management, and internal enablement and training programs.',
              'Standardized the UX workflow in project management tools such as Jira, enabling cycle time, lead time, and throughput analysis and supporting continuous process improvement across all design stages.'
            ],
            outcomes: [
              'Implemented and scaled Flora, a corporate, multi-brand, multi-technology Design System (React and Flutter), impacting the entire value chain of Grupo Boticário.',
              'Consolidated UX as a core organizational capability, supporting the growth of the technology area from approximately 300 to 3,000 people.',
              'Increased operational efficiency and predictability across product squads through process standardization and tooling integration.',
              'Led the creation of AI agents for accessibility, automating image descriptions and expanding inclusion for people with visual impairments.'
            ]
          },
          {
            role: 'Staff Product Designer / Technical Leader',
            acting: [
              'Provided UX technical leadership for internalizing digital experiences previously developed by external partners, structuring multidisciplinary squads and end-to-end processes.',
              'Conceived Grupo Boticario\'s Design System and established the initial Design Ops capability, connecting design, engineering, and product at scale.',
              'Hired, mentored, and developed designers, while defining rituals, methods, and best practices to ensure quality and consistency.',
              'Acted as a strategic advisor, influencing product and technology decisions in a context of accelerated digital transformation.'
            ],
            outcomes: [
              'Internalized multiple digital products, conceived new products throughout the process, and structured digital solutions across different fronts:',
              'E-commerce',
              'In-store digital experiences',
              'Products for resellers',
              'Back-office systems',
              'Created the foundations of the Design System that would support the company\'s multi-brand digital operation in subsequent years.',
              'Strengthened the perception of UX and Technology as strategic areas, no longer seen only as support or infrastructure.',
              'Increased design maturity across the organization, with stronger integration between UX, Data, Product, and Engineering.'
            ]
          },
          {
            role: 'Design Lead / Technical Design Leader',
            acting: [
              'Led strategic projects and new business initiatives from scope definition, proposal, budget, and concept creation through final delivery.',
              'Defined quality standards, processes, and design direction for teams working across different accounts and allocation models.',
              'Worked hands-on as the lead designer in complex projects, driving end-to-end design processes in agile, collaborative contexts.',
              'Managed direct client relationships, translating business needs into high-impact digital experiences.'
            ],
            outcomes: [
              'Delivered high-complexity projects for brands such as Hellmann\'s, Porto Seguro, Nextel, Cyrela, and Grupo Boticario, directly impacting engagement, conversion, and lead generation.',
              'Structured international digital activations (Brazil and Mexico) for Hellmann\'s, strengthening brand relationship and delight.',
              'Helped transform Porto Seguro\'s website into one of the company\'s main channels for lead capture and service contracting.'
            ]
          },
          {
            role: 'Senior Visual Designer',
            acting: [
              'Led end-to-end UX projects, from research and problem framing to concept, validation, and delivery.',
              'Worked in remote contexts and embedded at client sites, ensuring stakeholder proximity and deep business understanding.',
              'Applied collaborative methods such as Design Sprints, workshops, and user testing.',
              'Translated complex business needs into intuitive, engaging digital experiences focused on outcomes.'
            ],
            outcomes: [
              'Redesigned digital experiences for major brands, achieving significant gains in conversion, engagement, and user satisfaction.',
              'Created solutions such as modular plans for Nextel, increasing adoption and better matching user needs.',
              'Digitized the experience of Cyrela\'s super luxury developments, boosting delight and visit scheduling.',
              'Recognized as a senior design reference for new projects and strategic challenges.'
            ]
          }
        ]
      },
      caseStudy: {
        eyebrow: 'FLORA DESIGN LANGUAGE',
        title: 'CONSISTENCY, SPEED, AND EFFICIENCY IN ONE OF THE COUNTRY\'S LARGEST DIGITAL ECOSYSTEMS.',
        button: 'FULL CASE STUDY',
        url: 'https://www.behance.net/gallery/247525035/Flora-Design-System',
        newTab: true,
        carouselImg: 'assets/home/carrossel.png'
      },
      samples: {
        eyebrow: 'SAMPLES',
        title: 'PROJECTS THAT SHAPED MY JOURNEY'
      },
      publications: {
        eyebrow: 'PUBLICATIONS',
        title: 'A BIT ABOUT WHAT I HAVE TO SAY'
      }
    }
  };

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (!el || typeof value !== 'string') return;
    el.textContent = value;
  };

  const applyLanguage = (langCode) => {
    const lang = copy[langCode] ? langCode : 'pt';
    const content = copy[lang];

    document.documentElement.lang = content.htmlLang;

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.setAttribute('aria-label', content.aria.sidebar);

    const topLink = document.querySelector('.sidebar-smile');
    if (topLink) topLink.setAttribute('aria-label', content.aria.top);

    const nav = document.querySelector('.menu');
    if (nav) nav.setAttribute('aria-label', content.aria.nav);

    const social = document.querySelector('.social');
    if (social) social.setAttribute('aria-label', content.aria.social);

    document.querySelectorAll('.menu-item').forEach((item, index) => {
      if (!content.menu[index]) return;
      item.textContent = content.menu[index];
    });

    const heroSubtitleEl = document.querySelector('.hero-copy > p');
    if (heroSubtitleEl) {
      heroSubtitleEl.innerHTML = content.heroSubtitle.replace(/\n/g, '<br />');
    }

    const heroBtnLabel = document.querySelector('.hero-copy .btn-primary__label');
    if (heroBtnLabel) {
      heroBtnLabel.innerHTML = `${content.heroBtn} <span>↓</span>`;
    }

    document.querySelectorAll('.about-card').forEach((card, index) => {
      const data = content.about[index];
      if (!data) return;
      const title = card.querySelector('.about-topic strong');
      const subtitle = card.querySelector('.about-topic span');
      if (title) title.textContent = data.title;
      if (subtitle) subtitle.textContent = data.subtitle;
    });

    setText('.trajectory .trajectory-intro .eyebrow', content.trajectory.eyebrow);
    setText('.trajectory .trajectory-intro h2', content.trajectory.title);
    const intro = document.querySelector('.trajectory .trajectory-intro .intro');
    if (intro) intro.innerHTML = content.trajectory.intro;

    trajectoryItems.forEach((item, index) => {
      const data = content.trajectory.jobs[index];
      if (!data) return;

      const role = item.querySelector('.trajectory-role');
      if (role) role.textContent = data.role;

      const sectionTitles = item.querySelectorAll('h3');
      if (sectionTitles[0]) sectionTitles[0].textContent = content.trajectory.acting;
      if (sectionTitles[1]) sectionTitles[1].textContent = content.trajectory.outcomes;

      const lists = item.querySelectorAll('ul');
      const actingList = lists[0];
      const outcomesList = lists[1];

      if (actingList) {
        actingList.innerHTML = data.acting.map(text => `<li>${text}</li>`).join('');
      }

      if (outcomesList) {
        outcomesList.innerHTML = data.outcomes.map(text => `<li>${text}</li>`).join('');
      }
    });

    setText('.case .eyebrow', content.caseStudy.eyebrow);
    setText('.case .case-head h2', content.caseStudy.title);
    const caseBtnLabel = document.querySelector('.case .btn-primary__label');
    if (caseBtnLabel) {
      caseBtnLabel.innerHTML = `${content.caseStudy.button} <span>→</span>`;
    }
    const caseVisualImg = document.querySelector('.case-visual img');
    if (caseVisualImg) {
      caseVisualImg.src = content.caseStudy.carouselImg;
    }

    const caseBtn = document.querySelector('.case .btn-primary');
    if (caseBtn) {
      caseBtn.href = content.caseStudy.url;
      if (content.caseStudy.newTab) {
        caseBtn.setAttribute('target', '_blank');
        caseBtn.setAttribute('rel', 'noopener noreferrer');
      } else {
        caseBtn.removeAttribute('target');
        caseBtn.removeAttribute('rel');
      }
    }

    setText('.samples .eyebrow', content.samples.eyebrow);
    setText('.samples h2', content.samples.title);

    setText('.publications .eyebrow', content.publications.eyebrow);
    setText('.publications h2', content.publications.title);

    const dotsNav = document.querySelector('.carousel-dots');
    if (dotsNav) dotsNav.setAttribute('aria-label', content.aria.carouselDots);

    const prevBtn = document.querySelector('.carousel-btn.prev');
    if (prevBtn) prevBtn.setAttribute('aria-label', content.aria.prev);

    const nextBtn = document.querySelector('.carousel-btn.next');
    if (nextBtn) nextBtn.setAttribute('aria-label', content.aria.next);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
  };

  const detectLanguageByCountry = async () => {
    const saved = localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') return saved;

    const params = new URLSearchParams(window.location.search);
    const forcedLang = params.get('lang');
    if (forcedLang === 'pt' || forcedLang === 'en') return forcedLang;

    const lusophoneCountries = new Set(['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL']);

    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 1500);
      const response = await fetch('https://ipapi.co/json/', {
        signal: controller.signal
      });
      window.clearTimeout(timeout);

      if (response.ok) {
        const payload = await response.json();
        const countryCode = String(payload.country_code || '').toUpperCase();
        if (countryCode) return lusophoneCountries.has(countryCode) ? 'pt' : 'en';
      }
    } catch (_) {
      // Falls back to browser locale when country lookup fails.
    }

    const browserLocale = (navigator.language || '').toLowerCase();
    return browserLocale.startsWith('pt') ? 'pt' : 'en';
  };

  detectLanguageByCountry().then(applyLanguage);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('lang', btn.dataset.lang);
      applyLanguage(btn.dataset.lang);
    });
  });

  const initHeroCircleBackground = () => {
    const host = document.getElementById('hero-bg');
    if (!host) return;

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2', { alpha: true, antialias: true });
    if (!gl) return;
    host.appendChild(canvas);

    const vertexSrc = `#version 300 es
      in vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentSrc = `#version 300 es
      precision highp float;

      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uPixelSize;
      out vec4 fragColor;

      float bayer2(vec2 a) {
        a = floor(a);
        return fract(a.x / 2.0 + a.y * a.y * 0.75);
      }
      float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
      float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

      float hash11(float n) { return fract(sin(n) * 43758.5453); }

      float vnoise(vec3 p) {
        vec3 ip = floor(p);
        vec3 fp = fract(p);
        vec3 w = fp * fp * fp * (fp * (fp * 6.0 - 15.0) + 10.0);

        float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
        float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
        float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
        float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
        float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
        float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
        float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
        float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));

        float x00 = mix(n000, n100, w.x);
        float x10 = mix(n010, n110, w.x);
        float x01 = mix(n001, n101, w.x);
        float x11 = mix(n011, n111, w.x);
        float y0  = mix(x00, x10, w.y);
        float y1  = mix(x01, x11, w.y);
        return mix(y0, y1, w.z) * 2.0 - 1.0;
      }

      float fbm2(vec2 uv, float t) {
        vec3 p = vec3(uv * 4.0, t);
        float amp = 1.0;
        float freq = 1.0;
        float sum = 1.0;
        for (int i = 0; i < 5; ++i) {
          sum += amp * vnoise(p * freq);
          freq *= 1.25;
          amp *= 1.0;
        }
        return sum * 0.5 + 0.5;
      }

      float maskCircle(vec2 p, float cov) {
        float r = sqrt(cov) * 1.0;
        float d = length(p - 0.5) - r;
        float aa = 0.5 * fwidth(d);
        return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
      }

      void main() {
        float pixelSize = uPixelSize;
        vec2 fragCoord = gl_FragCoord.xy - uResolution * 0.5;
        float aspectRatio = uResolution.x / uResolution.y;

        float cellPixelSize = 8.0 * pixelSize;
        vec2 cellUV = fract(fragCoord / cellPixelSize);
        vec2 cellId = floor(fragCoord / cellPixelSize);
        vec2 cellCoord = cellId * cellPixelSize;
        vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

        float feed = fbm2(uv, uTime * 0.05);
        feed = feed * 0.5 - 0.65;

        float bayer = bayer8(fragCoord / uPixelSize) - 0.5;
        float bw = step(0.8, feed + bayer);
        float alpha = maskCircle(cellUV, bw);

        fragColor = vec4(uColor, alpha);
      }
    `;

    const compileShader = (type, src) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSrc);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSrc);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const vertices = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uColor = gl.getUniformLocation(program, 'uColor');
    const uPixelSize = gl.getUniformLocation(program, 'uPixelSize');

    let lastW = 0;
    let lastH = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = host.getBoundingClientRect();
      const nextW = Math.max(1, Math.floor(rect.width * dpr));
      const nextH = Math.max(1, Math.floor(rect.height * dpr));
      if (nextW === lastW && nextH === lastH) return;
      lastW = nextW;
      lastH = nextH;
      canvas.width = nextW;
      canvas.height = nextH;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const start = performance.now();
    const render = () => {
      resize();
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) * 0.001);
      gl.uniform3f(uColor, 0.10, 0.16, 0.42);
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      gl.uniform1f(uPixelSize, isMobile ? 12.0 : 4.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    render();
  };

  initHeroCircleBackground();

  const scrollToTarget = (id) => {
    const target = document.querySelector(id);
    if (!target) return;

    const top = target.offsetTop;
    if (main && window.matchMedia('(min-width: 769px)').matches) {
      main.scrollTo({ top, behavior: 'smooth' });
      return;
    }

    window.scrollTo({ top, behavior: 'smooth' });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      event.preventDefault();
      scrollToTarget(href);
    });
  });

  const updateMenu = () => {
    const scrollTop = main && window.matchMedia('(min-width: 769px)').matches
      ? main.scrollTop
      : window.scrollY;

    let activeId = '';
    ['#sobre-mim', '#trajetoria', '#case-sucesso', '#samples', '#publicacoes'].forEach((id) => {
      const section = document.querySelector(id);
      if (section && scrollTop + 120 >= section.offsetTop) {
        activeId = id;
      }
    });

    menuItems.forEach((item) => {
      item.classList.toggle('is-active', item.getAttribute('href') === activeId);
    });
  };

  if (main) {
    main.addEventListener('scroll', updateMenu, { passive: true });
  }
  window.addEventListener('scroll', updateMenu, { passive: true });
  updateMenu();

  trajectoryItems.forEach((item) => {
    const button = item.querySelector('.trajectory-header');
    if (!button) return;

    item.addEventListener('click', () => {
      const alreadyExpanded = item.classList.contains('expanded');

      trajectoryItems.forEach((entry) => {
        entry.classList.remove('expanded');
        const control = entry.querySelector('.trajectory-header');
        const arrow = entry.querySelector('.trajectory-arrow img');
        if (control) control.setAttribute('aria-expanded', 'false');
        if (arrow) arrow.setAttribute('src', 'assets/home/arrow-down.svg');
      });

      if (!alreadyExpanded) {
        item.classList.add('expanded');
        button.setAttribute('aria-expanded', 'true');
        const arrow = item.querySelector('.trajectory-arrow img');
        if (arrow) arrow.setAttribute('src', 'assets/home/arrow-up.svg');
      }
    });
  });

  const cards = Array.from(document.querySelectorAll('.article-card'));
  const track = document.querySelector('.carousel-track');
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');

  let current = 0;

  const updateCarousel = () => {
    if (!track || !cards.length) return;
    if (window.matchMedia('(max-width: 768px)').matches) {
      track.style.transform = 'none';
      return;
    }

    const cardWidth = cards[0].getBoundingClientRect().width + 16;
    track.style.transform = `translateX(-${current * cardWidth}px)`;

    dots.forEach((dot, index) => dot.classList.toggle('active', index === current));
    if (prev) prev.disabled = current === 0;
    if (next) next.disabled = current === cards.length - 1;
  };

  if (prev) {
    prev.addEventListener('click', () => {
      current = Math.max(0, current - 1);
      updateCarousel();
    });
  }

  if (next) {
    next.addEventListener('click', () => {
      current = Math.min(cards.length - 1, current + 1);
      updateCarousel();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      current = index;
      updateCarousel();
    });
  });

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-url');
      if (!url) return;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      if (track) track.style.transform = 'none';
      return;
    }
    updateCarousel();
  });

  updateCarousel();

  const caseVisual = document.querySelector('.case-visual');
  if (caseVisual) {
    const centerVisual = () => {
      caseVisual.scrollLeft = (caseVisual.scrollWidth - caseVisual.clientWidth) / 2;
    };
    window.addEventListener('load', centerVisual, { once: true });
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const isDesktop = () => window.matchMedia('(min-width: 769px)').matches;
  const observerRoot = main && isDesktop() ? main : null;
  const heroSection = document.querySelector('#topo');
  const aboutSection = document.querySelector('#sobre-mim');
  const aboutCards = aboutSection
    ? Array.from(aboutSection.querySelectorAll('.about-card'))
    : [];
  const manualFadeTargets = new Set([heroSection, aboutSection, ...aboutCards].filter(Boolean));

  const fadeTargets = Array.from(new Set([
    ...document.querySelectorAll('section'),
    ...document.querySelectorAll('.trajectory-item'),
    ...document.querySelectorAll('.sample-card'),
    ...document.querySelectorAll('.publications .carousel')
  ]));

  fadeTargets.forEach((el, index) => {
    el.classList.add('fx-fade');
    el.style.setProperty('--fade-delay', `${Math.min(index * 35, 280)}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    root: observerRoot,
    threshold: 0.14,
    rootMargin: '0px 0px -12% 0px'
  });

  fadeTargets.forEach((el) => {
    if (manualFadeTargets.has(el)) return;
    revealObserver.observe(el);
  });

  const revealElement = (el, delay = 0) => {
    if (!el) return;
    window.setTimeout(() => {
      window.requestAnimationFrame(() => el.classList.add('is-visible'));
    }, delay);
  };

  revealElement(heroSection, 80);
  revealElement(aboutSection, 480);
  aboutCards.forEach((item, index) => {
    revealElement(item, 620 + index * 90);
  });

  const parallaxTargets = Array.from(document.querySelectorAll(
    '.hero-avatar, .hero-copy, .trajectory-intro, .samples-grid, .carousel'
  ));
  parallaxTargets.forEach((el) => el.classList.add('fx-parallax'));

  let rafId = 0;
  const updateParallax = () => {
    rafId = 0;
    const viewportHeight = main && isDesktop() ? main.clientHeight : window.innerHeight;
    const viewportCenter = viewportHeight * 0.5;
    const maxShift = isDesktop() ? 26 : 14;

    parallaxTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -80 || rect.top > viewportHeight + 80) return;

      const elementCenter = rect.top + rect.height * 0.5;
      const normalized = (elementCenter - viewportCenter) / viewportCenter;
      const shift = Math.max(-maxShift, Math.min(maxShift, -normalized * maxShift * 0.65));
      el.style.setProperty('--parallax-y', `${shift.toFixed(2)}px`);
    });
  };

  const scheduleParallax = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(updateParallax);
  };

  if (main) {
    main.addEventListener('scroll', scheduleParallax, { passive: true });
  }
  window.addEventListener('scroll', scheduleParallax, { passive: true });
  window.addEventListener('resize', scheduleParallax);
  scheduleParallax();
});
