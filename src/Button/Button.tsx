import React from "react";
import styles from "./style.module.css";
import Spinner from "../Spinner";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	wait?: boolean
}

const Button = ({children, wait = false, ...props}: IButton) => {

	return(<div className={styles['container']}>
		<button {...props}>{children}</button>
		<div className={styles['wait-indicator'] + (wait ? ' ' + styles['active'] : '')}>
			<Spinner size="small" color="contrast"/>
		</div>
	</div>)
};

export default Button;