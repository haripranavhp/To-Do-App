const COLLECTION_NAME = "todoCollection";

export const getToDoCollection = () => {
	return JSON.parse(localStorage.getItem(COLLECTION_NAME));
};

export const removeToDoCollection = (id) => {
	let oldData = JSON.parse(localStorage.getItem(COLLECTION_NAME));
	const newData = oldData.filter((todo) => todo.id !== id);
	localStorage.setItem(COLLECTION_NAME, JSON.stringify(newData));
};

export const addNewToDoCollection = (newTodo) => {
	let oldData = JSON.parse(localStorage.getItem(COLLECTION_NAME)) ?? [];
	localStorage.setItem(
		COLLECTION_NAME,
		JSON.stringify([...oldData, newTodo])
	);
};
