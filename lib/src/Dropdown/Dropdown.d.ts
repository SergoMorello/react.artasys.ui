import { AllHTMLAttributes, FunctionComponentElement } from "react";
import type { IItem, TChildrenAction } from "./Item";
import { UIComponent } from "../ui-types";
export declare const Context: import("react").Context<TChildrenAction>;
export interface IDropdown extends UIComponent<AllHTMLAttributes<HTMLDivElement>> {
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
}
declare const Dropdown: ({ children, className, items, arrow, direction, position, split, disabled, hover, enableRerenderItems, onShow, onHide, ...props }: IDropdown) => JSX.Element;
export default Dropdown;
