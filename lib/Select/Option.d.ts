import { LiHTMLAttributes } from "react";
export interface IOption extends LiHTMLAttributes<HTMLLIElement> {
    value?: string;
    children?: string | React.ReactElement;
}
declare const Option: ({ children, value, onClick, ...props }: IOption) => JSX.Element;
export default Option;
