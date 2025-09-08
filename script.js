<script>
  // Night Mode Toggle Button
  const toggleBtn = document.getElementById('toggle-night-mode');

  // Load night mode from localStorage if it was enabled before
  if (localStorage.getItem('nightMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Toggle dark mode on click
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the mode
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('nightMode', 'enabled');
    } else {
      localStorage.setItem('nightMode', 'disabled');
    }
  });
</script>
