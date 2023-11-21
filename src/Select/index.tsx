import {
	forwardRef,
	ForwardRefExoticComponent,
	FC,
	RefAttributes
} from "react";
import {
	default as SelectUI,
	ISelect
} from "./Select";
import Option,{
	IOption
} from "./Option";

interface StaticComponent extends ForwardRefExoticComponent<ISelect & RefAttributes<HTMLInputElement>> {
	Option: FC<IOption>;
};

const Select: StaticComponent = {
	...forwardRef<HTMLInputElement, ISelect>(({...args}, ref): JSX.Element => <SelectUI {...args} ref={ref}/>),
	Option
} as StaticComponent;

export {
	Option as SelectOption
};
export default Select;