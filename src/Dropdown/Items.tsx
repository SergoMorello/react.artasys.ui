import styles from "./style.module.css";
import type { IDropdown } from "./Dropdown";
import { useEffect, useRef } from "react";

interface IItems extends Pick<IDropdown, 'items' | 'disabled'> {
	isOpen: boolean;
};

const Items = ({items, isOpen, disabled}: IItems) => {
	const listRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (!listRef.current) return;
		const screenWidth = window.innerWidth;
		const element = listRef.current.getBoundingClientRect();
		// console.log(element.left)
		if (element.left <= 0) {
			
			// listRef.current.style.transform = 'translateX(' + Math.abs(element.left) + 'px)';
		}
	},[isOpen]);

	if (disabled) return null;

	return(<ul className={styles['dropdown-list']} children={items} ref={listRef}/>);
};

export default Items;