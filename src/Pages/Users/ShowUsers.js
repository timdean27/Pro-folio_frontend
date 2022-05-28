import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowUsers = ({userData}) => {

  const loadedUsers = () => {
    return userData.map((data) => (
      
            <div key={data._id} className='user'>
            <Link to={`/user/${data._id}`}><h1>{data.user.profileName}</h1></Link>   
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
    <Link to={`/CreatUser`}>Creat new User</Link>
    
        <nav className="option1">
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Services">Services</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </nav>
      <br /><br />
      <nav className="option2">
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Services">Services</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>
      <br /><br />
      <nav className="option3">
        <ul>
          <li><a href="home">NAOMI</a></li>
          <li><a href="About">TIMOTHY</a></li>
          <li><a href="Services">JEROME</a></li>
        </ul>
      </nav>
    </div>
  )

}

export default ShowUsers