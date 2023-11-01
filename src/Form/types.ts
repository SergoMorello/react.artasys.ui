import type {
	FieldValues,
} from "react-hook-form";

export type TError<TFieldValues extends FieldValues> = {
	errors?: {
		[key in keyof TFieldValues]: string[];
	};
	message: string;
}