import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import ClientDashboard from "../Client Side";
import Navbar from "../components/Navbar";



const Layout = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <>
    <Navbar/>
    <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default memo(Layout);
