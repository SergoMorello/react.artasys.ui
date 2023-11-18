import { AllHTMLAttributes } from "react";
export type TSpinner = Omit<AllHTMLAttributes<HTMLDivElement>, 'size' | 'color'> & {
    size?: 'small' | 'middle' | 'large';
    color?: 'contrast' | 'orange';
};
declare const Spinner: ({ size, color, ...props }: TSpinner) => JSX.Element;
export default Spinner;
