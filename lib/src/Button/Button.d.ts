import { type ButtonHTMLAttributes, type HTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    wait?: boolean;
    classNameContainer?: string;
    styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
    variant?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary';
    size?: 'normal' | 'small' | 'large';
    icon?: 'left' | 'right' | 'only' | 'no';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
