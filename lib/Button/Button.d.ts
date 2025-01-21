import React from "react";
import { TSpinner } from "../Spinner";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	wait?: boolean;
	classNameContainer?: string;
	styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
	variant?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary' ;
	size?: 'normal' | 'small' | 'large';
	icon?: 'left' | 'right' | 'only' | 'no';
}
declare const Button = ({ children, className, classNameContainer, styleContainer, spinnerColor, wait, ...props }: ButtonProps) => JSX.Element;
export default Button;
