import {
	forwardRef,
	useState,
	ChangeEvent,
	useEffect,
	type HTMLInputTypeAttribute
} from "react";
import Element,{
	IElement
} from "../Form/Element";


interface IInput extends IElement<HTMLInputElement> {
	onChangeText?: (text: string) => void;
	type?: HTMLInputTypeAttribute;
}

const Input = forwardRef<HTMLInputElement, IInput>(({onChange, onInput, onChangeText, formValue, ...props}, ref) => {
	const [currentValue, setCurrentValue] = useState<string | undefined>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (typeof onChange === 'function') {
			onChange(e);
		}

		if (typeof onChangeText === 'function') {
			onChangeText(e.target.value);
		}
	};

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (props.disabled) return;
		if (typeof onInput === 'function') {
			onInput(e);
		}
		setCurrentValue(e.target.value);
	};

	useEffect(() => {
		setCurrentValue(String(props.value ?? formValue));
	}, [props.value, formValue]);

	return(<Element {...props}>
		{ (props) => <input {...props} placeholder="" onChange={handleChange} value={currentValue} onInput={handleInput} ref={ref}/> }
	</Element>);
});

export default Input;