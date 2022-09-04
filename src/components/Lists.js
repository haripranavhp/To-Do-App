import React from "react";

import Card from "../UI/Card";
import ToDoItem from "./ToDoItem";
import styles from "./Lists.module.css";

function Lists(props) {
	return (
		<Card style={`${styles["card-list"]}`}>
			<ul className={`${styles.lists}`}>
				{props.todos.map((todo) => {
					return (
						<ToDoItem
							key={todo.id}
							todoItem={todo}
							removeItem={props.removeItem}
						/>
					);
				})}
			</ul>
		</Card>
	);
}

export default Lists;
