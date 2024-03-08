import Footer from "../Components/Footer.js";
import Sidebar from "../Components/Sidebar.js";
import DefaultPage from "../Components/pages/Default.js";
import UserPage from "../Components/pages/Users.js";
import Editor from "../Components/Editor.js";

import { getTodos, loadProjects, getProjectById } from "./ProjectController.js";
import { ProjectButton, TodoButton } from "../utils";
import { textLengthValidator } from "../Validator.js";

export function setActive(button) {
	const buttons = document.querySelectorAll(".project");
	buttons.forEach((btn) => {
		if (btn !== button) {
			btn.classList.remove("active");
		}
		button.classList.add("active");
	});
}

export function renderTodos(projectId) {
	const TodoList = document.querySelector("#todoList");
	TodoList.textContent = "";

	const todos = getTodos(projectId);
	todos.forEach((todo) => {
		TodoList.appendChild(TodoButton(todo));
	})
}

export function renderEditor(Todo) {
	const EditorTab = document.querySelector(".editor");	
	if (Todo !== null) {
		Editor(Todo);
		if (Todo.id != EditorTab.dataset.selId || EditorTab.dataset.selId === undefined) {
			EditorTab.dataset.selId = Todo.id;
			EditorTab.classList.add("active");
			return;
		}
	}

	EditorTab.textContent = "";
	EditorTab.classList.remove("active");
	EditorTab.dataset.selId = "";
}

export function renderUserProjectPage(projectId) {
	renderEditor(null);
	const main = document.querySelector("main");
	main.classList.add("user");
	main.classList.remove("main");
	main.textContent = "";
	
	UserPage(getProjectById(projectId));
}

export function renderMainProjectPage() {
	renderEditor(null);
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
			renderUserProjectPage(project.id);
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
	const editor = document.createElement("div");
	editor.classList.add("editor")

	const content = document.querySelector("#content");
	content.appendChild(Sidebar());
	content.appendChild(document.createElement("main"));
	content.appendChild(editor);
	const body = document.querySelector("body");
	body.appendChild(Footer());

	renderMainProjectPage();
	renderProjects();
}
