import "./Users.css";

import { editProject, createTodo, removeProject } from "../../Controllers/ProjectController";
import { textLengthValidator } from "../../Validator";
import { renderProjects, renderMainProjectPage, setActive } from "../../Controllers/RenderController";

function TodoButton(title, done, starred, id) {
	const Todo = document.createElement("button");
	Todo.classList.add("todo");
	Todo.dataset.Tid = id;
	Todo.dataset.done = done;
	Todo.dataset.starred = starred;

	const div = document.createElement("div");

	const circle = document.createElement("i");
  circle.classList.add("fa-regular", "fa-circle");

	const textSpan = document.createElement("span");
	textSpan.textContent = title;

	const star = document.createElement("i");
	star.classList.add("fa-regular", "fa-star");

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
  titleContainer.classList.add('title-container');

	const title = document.createElement("input");
	title.type = "text";
	title.value = project.getTitle();
	title.id = "titleInput";
	title.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
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
	
  let count = 0
  removeButton.addEventListener("click", () => {
		count++;
    setTimeout(() => {
			count--;
    }, 1000);
    if (count === 2) {
      removeProject(project.id);
      renderProjects();
      renderMainProjectPage();
      setActive(document.querySelector(".project"))
    }
  });

	const todoList = document.createElement("div");
	todoList.id = "todoList";
	project.getTodos().forEach((todo) => {
		const TodoBtn = TodoButton(
			todo.getTitle(),
			todo.isDone(),
			todo.isStarred(),
			todo.id
		);
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
			createTodo(project.id, [addTodoBtn.value, Date.now()]);
			todoList.appendChild(TodoButton(addTodoBtn.value, false, false));
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
