import React from 'react'
import { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'


const EditUsers = ({userData , updateUser , deleteUser}) => {

    const navigate = useNavigate()
    const { id } = useParams()
    let userCurrent = userData.find(user => user._id === id)
    const [edituser, setEdituser] = useState(userCurrent)
    console.log("THIS IS THE IS From USER  Single",id)
    console.log("THIS IS THE USER Data",userData)
    console.log("userCurrent",userCurrent.user)

    const handleChange = (event) => {
        setEdituser({
            user: {
                ...edituser.user,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        updateUser(edituser, id)
        navigate(`/`)
    }

    const DeleteuserFunc = () => {
        deleteUser(id)
        navigate(`/`)
      }
  const loadedUsers = () => {
    return (
            <div key={userCurrent._id} className='userEDITing'>
              <p>You clicked on user id: {userCurrent._id}</p>
              <p>{userCurrent.user.username}</p>
              <p>{userCurrent.user.profileName}</p>
              <p>{userCurrent.user.about}</p>
              <p>{userCurrent.user.password}</p>
              <p>{userCurrent.user.profilePic}</p>
            </div>
        )
  }
  
  const loadingUsers = () => {
    return <h1>Loading.........</h1>
  }
  

  return (
    <div className='Main-SingleUser-Container'>
    <h1>SingleuserView ID# :{userCurrent._id}</h1>
    {userData ? loadedUsers() : loadingUsers()}
    <div className='SingleUser-Forms-Container'>
    <form onSubmit={handleSubmit}>
    <input
        type='text'
        value={edituser.user.username}
        name='username'
        placeholder='username'
        onChange={handleChange}
    />
    <input
            type='text'
            value={edituser.user.profileName}
            name='profileName'
            placeholder='profileName'
            onChange={handleChange}
        />
        <input
        type='text'
        value={edituser.user.about}
        name='about'
        placeholder='about'
        onChange={handleChange}
    />
    <input
        type='text'
        value={edituser.user.profilePic}
        name='profilePic'
        placeholder='profilePic URL'
        onChange={handleChange}
    />
    <input
        type='text'
        value={edituser.user.password}
        name='password'
        placeholder='password'
        onChange={handleChange}
    />
    <input type='submit' value='Edit user' />
    </form>
    </div>
    <button className="SinglePoj-deleteBTN" onClick={DeleteuserFunc}>
            DELETE This user{userCurrent._id}
          </button>
    </div>
  )
}



export default EditUsers