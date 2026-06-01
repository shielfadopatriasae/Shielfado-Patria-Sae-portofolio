// ============================================
// Portfolio JS – Shielfado Patria Sae
// ============================================

// --- Navbar scroll shadow ---
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Smooth active nav highlight ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = '';
        a.style.background = '';
      });
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active && !active.classList.contains('btn-nav')) {
        active.style.color = 'var(--blue-600)';
        active.style.background = 'var(--blue-50)';
      }
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => observer.observe(s));

// --- Fade-in on scroll ---
const fadeEls = document.querySelectorAll(
  '.cap-card, .proj-card, .tool-item, .timeline-item, .contact-card, .skills-group'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => fadeObserver.observe(el));

// --- Skill bar animation ---
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(bar => skillObserver.observe(bar));

// --- Stagger fade-in for grids ---
document.querySelectorAll('.cap-grid, .proj-grid, .tools-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});
