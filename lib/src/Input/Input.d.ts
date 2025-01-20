import { type HTMLInputTypeAttribute } from "react";
import { IElement } from "../Form/Element";
import { UIComponent } from "../ui-types";
export interface IInput extends UIComponent<IElement<HTMLInputElement>> {
    onChangeText?: (text: string) => void;
    type?: HTMLInputTypeAttribute;
    wait?: boolean;
}
declare const Input: import("react").ForwardRefExoticComponent<IInput & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
