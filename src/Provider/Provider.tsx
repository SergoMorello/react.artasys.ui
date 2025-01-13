import {
	type ReactNode
} from "react";
import { ProviderContext } from "./ProviderContext";
import type { UIComponent } from "../ui-types";

interface ProviderProps extends UIComponent {
	children: ReactNode;
};

const Provider = ({children}: ProviderProps) => {

	return(<ProviderContext.Provider value={{}}>
		{children}
	</ProviderContext.Provider>)
};

export default Provider;