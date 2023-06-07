import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()
    useEffect(()=>{

     !JSON.parse(localStorage.getItem("OTP Status")) && navigate("/emailsend");
        
      },[])
    
        let UserName = JSON.parse(localStorage.getItem("data"));

        // console.log(UserName)

function LogOut() {
    localStorage.clear("data")
    navigate("/emailsend")
}

  return (
    <div>
      <p>Wecome {UserName?.email}</p>
      <button onClick={LogOut}> Log-out</button>
    </div>
  )
}

export default Dashboard
