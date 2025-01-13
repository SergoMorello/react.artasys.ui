import { FunctionComponent } from "react";
import type { TError } from "./types";
import { UseFormReturn, FieldValues } from "react-hook-form";
type TuseErrors<TFieldValues extends FieldValues = FieldValues> = UseFormReturn<TFieldValues> & {
    GlobalError: FunctionComponent;
    setErrors: (e: TError<TFieldValues>) => void;
};
declare const useForm: <TFieldValues extends FieldValues = FieldValues>() => TuseErrors<TFieldValues>;
export declare const validate: {
    email: {
        pattern: {
            value: RegExp;
            message: string;
        };
    };
};
export default useForm;
