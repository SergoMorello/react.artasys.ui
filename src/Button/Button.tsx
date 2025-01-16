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
	variant?: 'light' | 'secondary' | 'secondary-light' | 'tertiary' | 'no';
	size?: 'normal' | 'small' | 'large';
}

const Button = ({children, className, classNameContainer, styleContainer, spinnerColor = 'contrast', wait = false, variant, size = 'normal', ...props}: ButtonProps) => {

	const buttonClasses = `
		${styles.btn}
		${variant === 'light' ? styles['btn-light'] : ''}
		${variant === 'secondary' ? styles['btn-secondary'] : ''}
		${variant === 'secondary-light' ? styles['btn-secondary-light'] : ''}
		${variant === 'tertiary' ? styles['btn-tertiary'] : ''}
		${size === 'normal' ? styles['normal-btn'] : ''}
		${size === 'small' ? styles['small-btn'] : ''}
		${size === 'large' ? styles['large-btn'] : ''}
		${className || ''}
	`.trim();


	return(<div style={styleContainer}>
		<button {...props} className={buttonClasses}>{children}</button>
		<div className={'ui-button-spinner ' + styles['wait-indicator'] + (wait ? ' ' + styles['active'] : '')}>
			<Spinner size="small" color={spinnerColor}/>
		</div>
	</div>)
};

export default Button;