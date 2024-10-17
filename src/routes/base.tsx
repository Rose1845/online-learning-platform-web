/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import HomeLayout from "../layout/HomeLayout";
import Register from "../pages/Register";

export const BaseRoutes: RouteObject = {
  path: "/",
  element: <HomeLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ],
};

export default BaseRoutes;
