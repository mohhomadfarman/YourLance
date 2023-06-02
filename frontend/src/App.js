import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import EmailForm from "./components/Form";

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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
