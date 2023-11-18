import { AllHTMLAttributes } from "react";
import styles from "./style.module.css";

export type TSpinner = Omit<AllHTMLAttributes<HTMLDivElement>, 'size' | 'color'> & {
	size?: 'small' | 'middle' | 'large';
	color?: 'contrast' | 'orange';
}

const Spinner = ({size, color, ...props}: TSpinner) => {

	const classes = ['ui-spinner'];

	classes.push(styles['spinner']);
	if (size) classes.push(styles[size], 'ui-spinner-' + size);
	if (color) classes.push(styles[color], 'ui-spinner-' + color);
	if (props.className) classes.push(props.className);

	return(<div {...props} className={classes.join(' ')}></div>);
};

export default Spinner;
