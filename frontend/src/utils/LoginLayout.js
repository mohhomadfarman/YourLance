import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";


const LoginLayout = () => {
  const token = localStorage.getItem("token");

  return !token ? (
    <>
    <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default memo(LoginLayout);
