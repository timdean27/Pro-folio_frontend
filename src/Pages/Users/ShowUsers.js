import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowUsers = ({userData}) => {

  
  const loadedUsers = () => {
    
    return userData.map((data) => (
      
            <div key={data._id} className="User-HomePAGE-Div">
            <Link className="UserLink" to={`/user/${data._id}`}>
              <div className='Profile-Container' >
              <img className="Profile-IMG" src={data.user.profilePic} alt="Profile Picture" />
                  
              </div>
            </Link>

            <Link className="UserLink" to={`/user/${data._id}`}>
              <div id="About-Scroll" className='About-User-Container'>
                <h1>{data.user.profileName}</h1>
                <br></br>
                <p>{data.user.about}</p>
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
    <div className="createUserLink">
         <Link to={`/CreatUser`}>Create new User</Link>
    </div>
    
    </div>
  )


  
}

export default ShowUsers