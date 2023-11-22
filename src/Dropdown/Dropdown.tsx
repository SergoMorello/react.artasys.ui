import { AllHTMLAttributes, useRef, useState } from "react";
import styles from "./style.module.css";
import Arrow from "../Components/Arrow";

export interface IDropdown extends AllHTMLAttributes<HTMLDivElement> {
	direction?: 'down' | 'up' | 'left' | 'right';
	position?: 'left' | 'right';
	split?: boolean;
};

const Dropdown = ({children, className, direction = 'down', position = 'right', split = false, ...props}: IDropdown) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isOpen, setOpen] = useState(false);

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

	const classes = ['ui-dropdown'];
	classes.push(styles['container']);
	if (className) classes.push(className);

	return(<div {...props} className={classes.join(' ')} ref={containerRef}>
		{position === 'left' && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
		<div onClick={handleClick}>
			{children}
		</div>
		{position === 'right' && <Arrow className={styles['arrow']} onClick={handleClickArrow}/>}
	</div>);
};

export default Dropdown;