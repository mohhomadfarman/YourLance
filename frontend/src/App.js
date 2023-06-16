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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginApi } from "./redux/auctions/userLogin";

function App() {
  const dispatch = useDispatch();

const LocalData = JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : false 
console.log(LocalData.email)

if(LocalData){
  const dataSend = {
  email: LocalData.email,
  password: LocalData.password,
  status: true,
}
  dispatch(loginApi(dataSend));
}else{

}

  const isLogin = useSelector((state) => state?.login?.user?.loginStatus);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {isLogin === true ? (
          <>
            <Route exact path="/client/:id" element={<ClientDashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/Postjob/:id" element={<Postjob />} />
          </>
        ) : (
          <Route exact path="*" element={"no Page Found"} />
        )}
      </Routes>
    </div>
  );
}

export default App;
