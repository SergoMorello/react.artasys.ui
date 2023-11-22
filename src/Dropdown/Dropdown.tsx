import {
	AllHTMLAttributes,
	useRef,
	useState,
	FunctionComponentElement,
	useEffect,
	createContext
} from "react";
import styles from "./style.module.css";
import Arrow from "../Components/Arrow";
import type {
	IItem,
	TChildrenAction
} from "./Item";

export const Context = createContext<TChildrenAction>({
	close: () => {}
});

export interface IDropdown extends AllHTMLAttributes<HTMLDivElement> {
	direction?: 'down' | 'up';
	position?: 'left' | 'right';
	split?: boolean;
	items: FunctionComponentElement<IItem> | FunctionComponentElement<IItem>[];
};

const Dropdown = ({children, className, items, direction = 'down', position = 'right', split = false, ...props}: IDropdown) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isOpen, setOpen] = useState(false);

	const close = () => {
		setOpen(false);
	};

	const toggle = () => {
		setOpen((isOpen) => !isOpen);
	};

	const handleClickArrow = () => {
		toggle();
	};

	const handleClick = () => {
		if (split) return;
		toggle();
	};

	useEffect(() => {
		const element = containerRef.current;
		const classList = element?.classList;
		if (isOpen) {
			classList?.add(styles['opened']);
			element?.focus();
		}else{
			classList?.remove(styles['opened']);
		}
	}, [isOpen]);

	const classes = ['ui-dropdown'];
	classes.push(styles['container']);
	if (className) classes.push(className);
	if (direction) classes.push(styles[direction]);

	return(<Context.Provider value={{
		close
	}}>
		<div {...props} className={classes.join(' ')} ref={containerRef} tabIndex={1} onBlur={close}>
			{position === 'left' && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
			<div onClick={handleClick}>
				{children}
			</div>
			{position === 'right' && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
			{
				items && <ul className={styles['dropdown-list']}>
					{items}
				</ul>
			}
		</div>
	</Context.Provider>);
};

export default Dropdown;