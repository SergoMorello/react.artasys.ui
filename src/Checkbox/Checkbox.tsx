import {
	type ChangeEvent,
	forwardRef
} from "react";
import Element,{
	IElement
} from "../Form/Element";
import styles from "./style.module.scss";
import { UIComponent } from "../ui-types";

export interface ICheckbox extends UIComponent<IElement<HTMLInputElement>> {
	type?: 'checkbox' | 'radio';
	onChecked?: (status: boolean, value?: unknown) => void;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(({type = 'checkbox', hiddenContainer = true, placeholder, onChecked, onChange, ...props}, ref) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (typeof onChange === 'function') {
			onChange(event);
		}
		if (typeof onChecked === 'function') {
			onChecked(event.target.checked, props.value);
		}
	};

	return (
		<Element {...props} hiddenContainer={hiddenContainer}>
			{(props) => (
					<div className={'ui-checkbox-container ' + styles['container']}>
						<input
							{...props}
							className={'ui-checkbox' + (props.className ? ' ' + props.className : '')}
							type={type}
							onChange={handleChange}
							ref={ref}
						/>
						<span className={'ui-checkbox-indicator ' + styles['indicator']} />
						<span className={'ui-checkbox-text ' + styles['text']}>{placeholder}</span>
					</div>
				)}
		</Element>);
	});

export default Checkbox;