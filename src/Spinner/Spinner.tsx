import React from "react";
import styles from "./style.module.css";

type TSpinner = {
	size?: 'small' | 'middle' | 'large';
	color?: 'default' | 'contrast';
}

const Spinner = ({size, color = 'default'}: TSpinner) => {
	return(<div className={styles['spinner'] + (size ? ' ' + styles[size] : '') + (color ? ' ' + styles[color] : '') + ' ' + styles['animate']}></div>);
};

export default Spinner;
