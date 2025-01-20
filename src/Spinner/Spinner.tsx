import { AllHTMLAttributes } from "react";
import styles from "./style.module.scss";
import type { UIComponent } from "../ui-types";

export interface SpinnerProps extends UIComponent<Omit<AllHTMLAttributes<HTMLDivElement>, 'size'>> {
	size?: 'small' | 'middle' | 'large';
	contrast?: boolean;
};

const Spinner = ({size, contrast, ...props}: SpinnerProps) => {

	const classes = ['ui-spinner'];

	classes.push(styles['spinner']);
	if (size) classes.push(styles[size], 'ui-spinner-' + size);
	if (contrast) classes.push(styles['ui-spinner-contrast'], );
	if (props.className) classes.push(props.className);

	return(<div {...props} className={classes.join(' ')}></div>);
};

export default Spinner;
