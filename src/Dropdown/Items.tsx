import styles from "./style.module.css";
import type { IDropdown } from "./Dropdown";
import { useEffect, useRef, useState } from "react";

interface IItems extends Pick<IDropdown, 'items' | 'disabled'> {
	isOpen: boolean;
};

const Items = ({items, isOpen, disabled}: IItems) => {
	const listRef = useRef<HTMLUListElement>(null);
	const [hide, setHide] = useState(false);

	useEffect(() => {
		if (!listRef.current) return;
		const screenWidth = window.innerWidth;
		const element = listRef.current.getBoundingClientRect();
		if (!isOpen) {
			listRef.current.ontransitionend = () => {
				setHide(true);
			};
		}else{
			listRef.current.ontransitionend = null;
			setHide(false);
		}
		
		// console.log(element.left)
		if (element.left <= 0) {
			
			// listRef.current.style.transform = 'translateX(' + Math.abs(element.left) + 'px)';
		}
	},[isOpen]);

	if (disabled || hide) return null;

	return(<ul className={styles['dropdown-list']} children={items} ref={listRef}/>);
};

export default Items;