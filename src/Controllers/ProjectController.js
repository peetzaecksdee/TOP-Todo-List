import Project from "../Objects/Project.js";
import Todo from "../Objects/Todo.js";
import { saveData, loadData } from "./StorageController.js";

export function loadProjects() {
  let projectsData = JSON.parse(loadData('projects')) || [];

  return projectsData.map((data) => {
    const project = Project(data.id, data.title);

    loadTodos(project, data.todos);
    return project
  });
}

export function loadTodos(project, todos) {
  todos.forEach((todo) => {
    project.addTodo(Todo(...todo));
  });
}

/**
 * 
 * @param {[Project]} projects 
 */
export function saveProjects(projects) {
  const objectProjects = projects.map((project) => project.toObject())

  saveData('projects', JSON.stringify(objectProjects));
}

export function addProject(name) {
  const LoadedProjects = loadProjects();
  const ProjectsLength = LoadedProjects.length;

  let newProject = Project(ProjectsLength > 0 ? LoadedProjects[LoadedProjects.length - 1].id++ : 0, name);

  LoadedProjects.push(newProject);

  saveProjects(LoadedProjects);

  return newProject
}

export function editProject(newProject) {
  let LoadedProjects = loadProjects();
  
  let idx = LoadedProjects.findIndex((project) => project.id === newProject.id)
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
 * @param  {[number, string, Date?, string?, boolean?, boolean?]} info [projectId, title, duedate, notes, starred, done]
 */
export function createTodo(projectId, info) {
  let LoadedProjects = loadProjects();
  
  let project = LoadedProjects.find((proj) => proj.id === projectId);
	let newTodo = Todo(project[project.length - 1].id++, ...info);

  project.addTodo(newTodo);

  saveProjects(LoadedProjects);
}

export function removeTodo(projectId, todoId) {
  let LoadedProjects = loadProjects();
  
  let project = LoadedProjects.find((proj) => proj.id === projectId);

  project.removeTodo(todoId);

  saveProjects(LoadedProjects);
}

export function editTodo(projectId, todoId, info) {
  let LoadedProjects = loadProjects();
  
  let project = LoadedProjects.find((proj) => proj.id === projectId);
	let newTodo = Todo(todoId, ...info);

  let todos = project.getTodos();
  let idx = todos.findIndex((todo) => todo.id === todoId)
  todos[idx] = newTodo;

  saveProjects(LoadedProjects);
}
