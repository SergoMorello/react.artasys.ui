import { FormHTMLAttributes, ReactNode } from 'react';
import { TSpinner } from '../Spinner';
interface IForm extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    wait?: boolean;
    progress?: number;
    progressRadius?: boolean;
    spinnerColor?: TSpinner['color'];
    children?: React.ReactNode;
}
declare const Form: ({ children, wait, progress, progressRadius, className, spinnerColor, onSubmit, ...props }: IForm) => JSX.Element;
export default Form;
