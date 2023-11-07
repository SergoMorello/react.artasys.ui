import { forwardRef } from "react";
import Element,{
	IElement
} from "../Form/Element";
import styles from "./style.module.css";

interface ICheckbox extends IElement<HTMLInputElement> {
	onChangeText?: (text: string) => void;
	type?: 'checkbox' | 'radio';
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(({type = 'checkbox', hiddenContainer = true, placeholder, ...props}: ICheckbox) => {

	return(<Element {...props} hiddenContainer={hiddenContainer}>
		{(props) => <div className={styles['container']}>
				<input {...props} type={type}/>
				<span className={styles['indicator']}/>
				<span className={styles['text']}>{placeholder}</span>
			</div>}
	</Element>);
});

export default Checkbox;