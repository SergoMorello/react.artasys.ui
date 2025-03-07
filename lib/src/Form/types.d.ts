import type { FieldValues, UseFormRegisterReturn, FieldPath } from "react-hook-form";
export type TUseFormRegisterReturn<TFieldValues extends FieldValues = FieldValues, TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = UseFormRegisterReturn<TFieldName> & {
    error?: string;
    formvalue: TFieldValues;
};
export type TError<TFieldValues extends FieldValues> = {
    errors?: {
        [key in keyof TFieldValues]: string[];
    };
    message: string;
};
