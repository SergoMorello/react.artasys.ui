import type { IDropdown } from "./Dropdown";
interface IItems extends Pick<IDropdown, 'items' | 'disabled' | 'enableRerenderItems'> {
    isOpen: boolean;
}
declare const Items: ({ items, isOpen, enableRerenderItems, disabled }: IItems) => JSX.Element | null;
export default Items;
