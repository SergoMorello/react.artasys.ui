import {
	forwardRef,
	RefAttributes,
	ForwardRefExoticComponent,
	FC,
} from "react";
import {
	default as DropdownUI,
	type DropdownProps
} from "./Dropdown";
import {
	DropdownItem,
	DropdownItemProps
} from "./DropdownItem";

interface StaticComponent extends ForwardRefExoticComponent<DropdownProps & RefAttributes<HTMLInputElement>> {
	Item: FC<DropdownItemProps>;
};

const Dropdown: StaticComponent = {
	...forwardRef<HTMLInputElement, DropdownProps>(({...args}, ref): JSX.Element => <DropdownUI {...args}/>),
	Item: DropdownItem
} as StaticComponent;

export {
	DropdownItem
};

export default Dropdown;