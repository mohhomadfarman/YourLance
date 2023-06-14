import React from 'react'
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
        <Link to="/login"><button >Navigate To Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home