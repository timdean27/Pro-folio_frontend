import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'

const CreatUser = ({userData,createUser}) => {
  //console.log("props from ShowUsers",userData)
  const [PictureInput, setPictureInput] = useState("")
  const [PictureURLStore, setPictureURLStore] = useState("")
  const [PictureCloudDate, setPictureCloudDate] = useState("")
  
  const [newUserForm, setnewUserForm] = useState({
    user:{
      username: '',
      profileName: '',
      about: '',
      profilePic: PictureURLStore,
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

const handlePictureInput = async (files) =>{
  files.preventDefault()
  const formData = new FormData();
  formData.append("file" , PictureInput)
  formData.append('upload_preset', 'GAproject3');
  const PictureUrlData = await fetch(`https://api.cloudinary.com/v1_1/dtonselel/image/upload`,
  {method: 'post', body:formData}
  ).then((response) =>response.json()) 

  setPictureCloudDate(PictureUrlData)
  setPictureURLStore(PictureUrlData.url)
  // console.log('PictureUrlData' ,PictureUrlData)
  // console.log('PictureUrlData.secure_url' ,PictureUrlData.secure_url)
  console.log('PictureCloudDate' ,PictureCloudDate)
  console.log('PictureURLStore' ,PictureURLStore)

  setnewUserForm({
    user: {
        ...newUserForm.user,
        profilePic: PictureURLStore
    }
})
}

const handleSubmit = (event) => {
    event.preventDefault();
    createUser(newUserForm);
    setnewUserForm({
      user:{
        username: '',
        profileName: '',
        about: '',
        profilePic: '',
        password: ''
    }
    })
}


const loadedUsers = () => {
  return userData.map((data) => (
    
          <div key={data._id} className='user'>
          <Link to={`/user/${data._id}`}>
          <p>{data.user.profileName}</p>
          </Link>
            <p>{data.user.username}</p>
            <p>{data.user.about}</p>
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
    <div className="Creat-User-Main-Page">
    {userData ? loadedUsers() : loadingUsers()}
    <form onSubmit={handleSubmit}>
    <input
    type="file"
    placeholder='image URL'
    onChange={(event) => {setPictureInput(event.target.files[0])}}
    />
    <button onClick={handlePictureInput}>Upload Profile Picture</button>
        
    <input
            type='text'
            value={newUserForm.user.username}
            name='username'
            placeholder='username'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newUserForm.user.profileName}
            name='profileName'
            placeholder='profileName'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newUserForm.user.about}
            name='about'
            placeholder='about'
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
    </form></div>
  )
}

export default CreatUser