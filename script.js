// Splash screen fade out
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
    }, 1000);
  }, 2000);
});

// Section toggle
const navLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Remove active class from all sidebar links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to the clicked link
    link.classList.add('active');

    sections.forEach(sec => {
      if (sec.id === targetId) {
        sec.classList.add('visible-section', 'animated-section');
        sec.setAttribute('tabindex', '0');
        sec.focus();
      } else {
        sec.classList.remove('visible-section', 'animated-section');
        sec.setAttribute('tabindex', '-1');
      }
    });

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Set initial active state for "About Me" since it's visible by default
document.querySelector('.sidebar a[href="#about"]').classList.add('active');

// Night mode toggle
const toggleBtn = document.getElementById('toggle-night-mode');
const toggleIcon = toggleBtn.querySelector('i');

// Set initial icon based on night mode state
if (localStorage.getItem('nightMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleIcon.classList.remove('fa-sun');
  toggleIcon.classList.add('fa-moon');
} else {
  toggleIcon.classList.remove('fa-moon');
  toggleIcon.classList.add('fa-sun');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('nightMode', isDarkMode ? 'enabled' : 'disabled');
  toggleIcon.classList.toggle('fa-sun', !isDarkMode);
  toggleIcon.classList.toggle('fa-moon', isDarkMode);
});
