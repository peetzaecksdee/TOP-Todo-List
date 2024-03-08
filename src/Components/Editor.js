import "./Editor.css";

import { format, formatDistance, differenceInDays } from "date-fns";
import { removeTodo } from "../Controllers/ProjectController";
import { renderEditor, renderTodos } from "../Controllers/RenderController";

function TodoMainDiv() {
  const TodoMainDiv = document.createElement("div");
  TodoMainDiv.classList.add("todo-main");
	let starred = Todo.isStarred();
	let done = Todo.isDone();

	const Animation =
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
			star.animate(Animation);
			star.classList.remove("fa-regular");
			star.classList.add("fa-solid");
			starred = true;
		}
		Todo.setStarred(starred);
		editTodo(Todo);
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
      circle.animate(Animation);
		} else {
      circle.classList.remove("done");
		}
		Todo.setDone(done);
		editTodo(Todo);
	});

	const textSpan = document.createElement("span");
	textSpan.textContent = Todo.getTitle();

	const star = document.createElement("i");
	star.classList.add(starred ? "fa-solid" : "fa-regular", "fa-star");
	star.addEventListener("click", () => toggleStarred());
}

export default function(Todo) {
	const EditorTab = document.querySelector(".editor");
  EditorTab.textContent = "";

  const MainTodoContainer = document.createElement("div");
  MainTodoContainer.classList.add("main-todo-container")

	div.appendChild(circle);
	div.appendChild(textSpan);

	TodoMainDiv.appendChild(div);
	TodoMainDiv.appendChild(star);

  MainTodoContainer.appendChild(TodoMainDiv());

  const extraContent = document.createElement("div");
  extraContent.classList.add("extra-info");
  const createdDate = document.createElement("span");
  const todoDate = Todo.getDate();
  if (differenceInDays(Date.now(), todoDate) < 1) {
    createdDate.textContent = `Created ${formatDistance(Date.now(), todoDate)} ago`;
  } else {
    createdDate.textContent = `Created on ${format(todoDate, "iii d MMM y")}`;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("fa-regular");
  deleteBtn.id = "delete";
  deleteBtn.addEventListener("click", () => {
    removeTodo(Todo);
    renderTodos(Todo.pid);
    renderEditor(Todo);
  });
  
  extraContent.appendChild(createdDate);
  extraContent.appendChild(deleteBtn);

  EditorTab.appendChild(MainTodoContainer);
  EditorTab.appendChild(extraContent);
}
