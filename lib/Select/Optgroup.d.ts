import type { TOptionElement } from "./Select";
export interface IOptgroup {
    children?: TOptionElement;
    label?: string | React.ReactElement;
}
declare const Optgroup: ({ children, label }: IOptgroup) => import("react/jsx-runtime").JSX.Element;
export default Optgroup;
