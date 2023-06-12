import React from 'react'
import settings from '../../img/Settings.svg'

function RightSide(props) {


  return (
    <div>        
        <div className='UserSetting justify-content-between align-items-center'>
         <div className='UserSetting p-0 border-0 align-items-center' >
         <div className='User-image'>
                <img src="#" alt=""/>
            </div>
              <div className='d-flex flex-column ms-3'>
              <p>{props.username}</p>
              </div>
         </div>
            <div className='pointer'><img src={settings} alt=""/></div>
        </div>
      
    </div>
  )
}

export default RightSide
