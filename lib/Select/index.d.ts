import { ForwardRefExoticComponent, FC, RefAttributes } from "react";
import { ISelect } from "./Select";
import Option, { IOption } from "./Option";
interface StaticComponent extends ForwardRefExoticComponent<ISelect & RefAttributes<HTMLInputElement>> {
    Option: FC<IOption>;
}
declare const Select: StaticComponent;
export { Option as SelectOption };
export default Select;
