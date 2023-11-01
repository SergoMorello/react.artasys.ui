import { FormHTMLAttributes, ReactNode, FormEvent } from 'react';
import styles from './style.module.css';

import Spinner from '../Spinner';

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
	wait?: boolean;
}

const Form = ({children, wait, className, onSubmit, ...props}: IForm) => {

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (typeof onSubmit === 'function') {
			onSubmit(e);
		}
	};

	return(<form {...props} onSubmit={submit} className={styles['container'] + (wait ? ' ' + styles['wait'] : '') + (className ? ' ' + className : '')}>
		{children}
		<div className={styles['wait-indicator']}>
			<Spinner size="large" color="contrast"/>
		</div>
	</form>);
};

export default Form;