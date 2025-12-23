export function mountHero() {
  const el = document.createElement('section');
  el.className = 'card hero fade-in';
  el.id = 'home';
  el.innerHTML = `
    <div class="intro">
      <h1 style="font-size:28px">Hi, I’m <strong>Dominic</strong></h1>
      <p style="color:var(--muted); margin-top:8px">
        I build modern, high-performance web experiences that solve real problems and delight users.
      </p>
      <div class="cta">
        <a class="btn" href="#projects">View Projects</a>
        <a class="btn secondary" href="#contact">Contact Me</a>
      </div>
    </div>
    <div style="min-width:220px; text-align:right;">
      <div style="background:var(--glass); padding:12px; border-radius:10px;">
        <strong>Dominic • Web Developer</strong>
        <p class="form-note" style="margin-top:8px">Available for freelance and full-time roles.</p>
      </div>
    </div>
  `;
  return el;
}
