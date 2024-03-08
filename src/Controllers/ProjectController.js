import Project from "../Objects/Project.js";
import Todo from "../Objects/Todo.js";
import { saveData, loadData } from "./StorageController.js";

export function loadProjects() {
	let projectsData = JSON.parse(loadData("projects")) || [];

	return projectsData.map((data) => {
		const project = Project(data.id, data.title);

		loadTodos(project, data.todos);
		return project;
	});
}

export function loadTodos(project, todos) {
	todos.forEach((todo) => {
		project.addTodo(
			Todo(
				todo.id,
				todo.pid,
				todo.title,
				todo.date,
				todo.dueDate,
				todo.starred,
				todo.done
			)
		);
	});
}

/**
 *
 * @param {[Project]} projects
 */
export function saveProjects(projects) {
	const objectProjects = projects.map((project) => project.toObject());

	saveData("projects", JSON.stringify(objectProjects));
}

export function addProject(name) {
	const LoadedProjects = loadProjects();
	const ProjectsLength = LoadedProjects.length;

	let newProject = Project(
		ProjectsLength > 0 ? LoadedProjects[LoadedProjects.length - 1].id + 1 : 1,
		name
	);

	LoadedProjects.push(newProject);

	saveProjects(LoadedProjects);

	return newProject;
}

export function editProject(newProject) {
	let LoadedProjects = loadProjects();

	let idx = LoadedProjects.findIndex((project) => project.id === newProject.id);
	LoadedProjects[idx] = newProject;

	saveProjects(LoadedProjects);
}

export function removeProject(projectId) {
	let LoadedProjects = loadProjects();

	saveProjects(LoadedProjects.filter((project) => project.id !== projectId));
}

/**
 *
 * @param {*} projectId
 * @param  {[string, Date?, string?, boolean?, boolean?]} info [title, duedate, notes, starred, done]
 */
export function createTodo(projectId, info) {
	let LoadedProjects = loadProjects();

	let project = LoadedProjects.find((proj) => proj.id === projectId);
	let projectTodos = project.getTodos();
	let projectLength = projectTodos.length;

	let newTodo = Todo(
		projectLength > 0 ? projectTodos[projectLength - 1].id + 1 : 1,
		projectId,
		...info
	);

	project.addTodo(newTodo);

	saveProjects(LoadedProjects);

	return newTodo;
}

export function removeTodo(todo) {
	let LoadedProjects = loadProjects();

	let project = LoadedProjects.find((proj) => proj.id === todo.pid);
	
	project.removeTodo(todo.id);
	
	saveProjects(LoadedProjects);
}

export function editTodo(newTodo) {
	let LoadedProjects = loadProjects();
	
	let project = LoadedProjects.find((proj) => proj.id === newTodo.pid);
	
	let todos = project.getTodos();
	let idx = todos.findIndex((todo) => todo.id === newTodo.id);
	todos[idx] = newTodo;
	
	saveProjects(LoadedProjects);
}

export function getTodos(projectId) {
	let LoadedProjects = loadProjects();
	
	let project = LoadedProjects.find((proj) => proj.id === projectId);

	return project.getTodos();
}