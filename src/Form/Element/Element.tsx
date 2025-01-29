import {
	useState,
	useEffect,
	AllHTMLAttributes,
	ReactElement,
	cloneElement
} from "react";
import styles from "./style.module.scss";
import Loading from "../../Loading";

export interface IElement<T = any> extends Omit<AllHTMLAttributes<T>, 'children'> {
	children?: ((props: AllHTMLAttributes<T>) => ReactElement) | AllHTMLAttributes<T>["children"];
	error?: string;
	formValue?: string | number;
	disabled?: boolean;
	placeholder?: string;
	styleContainer?: React.HTMLAttributes<T>["style"];
	classNameContainer?: string;
	beforeElement?: React.ReactElement;
	afterElement?: React.ReactElement;
	hiddenContainer?: boolean;
	wait?: boolean
}

const Element = ({children, beforeElement, afterElement, error, placeholder, styleContainer, classNameContainer, hiddenContainer, formValue, wait, ...props}: IElement) => {
	const [currentError, setCurrentError] = useState('');

	useEffect(() => {
		setCurrentError(error ?? '');
	},[error]);

	const classes = ['ui-form-element-container'];

	classes.push(styles['container']);
	if (currentError) classes.push(styles['error']);
	if (props.disabled) classes.push(styles['disabled']);
	if (hiddenContainer) classes.push(styles['hidden']);
	if (classNameContainer) classes.push(classNameContainer);

	return(<>
		<label
			className={classes.join(' ')}
			style={styleContainer}
		>
			{beforeElement ? cloneElement(beforeElement, {key: 'ui-before-element'}) : null}
			<div className={'ui-form-element ' + styles['element']}>
				{typeof children === 'function' ? children(props) : null}
				{placeholder && wait ? '' :  <span className={'ui-form-element-placeholder ' + styles['placeholder']}>{placeholder}</span>}
				{wait && (
					<Loading />
			)}
			</div>
			{afterElement ? cloneElement(afterElement, {key: 'ui-after-element'}) : null}
			
		</label>
		{currentError && <div className={'ui-form-error ' + styles['error']}>{currentError}</div>}
	</>);
}

export default Element;