import useAuth from "../hooks/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { state } = useAuth();
  console.log({ state }, "state");
  console.log(state, "stat1e");

  const location = useLocation();
  return state && state.data.auth.accessToken ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} />
  );
}
export default ProtectedRoute;
