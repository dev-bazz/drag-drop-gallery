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

const protectedRoute = async (params: string) => {
	const login = localStorage.getItem("user");
	console.log("loader");
	if (!login) {
		throw redirect(params);
	}
	return null;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: async () => protectedRoute("/login"),
	},
	{
		path: "login",
		element: <LoginPage />,
		loader: async () => {
			const login = localStorage.getItem("user");
			console.log("loader");
			if (login) {
				throw redirect("/");
			}
			return null;
		},
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<GlobalContext>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</GlobalContext>
);
