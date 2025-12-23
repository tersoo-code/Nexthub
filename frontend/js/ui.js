export function mountHeader(container){
  const el = document.createElement('div');
  el.className = 'card fade-in';
  el.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px">
      <strong>Tersoo Dominic</strong>
      <span style="color:var(--muted)">• Web Developer</span>
    </div>
    <nav style="display:flex;gap:12px">
      <a class="btn secondary" href="#projects">Projects</a>
      <a class="btn secondary" href="#contact">Contact</a>
      <a class="btn" href="resume.pdf" download>Download CV</a>
    </nav>
  `;
  container.appendChild(el);
}

export function mountFooter(container){
  const el = document.createElement('div');
  el.className = 'card fade-in';
  el.innerHTML = `<small>© 2025 Tersoo Dominic. Built with JavaScript & Firebase.</small>`;
  container.appendChild(el);
}
