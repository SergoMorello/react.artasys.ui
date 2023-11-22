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
import Optgroup,{
	IOptgroup
} from "./Optgroup";

interface StaticComponent extends ForwardRefExoticComponent<ISelect & RefAttributes<HTMLInputElement>> {
	Option: FC<IOption>;
	Optgroup: FC<IOptgroup>;
};

const Select: StaticComponent = {
	...forwardRef<HTMLInputElement, ISelect>(({...args}, ref): JSX.Element => <SelectUI {...args} ref={ref}/>),
	Option,
	Optgroup
} as StaticComponent;

export {
	Option as SelectOption,
	Optgroup as SelectOptgroup
};
export default Select;