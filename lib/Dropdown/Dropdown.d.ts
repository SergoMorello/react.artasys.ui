import { AllHTMLAttributes, FunctionComponentElement } from "react";
import type { IItem, TChildrenAction } from "./Item";
export declare const Context: import("react").Context<TChildrenAction>;
export interface IDropdown extends AllHTMLAttributes<HTMLDivElement> {
    direction?: 'down' | 'up';
    position?: 'left' | 'right';
    split?: boolean;
    hover?: boolean;
    arrow?: boolean;
    items?: FunctionComponentElement<IItem> | FunctionComponentElement<IItem>[];
    disabled?: boolean;
    enableRerenderItems?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    children?: React.ReactNode;
}
declare const Dropdown: ({ children, className, items, arrow, direction, position, split, disabled, hover, enableRerenderItems, onShow, onHide, ...props }: IDropdown) => JSX.Element;
export default Dropdown;
