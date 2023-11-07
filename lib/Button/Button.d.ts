import React from "react";
import { TSpinner } from "../Spinner";
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    wait?: boolean;
    classNameContainer?: string;
    styleContainer?: React.HTMLAttributes<HTMLDivElement>['style'];
    spinnerColor?: TSpinner['color'];
}
declare const Button: ({ children, className, classNameContainer, styleContainer, spinnerColor, wait, ...props }: IButton) => JSX.Element;
export default Button;
