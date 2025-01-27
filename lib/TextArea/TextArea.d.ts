import React from "react";
import { IElement } from "../Form/Element";
import { UIComponent } from "../ui-types";
export interface ITextArea extends UIComponent<IElement<HTMLTextAreaElement>> {
    onChangeText?: (text: string) => void;
    wait?: boolean;
    children?: React.ReactNode;
}
declare const TextArea: React.ForwardRefExoticComponent<ITextArea & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
