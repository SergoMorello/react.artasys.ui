/// <reference types="react" />
import { IElement } from "../Form/Element";
import type { IOption } from "./Option";
export declare const Context: import("react").Context<{
    selected: string;
    emptyValue: import("react").MutableRefObject<boolean>;
    setSelect: (value: string) => void;
    setSelected: (value: string) => void;
    setTitle: (title: string) => void;
}>;
export interface ISelect extends Omit<IElement, 'children'> {
    children?: React.FunctionComponentElement<IOption>[];
    onChangeSelect?: (value: string) => void;
}
declare const Select: import("react").ForwardRefExoticComponent<ISelect & import("react").RefAttributes<HTMLInputElement>>;
export default Select;
