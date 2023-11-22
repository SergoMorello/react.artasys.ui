import {
	LiHTMLAttributes,
	MouseEvent,
	useContext,
	useEffect
} from "react";
import { Context } from "./Select";
import styles from "./style.module.css";

export interface IOption extends LiHTMLAttributes<HTMLLIElement> {
	value?: string;
	disabled?: boolean;
	children?: string | React.ReactElement;
};

const Option = ({children, value, disabled, onClick, ...props}: IOption) => {
	const context = useContext(Context);

	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		if (typeof value === 'undefined' || disabled) return;
		context.setSelect(value);
		if (typeof onClick === 'function') {
			onClick(e);
		}
	};

	useEffect(() => {
		if (children && (value === context.selected || !context.emptyValue.current)) {
			context.setTitle(children);
			if (!context.emptyValue.current && value) {
				context.setSelected(value);
			}
			context.emptyValue.current = true;
		}
	}, [context.selected]);

	const classes = ['ui-select-option'];
	classes.push(styles['option']);
	if (context.selected === value) classes.push(styles['active'], 'active');
	if (disabled) classes.push(styles['disabled'], 'disabled');

	return(<li {...props} onClick={handleClick} className={classes.join(' ')}>{children}</li>);
};

export default Option;