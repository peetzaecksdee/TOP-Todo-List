import Footer from '../Components/Footer.js';
import Sidebar from '../Components/Sidebar.js';
import DefaultPage from '../Components/pages/Default.js';
import UserPage from '../Components/pages/Users.js';

import { loadProjects } from './ProjectController.js';
import { ProjectButton } from '../utils';

function setActive(button) {
	const buttons = document.querySelectorAll(".project");
	buttons.forEach((btn) => {
		if (btn !== button) {
			btn.classList.remove("active");
		}
		button.classList.add("active");
	});
}

export function renderProjects() {
  const Projects = loadProjects();
  const userProjects = document.querySelector('#userProjects');
  userProjects.textContent = '';

  Projects.forEach(project => {
    const btn = ProjectButton('fa-solid', 'fa-bars', project.getTitle());
    userProjects.appendChild(btn);
  });

  const projectButtons = document.querySelectorAll('.project');
  projectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) {
        return;
      }
      
      setActive(btn);
    });
  })  
}

export function init() {
  const content = document.querySelector('#content');
  content.appendChild(Sidebar());
  // content.appendChild(DefaultPage());
  content.appendChild(UserPage());
  content.appendChild(document.createElement('div'));
  const body = document.querySelector('body');
  body.appendChild(Footer());

  renderProjects();
}