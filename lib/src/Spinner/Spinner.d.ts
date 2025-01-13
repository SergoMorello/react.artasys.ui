import { AllHTMLAttributes } from "react";
import type { UIComponent } from "../ui-types";
export interface SpinnerProps extends UIComponent<Omit<AllHTMLAttributes<HTMLDivElement>, 'size' | 'color'>> {
    size?: 'small' | 'middle' | 'large';
    color?: 'contrast' | 'orange';
}
declare const Spinner: ({ size, color, ...props }: SpinnerProps) => JSX.Element;
export default Spinner;
