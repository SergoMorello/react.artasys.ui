import { forwardRef } from "react";
import Element,{
	IElement
} from "../Form/Element";
import styles from "./style.module.css";

interface ICheckbox extends IElement<HTMLInputElement> {
	type?: 'checkbox' | 'radio';
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(({type = 'checkbox', hiddenContainer = true, placeholder, ...props}, ref) => {

	return(<Element {...props} hiddenContainer={hiddenContainer}>
		{(props) => <div className={'ui-checkbox-container' + styles['container']}>
				<input {...props} className={'ui-checkbox' + props.className ? ' ' + props.className : ''} type={type} ref={ref}/>
				<span className={'ui-checkbox-indicator ' + styles['indicator']}/>
				<span className={'ui-checkbox-text ' + styles['text']}>{placeholder}</span>
			</div>}
	</Element>);
});

export default Checkbox;