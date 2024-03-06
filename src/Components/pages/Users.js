import './Users.css';

function createUserPage() {
  const main = document.createElement('main');
  const todoList = document.createElement('div');
  todoList.id = 'todoList';
  
  const addTodoBtn = document.createElement('button');
  addTodoBtn.id = 'addTodo';
  addTodoBtn.textContent = "Add a task";

  main.appendChild(todoList)
  main.appendChild(addTodoBtn);

  return main;
}

export default createUserPage;