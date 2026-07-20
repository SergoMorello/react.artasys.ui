import {
	type ChangeEvent,
	ForwardedRef,
	forwardRef
} from "react";
import Element,{
	ElementProps
} from "../Form/Element";
import styles from "./style.module.scss";
import { UIComponent } from "../ui-types";

export interface CheckboxProps<T extends string | number | boolean> extends Omit<UIComponent<ElementProps<HTMLInputElement>>, 'value'> {
	type?: 'checkbox' | 'radio';
	value?: T;
	onChecked?: (status: boolean, value?: T) => void;
}

const CheckboxInput = <T extends string | number | boolean> ({type = 'checkbox', hiddenContainer = true, placeholder, onChecked, onChange, ...props}: CheckboxProps<T>, ref: ForwardedRef<HTMLInputElement>) => {

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
};

const Checkbox = forwardRef(CheckboxInput) as <
  T extends string | number | boolean
>(
  props: CheckboxProps<T> & React.RefAttributes<HTMLInputElement>
) => React.ReactElement;
export default Checkbox;