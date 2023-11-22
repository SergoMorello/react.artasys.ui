import { AllHTMLAttributes } from "react";
import styles from "./style.module.css";

interface IArrow extends AllHTMLAttributes<HTMLDivElement> {
	direction?: 'up' | 'down' | 'left' | 'right';
};

const Arrow = ({className, direction = 'down', ...props}: IArrow) => {

	const classes = ['ui-component-arrow'];
	classes.push(styles['container']);
	if (direction) classes.push(styles[direction]);
	if (className) classes.push(className);

	return(<div {...props} className={classes.join(' ')}/>);
};

export default Arrow;