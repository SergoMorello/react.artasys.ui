import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { type SpinnerProps } from "../Spinner";
import type { UIComponent } from "../ui-types";
export interface ButtonProps extends UIComponent<ButtonHTMLAttributes<HTMLButtonElement>> {
    wait?: boolean;
    classNameContainer?: string;
    styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
    spinnerColor?: SpinnerProps['color'];
}
declare const Button: ({ children, className, classNameContainer, styleContainer, spinnerColor, wait, ...props }: ButtonProps) => JSX.Element;
export default Button;
