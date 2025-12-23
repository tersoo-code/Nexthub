export function mountAbout() {
  const el = document.createElement('section');
  el.className = 'card fade-in';
  el.id = 'about';
  el.innerHTML = `
    <h2>About Me</h2>
    <p style="color:var(--muted); margin-top:8px">
      I’m Dominic, a web developer passionate about creating impactful, scalable, and user focused digital solutions.
      I specialize in building website and web applications that are fast, reliable, and visually engaging.
    </p>
  `;
  return el;
}
