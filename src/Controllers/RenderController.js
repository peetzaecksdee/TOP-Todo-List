import Footer from "../Components/Footer.js";
import Sidebar from "../Components/Sidebar.js";
import DefaultPage from "../Components/pages/Default.js";
import UserPage from "../Components/pages/Users.js";

import { loadProjects } from "./ProjectController.js";
import { ProjectButton } from "../utils";
import { textLengthValidator } from "../Validator.js";

function setActive(button) {
	const buttons = document.querySelectorAll(".project");
	buttons.forEach((btn) => {
		if (btn !== button) {
			btn.classList.remove("active");
		}
		button.classList.add("active");
	});
}

export function renderUserProjectPage(project) {
	const main = document.querySelector("main");
	main.classList.add("user");
	main.classList.remove("main");
	main.textContent = "";

	UserPage(project);
}

export function renderMainProjectPage() {
	const main = document.querySelector("main");
	main.classList.add("main");
	main.classList.remove("user");
	main.textContent = "";

	DefaultPage();
}

export function renderProjects() {
	const Projects = loadProjects();
	const userProjects = document.querySelector("#userProjects");
	userProjects.textContent = "";

	Projects.forEach((project) => {
		const btn = ProjectButton(
			"fa-solid",
			"fa-bars",
			textLengthValidator(project.getTitle()),
			project.id
		);
		btn.addEventListener("click", () => {
			renderUserProjectPage(project);
		});
		userProjects.appendChild(btn);
	});

	const projectButtons = document.querySelectorAll(".project");
	projectButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (btn.classList.contains("active")) {
				return;
			}

			setActive(btn);
		});
	});
}

export function init() {
	const content = document.querySelector("#content");
	content.appendChild(Sidebar());
	content.appendChild(document.createElement('main'));
	content.appendChild(document.createElement("div"));
	const body = document.querySelector("body");
	body.appendChild(Footer());

  renderMainProjectPage();
	renderProjects();
}
