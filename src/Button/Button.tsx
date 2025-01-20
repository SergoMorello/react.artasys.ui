import { useEffect, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import styles from "./style.module.scss";
import Spinner,{
	type SpinnerProps
} from "../Spinner";
import type { UIComponent } from "../ui-types";
import Loading from "../Loading";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	wait?: boolean;
	classNameContainer?: string;
	styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
	variant?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary' ;
	size?: 'normal' | 'small' | 'large';
	icon?: 'left' | 'right' | 'only' | 'no';
}

const Button: React.FC<ButtonProps> = ({children, className, classNameContainer, styleContainer, wait = false, variant, size = 'normal', icon, ...props}) => {

	const buttonClasses = `
		${styles.btn}
		${variant === 'light' ? styles['btn-light'] : ''}
		${variant === 'secondary' ? styles['btn-secondary'] : ''}
		${variant === 'secondary-light' ? styles['btn-secondary-light'] : ''}
		${variant === 'tertiary' ? styles['btn-tertiary'] : ''}
		${size === 'normal' ? styles['normal-btn'] : ''}
		${size === 'small' ? styles['small-btn'] : ''}
		${size === 'large' ? styles['large-btn'] : ''}
		${icon === 'left' && !wait? styles['icon-left'] : ''}
		${icon === 'right' && !wait? styles['icon-right'] : ''}
		${icon === 'only' && !wait? styles['icon-only'] : ''}
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