import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { GlobalContext } from "./context";
import { App, LoginPage } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "login/",
		element: <LoginPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<GlobalContext>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</GlobalContext>
);
