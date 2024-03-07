{
	/* <nav>
  <div id="projects">
    <div id="defaultProjects">
      <button id="project" class="active">
        <div><i class="fa-regular fa-sun"></i>My Day</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-regular fa-star"></i>Starred</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-solid fa-list-check"></i>Planned</div>
        <span data-count></span>
      </button>
      <button id="project">
        <div><i class="fa-solid fa-house"></i>Tasks</div>
        <span data-count></span>
      </button>
    </div>
    <hr>
    <div id="userProjects"></div>
  </div>
  <button id="addProject">New list</button>
</nav> */
}

import "./Sidebar.css";
import { addProject } from "../Controllers/ProjectController";
import {
	renderProjects,
	renderMainProjectPage,
	renderUserProjectPage,
	setActive,
} from "../Controllers/RenderController";
import { ProjectButton } from "../utils";

export default function () {
	const nav = document.createElement("nav");

	const projects = document.createElement("div");
	projects.id = "projects";

	const defaultProjects = document.createElement("div");
	defaultProjects.id = "defaultProjects";

	const myDay = ProjectButton("fa-regular", "fa-sun", "My Day", -1);
	myDay.classList.add("active");
	const starred = ProjectButton("fa-regular", "fa-star", "Starred", -2);
	const planned = ProjectButton("fa-solid", "fa-list-check", "Planned", -3);

	myDay.addEventListener("click", () => renderMainProjectPage());
	starred.addEventListener("click", () => renderMainProjectPage());
	planned.addEventListener("click", () => renderMainProjectPage());

	const hr = document.createElement("hr");

	const userProjects = document.createElement("div");
	userProjects.id = "userProjects";

	const addProjectBtn = document.createElement("button");
	addProjectBtn.id = "addProject";
	addProjectBtn.textContent = "New List";
	addProjectBtn.addEventListener("click", () => {
		const newProject = addProject("Untitled List");
		renderProjects();
		
		renderUserProjectPage(newProject);
		setActive(document.querySelector(`[data-id="${newProject.id}"]`))
	});

	defaultProjects.appendChild(myDay);
	defaultProjects.appendChild(starred);
	defaultProjects.appendChild(planned);

	projects.appendChild(defaultProjects);
	projects.appendChild(hr);
	projects.appendChild(userProjects);

	nav.appendChild(projects);
	nav.appendChild(addProjectBtn);

	return nav;
}
