import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import DashboardRoutes from "./routes/dashboard";
import BaseRoutes from "./routes/base";

const route: RouteObject = {
  element: <Outlet />,
  path: "/",
  children: [BaseRoutes, DashboardRoutes],
};

const router = createBrowserRouter([route]);

export default router;
