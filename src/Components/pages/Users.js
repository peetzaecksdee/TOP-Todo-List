import "./Users.css";

import { editProject } from "../../Controllers/ProjectController";
import { textLengthValidator } from "../../Validator";

function createUserPage(project) {
  const projectText = document.querySelector(`[data-id=${project.id}]`).querySelector('span');

	const main = document.querySelector("main");
	const title = document.createElement("input");
  title.type = 'text';
	title.value = project.getTitle();
	title.id = "titleInput";
  title.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      project.changeTitle(title.value);
      projectText.textContent = textLengthValidator(title.value);
      editProject(project)
    }
  });

	const todoList = document.createElement("div");
	todoList.id = "todoList";

	const addTodoBtn = document.createElement("input");
  addTodoBtn.type = 'text';
	addTodoBtn.id = "addTodo";
	addTodoBtn.placeholder = "Add a task";
  addTodoBtn.addEventListener('focus', () => {
    addTodoBtn.placeholder = "";
  })
  addTodoBtn.addEventListener('abort', () => {
    addTodoBtn.placeholder = addTodoBtn.value || "Add a task";
  })

	main.appendChild(title);
	main.appendChild(todoList);
	main.appendChild(addTodoBtn);
}

export default createUserPage;
