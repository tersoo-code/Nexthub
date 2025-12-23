import { initAuth } from './auth.js';
import { mountHeader, mountFooter } from './ui.js';
import { mountHero } from './components/hero.js';
import { mountAbout } from './components/about.js';
import { mountSkills } from './components/skills.js';
import { mountProjects } from './components/projects.js';
import { mountContact } from './components/contact.js';

initAuth();

const header = document.getElementById('site-header');
const main = document.getElementById('main-content');
const footer = document.getElementById('site-footer');

mountHeader(header);
main.appendChild(mountHero());
main.appendChild(mountAbout());
main.appendChild(mountSkills());
main.appendChild(mountProjects());
main.appendChild(mountContact());
mountFooter(footer);
