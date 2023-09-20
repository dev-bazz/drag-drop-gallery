import React, { createContext, useContext } from "react";
import { GlobalContextType } from "./context";

const AppContext = createContext<GlobalContextType>({});

export const useGlobalContext = () => useContext(AppContext);

export function GlobalContext({
	children,
}: {
	children: React.ReactNode;
}) {
	const gold = "007";
	return (
		<AppContext.Provider
			value={{
				gold,
			}}>
			{children}
		</AppContext.Provider>
	);
}
