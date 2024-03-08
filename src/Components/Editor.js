import "./Editor.css";

import { format, formatDistance, differenceInDays } from "date-fns";
import { removeTodo } from "../Controllers/ProjectController";
import { renderEditor, renderTodos } from "../Controllers/RenderController";

export default function(Todo) {
	const EditorTab = document.querySelector(".editor");
  EditorTab.textContent = "";

  const todoContent = document.createElement("div");
  
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

  EditorTab.appendChild(todoContent);
  EditorTab.appendChild(extraContent);
}
