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
      <nav>
    {userData ? loadedUsers() : loadingUsers()}
    <Link to={`/CreatUser`}>Create New User</Link>

  <ul>
    <li><a href="#flair">Flair</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#present">Present</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<section id="flair">
  <h1>About</h1>
</section>
<section id="services">
  <h1>Skills</h1>
</section>
<section id="present">
  <h1>Projects</h1>
</section>
<section id="contact">
  <h1>Contact</h1>
</section>
</div>
 


  )


}

export default ShowUsers