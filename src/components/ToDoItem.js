import React from "react";
import Button from "../UI/Button";

import styles from "./ToDoItem.module.css";

function ToDoItem(props) {
	return (
		<div className={styles["item-container"]}>
			<li className={`${styles["to-do-item"]}`}>{props.todoItem.name}</li>
			<Button
				type="button"
				onClickHandler={props.removeItem.bind(null, props.todoItem.id)}
				style={styles["to-do-item-done-btn"]}>
				Done
			</Button>
		</div>
	);
}

export default ToDoItem;
