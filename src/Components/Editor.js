import "./Editor.css";

import {
	format,
	formatDistance,
	isToday,
	isPast,
} from "date-fns";
import { removeTodo, editTodo } from "../Controllers/ProjectController";
import {
	renderEditor,
	renderTodos,
	updateTodosAmount,
} from "../Controllers/RenderController";
import { textLengthValidator } from "../Validator";

function TodoMainDiv(Todo) {
	const ParentTodo = document.querySelector(`[data--tid="${Todo.id}"]`);
	const ParentTodoText = ParentTodo.querySelector("span");

	const TodoMainDiv = document.createElement("div");
	TodoMainDiv.classList.add("todo-main");
	let starred = Todo.isStarred();
	let done = Todo.isDone();

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
		Todo.setStarred(starred);
		editTodo(Todo);
	}

	function toggleDone() {
		done = !done;
		if (done) {
			circle.classList.add("done");
			circle.animate([{ fontSize: ".75rem" }, { fontSize: "1.25rem" }], {
				duration: 125,
				iterations: 1,
			});
			circle.classList.remove("fa-regular");
			circle.classList.add("fa-solid");
		} else {
			circle.classList.remove("done");
			circle.classList.remove("fa-solid");
			circle.classList.add("fa-regular");
		}
		Todo.setDone(done);
		editTodo(Todo);
	}

	const div = document.createElement("div");

	const circle = document.createElement("i");
	if (done) {
		circle.classList.add("done");
	}
	circle.classList.add(
		done ? "fa-solid" : "fa-regular",
		"fa-circle",
		"inactive"
	);

	const textSpan = document.createElement("input");
	textSpan.value = Todo.getTitle();
	textSpan.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			textSpan.blur();
			Todo.setTitle(textSpan.value);
			ParentTodoText.textContent = textLengthValidator(textSpan.value);
			editTodo(Todo);
		}
	});
	textSpan.addEventListener("blur", () => {
		Todo.setTitle(textSpan.value);
		ParentTodoText.textContent = textLengthValidator(textSpan.value);
		editTodo(Todo);
	});

	const star = document.createElement("i");
	star.classList.add(
		starred ? "fa-solid" : "fa-regular",
		"fa-star",
		"inactive"
	);

	ParentTodo.addEventListener("done", () => toggleDone());
	ParentTodo.addEventListener("starred", () => toggleStarred());

	div.appendChild(circle);
	div.appendChild(textSpan);

	TodoMainDiv.appendChild(div);
	TodoMainDiv.appendChild(star);

	return TodoMainDiv;
}

export default function (Todo) {
	function addLateifPastDueDate() {
		if (!isToday(dueDateBtn.value) && isPast(dueDateBtn.value)) {
			dueDateBtn.classList.add("late");
		} else {
			dueDateBtn.classList.remove("late");
		}
	}

	const ProjectId = Todo.pid;

	const EditorTab = document.querySelector(".editor");
	EditorTab.textContent = "";

	const MainTodoContainer = document.createElement("div");
	MainTodoContainer.classList.add("main-todo-container");

	const dueDateBtn = document.createElement("input");
	dueDateBtn.type = "date";
	dueDateBtn.classList = "due-date";
	dueDateBtn.textContent = "Add due date";
	dueDateBtn.value = Todo.getDueDate();
	addLateifPastDueDate();
	dueDateBtn.addEventListener("change", () => {
		addLateifPastDueDate();
		Todo.setDueDate(dueDateBtn.value);
		editTodo(Todo);
	});

	const addNoteBox = document.createElement("textarea");
	addNoteBox.classList.add("note");
	addNoteBox.placeholder = "Add note";
	addNoteBox.value = Todo.getNotes();
	setTimeout(() => {
		addNoteBox.style.height = `${addNoteBox.scrollHeight}px`;
	}, 100);
	addNoteBox.addEventListener("keydown", () => {
		addNoteBox.style.height = "auto";
		addNoteBox.style.height = `${addNoteBox.scrollHeight}px`;
	});
	addNoteBox.addEventListener("keyup", () => {
		addNoteBox.style.height = "auto";
		addNoteBox.style.height = `${addNoteBox.scrollHeight}px`;
	});
	addNoteBox.addEventListener("focusout", () => {
		Todo.setNotes(addNoteBox.value);
		editTodo(Todo);
	});

	MainTodoContainer.appendChild(TodoMainDiv(Todo));
	MainTodoContainer.appendChild(dueDateBtn);
	MainTodoContainer.appendChild(addNoteBox);

	const extraContent = document.createElement("div");
	extraContent.classList.add("extra-info");
	const createdDate = document.createElement("span");
	const todoDate = Todo.getDate();
	if (isToday(Date.now(), todoDate)) {
		createdDate.textContent = `Created ${formatDistance(
			Date.now(),
			todoDate
		)} ago`;
	} else {
		createdDate.textContent = `Created on ${format(todoDate, "iii d MMM y")}`;
	}

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("fa-regular");
	deleteBtn.id = "delete";
	deleteBtn.addEventListener("click", () => {
		removeTodo(Todo);
		renderTodos(ProjectId);
		renderEditor(null);
		updateTodosAmount(ProjectId);
	});

	extraContent.appendChild(createdDate);
	extraContent.appendChild(deleteBtn);

	EditorTab.appendChild(MainTodoContainer);
	EditorTab.appendChild(extraContent);
}
