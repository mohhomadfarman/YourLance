import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Register from "./components/Register";
import EmailForm from "./components/Form";
import Dashboard from "./components/Dashboard";
import Login from "./components/Form/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: "No Page Found",
    },
    {
      path: "/Register",
      element: <Register />,
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
      path: "/EmailSend",
      element: <EmailForm/>,
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
