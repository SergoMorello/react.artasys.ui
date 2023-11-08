import {
	useState,
	useEffect,
	AllHTMLAttributes,
	ReactElement
} from "react";
import styles from "./style.module.css";

export interface IElement<T = any> extends Omit<AllHTMLAttributes<T>, 'children'> {
	children?: ((props: AllHTMLAttributes<T>) => ReactElement) | AllHTMLAttributes<T>["children"];
	error?: string;
	disabled?: boolean;
	placeholder?: string;
	styleContainer?: React.HTMLAttributes<T>["style"];
	classNameContainer?: string;
	beforeElement?: React.ReactElement;
	afterElement?: React.ReactElement;
	hiddenContainer?: boolean;
}

const Element = ({children, beforeElement, afterElement, error, placeholder, disabled, styleContainer, classNameContainer, hiddenContainer, ...props}: IElement) => {
	const [currentError, setCurrentError] = useState('');

	useEffect(() => {
		setCurrentError(error ?? '');
	},[error]);

	const classes = ['ui-form-element'];

	classes.push(styles['container']);
	if (currentError) classes.push(styles['error']);
	if (disabled) classes.push(styles['disabled']);
	if (hiddenContainer) classes.push(styles['hidden']);
	if (classNameContainer) classes.push(classNameContainer);

	return(<>
		<label
			className={classes.join(' ')}
			style={styleContainer}
		>
			{beforeElement}
			<div className={styles['element']}>
				{typeof children === 'function' ? children(props) : null}
				{placeholder && <span className={styles['placeholder']}>{placeholder}</span>}
			</div>
			{afterElement}
		</label>
		{currentError && <div className={styles['error']}>{currentError}</div>}
	</>);
}

export default Element;