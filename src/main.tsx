import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { GlobalContext } from "./context";
import { App } from "./pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<GlobalContext>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</GlobalContext>
);
