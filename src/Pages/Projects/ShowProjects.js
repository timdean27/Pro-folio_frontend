import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowProjects= ({ProjectsData ,createProject}) => {

  console.log("props from showProjects",ProjectsData)
  const [ImageInput, setImageInput] = useState("")
  //const [VideoInput, setVideoInput] = useState("")

  
  const [newProjectForm, setnewProjectForm] = useState({
    project:{
      title:"",
      image:"",
      Description:"",
      appLink:""
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

    console.log('ImageUrlData' ,ImageUrlData)
    console.log('ImageUrlData.url' ,ImageUrlData.url)


    setnewProjectForm({
      project: {
          ...newProjectForm.project,
          image: ImageUrlData.url
      }
  })
  }
  
  // const handleVideoInput = async (files) =>{
  //    files.preventDefault()
  //   const formData = new FormData();
  //   formData.append("file" , VideoInput)
  //   formData.append('upload_preset', 'GAproject3');
  //   const VideoUrlData = await fetch(`https://api.cloudinary.com/v1_1/dtonselel/image/upload`,
  //   {method: 'post', body:formData}
  //   ).then((response) =>response.json()) 


  //   setnewProjectForm({
  //     project: {
  //         ...newProjectForm.project,
  //         image: VideoUrlData.url
  //     }
  // })
  // }
 

const handleSubmit = (event) => {
  event.preventDefault();
  createProject(newProjectForm);
  setnewProjectForm({
    project:{
      title:"",
      image:"",
      shortVideo:"",
      Description:"",
      appLink:""
      
    }
  })
}

  const loadedProjects = () => {
    return ProjectsData.map((data) => (
      <Link className="Project-Link" key={data._id} to={`/project/${data._id}`}>
          <div  className='ONEProj-HomePage-Container'>
          <h1>{data.project.title}</h1>
          <img className="Project-IMG-ShowScreen" src={data.project.image} alt={data.project.title} />
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
    <div>
    <h1>Projects</h1>
    <div className='Projects-HomePage-Container'>
    {ProjectsData ? loadedProjects() : loadingProjects()}

    <form onSubmit={handleSubmit}>
    <input className="form-control"
    type="file"
    placeholder='image URL'
    onChange={(event) => {setImageInput(event.target.files[0])}}
    />
    <button onClick={handleImageInput}>Upload Project Image</button>
    <input className="form-control"
        type='text'
        value={newProjectForm.project.title}
        name='title'
        placeholder='Project title'
        onChange={handleChange}
    />
    <textarea rows='6' className="form-control"
        type='text'
        value={newProjectForm.project.Description}
        name='Description'
        placeholder='Description'
        onChange={handleChange}
    />
    <input className="form-control"
    type='text'
    value={newProjectForm.project.appLink}
    name='appLink'
    placeholder='Link to use app'
    onChange={handleChange}
    />
    <input type='submit' value='Create New Project' />
</form>
    </div>
    </div>
  )
}

export default ShowProjects