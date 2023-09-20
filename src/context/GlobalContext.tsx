import React, { createContext, useState } from "react";
import { GlobalContextType } from "./context";

export const AppContext = createContext<GlobalContextType>({});

export function GlobalContext({
	children,
}: {
	children: React.ReactNode;
}) {
	const [loading, setLoading] = useState(false);

	return (
		<AppContext.Provider
			value={{
				loading,
				setLoading,
			}}>
			{children}
		</AppContext.Provider>
	);
}
