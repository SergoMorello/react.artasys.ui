import { AllHTMLAttributes, ReactElement } from "react";
export interface IItem extends AllHTMLAttributes<HTMLLIElement> {
    children: string | ReactElement;
}
declare const Item: ({ children, ...props }: IItem) => JSX.Element;
export default Item;
