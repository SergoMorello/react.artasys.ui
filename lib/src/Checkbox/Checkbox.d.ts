import { IElement } from "../Form/Element";
interface ICheckbox extends IElement<HTMLInputElement> {
    type?: 'checkbox' | 'radio';
}
declare const Checkbox: import("react").ForwardRefExoticComponent<ICheckbox & import("react").RefAttributes<HTMLInputElement>>;
export default Checkbox;
