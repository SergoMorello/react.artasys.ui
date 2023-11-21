import {
	forwardRef,
	createContext,
	useState,
	useEffect,
	useRef
} from "react";
import Element,{
	IElement
} from "../Form/Element";
import type { IOption } from "./Option";
import styles from "./style.module.css";

export const Context = createContext({
	selected: '',
	setSelect: (value: string) => {},
	setTitle: (title: string) => {}
});

export interface ISelect extends Omit<IElement, 'children' | 'onChange'> {
	children?: React.FunctionComponentElement<IOption>[];
	onChange?: (value: string) => void;
};

const Select = forwardRef<HTMLInputElement, ISelect>(({children, onChange, value, ...props}, ref) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [selected, setSelected] = useState('');
	const [title, setTitle] = useState<string>();

	const open = () => {
		const element = containerRef.current;
		element?.classList.add(styles['opened']);
		element?.focus();
	};

	const close = () => {
		const element = containerRef.current;
		element?.classList.remove(styles['opened']);
	};

	const setSelect = (value: string) => {
		if (typeof onChange === 'function') {
			onChange(value);
		}
		setSelected(value);
		close();
	};

	useEffect(() => {
		if (typeof value === 'undefined') return;
		setSelected(String(value));
	}, [value]);
	
	return(<Element {...props} styleContainer={{zIndex: 1}}>
		{ (props) => <Context.Provider value={{
			selected,
			setSelect,
			setTitle
		}}>
			<input {...props} type="hidden" value={selected} ref={ref}/>
			<div className={styles['container']} ref={containerRef} tabIndex={1} onBlur={close}>
				<div className={styles['select']} onClick={open}>
					<span className={styles['title']}>{title}</span>
				</div>
				<ul className={styles['select-list']}>
					{children}
				</ul>
			</div>
		</Context.Provider> }
	</Element>);
});

export default Select;