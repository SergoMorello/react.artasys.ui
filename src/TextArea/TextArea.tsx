import React, {
    forwardRef,
    useRef,
    useEffect,
    useState,
    ChangeEvent,
    useImperativeHandle,
} from "react";
import Element, { IElement } from "../Form/Element";
import { UIComponent } from "../ui-types";

export interface ITextArea extends UIComponent<IElement<HTMLTextAreaElement>> {
    onChangeText?: (text: string) => void;
    wait?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ onChange, onInput, onChangeText, formvalue, wait, ...props }, ref) => {
        const textareaRef = useRef<HTMLTextAreaElement>(null);
        const [currentValue, setCurrentValue] = useState(props.value ?? formvalue ?? "");

        const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            if (typeof onChange === "function") {
                onChange(e);
            }
            if (typeof onChangeText === "function") {
                onChangeText(e.target.value);
            }
        };

        const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
            if (typeof onInput === "function") {
                onInput(e);
            }
            setCurrentValue(e.target.value); 
        };

        useEffect(() => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            const currentHeight = textarea.offsetHeight; 
            textarea.style.height = "auto";
            const scrollHeight = textarea.scrollHeight;
            const newHeight = Math.max(scrollHeight, 50); 
            textarea.style.height = `${Math.max(newHeight, currentHeight)}px`;
        }, [currentValue]);

        useEffect(() => {
            setCurrentValue(props.value ?? formvalue ?? "");
        }, [props.value, formvalue]);

        useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

        const value = wait ? "" : currentValue;

        return (
            <Element {...props} wait={wait}>
                {(props) => (
                    <textarea
                        {...props}
                        disabled={wait}
                        placeholder={props.placeholder ?? ""}
                        value={value}
                        onChange={handleChange}
                        onInput={handleInput}
                        ref={textareaRef}
                    />
                )}
            </Element>
        );
    }
);

export default TextArea;