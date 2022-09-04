import React from "react";

import styles from "./Button.module.css";
function Button(props) {
	return (
		<button
			type={props.type || "button"}
			className={`${styles.button} ${props.style}`}
			onClick={props.onClickHandler}>
			{props.children}
		</button>
	);
}

export default Button;
