import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import LoadingAnimation from "../components/LoadingAnimation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(loading);
  if (loading) {
    return <LoadingAnimation></LoadingAnimation>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
