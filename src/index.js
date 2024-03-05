import Todo from './Objects/Todo.js';
import Project from './Objects/Project.js';
import { loadFooter } from './Controllers/RenderController.js';

loadFooter();
const newProject = Project(1, "geeza mama");
console.log(newProject);
console.log("hello guys. what is this project?");