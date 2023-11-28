import { LiHTMLAttributes } from "react";
export interface IOption extends LiHTMLAttributes<HTMLLIElement> {
    value?: string;
    disabled?: boolean;
    children?: string | React.ReactElement;
}
declare const Option: ({ children, value, disabled, hidden, onClick, ...props }: IOption) => JSX.Element | null;
export default Option;
