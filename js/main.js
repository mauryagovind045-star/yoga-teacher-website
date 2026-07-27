// Scroll-triggered reveals
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Mobile navigation
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
