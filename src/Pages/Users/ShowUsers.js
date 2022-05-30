import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowUsers = ({userData}) => {

  const loadedUsers = () => {
    return userData.map((data) => (
      
            <div key={data._id} className='user'>
              
            <Link to={`/user/${data._id}`}>
            <div className='Profile-Container' >
            <h1>{data.user.profilePic}</h1> 
            <h1>{data.user.profileName}</h1>
            </div>
            </Link>
            <Link to={`/CreatUser`}>Creat new User</Link>
            <div><h1>{data.user.about}</h1></div>
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