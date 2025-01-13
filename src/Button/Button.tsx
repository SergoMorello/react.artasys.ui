import { useEffect, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import styles from "./style.module.scss";
import Spinner,{
	type SpinnerProps
} from "../Spinner";
import type { UIComponent } from "../ui-types";

export interface ButtonProps extends UIComponent<ButtonHTMLAttributes<HTMLButtonElement>> {
	wait?: boolean;
	classNameContainer?: string;
	styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
	spinnerColor?: SpinnerProps['color'];
}

const Button = ({children, className, classNameContainer, styleContainer, spinnerColor = 'contrast', wait = false, ...props}: ButtonProps) => {


	const classes = ['ui-button-container'];

	classes.push(styles['container']);
	if (classNameContainer) classes.push(classNameContainer);

	return(<div className={classes.join(' ')} style={styleContainer}>
		<button {...props} className={'ui-button' + (className ? ' ' + className : '')}>{children}</button>
		<div className={'ui-button-spinner ' + styles['wait-indicator'] + (wait ? ' ' + styles['active'] : '')}>
			<Spinner size="small" color={spinnerColor}/>
		</div>
	</div>)
};

export default Button;