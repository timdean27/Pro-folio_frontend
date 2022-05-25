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
    <div>
    <h1>ShowUsers</h1>
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