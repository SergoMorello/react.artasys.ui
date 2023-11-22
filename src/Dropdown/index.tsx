import {
	forwardRef,
	RefAttributes,
	ForwardRefExoticComponent,
	FC
} from "react";
import {
	default as DropdownUI,
	IDropdown
} from "./Dropdown";
import Item,{
	IItem
} from "./Item";

interface StaticComponent extends ForwardRefExoticComponent<IDropdown & RefAttributes<HTMLInputElement>> {
	Item: FC<IItem>;
};

const Dropdown: StaticComponent = {
	...forwardRef<HTMLInputElement, IDropdown>(({...args}, ref): JSX.Element => <DropdownUI {...args}/>),
	Item
} as StaticComponent;

export {
	Item as DropdownItem
};

export default Dropdown;