import { FormHTMLAttributes, ReactNode } from 'react';
interface IForm extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    wait?: boolean;
}
declare const Form: ({ children, wait, className, onSubmit, ...props }: IForm) => JSX.Element;
export default Form;
