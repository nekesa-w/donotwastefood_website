import React from "react";
import Home from "./pages/Home";
import OurMission from "./pages/OurMission";
import LearnMore from "./pages/LearnMore";
import GetInvolved from "./pages/GetInvolved";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/our-mission",
			element: <OurMission />,
		},
		{
			path: "/learn-more",
			element: <LearnMore />,
		},
		{
			path: "/get-involved",
			element: <GetInvolved />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
