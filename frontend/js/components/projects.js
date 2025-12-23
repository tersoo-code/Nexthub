export function mountProjects() {
  const el = document.createElement('section');
  el.className = 'card fade-in';
  el.id = 'projects';
  el.innerHTML = `<h2>Projects</h2><div id="projects-grid" class="grid cols-2" style="margin-top:12px"></div>`;
  
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio site built with HTML, CSS, and JavaScript, powered by Firebase for dynamic content and contact form handling.",
      liveUrl: "https://tersoodominic
