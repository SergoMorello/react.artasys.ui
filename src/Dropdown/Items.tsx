import styles from "./style.module.scss";
import type { IDropdown } from "./Dropdown";
import { useEffect, useMemo, useRef, useState } from "react";

export interface IItems extends Pick<IDropdown, 'items' | 'disabled' | 'enableRerenderItems'> {
	isOpen: boolean;
};

const Items = ({items, isOpen, enableRerenderItems, disabled}: IItems) => {
	const listRef = useRef<HTMLUListElement>(null);

	const renderItems = useMemo(() => {
		if (enableRerenderItems) {
			return isOpen ? items : null;
		}
		return items;
	}, [enableRerenderItems, items, isOpen]);

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

	return(<ul className={styles['dropdown-list']} children={renderItems} ref={listRef}/>);
};

export default Items;