import { AllHTMLAttributes } from "react";
interface IArrow extends AllHTMLAttributes<HTMLDivElement> {
    direction?: 'up' | 'down' | 'left' | 'right';
}
declare const Arrow: ({ className, direction, ...props }: IArrow) => import("react/jsx-runtime").JSX.Element;
export default Arrow;
