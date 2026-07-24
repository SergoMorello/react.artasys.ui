import { useMemo, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import styles from "./style.module.scss";
import Loading from "../Loading";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	wait?: boolean;
	classNameContainer?: string;
	styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
	variant?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary' ;
	size?: 'normal' | 'small' | 'large';
	icon?: 'left' | 'right' | 'only' | 'no';
	children?: React.ReactNode;
}

const Button = ({
	children,
	className,
	classNameContainer,
	styleContainer,
	wait = false,
	variant,
	size = 'normal',
	icon,
	...props
}: ButtonProps) => {

	const classNames = useMemo(() => {
		const array = ['ui-button-container'];
	
		array.push(styles['container']);
		if (classNameContainer) {
			array.push(classNameContainer);
		}

		return array.join(' ');
	}, [classNameContainer]);

	const buttonClassNames = useMemo(() => {
		const array = [styles['btn']];

		if (variant) {
			array.push(styles[`btn-${variant}`]);
		}

		if (size) {
			array.push(styles[`${size}-btn`]);
		}

		if (icon && !wait) {
			array.push(styles[`icon-${icon}`]);
		}

		if (className) {
			array.push(className);
		}

		return array.join(' ');
	}, [variant, size, icon, wait, className]);

	return(
		<div
			className={classNames}
			style={styleContainer}
		>
			<button {...props} className={buttonClassNames}>{!wait && children}</button>
			{wait && (
				<div className={'ui-button-spinner ' + styles['wait-indicator'] + (wait ? ' ' + styles['active'] : '')}>
					<Loading color={variant}/>
				</div>
			)}
		</div>
	)
};

export default Button;