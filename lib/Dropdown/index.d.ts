import { RefAttributes, ForwardRefExoticComponent, FC } from "react";
import { IDropdown } from "./Dropdown";
import Item, { IItem } from "./Item";
interface StaticComponent extends ForwardRefExoticComponent<IDropdown & RefAttributes<HTMLInputElement>> {
    Item: FC<IItem>;
}
declare const Dropdown: StaticComponent;
export { Item as DropdownItem };
export default Dropdown;
