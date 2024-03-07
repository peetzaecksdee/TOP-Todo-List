import "./Users.css";

import {
	editProject,
	createTodo,
	removeProject,
	editTodo,
} from "../../Controllers/ProjectController";
import { textLengthValidator } from "../../Validator";
import {
	renderProjects,
	renderMainProjectPage,
	setActive,
} from "../../Controllers/RenderController";
import { ButtonAnimation } from "../../utils";

function TodoButton(todo) {
	const Todo = document.createElement("button");
	let starred = todo.isStarred();
	let done = todo.isDone();
	Todo.classList.add("todo");
	Todo.dataset.Tid = todo.id;
	Todo.dataset.done = done;
	Todo.dataset.starred = starred;

	const starAnimation =
		([{ fontSize: ".75rem" }, { fontSize: "1.25rem" }],
		{
			duration: 125,
			iterations: 1,
		});

	function toggleStarred() {
		if (starred) {
			star.classList.remove("fa-solid");
			star.classList.add("fa-regular");
			starred = false;
		} else {
			star.animate(starAnimation);
			star.classList.remove("fa-regular");
			star.classList.add("fa-solid");
			starred = true;
		}
		Todo.dataset.starred = starred;
		todo.setStarred(starred);
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
		editTodo(todo);
	});

	const textSpan = document.createElement("span");
	textSpan.textContent = todo.getTitle();

	const star = document.createElement("i");
	star.classList.add(starred ? "fa-solid" : "fa-regular", "fa-star");
	star.addEventListener("click", () => toggleStarred());

	function isBtnElem(elem) {
		return (elem.target === textSpan || elem.target === Todo) ? true : false;
	}

	Todo.addEventListener("mousedown", (elem) => ButtonAnimation(Todo, 0.99, isBtnElem(elem)));
	Todo.addEventListener("mouseout", () => ButtonAnimation(Todo, 1));
	Todo.addEventListener("click", () => ButtonAnimation(Todo, 1));

	div.appendChild(circle);
	div.appendChild(textSpan);

	Todo.appendChild(div);
	Todo.appendChild(star);

	return Todo;
}

function createUserPage(project) {
	const projectText = document
		.querySelector(`[data-id="${project.id}"]`)
		.querySelector("span");

	const main = document.querySelector("main");

	const titleContainer = document.createElement("div");
	titleContainer.classList.add("title-container");

	const title = document.createElement("input");
	title.type = "text";
	title.value = project.getTitle();
	title.id = "titleInput";
	title.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			title.blur();
			project.changeTitle(title.value);
			projectText.textContent = textLengthValidator(title.value);
			editProject(project);
		}
	});
	title.addEventListener("blur", () => {
		project.changeTitle(title.value);
		projectText.textContent = textLengthValidator(title.value);
		editProject(project);
	});
	const removeButton = document.createElement("button");
	removeButton.id = "delete";
	removeButton.textContent = "X";

	let count = 0;
	removeButton.addEventListener("click", () => {
		count++;
		setTimeout(() => {
			count--;
		}, 750);
		if (count === 2) {
			removeProject(project.id);
			renderProjects();
			renderMainProjectPage();
			setActive(document.querySelector(".project"));
		}
	});

	const todoList = document.createElement("div");
	todoList.id = "todoList";
	project.getTodos().forEach((todo) => {
		const TodoBtn = TodoButton(todo);
		todoList.appendChild(TodoBtn);
	});

	const addTodoBtn = document.createElement("input");
	addTodoBtn.type = "text";
	addTodoBtn.id = "addTodo";
	addTodoBtn.placeholder = "Add a task";
	addTodoBtn.addEventListener("focus", () => {
		addTodoBtn.placeholder = "";
	});
	addTodoBtn.addEventListener("focusout", () => {
		addTodoBtn.placeholder = addTodoBtn.value || "Add a task";
	});
	addTodoBtn.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			if (!addTodoBtn.value) {
				return;
			}
			todoList.appendChild(
				TodoButton(createTodo(project.id, [addTodoBtn.value, Date.now()]))
			);
			addTodoBtn.value = "";
		}
	});

	titleContainer.appendChild(title);
	titleContainer.appendChild(removeButton);

	main.appendChild(titleContainer);
	main.appendChild(todoList);
	main.appendChild(addTodoBtn);
}

export default createUserPage;
