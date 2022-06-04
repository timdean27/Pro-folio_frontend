import { useState , useNavigate } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'

const CreatUser = ({userData,createUser}) => {
  //console.log("props from ShowUsers",userData)
  const [PictureInput, setPictureInput] = useState("")
  const navigate = useNavigate()
  
  const [newUserForm, setnewUserForm] = useState({
    user:{
      username: '',
      profileName: '',
      about: '',
      profilePic: "",
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

  console.log('PictureUrlData' ,PictureUrlData)
  console.log('PictureUrlData.secure_url' ,PictureUrlData.url)


  setnewUserForm({
    user: {
        ...newUserForm.user,
        profilePic: PictureUrlData.url
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
    navigate(`/`)
}


const loadedUsers = () => {
  return userData.map((data) => (
    
          <div key={data._id} className='user'>
          <p>{data.user.username}</p>
          <p>{data.user.profileName}</p>
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
    <div className='SingleUser-Forms-Container'>
    <form onSubmit={handleSubmit}>
    <input className="form-control"
    type="file"
    placeholder='image URL'
    onChange={(event) => {setPictureInput(event.target.files[0])}}
    />
    <button onClick={handlePictureInput}>Upload Profile Picture</button>
        
    <input className="form-control"
            type='text'
            value={newUserForm.user.username}
            name='username'
            placeholder='username'
            onChange={handleChange}
        />
        <input className="form-control"
            type='text' 
            value={newUserForm.user.profileName}
            name='profileName'
            placeholder='profileName'
            onChange={handleChange}
        />
        <textarea rows='4' className="form-control"
            type='text'
            value={newUserForm.user.about}
            name='about'
            placeholder='about'
            onChange={handleChange}
        />
        <input className="form-control"
            type='text'
            value={newUserForm.user.password}
            name='password'
            placeholder='password'
            onChange={handleChange}
        />
        <input className="btn btn-secondary btn-lg btn-block" type='submit' value='Create New User' />
    </form>
    </div>
    </div>
  )
}

export default CreatUser