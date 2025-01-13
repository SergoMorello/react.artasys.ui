import { FormHTMLAttributes, ReactNode } from 'react';
import { type SpinnerProps } from '../Spinner';
interface IForm extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    wait?: boolean;
    progress?: number;
    progressRadius?: boolean;
    spinnerColor?: SpinnerProps['color'];
}
declare const Form: ({ children, wait, progress, progressRadius, className, spinnerColor, onSubmit, ...props }: IForm) => JSX.Element;
export default Form;
