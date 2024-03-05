/**
 *
 * @param {number} id
 * @param {number} projectId
 * @param {string} title
 * @param {Date?} date
 * @param {string?} notes
 * @param {boolean?} starred
 * @param {boolean?} done
 */

export default function (
	id = 1,
	projectId,
	title,
	date,
	notes = "",
	starred = false,
	done = false
) {
	const dueDate = Date.now();

	const getId = () => id;
	const getTitle = () => title;
	const getDate = () => date;
	const getDueDate = () => dueDate;
	const getNotes = () => notes;
	const isStarred = () => starred;
	const getProjectId = () => projectId;
	const isDone = () => done;

	const setTitle = (newTitle) => {
		title = newTitle;
	};
	const setDueDate = (newDueDate) => {
		dueDate = newDueDate;
	};
	const setNotes = (newNote) => {
		notes = newNote;
	};
	const setStarred = (newState) => {
		starred = newState;
	};
	const setDone = (newState) => {
		done = newState;
	};

	const toObject = () => ({
		id, title, date, notes, starred, projectId, done,
	});

	return Object.assign(
		{},
		{
			getId,
			getTitle,
			getDate,
			getDueDate,
			getNotes,
			isStarred,
			getProjectId,
			isDone,
			setTitle,
			setDueDate,
			setNotes,
			setStarred,
			setDone,
			toObject,
		}
	);
}
