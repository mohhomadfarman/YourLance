import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Form/Login";
import Register from "./components/Form";
import ClientDashboard from "./Client Side";
import Postjob from "./Client Side/Right/Postjob";
import Home from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: "No Page Found",
    },
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/client",
      element: <ClientDashboard />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/client/:id" element={<ClientDashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/Postjob" element={<Postjob />} />
      </Routes>
    </div>
  );
}

export default App;
