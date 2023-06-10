import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";


import Dashboard from "./components/Dashboard";
import Login from "./components/Form/Login";
import Register from "./components/Form";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: "No Page Found",
    },
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
