import { submitMessage } from '../api.js';

export function mountContact() {
  const el = document.createElement('section');
  el.className = 'card fade-in';
  el.id = 'contact';
  el.innerHTML = `
    <h2>Contact</h2>
    <form id="contact-form" style="margin-top:12px">
      <div class="form-row"><input name="name" placeholder="Your name" required /></div>
      <div class="form-row"><input name="email" type="email" placeholder="Email" required /></div>
      <div class="form-row"><input name="subject" placeholder="Subject" required /></div>
      <div class="form-row"><textarea name="message" placeholder="Message" required></textarea></div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn" type="submit">Send Message</button>
        <div id="contact-status" class="form-note"></div>
      </div>
    </form>
    <p class="form-note" style="margin-top:12px">Or email me directly: 
      <a href="mailto:donminictersoo@gmail.com">donminictersoo@gmail.com</a>
    </p>
  `;
  
  const form = el.querySelector('#contact-form');
  const status = el.querySelector('#contact-status');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.textContent = 'Sending...';
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await submitMessage(data);
      status.textContent = 'Message sent!';
      form.reset();
    } catch (err) {
      status.textContent = 'Error sending message.';
    }
  });
  return el;
}
