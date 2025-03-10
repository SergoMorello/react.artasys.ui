import {
	useContext,
	AllHTMLAttributes,
	ReactElement,
	MouseEvent
} from "react";
import styles from "./style.module.scss";
import { Context } from "./Dropdown";

export type TChildrenAction = {
	close: () => void;
};

export interface IItem extends Omit<AllHTMLAttributes<HTMLLIElement>, 'children'> {
	children?: ((action: TChildrenAction) => ReactElement) | string | ReactElement;
	autoClose?: boolean;
	active?: boolean;
};

const Item = ({children, onClick, autoClose = true, active, className, ...props}: IItem) => {
	const context = useContext(Context);

	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		if (typeof onClick === 'function') {
			onClick(e);
		}
		if (autoClose) {
			context.close();
		}
	};

	const classes = ['ui-dropdown-item'];
	classes.push(styles['item']);
	if (active) classes.push(styles['active'], 'active');
	if (className) classes.push(className);

	return(<li {...props} onClick={handleClick} className={classes.join(' ')}>
		{typeof children === 'function' ? children(context) : children}
	</li>);
};

export default Item;