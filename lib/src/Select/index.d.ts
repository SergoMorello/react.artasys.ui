import { ForwardRefExoticComponent, FC, RefAttributes } from "react";
import { ISelect } from "./Select";
import Option, { IOption } from "./Option";
import Optgroup, { IOptgroup } from "./Optgroup";
interface StaticComponent extends ForwardRefExoticComponent<ISelect & RefAttributes<HTMLInputElement>> {
    Option: FC<IOption>;
    Optgroup: FC<IOptgroup>;
}
declare const Select: StaticComponent;
export { Option as SelectOption, Optgroup as SelectOptgroup };
export default Select;
