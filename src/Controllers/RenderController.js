import Footer from "../Components/Footer.js";
import Sidebar from "../Components/Sidebar.js";
import DefaultPage from "../Components/pages/Default.js";
import UserPage from "../Components/pages/Users.js";
import Editor from "../Components/Editor.js";

import {
	getTodos,
	editTodo,
	loadProjects,
	getProjectById,
	getTodoswithDueDate,
	getOngoingTodos,
	getAllTodos,
} from "./ProjectController.js";
import { textLengthValidator } from "../Validator.js";
import { isFuture, isToday } from "date-fns";

export function ButtonAnimation(btn, scale, condition) {
	if (condition === false) {
		return;
	}

	if (scale === 1) {
		btn.style = "";
	} else {
		btn.style = `transform: scale(${scale})`;
	}
}

export function setActive(button) {
	const buttons = document.querySelectorAll(".project");
	buttons.forEach((btn) => {
		if (btn !== button) {
			btn.classList.remove("active");
		}
		button.classList.add("active");
	});
}

export function TodoButton(todo) {
	const Todo = document.createElement("button");
	let starred = todo.isStarred();
	let done = todo.isDone();
	Todo.classList.add("todo");
	Todo.dataset.Tid = todo.id;

	function toggleStarred() {
		if (starred) {
			star.classList.remove("fa-solid");
			star.classList.add("fa-regular");
			starred = false;
		} else {
			star.animate([{ fontSize: ".75rem" }, { fontSize: "1.25rem" }], {
				duration: 125,
				iterations: 1,
			});
			star.classList.remove("fa-regular");
			star.classList.add("fa-solid");
			starred = true;
		}
		Todo.dataset.starred = starred;
		todo.setStarred(starred);
		Todo.dispatchEvent(new CustomEvent("starred"));
		editTodo(todo);
	}

	const div = document.createElement("div");

	const circle = document.createElement("i");
	if (done) {
		circle.classList.add("done");
	}
	circle.classList.add(done ? "fa-solid" : "fa-regular", "fa-circle");
	circle.addEventListener("mousedown", () => {
		if (done) {
			circle.classList.remove("fa-solid");
			circle.classList.add("fa-regular");
			return;
		}

		circle.classList.remove("fa-regular");
		circle.classList.add("fa-solid");
	});
	circle.addEventListener("mouseout", () => {
		if (done) {
			circle.classList.add("fa-solid");
			circle.classList.remove("fa-regular");
			return;
		}

		circle.classList.add("fa-regular");
		circle.classList.remove("fa-solid");
	});
	circle.addEventListener("click", () => {
		done = !done;
		if (done) {
			circle.classList.add("done");
		} else {
			circle.classList.remove("done");
		}
		Todo.dataset.done = done;
		todo.setDone(done);
		Todo.dispatchEvent(new CustomEvent("done"), done);
		editTodo(todo);
		updateTodosAmount(todo.pid);
	});

	const textSpan = document.createElement("span");
	textSpan.textContent = todo.getTitle();

	const star = document.createElement("i");
	star.classList.add(starred ? "fa-solid" : "fa-regular", "fa-star");
	star.addEventListener("click", () => toggleStarred());

	function isBtnElem(elem) {
		return elem.target === textSpan || elem.target === Todo ? true : false;
	}

	Todo.addEventListener("mousedown", (elem) =>
		ButtonAnimation(Todo, 0.99, isBtnElem(elem))
	);
	Todo.addEventListener("mouseout", () => ButtonAnimation(Todo, 1));
	Todo.addEventListener("click", (event) => {
		if (!isBtnElem(event)) {
			return;
		}
		renderEditor(todo);
		ButtonAnimation(Todo, 1);
	});

	div.appendChild(circle);
	div.appendChild(textSpan);

	Todo.appendChild(div);
	Todo.appendChild(star);

	return Todo;
}

export function renderTodos(projectId) {
	const TodoList = document.querySelector("#todoList");
	TodoList.textContent = "";

	const todos = getTodos(projectId);
	todos.forEach((todo) => {
		TodoList.appendChild(TodoButton(todo));
	});
}

export function ProjectButton(opac, icon, text, id) {
	const Project = document.createElement("button");
	Project.classList.add("project");
	Project.dataset.id = id;

	Project.addEventListener("mousedown", () => ButtonAnimation(Project, 0.98));
	Project.addEventListener("click", () => ButtonAnimation(Project, 1));
	Project.addEventListener("mouseout", () => ButtonAnimation(Project, 1));

	const div = document.createElement("div");

	const i = document.createElement("i");
	i.classList.add(opac, icon);

	const textSpan = document.createElement("span");
	textSpan.textContent = text;

	const count = document.createElement("span");
	count.id = "count";

	div.appendChild(i);
	div.appendChild(textSpan);

	Project.appendChild(div);
	Project.appendChild(count);

	return Project;
}

export function renderEditor(Todo) {
	const EditorTab = document.querySelector(".editor");
	if (Todo !== null) {
		Editor(Todo);
		if (
			Todo.id != EditorTab.dataset.selId ||
			EditorTab.dataset.selId === undefined
		) {
			EditorTab.dataset.selId = Todo.id;
			EditorTab.classList.add("active");
			return;
		}
	}

	EditorTab.textContent = "";
	EditorTab.classList.remove("active");
	EditorTab.dataset.selId = "";
}

export function updateTodosAmount(projectId) {
	const projectCount = document
		.querySelector(`[data-id="${projectId}"]`)
		.querySelector("#count");
	const length = getOngoingTodos(projectId).length;
	projectCount.textContent = length > 0 ? length : "";
}

export function renderUserProjectPage(projectId) {
	renderEditor(null);
	const main = document.querySelector("main");
	main.classList.add("user");
	main.classList.remove("main");
	main.textContent = "";

	UserPage(getProjectById(projectId));
}

export function renderMainProjectPage(page) {
	renderEditor(null);
	const main = document.querySelector("main");
	main.classList.add("main");
	main.classList.remove("user");
	main.textContent = "";

	DefaultPage(page);
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
		updateTodosAmount(project.id);
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

export function renderMyDay() {
	const TodoList = document.querySelector("#todoList");
	TodoList.textContent = "";
	getTodoswithDueDate().forEach((todo) => {
		if (isToday(todo.getDueDate())) {
			const Btn = TodoButton(todo);
			Btn.querySelector(".fa-circle").addEventListener("click", () => {
				renderMyDay();
			});
			TodoList.appendChild(Btn);
		}
	});
}

export function renderPlanned() {
	const TodoList = document.querySelector("#todoList");
	TodoList.textContent = "";
	getTodoswithDueDate().forEach((todo) => {
		if (isToday(todo.getDueDate()) || isFuture(todo.getDueDate())) {
			const Btn = TodoButton(todo);
			Btn.querySelector(".fa-circle").addEventListener("click", () => {
				renderPlanned();
			});
			TodoList.appendChild(Btn);
		}
	});
}

export function renderStarred() {
	const TodoList = document.querySelector("#todoList");
	TodoList.textContent = "";
	getAllTodos().forEach((todo) => {
		if (todo.isStarred() && !todo.isDone()) {
			const Btn = TodoButton(todo);
			Btn.querySelector(".fa-circle").addEventListener("click", () => {
				renderStarred();
			});
			TodoList.appendChild(Btn);
		}
	});
}

export function init() {
	const editor = document.createElement("div");
	editor.classList.add("editor");

	const content = document.querySelector("#content");
	content.appendChild(Sidebar());
	content.appendChild(document.createElement("main"));
	content.appendChild(editor);
	const body = document.querySelector("body");
	body.appendChild(Footer());

	renderMainProjectPage("My Day");
	renderProjects();
}
