import {
	forwardRef,
	useState,
	ChangeEvent,
	useEffect
} from "react";
import Element,{
	IElement
} from "../Form/Element";


interface IInput extends IElement<HTMLInputElement> {
	onChangeText?: (text: string) => void;
}

const Input = forwardRef<HTMLInputElement, IInput>(({onChange, onInput, onChangeText, ...props}, ref) => {
	const [currentValue, setCurrentValue] = useState(props.value);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (typeof onChange === 'function') {
			onChange(e);
		}

		if (typeof onChangeText === 'function') {
			onChangeText(e.target.value);
		}
	};

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (typeof onInput === 'function') {
			onInput(e);
		}
		setCurrentValue(e.target.value);
	};

	useEffect(() => {
		setCurrentValue(props.value);
	}, [props.value]);

	return(<Element {...props}>
		{ (props) => <input {...props} placeholder="" onChange={handleChange} value={currentValue} onInput={handleInput} ref={ref}/> }
	</Element>);
});

export default Input;