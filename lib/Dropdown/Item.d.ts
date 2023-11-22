import { AllHTMLAttributes, ReactElement } from "react";
export type TChildrenAction = {
    close: () => void;
};
export interface IItem extends Omit<AllHTMLAttributes<HTMLLIElement>, 'children'> {
    children: ((action: TChildrenAction) => ReactElement) | string | ReactElement;
    autoClose?: boolean;
}
declare const Item: ({ children, onClick, autoClose, ...props }: IItem) => JSX.Element;
export default Item;
