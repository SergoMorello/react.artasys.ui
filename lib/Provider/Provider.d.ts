import { type ReactNode } from "react";
import type { UIComponent } from "../ui-types";
interface ProviderProps extends UIComponent {
    children: ReactNode;
}
declare const Provider: ({ children }: ProviderProps) => import("react/jsx-runtime").JSX.Element;
export default Provider;
