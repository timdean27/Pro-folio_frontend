import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'





const ShowUsers = ({userData,createUser}) => {

  //console.log("props from ShowUsers",userData)
    const [newUserForm, setnewUserForm] = useState({
      user:{
        username: '',
        profilePic: '',
        password: ''
    }
    })

    const handleChange = (event) => {
      setnewUserForm({
          user: {
              ...newUserForm.user,
              [event.target.name]: event.target.value
          }
      })
      //console.log("handleChangeUser", newUserForm)
  }


  const handleSubmit = (event) => {
      event.preventDefault();
      createUser(newUserForm);
      setnewUserForm({
        user:{
          username: '',
          profilePic: '',
          password: ''
      }
      })
  }


  const loadedUsers = () => {
    return userData.map((data) => (
      
            <div key={data._id} className='user'>
            <Link to={`/user/${data._id}`}>
            <p>{data.user.username}</p>
            </Link>
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

  
    <div>
      
    <h1>Users</h1>





    


<nav class="option1">
  <ul>
    <li><a href="home">Home</a></li>
    <li><a href="About">About</a></li>
    <li><a href="Services">Services</a></li>
    <li><a href="Contact">Contact</a></li>
  </ul>
</nav>
<br /><br />
<nav class="option2">
  <ul>
    <li><a href="home">Home</a></li>
    <li><a href="About">About</a></li>
    <li><a href="Services">Services</a></li>
    <li><a href="Contact">Contact</a></li>
  </ul>
</nav>
<br /><br />
<nav class="option3">
  <ul>
    <li><a href="home">NAOMI</a></li>
    <li><a href="About">TIMOTHY</a></li>
    <li><a href="Services">JEROME</a></li>
  </ul>
</nav>








    
    {userData ? loadedUsers() : loadingUsers()}
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={newUserForm.user.username}
            name='username'
            placeholder='username'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newUserForm.user.profilePic}
            name='profilePic'
            placeholder='profilePic'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newUserForm.user.password}
            name='password'
            placeholder='password'
            onChange={handleChange}
        />
        <input type='submit' value='Create New User' />
    </form>
    </div>
    
  )

}




export default ShowUsers