import { AllHTMLAttributes } from "react";
export interface IDropdown extends AllHTMLAttributes<HTMLDivElement> {
    direction?: 'down' | 'up' | 'left' | 'right';
    position?: 'left' | 'right';
    split?: boolean;
}
declare const Dropdown: ({ children, className, direction, position, split, ...props }: IDropdown) => JSX.Element;
export default Dropdown;
