import { IElement } from "../Form/Element";
interface ITextArea extends IElement<HTMLTextAreaElement> {
    onChangeText?: (text: string) => void;
}
declare const TextArea: import("react").ForwardRefExoticComponent<ITextArea & import("react").RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
