// ============================================================
// DEBESH MAHATO — PORTFOLIO SCRIPT
// Mobile nav toggle · hero typing effect · certificate lightbox
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Light / dark theme toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('dm-theme', theme); } catch (e) {}
    themeToggle?.setAttribute('aria-pressed', String(theme === 'light'));
  };

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'light'));
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.railnav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Hero typing effect ---------- */
  const heroType = document.getElementById('heroType');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const words = ['Debesh Mahato'];

  if (heroType) {
    if (prefersReducedMotion) {
      heroType.textContent = words[0];
    } else {
      let i = 0;
      const target = words[0];
      const type = () => {
        if (i <= target.length) {
          heroType.textContent = target.slice(0, i);
          i++;
          setTimeout(type, 70);
        }
      };
      type();
    }
  }

  /* ---------- Certificate lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const lightboxClose = document.getElementById('lightboxClose');
  const certCards = document.querySelectorAll('.certcard[href]');

  const openLightbox = (card) => {
    const imgSrc = card.getAttribute('href');
    const title = card.dataset.title || card.querySelector('h3')?.textContent || '';
    const org = card.dataset.org || '';
    const date = card.dataset.date || '';

    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxMeta.textContent = [org, date].filter(Boolean).join(' · ');

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  certCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(card);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---------- Reveal sections on scroll ---------- */
  const sections = document.querySelectorAll('.section, .hero');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    sections.forEach(s => { s.style.opacity = '0'; s.style.transform = 'translateY(16px)'; s.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach(s => io.observe(s));
  }

});
