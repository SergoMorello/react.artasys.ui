import { FormHTMLAttributes, ReactNode } from 'react';
import { TSpinner } from '../Spinner';
interface IForm extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    wait?: boolean;
    spinnerColor?: TSpinner['color'];
}
declare const Form: ({ children, wait, className, spinnerColor, onSubmit, ...props }: IForm) => JSX.Element;
export default Form;
