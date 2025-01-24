import { AllHTMLAttributes } from "react";
import type { UIComponent } from "../ui-types";
export interface SpinnerProps extends UIComponent<Omit<AllHTMLAttributes<HTMLDivElement>, 'size'>> {
    size?: 'small' | 'middle' | 'large';
    contrast?: boolean;
}
declare const Spinner: ({ size, contrast, ...props }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
export default Spinner;
