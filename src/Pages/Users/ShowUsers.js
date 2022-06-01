import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowUsers = ({userData}) => {

  const loadedUsers = () => {
    return userData.map((data) => (
      
            <div key={data._id} className='user'>
              
            <Link className="UserLink"to={`/user/${data._id}`}>
            <div className='Profile-Container' >
            <h1>{data.user.profilePic}</h1> 
            <h1>{data.user.profileName}</h1>
            </div>
            </Link>
            <div className="createUserLink">
            <Link to={`/CreatUser`}>Create new User</Link>
   </div>
            <Link className="UserLink"to={`/user/${data._id}`}>
            <div id="About-Scroll" className='About-User-Container'>
            <h1>{data.user.about}</h1>
            </div>
            </Link>
            </div>
        )
    )
  }
  
  const loadingUsers = () => {
    return <h1>Loading.........</h1>
  }

  return (
    <div>  
    {userData ? loadedUsers() : loadingUsers()}
    
    </div>
  )


  
}

export default ShowUsers