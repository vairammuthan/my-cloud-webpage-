// Smooth Scroll for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Animation trigger for hero section
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');
  hero.classList.add('fadeIn');
});
