import React from "react";
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    wait?: boolean;
    classNameContainer?: string;
    styleContainer?: React.HTMLAttributes<HTMLDivElement>['style'];
}
declare const Button: ({ children, className, classNameContainer, styleContainer, wait, ...props }: IButton) => JSX.Element;
export default Button;
