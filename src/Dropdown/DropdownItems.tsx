import styles from "./style.module.scss";
import type { DropdownProps } from "./Dropdown";
import { useEffect, useMemo, useRef } from "react";

export interface DropdownItemsProps extends Pick<DropdownProps, 'items' | 'disabled' | 'enableRerenderItems'> {
	isOpen: boolean;
};

export const DropdownItems = ({
	items,
	isOpen,
	enableRerenderItems,
	disabled
}: DropdownItemsProps) => {
	const listRef = useRef<HTMLUListElement>(null);

	const renderItems = useMemo(() => {
		if (enableRerenderItems) {
			return isOpen ? items : null;
		}
		return items;
	}, [enableRerenderItems, items, isOpen]);

	useEffect(() => {
		if (!isOpen || !listRef.current) {
			// Очищаем стили при закрытии, чтобы при следующем открытии 
			// расчеты начинались с исходной позиции
			if (listRef.current) listRef.current.style.transform = '';
			return;
		}

		// Сбрасываем старый трансформ перед новыми замерами
		listRef.current.style.transform = '';

		// Замеряем координаты элемента в его "чистом" исходном состоянии
		const rect = listRef.current.getBoundingClientRect();
		const screenWidth = window.innerWidth;
		
		let translateX = 0;

		if (rect.left < 0) {
			// Упор в левый край: выталкиваем элемент вправо
			// Добавляем +8px для небольшого отступа от края экрана
			translateX = Math.abs(rect.left) + 8;
		} else if (rect.right > screenWidth) {
			// Упор в правый край: заталкиваем элемент влево
			// Вычитаем -8px для отступа от правого края
			translateX = -(rect.right - screenWidth + 8);
		}

		// Применяем смещение
		if (translateX !== 0) {
			listRef.current.style.transform = `translateX(${translateX}px)`;
		}
	}, [isOpen]);

	if (disabled) return null;

	return(<ul
		className={`${styles['dropdown-list']} ui-dropdown-list`}
		children={renderItems}
		ref={listRef}
	/>);
};