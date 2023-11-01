import React from "react";
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    wait?: boolean;
}
declare const Button: ({ children, wait, ...props }: IButton) => JSX.Element;
export default Button;
