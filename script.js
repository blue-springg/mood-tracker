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
const navLinks = document.querySelectorAll('.sidebar a'); // ← updated here
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

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

    targetSection.scrollIntoView({ behavior: 'smooth' }); // ← updated here
  });
});

// Night mode toggle
const toggleBtn = document.getElementById('toggle-night-mode');

if (localStorage.getItem('nightMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('nightMode',
    document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

