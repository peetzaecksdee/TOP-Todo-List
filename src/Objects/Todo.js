/**
 *
 * @param {number} id
 * @param {string} title
 * @param {Date} date
 * @param {Date?} dueDate
 * @param {string?} notes
 * @param {boolean} starred
 * @param {number} projectId
 * @param {boolean} done
 */

export default function (
	id = 1,
	title,
	date,
	dueDate = null,
	notes = "",
	starred = false,
	projectId,
	done = false
) {
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

	const toObject = () => {
		id, title, date, dueDate, notes, starred, projectId, done;
	};

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
