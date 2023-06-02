import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
