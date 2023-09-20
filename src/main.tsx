import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { GlobalContext } from "./context";
import { App, LoginPage } from "./pages";
import {
	RouterProvider,
	createBrowserRouter,
	redirect,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: async () => {
			const login = localStorage.getItem("user");
			console.log("loader");
			if (!login) {
				throw redirect("/login");
			}
			return null;
		},
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
