/// <reference types="react" />
import { IElement } from "../Form/Element";
import type { IOption } from "./Option";
export declare const Context: import("react").Context<{
    selected: string;
    setSelect: (value: string) => void;
    setTitle: (title: string) => void;
}>;
export interface ISelect extends Omit<IElement, 'children' | 'onChange'> {
    children?: React.FunctionComponentElement<IOption>[];
    onChange?: (value: string) => void;
}
declare const Select: import("react").ForwardRefExoticComponent<ISelect & import("react").RefAttributes<HTMLInputElement>>;
export default Select;
