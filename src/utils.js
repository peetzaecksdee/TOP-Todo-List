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
	console.log(condition);
	if (condition === false) {
		return;
	}

	if (scale === 1) {
		btn.style = "";
	} else {
		btn.style = `transform: scale(${scale})`;
	}
}