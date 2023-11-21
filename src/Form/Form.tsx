import { FormHTMLAttributes, ReactNode, FormEvent } from 'react';
import styles from './style.module.css';

import Spinner,{
	TSpinner
} from '../Spinner';
import Progress from '../Progress';

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
	wait?: boolean;
	progress?: number;
	progressRadius?: boolean;
	spinnerColor?: TSpinner['color'];
}

const Form = ({children, wait, progress, progressRadius = true, className, spinnerColor, onSubmit, ...props}: IForm) => {

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (typeof onSubmit === 'function') {
			onSubmit(e);
		}
	};

	const classes = [];

	classes.push(styles['container']);
	if (wait) classes.push(styles['wait']);
	if (className) classes.push(className);

	return(<form {...props} onSubmit={submit} className={classes.join(' ')}>
		{children}
		<div className={styles['wait-indicator']}>
			{typeof progress === 'number' ? <Progress radius={progressRadius} value={progress}/> : <Spinner color={spinnerColor}/>}
		</div>
	</form>);
};

export default Form;