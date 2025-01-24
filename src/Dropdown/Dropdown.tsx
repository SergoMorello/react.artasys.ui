import {
	AllHTMLAttributes,
	useRef,
	useState,
	FunctionComponentElement,
	useEffect,
	createContext,
	Children,
	type FocusEvent
} from "react";
import styles from "./style.module.scss";
import Arrow from "../Components/Arrow";
import type {
	IItem,
	TChildrenAction
} from "./Item";
import Items from "./Items";
import { UIComponent } from "../ui-types";

export const Context = createContext<TChildrenAction>({
	close: () => {}
});

export interface IDropdown extends UIComponent<AllHTMLAttributes<HTMLDivElement>> {
	direction?: 'down' | 'up';
	position?: 'left' | 'right';
	split?: boolean;
	hover?: boolean;
	arrow?: boolean;
	items?: FunctionComponentElement<IItem> | FunctionComponentElement<IItem>[];
	disabled?: boolean;
	enableRerenderItems?: boolean;
	onShow?: () => void;
	onHide?: () => void;
};

const Dropdown = ({children, className, items, arrow = true, direction = 'down', position = 'right', split = false, disabled, hover = false, enableRerenderItems = true, onShow, onHide, ...props}: IDropdown) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [isOpen, setOpen] = useState(false);

	const close = () => {
		setOpen(false);
	};

	const toggle = () => {
		setOpen((isOpen) => {
			if (disabled) return false;
			return !isOpen;
		});
	};

	const handleClickArrow = () => {
		toggle();
	};

	const handleClick = () => {
		if (hoverTimeout.current) return;
		if (!split || hover) toggle();
	};

	const handleBlur = (e: FocusEvent) => {
		if (e.currentTarget.contains(e.relatedTarget)) return;
		close();
	};

	const handleMouseEnter = () => {
		if (!hover || isOpen) return;
		hoverTimeout.current = setTimeout(toggle, 50);
	};

	const handleMouseOut = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
		}
	};

	useEffect(() => {
		const element = containerRef.current;
		const classList = element?.classList;
		if (isOpen) {
			classList?.add(styles['opened']);
			element?.focus();
			if (typeof onShow === 'function') {
				onShow();
			}
		}else{
			classList?.remove(styles['opened']);
			if (typeof onHide === 'function') {
				onHide();
			}
		}
	}, [isOpen]);

	const classes = ['ui-dropdown'];
	classes.push(styles['container']);
	if (className) classes.push(className);
	if (direction) classes.push(styles[direction]);
	if (position) classes.push(styles[position]);

	return(<Context.Provider value={{
		close
	}}>
		<div {...props} className={classes.join(' ')} ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} tabIndex={1} onBlur={handleBlur}>
			{(position === 'left' && !disabled) && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
			<div onClick={handleClick} className={'ui-dropdown-block' + (isOpen ? ' ' + styles['hide'] : '')}>
				{children}
			</div>
			{(position === 'right' && !disabled && arrow) && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
			<Items isOpen={isOpen} disabled={disabled} enableRerenderItems={enableRerenderItems} items={items}/>
		</div>
	</Context.Provider>);
};

export default Dropdown;