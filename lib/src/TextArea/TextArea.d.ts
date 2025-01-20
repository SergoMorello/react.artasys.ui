import { IElement } from "../Form/Element";
import { UIComponent } from "../ui-types";
export interface ITextArea extends UIComponent<IElement<HTMLTextAreaElement>> {
    onChangeText?: (text: string) => void;
    wait?: boolean;
}
declare const TextArea: import("react").ForwardRefExoticComponent<ITextArea & import("react").RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
