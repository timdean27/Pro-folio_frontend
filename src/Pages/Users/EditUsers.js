import React from 'react'
import { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'


const EditUsers = ({userData , updateUser , deleteUser}) => {

    const navigate = useNavigate()
    const { id } = useParams()
    let userCurrent = userData.find(user => user._id === id)
    const [edituser, setEdituser] = useState(userCurrent)
    const [PictureInput, setPictureInput] = useState("")
  const [PictureURLStore, setPictureURLStore] = useState("")
  const [PictureCloudDate, setPictureCloudDate] = useState("")
    // console.log("THIS IS THE IS From USER  Single",id)
    // console.log("THIS IS THE USER Data",userData)
    // console.log("userCurrent",userCurrent.user)

    const handleChange = (event) => {
        setEdituser({
            user: {
                ...edituser.user,
                [event.target.name]: event.target.value
            }
        })
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
    
      setEdituser({
        user: {
            ...edituser.user,
            profilePic: PictureURLStore
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
          <input className="form-control"
          type="file"
          placeholder='image URL'
          onChange={(event) => {setPictureInput(event.target.files[0])}}
          />
          <button onClick={handlePictureInput}>Upload Profile Picture</button>

          <input className="form-control"
              type='text'
              value={edituser.user.username}
              name='username'
              placeholder='username'
              onChange={handleChange}
          />
          <input className="form-control"
                  type='text'
                  value={edituser.user.profileName}
                  name='profileName'
                  placeholder='profileName'
                  onChange={handleChange}
              />
          <textarea rows='4' className="form-control"
              type="text" 
              value={edituser.user.about}
              name='about'
              placeholder='about'
              onChange={handleChange}
          />
          <input className="form-control"
              type='text'
              value={edituser.user.password}
              name='password'
              placeholder='password'
              onChange={handleChange}
          />
          <input className="btn btn-secondary btn-lg btn-block" type='submit' value='Edit user' />
          </form>
        
        <button className="SinglePoj-deleteBTN" onClick={DeleteuserFunc}>
                DELETE User Info
        </button>
      </div>
    </div>
  )
}



export default EditUsers