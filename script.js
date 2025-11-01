(() => {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  const moon = '<i class="fas fa-moon"></i>';
  const sun = '<i class="fas fa-sun"></i>';

  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved ?? (prefers ? 'dark' : 'light');
    html.setAttribute('data-theme', theme);
    toggleBtn.innerHTML = theme === 'dark' ? sun : moon;
  };

  const switchTheme = () => {
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggleBtn.innerHTML = next === 'dark' ? sun : moon;
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', switchTheme);
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const theme = e.matches ? 'dark' : 'light';
      html.setAttribute('data-theme', theme);
      toggleBtn.innerHTML = theme === 'dark' ? sun : moon;
    }
  });

  initTheme();
})();
