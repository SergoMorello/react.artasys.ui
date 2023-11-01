import { useState, FunctionComponent } from "react";
import type { TError } from "./types";
import styles from "./style.module.css";

import {
	useForm as useHookForm,
	UseFormReturn,
	RegisterOptions,
	UseFormRegisterReturn,
	FieldValues,
	UseFormRegister,
	FieldPath
} from "react-hook-form";

type TuseErrors<TFieldValues extends FieldValues = FieldValues> = UseFormReturn<TFieldValues> & {
	GlobalError: FunctionComponent;
	setErrors: (e: TError<TFieldValues>) => void;
};

const useForm = <TFieldValues extends FieldValues = FieldValues>(): TuseErrors<TFieldValues> => {
	const [globalError, setGlobalError] = useState<TError<TFieldValues> | null>();

	const form = useHookForm<TFieldValues>({
		reValidateMode: 'onChange'
	});

	const register = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName, options?: RegisterOptions<TFieldValues, TFieldName>): UseFormRegisterReturn<TFieldName> => {
		const inputRegister = form.register<TFieldName>(name, options);
		const onChange = (e: {
			target: any;
			type?: any;
		}) => {
			setGlobalError(null);
			form.clearErrors(name);
			return inputRegister.onChange(e);
		};
		const errors = form?.formState.errors;
		return {...inputRegister, onChange, error: errors?.[name]?.message?.toString()} as UseFormRegisterReturn<TFieldName>;
	};

	const setErrors = (e: TError<TFieldValues>) => {
		if (e.errors) {
			Object.keys(e.errors).forEach((field) => form.setError(field as FieldPath<TFieldValues>, {message: e.errors?.[field]?.[0]}));
		}else{
			setGlobalError(e);
		}
	};

	const GlobalError = () => (<>{(globalError && !globalError.errors) && <div className={styles['global-error']}>{globalError.message}</div>}</>);

	return {
		...form,
		register,
		GlobalError,
		setErrors
	};
};

export const validate = {
	email: {
		pattern: {
			value: /\S+@\S+\.\S+/,
			message: "Неверный адрес электронной почты",
		}
	}
};

export default useForm;