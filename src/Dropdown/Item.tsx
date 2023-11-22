import { AllHTMLAttributes, ReactElement } from "react";
import styles from "./style.module.css";

export interface IItem extends AllHTMLAttributes<HTMLLIElement> {
	children: string | ReactElement;
};

const Item = ({children, ...props}: IItem) => {

	return(<li {...props} className={styles['item']}>
		{children}
	</li>);
};

export default Item;