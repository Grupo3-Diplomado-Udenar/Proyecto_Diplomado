/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remover clase active de todos los links
      navLinks.forEach(l => l.classList.remove('active'));

      // Agregar clase active al link clickeado
      link.classList.add('active');

      // Ocultar todas las secciones
      sections.forEach(section => section.classList.remove('active'));

      // Mostrar la sección correspondiente
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).classList.add('active');
    });
  });




})
