import { FormHTMLAttributes, ReactNode } from 'react';
import { UIComponent } from '../ui-types';
export interface IForm extends UIComponent<FormHTMLAttributes<HTMLFormElement>> {
    children: ReactNode;
    wait?: boolean;
    progress?: number;
    progressRadius?: boolean;
}
declare const Form: ({ children, wait, progress, progressRadius, className, onSubmit, ...props }: IForm) => JSX.Element;
export default Form;
