import { FormHTMLAttributes, ReactNode, FormEvent, useMemo } from 'react';
import styles from './style.module.scss';

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

	const classNames = useMemo(() => {
		const array = [styles['container']];
		if (wait) array.push(styles['wait']);
		if (className) array.push(className);
		return array.join(' ');
	}, []);

	return(<form
		{...props}
		onSubmit={submit}
		className={classNames}
	>
		{children}
		<div className={styles['wait-indicator']}>
			{typeof progress === 'number' ? <Progress radius={progressRadius} value={progress}/> : <Spinner/>}
		</div>
	</form>);
};

export default Form;