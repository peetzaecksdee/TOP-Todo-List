/**
 *
 * @param {number} id
 * @param {string} title
 */

export default function (uid, title) {
	let todos = [];

	const id = uid;
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
			return todo.toObject();
		}),
	});

	return Object.assign(
		{},
		{ id, getTitle, getTodos, changeTitle, addTodo, removeTodo, toObject }
	);
}
