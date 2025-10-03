document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.sidebar a');
  const toggleNightMode = document.querySelector('#toggle-night-mode');
  const hamburger = document.querySelector('#hamburger');
  const sidebar = document.querySelector('.sidebar');
  const splash = document.querySelector('#splash');

  // Splash screen
  setTimeout(() => {
    splash.style.display = 'none';
  }, 3000);

  // Section visibility
  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-section', 'animated-section');
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Dark mode toggle
  toggleNightMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleNightMode.querySelector('i').classList.toggle('fa-moon', !isDarkMode);
    toggleNightMode.querySelector('i').classList.toggle('fa-sun', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  });

  // Restore dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    toggleNightMode.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  }

  // Hamburger menu
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    const isExpanded = sidebar.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    hamburger.querySelector('i').classList.toggle('fa-bars', !isExpanded);
    hamburger.querySelector('i').classList.toggle('fa-times', isExpanded);
  });
});
