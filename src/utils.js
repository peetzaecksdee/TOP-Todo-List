export function ProjectButton(opac, icon, text, id) {
	const Project = document.createElement("button");
	Project.classList.add("project");
	Project.dataset.id = id;

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

export function TodoButton(title, done, starred, id) {
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
