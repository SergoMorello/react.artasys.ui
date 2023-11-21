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
	emptyValue: {current:{}} as React.MutableRefObject<boolean>,
	setSelect: (value: string) => {},
	setSelected: (value: string) => {},
	setTitle: (title: string) => {},
});

export interface ISelect extends Omit<IElement, 'children' | 'onChange'> {
	children?: React.FunctionComponentElement<IOption>[];
	onChange?: (value: string) => void;
};

const Select = forwardRef<HTMLInputElement, ISelect>(({children, onChange, value, ...props}, ref) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const emptyValue = useRef(false);

	const [isOpen, setOpen] = useState(false);
	const [selected, setSelected] = useState('');
	const [title, setTitle] = useState<string>();

	const open = () => {
		if (props.disabled) return;
		setOpen(true);
	};

	const close = () => {
		setOpen(false);
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

	useEffect(() => {
		const element = containerRef.current;
		const classList = element!.classList;
		if (isOpen) {
			classList.remove(styles['hidden']);
			requestAnimationFrame(() => {
				classList.add(styles['opened']);
				element?.focus();
			});
		}else{
			if (classList.contains(styles['opened'])) {
				element!.ontransitionend = () => {
					classList.add(styles['hidden']);
					element!.ontransitionend = null;
				};
			}
			classList.remove(styles['opened']);
		}
	}, [isOpen]);

	const classes = [''];
	classes.push(styles['container'], styles['hidden']);
	
	return(<Element {...props} classNameContainer={styles['container-element']}>
		{ (props) => <Context.Provider value={{
			selected,
			emptyValue: emptyValue,
			setSelect,
			setSelected,
			setTitle
		}}>
			<input {...props} type="hidden" value={selected} ref={ref}/>
			<div className={classes.join(' ')} ref={containerRef} tabIndex={1} onBlur={close}>
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