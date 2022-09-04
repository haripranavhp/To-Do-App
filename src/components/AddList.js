import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddList.module.css";
function AddList(props) {
	const [newTodoName, setNewTodoName] = useState("");

	const toDoNameInputHandler = (e) => {
		setNewTodoName(e.target.value);
	};
	const addListSubmitHandler = (e) => {
		e.preventDefault();
		if (newTodoName === "") return;
		props.addItem({
			id: Date.now(),
			name: newTodoName,
			date: new Date(),
		});
		setNewTodoName("");
	};
	return (
		<form
			onSubmit={addListSubmitHandler}
			className={styles["add-list-form"]}>
			<input
				className={styles["add-list-form-input"]}
				type="text"
				value={newTodoName}
				onChange={toDoNameInputHandler}
			/>
			<Button type="submit" style={styles["add-list-btn"]}>
				Add
			</Button>
		</form>
	);
}

export default AddList;
