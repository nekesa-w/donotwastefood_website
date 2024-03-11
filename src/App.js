import React from "react";
import Home from "./components/pages/Home";
import Mission from "./components/pages/Mission";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/home",
			element: <Home />,
		},
		{
			path: "/our-mission",
			element: <Mission />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
