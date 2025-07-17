// Join form handling
const joinForm = document.getElementById('join-form');
if (joinForm) {
  joinForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formMsg = document.getElementById('form-message');
    if (formMsg) {
      formMsg.textContent = "Thank you for joining us!";
    }
    this.reset();
  });
}
  
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Fade-in animation on scroll
  function handleFadeIn() {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', handleFadeIn);
  handleFadeIn();
  
  // Active nav link highlighting
  function setActiveNav() {
    const sections = ['about', 'projects', 'communities', 'team', 'contact'];
    let current = '';
    const scrollY = window.scrollY + 120;
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollY) {
        current = id;
      }
    }
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveNav);
  setActiveNav();
});
  