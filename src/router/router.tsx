import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import endpoints from "./endpoint";
import DesignsPage from "../pages/DesignsPage/DesignsPage";

const routes: RouteObject[] = [
  {
    element: <App />,
    path: "/",
    children: [{ path: endpoints.designs, element: <DesignsPage /> }],
  },
];

export const router = createBrowserRouter(routes);
