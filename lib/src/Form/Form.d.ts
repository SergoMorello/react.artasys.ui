import { FormHTMLAttributes, ReactNode } from 'react';
import { type SpinnerProps } from '../Spinner';
import { UIComponent } from '../ui-types';
export interface IForm extends UIComponent<FormHTMLAttributes<HTMLFormElement>> {
    children: ReactNode;
    wait?: boolean;
    progress?: number;
    progressRadius?: boolean;
    spinnerColor?: SpinnerProps['color'];
}
declare const Form: ({ children, wait, progress, progressRadius, className, spinnerColor, onSubmit, ...props }: IForm) => JSX.Element;
export default Form;
