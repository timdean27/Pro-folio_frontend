import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowProjects= ({ProjectsData ,createProject}) => {

  console.log("props from showProjects",ProjectsData)
  const [ImageInput, setImageInput] = useState("")
  const [VideoInput, setVideoInput] = useState("")
  const [ImageURLStore, setImageURLStore] = useState("")
  const [VideoURLStore, setVideoURLStore] = useState("")
  const [ImageCloudDate, setImageCloudDate] = useState("")
  const [VideoCloudDate, setVideoCloudDate] = useState("")
  
  const [newProjectForm, setnewProjectForm] = useState({
    project:{
      title:"",
      image:ImageURLStore,
      shortVideo:"",
      Description:""
    }
  })


  const handleChange = (event) => {
    setnewProjectForm({
        project: {
            ...newProjectForm.project,
            [event.target.name]: event.target.value
        }
    })
}


  const handleImageInput = async (files) =>{
    files.preventDefault()
    const formData = new FormData();
    formData.append("file" , ImageInput)
    formData.append('upload_preset', 'GAproject3');
    const ImageUrlData = await fetch(`https://api.cloudinary.com/v1_1/dtonselel/image/upload`,
    {method: 'post', body:formData}
    ).then((response) =>response.json()) 

    setImageCloudDate(ImageUrlData)
    setImageURLStore(ImageUrlData.secure_url)
    // console.log('ImageUrlData' ,ImageUrlData)
    // console.log('ImageUrlData.secure_url' ,ImageUrlData.secure_url)
    console.log('ImageCloudDate' ,ImageCloudDate)
    console.log('ImageURLStore' ,ImageURLStore)
  }
  
  const handleVideoInput = async (files) =>{
     files.preventDefault()
    const formData = new FormData();
    formData.append("file" , VideoInput)
    formData.append('upload_preset', 'GAproject3');
    const VideoUrlData = await fetch(`https://api.cloudinary.com/v1_1/dtonselel/image/upload`,
    {method: 'post', body:formData}
    ).then((response) =>response.json()) 
    
    setVideoCloudDate(VideoUrlData)
    setVideoURLStore(VideoUrlData.secure_url)
  }
 

const handleSubmit = (event) => {
  event.preventDefault();
  createProject(newProjectForm);
  setnewProjectForm({
    project:{
      title:"",
      image:ImageURLStore,
      shortVideo:"",
      Description:""
      
    }
  })
}

  const loadedProjects = () => {
    return ProjectsData.map((data) => (
      <Link key={data._id} to={`/project/${data._id}`}>
          <div  className='ONEProj-HomePage-Container'>
          <h3>{data.project.title}</h3>
          <img src={data.project.image}alt={data.project.title} />
          <p>{data.project.Description}</p> 
          <p>{data.project.shortVideo}</p>
          </div>
      </Link>
        )
    )
  }
  
  const loadingProjects = () => {
    return <h1>Loading.........</h1>
  }

  return (
    <div className='Projects-HomePage-Container'>
    <h1>ShowProjects</h1>
    {ProjectsData ? loadedProjects() : loadingProjects()}

    <input
    type="file"
    placeholder='image URL'
    onChange={(event) => {setImageInput(event.target.files[0])}}
    />
    <button onClick={handleImageInput}>Upload Project Image</button>
    <input
    type="file"
    placeholder='shortVideo URL'
    onChange={(event) => {setVideoInput(event.target.files[0])}}
    />
    <button onClick={handleVideoInput}>Upload Short Video of Project</button>

    <form onSubmit={handleSubmit}>
    <input
        type='text'
        value={newProjectForm.project.title}
        name='title'
        placeholder='title'
        onChange={handleChange}
    />
    <input
        type='text'
        value={newProjectForm.project.Description}
        name='Description'
        placeholder='Description'
        onChange={handleChange}
    />
    <input
    type='text'
    value={newProjectForm.project.appLink}
    name='appLink'
    placeholder='appLink'
    onChange={handleChange}
    />
    <input type='submit' value='Create New Project' />
</form>
    </div>
  )
}

export default ShowProjects