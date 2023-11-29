import {
	forwardRef,
	useRef,
	useEffect,
	useState,
	ChangeEvent,
	useImperativeHandle
} from "react";
import Element,{
	IElement
} from "../Form/Element";

interface ITextArea extends IElement<HTMLTextAreaElement> {
	onChangeText?: (text: string) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(({onChange, onInput, onChangeText, formValue, ...props}, ref) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [currentValue, setCurrentValue] = useState(props.value);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (typeof onChange === 'function') {
			onChange(e);
		}

		if (typeof onChangeText === 'function') {
			onChangeText(e.target.value);
		}
	};

	const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (typeof onInput === 'function') {
			onInput(e);
		}
		setCurrentValue(e.target.value);
	};

	useEffect(() => {
		if (!textareaRef.current) return;
		
		textareaRef.current.style.height = '0';
		const height = textareaRef.current.scrollHeight;
		textareaRef.current.style.height = height + 'px';
	},[currentValue]);

	useEffect(() => {
		setCurrentValue(props.value ?? formValue);
	}, [props.value, formValue]);

	useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

	return(<Element {...props}>
		{ (props) => <textarea {...props} placeholder="" value={currentValue} onChange={handleChange} onInput={handleInput} ref={textareaRef}/> }
	</Element>);
});

export default TextArea;