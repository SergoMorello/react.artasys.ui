import { AllHTMLAttributes, ReactElement } from "react";
export interface IElement<T = any> extends Omit<AllHTMLAttributes<T>, 'children'> {
    children?: ((props: AllHTMLAttributes<T>) => ReactElement) | AllHTMLAttributes<T>["children"];
    error?: string;
    formvalue?: string | number;
    disabled?: boolean;
    placeholder?: string;
    styleContainer?: React.HTMLAttributes<T>["style"];
    classNameContainer?: string;
    beforeElement?: React.ReactElement;
    afterElement?: React.ReactElement;
    hiddenContainer?: boolean;
    wait?: boolean;
}
declare const Element: ({ children, beforeElement, afterElement, error, placeholder, styleContainer, classNameContainer, hiddenContainer, formvalue, wait, ...props }: IElement) => import("react/jsx-runtime").JSX.Element;
export default Element;
