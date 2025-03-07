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
import { UIComponent } from "../ui-types";


export interface IInput extends UIComponent<IElement<HTMLInputElement>> {
	onChangeText?: (text: string) => void;
	type?: HTMLInputTypeAttribute;
	wait?: boolean;
	children?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, IInput>(({onChange, onInput, onChangeText, wait, formvalue, children, ...props}, ref) => {
	const [currentValue, setCurrentValue] = useState('');

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
		const value = props.value ?? formvalue;
		setCurrentValue(value ? String(value) : '');
	}, [props.value, formvalue]);

	return(<Element {...props} wait={wait}>
		{ (props) => <input {...props} placeholder="" onChange={handleChange} disabled={wait} value={wait ? '' : currentValue} onInput={handleInput} ref={ref}/> }
	</Element>);
});

export default Input;