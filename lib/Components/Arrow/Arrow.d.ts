import { AllHTMLAttributes } from "react";
interface IArrow extends AllHTMLAttributes<HTMLDivElement> {
    direction?: 'up' | 'down' | 'left' | 'right';
}
declare const Arrow: ({ className, direction, ...props }: IArrow) => JSX.Element;
export default Arrow;
