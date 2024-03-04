/**
 *
 * @param {number} id
 * @param {string} title
 */

export default function (id, title) {
	let todos = [];

	const getId = () => id;
	const getTitle = () => title;
	const getTodos = () => todos;

	const changeTitle = (newTitle) => {
		title = newTitle;
	};
	const addTodo = (todo) => {
		todos.push(todo);
	};
	const removeTodo = (todoId) => {
		todos.filter((todo) => {
			todo.getId !== todoId;
		});
	};

	const toObject = () => ({
		id,
		title,
		todos: todos.map((todo) => {
			todo.toObject();
		}),
	});

	return Object.assign(
		{},
		{ getId, getTitle, getTodos, changeTitle, addTodo, removeTodo, toObject }
	);
}
