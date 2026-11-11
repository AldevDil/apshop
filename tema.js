// tema.js
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  
  // 1. Revisar si el usuario ya tenía una preferencia guardada
  const temaGuardado = localStorage.getItem('tema') || 'light';
  html.setAttribute('data-theme', temaGuardado);
  actualizarIcono(temaGuardado);

  // 2. Escuchar el clic en el botón
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const temaActual = html.getAttribute('data-theme');
      const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', nuevoTema);
      localStorage.setItem('tema', nuevoTema); // Guardar preferencia
      actualizarIcono(nuevoTema);
    });
  }

  function actualizarIcono(tema) {
    if (!toggleBtn) return;
    toggleBtn.textContent = tema === 'dark' ? '☀️' : '🌙';
  }
});