import { AllHTMLAttributes } from "react";
import styles from "./style.module.css";

interface IArrow extends AllHTMLAttributes<HTMLDivElement> {

};

const Arrow = ({className, ...props}: IArrow) => {

	const classes = ['ui-component-arrow'];
	classes.push(styles['container']);
	if (className) classes.push(className);

	return(<div {...props} className={classes.join(' ')}>

	</div>);
};

export default Arrow;