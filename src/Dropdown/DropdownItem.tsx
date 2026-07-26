import {
	useContext,
	AllHTMLAttributes,
	ReactElement,
	MouseEvent,
	useMemo
} from "react";
import styles from "./style.module.scss";
import { Context } from "./Dropdown";

export type TChildrenAction = {
	close: () => void;
};

export interface DropdownItemProps extends Omit<AllHTMLAttributes<HTMLLIElement>, 'children'> {
	children?: ((action: TChildrenAction) => ReactElement) | string | ReactElement;
	autoClose?: boolean;
	active?: boolean;
};

export const DropdownItem = ({
	children,
	onClick,
	autoClose = true,
	active,
	className,
	...props
}: DropdownItemProps) => {
	const context = useContext(Context);

	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		if (typeof onClick === 'function') {
			onClick(e);
		}
		if (autoClose) {
			context.close();
		}
	};

	const classNames = useMemo(() => {
		const array = ['ui-dropdown-item'];

		array.push(styles['item']);
		if (active) array.push(styles['active'], 'active');
		if (className) array.push(className);

		return array.join(' ');
	}, [active, className]);

	return(<li
		{...props}
		onClick={handleClick}
		className={classNames}
	>
		{typeof children === 'function' ? children(context) : children}
	</li>);
};