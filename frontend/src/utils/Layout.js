import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import ClientDashboard from "../Client Side";


const Layout = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <>
    <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default memo(Layout);
