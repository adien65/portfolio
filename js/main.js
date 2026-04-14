/* =========================================
   MAIN.JS — Portfolio Matteo Gras
   ========================================= */

/* -----------------------------------------
   NAVIGATION — Glassmorphism on scroll
----------------------------------------- */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile hamburger menu
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a link is clicked
navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  });
});

/* -----------------------------------------
   SMOOTH SCROLL for anchor links
----------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = nav.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* -----------------------------------------
   ACTIVE NAV LINK — IntersectionObserver
----------------------------------------- */
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinkItems = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* -----------------------------------------
   SCROLL REVEAL — IntersectionObserver
----------------------------------------- */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealElements.forEach(el => revealObserver.observe(el));

/* -----------------------------------------
   TYPEWRITER EFFECT
----------------------------------------- */
const phrases = [
  'Développeur Web.',
  'Étudiant BTS SIO SLAM.',
];

const typewriterEl = document.getElementById('typewriter');
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
let isPaused = false;

function type() {
  if (isPaused) return;

  const current = phrases[phraseIdx];

  if (isDeleting) {
    charIdx--;
    typewriterEl.textContent = current.substring(0, charIdx);
    if (charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 45);
  } else {
    charIdx++;
    typewriterEl.textContent = current.substring(0, charIdx);
    if (charIdx === current.length) {
      isDeleting = true;
      setTimeout(type, 2200);
      return;
    }
    setTimeout(type, 85);
  }
}

// Start typewriter after a short delay
setTimeout(type, 800);

/* -----------------------------------------
   SCROLL PROGRESS BAR (optional subtle effect)
----------------------------------------- */
const progressBar = document.getElementById('scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

/* -----------------------------------------
   COPY EMAIL on click (footer)
----------------------------------------- */
const emailLink = document.getElementById('footer-email');
if (emailLink) {
  emailLink.addEventListener('click', e => {
    // Let the mailto work normally, but also show a brief visual feedback
    const orig = emailLink.textContent;
    // leave default mailto: behavior intact
  });
}

/* -----------------------------------------
   MODAL TABLEAU DE SYNTHÈSE E5
----------------------------------------- */
const modalE5 = document.getElementById('modal-e5');
const modalClose = document.getElementById('modal-e5-close');
const modalOverlay = document.getElementById('modal-e5-overlay');
const btnTableauE5 = document.getElementById('btn-tableau-e5');

function openModal() {
  if (!modalE5) return;
  modalE5.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  if (!modalE5) return;
  modalE5.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

if (btnTableauE5) {
  btnTableauE5.addEventListener('click', e => {
    // If it's a direct xlsx download we still open the modal
    // (the button has href for direct download, but we intercept for modal)
    e.preventDefault();
    openModal();
  });
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalE5 && !modalE5.hasAttribute('hidden')) {
    closeModal();
  }
});
