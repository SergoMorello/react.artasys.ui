import type { IDropdown } from "./Dropdown";
interface IItems extends Pick<IDropdown, 'items' | 'disabled'> {
    isOpen: boolean;
}
declare const Items: ({ items, isOpen, disabled }: IItems) => JSX.Element | null;
export default Items;
