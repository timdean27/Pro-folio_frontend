import React from 'react'
import { useState } from 'react';




const EditUsers = ({userData}) => {
console.log("userData from Link PAge",userData)

  const loadedUsers = () => {
    return userData.map((data) => (
            <div key={data._id} className='user'>
              <p>You clicked on user id:     {data._id}</p>
              <p>{data.user.username}</p>
              <p>{data.user.password}</p>
              <p>{data.user.profilePic}</p>
            </div>
        )
    )
  }
  
  const loadingUsers = () => {
    return <h1>Loading.........</h1>
  }
  

  return (
    <div>EditUsers
    {userData ? loadedUsers() : loadingUsers()}
    </div>

    

  )
}



export default EditUsers