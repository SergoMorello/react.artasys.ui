import { AllHTMLAttributes, FunctionComponentElement } from "react";
import type { IItem } from "./Item";
export interface IDropdown extends AllHTMLAttributes<HTMLDivElement> {
    direction?: 'down' | 'up' | 'left' | 'right';
    position?: 'left' | 'right';
    split?: boolean;
    items: FunctionComponentElement<IItem> | FunctionComponentElement<IItem>[];
}
declare const Dropdown: ({ children, className, items, direction, position, split, ...props }: IDropdown) => JSX.Element;
export default Dropdown;
