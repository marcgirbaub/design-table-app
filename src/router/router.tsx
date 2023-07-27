import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import endpoints from "./endpoint";
import DesignsPage from "../pages/DesignsPage/DesignsPage";
import SetoutsPage from "../pages/SetoutsPage/SetoutsPage";

const routes: RouteObject[] = [
  {
    element: <App />,
    path: "/",
    children: [
      { path: endpoints.designs, element: <DesignsPage /> },
      { path: endpoints.setouts, element: <SetoutsPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
