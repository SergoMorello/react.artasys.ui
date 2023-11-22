import { FunctionComponentElement } from "react";
import { IElement } from "../Form/Element";
import type { IOptgroup } from "./Optgroup";
import type { IOption } from "./Option";
export declare const Context: import("react").Context<{
    selected: string;
    emptyValue: import("react").MutableRefObject<boolean>;
    setSelect: (value: string) => void;
    setSelected: (value: string) => void;
    setTitle: (title: IOption['children']) => void;
}>;
export type TOptionElement = FunctionComponentElement<IOption> | FunctionComponentElement<IOption>[];
export interface ISelect extends Omit<IElement, 'children'> {
    children?: TOptionElement | FunctionComponentElement<IOptgroup> | FunctionComponentElement<IOptgroup>[];
    onChangeSelect?: (value: string) => void;
}
declare const Select: import("react").ForwardRefExoticComponent<ISelect & import("react").RefAttributes<HTMLInputElement>>;
export default Select;
