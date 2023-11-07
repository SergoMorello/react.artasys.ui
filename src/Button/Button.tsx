import React from "react";
import styles from "./style.module.css";
import Spinner,{
	TSpinner
} from "../Spinner";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	wait?: boolean;
	classNameContainer?: string;
	styleContainer?: React.HTMLAttributes<HTMLDivElement>['style'];
	spinnerColor?: TSpinner['color'];
}

const Button = ({children, className, classNameContainer, styleContainer, spinnerColor = 'contrast', wait = false, ...props}: IButton) => {

	return(<div className={styles['container'] + (classNameContainer ? ' ' + classNameContainer : '')} style={styleContainer}>
		<button {...props} className={className}>{children}</button>
		<div className={styles['wait-indicator'] + (wait ? ' ' + styles['active'] : '')}>
			<Spinner size="small" color={spinnerColor}/>
		</div>
	</div>)
};

export default Button;