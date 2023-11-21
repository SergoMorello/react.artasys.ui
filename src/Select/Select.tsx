import {
	forwardRef,
	createContext,
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	useImperativeHandle
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

export interface ISelect extends Omit<IElement, 'children'> {
	children?: React.FunctionComponentElement<IOption>[];
	onChangeSelect?: (value: string) => void;
};

const Select = forwardRef<HTMLInputElement, ISelect>(({children, onChangeSelect, value, ...props}, ref) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
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

	const handleClick = () => {
		isOpen ? close() : open();
	};

	const triggerNativeEvent = (value: string) => {
		const nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
		nativeInputValueSetter?.call(inputRef.current, value);

		const event = new Event('input', { bubbles: true});
		inputRef.current!.dispatchEvent(event);
	};

	const setSelect = (value: string) => {
		if (typeof onChangeSelect === 'function') {
			onChangeSelect(value);
		}
		
		setSelected(value);
		close();
	};

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (props.disabled) return;
		if (typeof props.onInput === 'function') {
			props.onInput(e);
		}

		if (typeof props.onChange === 'function') {
			props.onChange(e);
		}
		setSelected(e.target.value);
	};

	useEffect(() => {
		if (!selected) return;
		triggerNativeEvent(selected);
	}, [selected]);

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

	useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

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
			<input {...props} type="hidden" value={selected} onInput={handleInput} ref={inputRef}/>
			<div className={classes.join(' ')} ref={containerRef} tabIndex={1} onBlur={close}>
				<div className={styles['select']} onClick={handleClick}>
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