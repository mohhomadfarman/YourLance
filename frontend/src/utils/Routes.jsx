import { Navigate } from "react-router-dom";
import ClientDashboard from "../Client Side";
import { getToken, getUserId } from "./auth";
// import Home from "../Home";
import Login from "../components/Form/Login";
import Register from "../components/Form";
import Postjob from "../Client Side/Right/Postjob";
import Layout from "./Layout";
import LoginLayout from "./LoginLayout";
import SearchPostPage from "../Client Side/Searchpage";
import AdminLayout from "./AdminLayout";

const role = getUserId() ? getUserId()?.user?.role : null;
const isLoggedIn = getToken();

const protects = {
    client: [
      {
        path: "/",
        element: isLoggedIn ? <Layout/> : <Navigate to="/" />,
        children: [
        { path: "/", element: <ClientDashboard/> },
        { path: "/client", element: <ClientDashboard/> },
        { path: "/post-job", element: <Postjob/> },
        {path:"/Search", element: <SearchPostPage/>},
        { path: "*", element: <div>no page found</div> },
        ],
      },
    ],
    admin: [
      {
        path: "/",
        element: isLoggedIn ? <AdminLayout/> : <Navigate to="/" />,
        children: [
        { path: "/", element: <ClientDashboard/> },
        { path: "/admin", element: <ClientDashboard/> },
        { path: "/admin-post-job", element: <Postjob/> },
        {path:"/admin-Search", element: <SearchPostPage/>},
        { path: "*", element: <div>no page found</div> },
        ],
      },
    ],

    default: [
      {
        path: "/",
        element: <LoginLayout />,
        children: [
          {path: "/", element: <Login /> },
          {path: "/login", element: <Login /> },
          {path: "/register", element: <Register /> },
          {path: "*", element: "No PAGE FOUNG" },
        ],
      },
    ],
  };

export const protect =
  role && isLoggedIn ? protects[role] : protects["default"];
  export const defaultProtect = protects["default"];