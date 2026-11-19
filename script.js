// LM International Academy - Frontend Interaction

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hero button scroll to courses section
  const heroBtn = document.querySelector('.hero button');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      const courses = document.querySelector('#courses');
      if (courses) {
        courses.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Optional: Animate cards on hover
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});