export function mountHero() {
  const el = document.createElement('section');
  el.className = 'card fade-in';
  el.id = 'hero';
  el.innerHTML = `
    <h1>Tersoo Dominic</h1>
    <p style="color:var(--muted)">Web Developer</p>
    <div class="photo-gallery">
      <figure>
        <img src="/assets/images/IMG_2765.jpg" alt="Dominic 1" />
        <figcaption>ALL THINGS ARE POSSIBLE</figcaption>
      </figure>
      <figure>
        <img src="/assets/images/IMG_6479.jpg" alt="Dominic 2" />
        <figcaption>KEEP PUSHING FORWARD</figcaption>
      </figure>
      <figure>
        <img src="/assets/images/IMG_6506.JPG" alt="Dominic 3" />
        <figcaption>NEVER GIVE UP</figcaption>
      </figure>
      <figure>
        <img src="/assets/images/IMG_7871.jpg" alt="Dominic 4" />
        <figcaption>SUCCESS IS A JOURNEY</figcaption>
      </figure>
    </div>
  `;
  return el;
}
