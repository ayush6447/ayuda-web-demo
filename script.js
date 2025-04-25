// Join form handling
document.getElementById('join-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-message').textContent = "Thank you for joining us!";
    this.reset();
  });
  
  // Fade-in scroll animation
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  fadeEls.forEach(el => observer.observe(el));
  