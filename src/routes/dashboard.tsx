/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layout/DashboardLayout";
import UserList from "../dashboard/users/UserList";

export const DashboardRoutes: RouteObject = {
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: "/dashboard",
      element: <UserList />,
    },
  ],
};

export default DashboardRoutes;
