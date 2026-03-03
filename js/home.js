document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  const menuItems = Array.from(document.querySelectorAll('.menu-item'));

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

  const trajectoryItems = Array.from(document.querySelectorAll('.trajectory-item'));
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
    '.hero-avatar, .hero-copy, .trajectory-intro, .case-card, .samples-grid, .carousel'
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
