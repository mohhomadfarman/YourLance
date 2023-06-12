import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()
    useEffect(()=>{

     !JSON.parse(localStorage.getItem("Login Status")) && navigate("/login");
        
      },[navigate])
    
        let UserName = JSON.parse(localStorage.getItem("data"));

        // console.log(UserName)

function LogOut() {
    localStorage.clear("data")
    navigate("/login")
}

  return (
    <div>
      <p>Wecome {UserName?.email}</p>
      <button onClick={LogOut}> Log-out</button>
    </div>
  )
}

export default Dashboard
