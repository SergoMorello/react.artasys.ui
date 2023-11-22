import {
	useContext,
	AllHTMLAttributes,
	ReactElement,
	MouseEvent
} from "react";
import styles from "./style.module.css";
import { Context } from "./Dropdown";

export type TChildrenAction = {
	close: () => void;
};

export interface IItem extends Omit<AllHTMLAttributes<HTMLLIElement>, 'children'> {
	children: ((action: TChildrenAction) => ReactElement) | string | ReactElement;
	autoClose?: boolean;
};

const Item = ({children, onClick, autoClose = true, ...props}: IItem) => {
	const context = useContext(Context);

	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		if (typeof onClick === 'function') {
			onClick(e);
		}
		if (autoClose) {
			context.close();
		}
	};

	return(<li {...props} onClick={handleClick} className={styles['item']}>
		{typeof children === 'function' ? children(context) : children}
	</li>);
};

export default Item;