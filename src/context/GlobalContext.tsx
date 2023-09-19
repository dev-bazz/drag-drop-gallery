import React, { createContext, useContext } from "react";
import { GlobalContextType } from "./context";
import {
	DndProvider,
	TouchTransition,
	MouseTransition,
} from "react-dnd-multi-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const AppContext = createContext<GlobalContextType>({});

export const HTML5toTouch = {
	backends: [
		{ id: "html5", backend: HTML5Backend, transition: MouseTransition },
		{
			id: "touch",
			backend: TouchBackend,
			transition: TouchTransition,
			preview: true,
			options: { enableMouseEvents: true },
		},
	],
};

export const useGlobalContext = () => useContext(AppContext);

export function GlobalContext({
	children,
}: {
	children: React.ReactNode;
}) {
	const gold = "007";
	return (
		<DndProvider options={HTML5toTouch}>
			<AppContext.Provider
				value={{
					gold,
				}}>
				{children}
			</AppContext.Provider>
		</DndProvider>
	);
}
