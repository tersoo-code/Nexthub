export function mountSkills() {
  const el = document.createElement('section');
  el.className = 'card fade-in';
  el.id = 'skills';
  el.innerHTML = `<h2>Skills & Tools</h2><div id="skills-list" style="margin-top:12px"></div>`;
  
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'Firebase', level: 88 },
    { name: 'HTML5 & CSS3', level: 92 },
    { name: 'Responsive Design', level: 90 },
    { name: 'REST APIs', level: 85 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'EmailJS', level: 80 }
  ];
  
  const container = el.querySelector('#skills-list');
  skills.forEach(s => {
    const row = document.createElement('div');
    row.className = 'skill';
    row.innerHTML = `<div style="min-width:120px">${s.name}</div>
      <div class="progress" aria-hidden="true"><i style="width:${s.level}%"></i></div>
      <div style="min-width:36px; text-align:right; color:var(--muted)">${s.level}%</div>`;
    container.appendChild(row);
  });
  return el;
}
