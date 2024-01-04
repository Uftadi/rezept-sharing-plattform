import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Main from "../pages/Main";
import NotFoundPage from "../pages/NotFoundPage";
import SinglePage from "../pages/SinglePage";
import User from "../pages/User";

export const router = createBrowserRouter([
	{
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/singlePage/:id",
				element: <SinglePage />,
			},
			{
				path: "/user",
				element: <User />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
