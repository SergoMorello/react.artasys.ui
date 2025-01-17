import { type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import { type SpinnerProps } from "../Spinner";
import type { UIComponent } from "../ui-types";
export interface ButtonProps extends UIComponent<ButtonHTMLAttributes<HTMLButtonElement>> {
    wait?: boolean;
    classNameContainer?: string;
    styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
    spinnerColor?: SpinnerProps['color'];
    variant?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary';
    size?: 'normal' | 'small' | 'large';
    icon?: 'left' | 'right' | 'only' | 'no';
}
declare const Button: ({ children, className, classNameContainer, styleContainer, spinnerColor, wait, variant, size, icon, ...props }: ButtonProps) => JSX.Element;
export default Button;
