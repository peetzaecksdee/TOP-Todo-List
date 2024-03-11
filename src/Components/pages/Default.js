import "./Default.css";

import {
	renderMyDay,
	renderPlanned,
	renderStarred,
} from "../../Controllers/RenderController";

const functionsRespective = {
	"My Day": renderMyDay,
	"Starred": renderStarred,
	"Planned": renderPlanned,
}

function createDefaultPage(page) {
	const main = document.querySelector("main");

	const titleContainer = document.createElement("div");
	titleContainer.classList.add("title-container");

	const title = document.createElement("input");
	title.type = "text";
	title.value = page;
	title.id = "titleInput";
	title.disabled = true;

	const todoList = document.createElement("div");
	todoList.id = "todoList";

	titleContainer.appendChild(title);

	main.appendChild(titleContainer);
	main.appendChild(todoList);
	functionsRespective[page]();

	return main;
}

export default createDefaultPage;
