import { AllHTMLAttributes, ReactElement } from "react";
export interface IElement<T = any> extends Omit<AllHTMLAttributes<T>, 'children'> {
    children?: ((props: AllHTMLAttributes<T>) => ReactElement) | AllHTMLAttributes<T>["children"];
    error?: string;
    formValue?: string | number;
    disabled?: boolean;
    placeholder?: string;
    styleContainer?: React.HTMLAttributes<T>["style"];
    classNameContainer?: string;
    beforeElement?: React.ReactElement;
    afterElement?: React.ReactElement;
    hiddenContainer?: boolean;
    children?: React.ReactNode;
}
declare const Element: ({ children, beforeElement, afterElement, error, placeholder, styleContainer, classNameContainer, hiddenContainer, formValue, ...props }: IElement) => JSX.Element;
export default Element;
