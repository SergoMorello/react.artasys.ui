import {
	AllHTMLAttributes,
	useRef,
	useState,
	FunctionComponentElement,
	useEffect,
	createContext,
	Children,
	type FocusEvent,
	useMemo,
	MouseEvent
} from "react";
import styles from "./style.module.scss";
import Arrow from "../Components/Arrow";
import type {
	DropdownItemProps,
	TChildrenAction
} from "./DropdownItem";
import {DropdownItems} from "./DropdownItems";
import { UIComponent } from "../ui-types";

export const Context = createContext<TChildrenAction>({
	close: () => {}
});

export interface DropdownProps extends UIComponent<AllHTMLAttributes<HTMLDivElement>> {
	direction?: 'down' | 'up';
	position?: 'left' | 'right';
	split?: boolean;
	hover?: boolean;
	arrow?: boolean;
	items?: FunctionComponentElement<DropdownItemProps> | FunctionComponentElement<DropdownItemProps>[];
	disabled?: boolean;
	enableRerenderItems?: boolean;
	onShow?: () => void;
	onHide?: () => void;
};

const Dropdown = ({
	children,
	className,
	items,
	arrow = true,
	direction = 'down',
	position = 'right',
	split = false,
	disabled,
	hover = false,
	enableRerenderItems = true,
	onShow,
	onHide,
	...props
}: DropdownProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [isOpen, setOpen] = useState(false);

	const close = () => {
		setOpen(false);
	};

	const open = () => {
		setOpen(true);
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

	const handleClick = (event: MouseEvent) => {
		if (!isOpen) {
			event.preventDefault();
		}
		if (hoverTimeout.current) return;
		if (!split || hover) toggle();
	};

	const handleBlur = (e: FocusEvent) => {
		if (e.currentTarget.contains(e.relatedTarget)) return;
		close();
	};

	const handleMouseEnter = () => {
		if (!hover || isOpen || hoverTimeout.current) return;
		hoverTimeout.current = setTimeout(open, 50);
	};

	const handleMouseOut = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
			hoverTimeout.current = null;
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
	}, [isOpen, onShow, onHide]);

	const classNames = useMemo(() => {
		const array = ['ui-dropdown'];

		array.push(styles['container']);
		if (className) array.push(className);
		if (direction) array.push(styles[direction]);
		if (position) array.push(styles[position]);

		return array.join(' ');
	}, [className, direction, position]);

	return(<Context.Provider value={{
		close
	}}>
		<div
			{...props}
			className={classNames}
			ref={containerRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseOut}
			tabIndex={1}
			onBlur={handleBlur}
		>
			<div className={styles['content']} onClick={handleClick}>
				{(position === 'left' && !disabled) && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
				<div
					className={styles['block'] + ' ui-dropdown-block' + (isOpen ? ' ' + styles['hide'] : '')}
				>
					{children}
				</div>
				{(position === 'right' && !disabled && arrow) && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
			</div>
			<DropdownItems
				isOpen={isOpen}
				disabled={disabled}
				enableRerenderItems={enableRerenderItems}
				items={items}
			/>
		</div>
	</Context.Provider>);
};

export default Dropdown;