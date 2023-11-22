import styles from "./style.module.css";
import type { TOptionElement } from "./Select";

export interface IOptgroup {
	children?: TOptionElement;
	label?: string | React.ReactElement;
};

const Optgroup = ({children, label}: IOptgroup) => {

	return(<li>
		<ul className={styles['optgpoup']}>
			{label && <li className={styles['label']}>{label}</li>}
			{children}
		</ul>
	</li>);
};

export default Optgroup;