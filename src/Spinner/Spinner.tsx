import { AllHTMLAttributes } from "react";
import styles from "./style.module.css";
import type { UIComponent } from "../ui-types";

export interface SpinnerProps extends UIComponent<Omit<AllHTMLAttributes<HTMLDivElement>, 'size' | 'color'>> {
	size?: 'small' | 'middle' | 'large';
	color?: 'contrast' | 'orange';
};

const Spinner = ({size, color, ...props}: SpinnerProps) => {

	const classes = ['ui-spinner'];

	classes.push(styles['spinner']);
	if (size) classes.push(styles[size], 'ui-spinner-' + size);
	if (color) classes.push(styles[color], 'ui-spinner-' + color);
	if (props.className) classes.push(props.className);

	return(<div {...props} className={classes.join(' ')}></div>);
};

export default Spinner;
