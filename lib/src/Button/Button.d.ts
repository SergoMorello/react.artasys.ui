import { ReactNode, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    wait?: boolean;
    classNameContainer?: string;
    styleContainer?: HTMLAttributes<HTMLDivElement>['style'];
    variant?: 'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary';
    size?: 'normal' | 'small' | 'large';
    icon?: 'left' | 'right' | 'only' | 'no';
    children?: ReactNode;
}
declare const Button: ({ children, className, classNameContainer, styleContainer, wait, variant, size, icon, ...props }: ButtonProps) => JSX.Element;
export default Button;
