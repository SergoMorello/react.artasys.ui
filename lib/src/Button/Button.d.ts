import { type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import { type SpinnerProps } from "../Spinner";
import type { UIComponent } from "../ui-types";
export interface ButtonProps extends UIComponent<ButtonHTMLAttributes<HTMLButtonElement>> {
    wait?: boolean;
    classNameContainer?: string;
    styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
    spinnerColor?: SpinnerProps['color'];
    variant?: 'light' | 'secondary' | 'secondary-light' | 'tertiary' | 'no';
    size?: 'normal' | 'small' | 'large';
}
declare const Button: ({ children, className, classNameContainer, styleContainer, spinnerColor, wait, variant, size, ...props }: ButtonProps) => JSX.Element;
export default Button;
