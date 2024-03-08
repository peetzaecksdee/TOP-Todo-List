import { renderEditor } from "./Controllers/RenderController";
import { editTodo } from "./Controllers/ProjectController";

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
	count.dataset.count = 0;

	div.appendChild(i);
	div.appendChild(textSpan);

	Project.appendChild(div);
	Project.appendChild(count);

	return Project;
}

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

export function TodoButton(todo) {
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
		return elem.target === textSpan || elem.target === Todo ? true : false;
	}

	Todo.addEventListener("mousedown", (elem) =>
		ButtonAnimation(Todo, 0.99, isBtnElem(elem))
	);
	Todo.addEventListener("mouseout", () => ButtonAnimation(Todo, 1));
	Todo.addEventListener("click", () => {
		renderEditor(todo);
		ButtonAnimation(Todo, 1);
	});

	div.appendChild(circle);
	div.appendChild(textSpan);

	Todo.appendChild(div);
	Todo.appendChild(star);

	return Todo;
}