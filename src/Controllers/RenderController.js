import Footer from '../Components/Footer.js';
import Sidebar from '../Components/Sidebar.js';

import { loadProjects } from './ProjectController.js';
import { ProjectButton } from '../utils';

export function renderUserProjects() {
  const Projects = loadProjects();
  const userProjects = document.querySelector('#userProjects');
  userProjects.textContent = '';

  Projects.forEach(project => {
    const btn = ProjectButton('fa-solid', 'fa-bars', project.getTitle());
    userProjects.appendChild(btn);
  });
}

export function init() {
  const content = document.querySelector('#content');
  content.appendChild(Sidebar());
  content.appendChild(document.createElement('main'));
  content.appendChild(document.createElement('div'));
  const body = document.querySelector('body');
  body.appendChild(Footer());

  renderUserProjects();
}