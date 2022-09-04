import React from "react";
import AddList from "./AddList";

import styles from "./NavBar.module.css";

function NavBar(props) {
	return (
		<nav className={styles.nav}>
			<h1>To Do App</h1>
			<AddList addItem={props.addItem} />
		</nav>
	);
}

export default NavBar;
