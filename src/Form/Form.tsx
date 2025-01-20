import { FormHTMLAttributes, ReactNode, FormEvent } from 'react';
import styles from './style.module.css';

import Spinner,{
	type SpinnerProps
} from '../Spinner';
import Progress from '../Progress';
import { UIComponent } from '../ui-types';

export interface IForm extends UIComponent<FormHTMLAttributes<HTMLFormElement>> {
	children: ReactNode;
	wait?: boolean;
	progress?: number;
	progressRadius?: boolean;
}

const Form = ({children, wait, progress, progressRadius = true, className, onSubmit, ...props}: IForm) => {

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
			{typeof progress === 'number' ? <Progress radius={progressRadius} value={progress}/> : <Spinner/>}
		</div>
	</form>);
};

export default Form;