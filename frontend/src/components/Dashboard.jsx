import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let UserName = JSON.parse(localStorage.getItem("data"));


  return (
    <div>
      <p>Wecome {UserName?.email}</p>
      <button> Log-out</button>
    </div>
  );
}

export default Dashboard;
