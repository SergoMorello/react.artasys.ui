import React from "react";
import styles from "./style.module.css";

export type TSpinner = {
	size?: 'small' | 'middle' | 'large';
	color?: 'default' | 'contrast';
}

const Spinner = ({size, color = 'default'}: TSpinner) => {

	const classes = ['ui-spinner'];

	classes.push(styles['spinner']);
	if (size) classes.push(styles[size]);
	if (color) classes.push(styles[color]);
	classes.push(styles['animate']);

	return(<div className={classes.join(' ')}></div>);
};

export default Spinner;
