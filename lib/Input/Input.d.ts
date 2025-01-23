import { type HTMLInputTypeAttribute } from "react";
import { IElement } from "../Form/Element";
interface IInput extends IElement<HTMLInputElement> {
    onChangeText?: (text: string) => void;
    type?: HTMLInputTypeAttribute;
    children?: React.ReactNode;
}
declare const Input: import("react").ForwardRefExoticComponent<IInput & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
