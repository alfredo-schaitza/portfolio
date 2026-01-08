document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  if (!main) return;

  /* =======================================================
     Anchor navigation: rolar dentro do .main
     ======================================================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    // Se o destino for depois da Trajetória, desliga snap para não “puxar de volta”
    if (href === '#case-sucesso' || href === '#publicacoes') {
      main.classList.remove('snap-enabled');
    }

    // Rola o container correto (.main)
    main.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});


  /* =======================================================
     Menu highlight (scroll spy) - preto + peso 500
     ======================================================= */
  const menuLinks = Array.from(document.querySelectorAll('.menu-item'));
  const linkSections = menuLinks
    .map(link => {
      const id = link.getAttribute('href');
      if (!id || !id.startsWith('#')) return null;
      const section = document.querySelector(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const setActiveMenuItem = () => {
    const scrollTop = main.scrollTop;
    const viewportHeight = main.clientHeight;
    const referenceLine = scrollTop + viewportHeight * 0.30;

    let active = null;
    for (let i = linkSections.length - 1; i >= 0; i--) {
      const { link, section } = linkSections[i];
      if (section.offsetTop <= referenceLine) {
        active = link;
        break;
      }
    }

    menuLinks.forEach(l => l.classList.remove('is-active'));
    if (active) active.classList.add('is-active');
  };

  main.addEventListener('scroll', setActiveMenuItem, { passive: true });
  setActiveMenuItem();

  /* =======================================================
     Trajetória: expand/collapse (clique no item inteiro)
     ======================================================= */
  const trajectoryItems = Array.from(document.querySelectorAll('.trajectory-item'));
  trajectoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;

      const isExpanded = item.classList.contains('expanded');
      trajectoryItems.forEach(i => i.classList.remove('expanded'));
      if (!isExpanded) item.classList.add('expanded');
    });
  });

  /* =======================================================
     Cursor custom (+ / -) na Trajetória
     ======================================================= */
  const trajSection = document.querySelector('.trajectory');
  const trajCursor = document.querySelector('.traj-cursor');

  if (trajSection && trajCursor) {
    const showCursor = () => {
      trajCursor.style.display = 'block';
      trajSection.classList.add('cursor-active');
    };

    const hideCursor = () => {
      trajCursor.style.display = 'none';
      trajSection.classList.remove('cursor-active');
    };

    const moveCursor = (e) => {
      trajCursor.style.left = `${e.clientX}px`;
      trajCursor.style.top = `${e.clientY}px`;
    };

    const updateCursorState = (e) => {
      const item = e.target.closest('.trajectory-item');
      if (!item) return;

      const isExpanded = item.classList.contains('expanded');
      trajCursor.classList.toggle('is-plus', !isExpanded);
      trajCursor.classList.toggle('is-minus', isExpanded);
    };

    trajSection.addEventListener('mouseenter', showCursor);
    trajSection.addEventListener('mouseleave', hideCursor);
    trajSection.addEventListener('mousemove', (e) => {
      moveCursor(e);
      updateCursorState(e);
    });
  }

  /* =======================================================
     Snap controlado:
     Hero <-> Gallery <-> Trajectory (ida e volta)
     Depois da Trajetória: rolagem natural
     ======================================================= */
  const hero = document.querySelector('.hero');
  const gallery = document.querySelector('.gallery');
  const trajectory = document.querySelector('.trajectory');

  if (hero && gallery && trajectory) {
    const snapPoints = [hero, gallery, trajectory];
    let isAutoSnapping = false;
    let lastSnapIndex = 0;

    const getOffsets = () => snapPoints.map(el => el.offsetTop);

    const getCurrentSnapIndex = (scrollTop, offsets) => {
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < offsets.length; i++) {
        const d = Math.abs(scrollTop - offsets[i]);
        if (d < bestDist) { bestDist = d; best = i; }
      }
      return best;
    };

    const setSnapEnabled = (enabled) => {
      main.classList.toggle('snap-enabled', enabled);
    };

    const updateSnapMode = () => {
      const offsets = getOffsets();
      const trajectoryTop = offsets[2];
      const scrollTop = main.scrollTop;

      // Snap ativo até o topo da Trajetória (inclusive), depois desliga
      const inSnapZone = scrollTop <= trajectoryTop + 2;
      setSnapEnabled(inSnapZone);

      lastSnapIndex = getCurrentSnapIndex(scrollTop, offsets);
    };

    const onWheel = (e) => {
      if (!main.classList.contains('snap-enabled')) return;
      if (isAutoSnapping) return;

      const offsets = getOffsets();
      const dir = Math.sign(e.deltaY);

      const nextIndex = Math.min(offsets.length - 1, lastSnapIndex + 1);
      const prevIndex = Math.max(0, lastSnapIndex - 1);

      if (dir > 0 && nextIndex === lastSnapIndex) return;
      if (dir < 0 && prevIndex === lastSnapIndex) return;

      e.preventDefault();
      isAutoSnapping = true;

      const targetIndex = dir > 0 ? nextIndex : prevIndex;
      main.scrollTo({ top: offsets[targetIndex], behavior: 'smooth' });

      window.setTimeout(() => {
        isAutoSnapping = false;
        updateSnapMode();
      }, 500);
    };

    main.addEventListener('scroll', updateSnapMode, { passive: true });
    main.addEventListener('wheel', onWheel, { passive: false });

    setSnapEnabled(true);
    updateSnapMode();
  }

  /* =======================================================
     Carrossel de publicações
     ======================================================= */
  const carouselTrack = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dots = Array.from(document.querySelectorAll('.dot'));

  if (carouselTrack && prevBtn && nextBtn && dots.length) {
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.article-card').length;

    const updateCarousel = () => {
      const firstCard = document.querySelector('.article-card');
      const gap = 16;
      const slideWidth = (firstCard ? firstCard.getBoundingClientRect().width : 704) + gap;

      carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
    };

    prevBtn.addEventListener('click', () => {
      currentSlide = Math.max(currentSlide - 1, 0);
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
      updateCarousel();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }
});

/* =======================================================
   Publicações: cards clicáveis + cursor custom (olho)
   (cursor aparece apenas sobre os cards)
   ======================================================= */
const pubCursor = document.querySelector('.pub-cursor');
const pubCards = Array.from(document.querySelectorAll('.article-card[data-url]'));

if (pubCursor && pubCards.length) {
  const showCursor = (card) => {
    pubCursor.style.display = 'flex';
    card.classList.add('cursor-active');
  };

  const hideCursor = (card) => {
    pubCursor.style.display = 'none';
    card.classList.remove('cursor-active');
  };

  const moveCursor = (e) => {
    pubCursor.style.left = `${e.clientX}px`;
    pubCursor.style.top = `${e.clientY}px`;
  };

  const openCard = (card) => {
    const url = card.getAttribute('data-url');
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  pubCards.forEach(card => {
    card.addEventListener('mouseenter', () => showCursor(card));
    card.addEventListener('mouseleave', () => hideCursor(card));
    card.addEventListener('mousemove', moveCursor);

    card.addEventListener('click', (e) => {
      // Evita abrir caso o clique seja nos controles do carrossel (se estiverem sobrepostos)
      if (e.target.closest('.carousel-controls')) return;
      openCard(card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCard(card);
      }
    });
  });
}


/* Mobile: disable snap entirely */
(function () {
  const mq = window.matchMedia('(max-width: 640px)');
  function apply() {
    const main = document.querySelector('.main');
    if (!main) return;
    if (mq.matches) {
      main.classList.remove('snap-enabled');
      main.style.scrollSnapType = 'none';
      // also release body scroll, since desktop uses .main
      document.body.style.overflow = 'auto';
    } else {
      // restore desktop behavior (body hidden, main scroll container) only if CSS expects it
      document.body.style.overflow = 'hidden';
      main.style.scrollSnapType = '';
    }
  }
  apply();
  mq.addEventListener?.('change', apply);
})();
