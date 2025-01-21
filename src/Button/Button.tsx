import { type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import styles from "./style.module.scss";
import Spinner,{
	type SpinnerProps
} from "../Spinner";
import Loading from "../Loading";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	wait?: boolean;
	classNameContainer?: string;
	styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
	variant?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary' ;
	size?: 'normal' | 'small' | 'large';
	icon?: 'left' | 'right' | 'only' | 'no';
}

const Button = ({children, className, classNameContainer, styleContainer, wait = false, variant, size = 'normal', icon, ...props}: ButtonProps) => {

	const buttonClasses = `
		${styles.btn}
		${variant && styles[`btn-${variant}`]}
		${size && styles[`${size}-btn`]}
		${icon && !wait ? styles[`icon-${icon}`] : ''}
		${className || ''}
	`
	.replace(/\s+/g, ' ')
	.trim();

	const containerClasses = ['ui-button-container'];

	containerClasses.push(styles['container']);
	if (classNameContainer) containerClasses.push(classNameContainer);


	return(
		<div className={containerClasses.join(' ')} style={styleContainer}>
			<button {...props} className={buttonClasses}>{!wait && children}</button>
			<div className={'ui-button-spinner ' + styles['wait-indicator'] + (wait ? ' ' + styles['active'] : '')}>
				{/* <Spinner size="small" color={spinnerColor}/> */}
				<Loading color={variant}/>
			</div>
		</div>
	)
};

export default Button;