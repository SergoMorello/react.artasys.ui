import type { IDropdown } from "./Dropdown";
export interface IItems extends Pick<IDropdown, 'items' | 'disabled' | 'enableRerenderItems'> {
    isOpen: boolean;
}
declare const Items: ({ items, isOpen, enableRerenderItems, disabled }: IItems) => import("react/jsx-runtime").JSX.Element | null;
export default Items;
