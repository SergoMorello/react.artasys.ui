import {
	useState,
	useEffect,
	AllHTMLAttributes,
	ReactElement,
	cloneElement,
	useMemo
} from "react";
import styles from "./style.module.scss";
import Loading from "../../Loading";

export interface ElementProps<T = any> extends Omit<AllHTMLAttributes<T>, 'children'> {
	children?: ((props: AllHTMLAttributes<T>) => ReactElement) | AllHTMLAttributes<T>["children"];
	error?: string;
	formvalue?: string | number;
	disabled?: boolean;
	placeholder?: string;
	styleContainer?: React.HTMLAttributes<T>["style"];
	classNameContainer?: string;
	classNameContainerElement?: string;
	beforeElement?: React.ReactElement;
	afterElement?: React.ReactElement;
	hiddenContainer?: boolean;
	withBorder?: boolean;
	wait?: boolean;
}

const Element = ({
	children,
	beforeElement,
	afterElement,
	error,
	placeholder,
	styleContainer,
	classNameContainer,
	classNameContainerElement,
	hiddenContainer,
	formvalue,
	wait,
	withBorder = false,
	...props
}: ElementProps) => {
	const [currentError, setCurrentError] = useState('');

	useEffect(() => {
		setCurrentError(error ?? '');
	},[error]);

	const classes = useMemo(() => {
		const array = ['ui-form-element-container'];

		array.push(styles['container']);
		if (currentError) array.push(styles['error']);
		if (props.disabled) array.push(styles['disabled']);
		if (hiddenContainer) array.push(styles['hidden']);
		if (withBorder) array.push(styles['border']);
		if (classNameContainer) array.push(classNameContainer);

		return array.join(' ');
	}, [
		currentError,
		props.disabled,
		hiddenContainer,
		classNameContainer,
		withBorder
	]);

	return(<>
		<label
			className={classes}
			style={styleContainer}
		>
			<div className={'ui-form-element ' + styles['element'] + (classNameContainerElement ? ' ' + classNameContainerElement : '')}>
				{beforeElement ? cloneElement(beforeElement, {key: 'ui-before-element'}) : null}
				{typeof children === 'function' ? children(props) : null}
				{placeholder && wait ? '' :  <span className={'ui-form-element-placeholder ' + styles['placeholder']}>{placeholder}</span>}
				{wait && (
						<Loading />
				)}
				{afterElement ? cloneElement(afterElement, {key: 'ui-after-element'}) : null}
			</div>
			
		</label>
		{currentError && <div className={'ui-form-error ' + styles['error']}>{currentError}</div>}
	</>);
}

export default Element;