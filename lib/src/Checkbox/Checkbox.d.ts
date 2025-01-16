import { IElement } from "../Form/Element";
import { UIComponent } from "../ui-types";
export interface ICheckbox extends UIComponent<IElement<HTMLInputElement>> {
    type?: 'checkbox' | 'radio';
}
declare const Checkbox: import("react").ForwardRefExoticComponent<ICheckbox & import("react").RefAttributes<HTMLInputElement>>;
export default Checkbox;
