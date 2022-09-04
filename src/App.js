import { useState } from "react";
import NavBar from "./components/NavBar";
import Lists from "./components/Lists";
import {
	getToDoCollection,
	removeToDoCollection,
	addNewToDoCollection,
} from "./data/TodoCollection";

import "./App.css";
import Card from "./UI/Card";
function App() {
	const [todos, setTodos] = useState(getToDoCollection() ?? []);

	const removeItem = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
		removeToDoCollection(id);
	};

	const addItem = (newTodo) => {
		setTodos((prevTodos) => [...prevTodos, newTodo]);
		addNewToDoCollection(newTodo);
	};

	return (
		<div className="App">
			<NavBar addItem={addItem} />

			{todos.length > 0 ? (
				<Lists todos={todos} removeItem={removeItem} />
			) : (
				<Card>Add your New Todo item...!!!</Card>
			)}

			<footer>
				Copyright &copy; {new Date().getFullYear()} | Haripranav
			</footer>
		</div>
	);
}

export default App;
