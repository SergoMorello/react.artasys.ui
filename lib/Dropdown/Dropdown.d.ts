import { AllHTMLAttributes, FunctionComponentElement } from "react";
import type { IItem, TChildrenAction } from "./Item";
export declare const Context: import("react").Context<TChildrenAction>;
export interface IDropdown extends AllHTMLAttributes<HTMLDivElement> {
    direction?: 'down' | 'up';
    position?: 'left' | 'right';
    split?: boolean;
    hover?: boolean;
    items?: FunctionComponentElement<IItem> | FunctionComponentElement<IItem>[];
    disabled?: boolean;
}
declare const Dropdown: ({ children, className, items, direction, position, split, disabled, hover, ...props }: IDropdown) => JSX.Element;
export default Dropdown;
