import React from "react";
import styles from "./style.module.css";
import Spinner from "../Spinner";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	wait?: boolean;
	classNameContainer?: string;
	styleContainer?: React.HTMLAttributes<HTMLDivElement>['style'];
}

const Button = ({children, className, classNameContainer, styleContainer, wait = false, ...props}: IButton) => {

	return(<div className={styles['container'] + (classNameContainer ? ' ' + classNameContainer : '')} style={styleContainer}>
		<button {...props} className={className}>{children}</button>
		<div className={styles['wait-indicator'] + (wait ? ' ' + styles['active'] : '')}>
			<Spinner size="small" color="contrast"/>
		</div>
	</div>)
};

export default Button;