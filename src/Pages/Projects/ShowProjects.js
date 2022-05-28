import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowProjects= ({ProjectsData ,createProject}) => {

  //console.log("props from showProjects",ProjectsData)
  const [newProjectForm, setnewProjectForm] = useState({
    project:{
      image:"",
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

const handleSubmit = (event) => {
  event.preventDefault();
  createProject(newProjectForm);
  setnewProjectForm({
    project:{
      image:"",
      shortVideo:"",
      Description:""
      
    }
  })
}



  const loadedProjects = () => {
    return ProjectsData.map((data) => (
      <Link key={data._id} to={`/project/${data._id}`}>
          <div  className='ONEProj-HomePage-Container'>
              <p>{data.project.Description}</p>
              <p>{data.project.image}</p>
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
    <form onSubmit={handleSubmit}>
    <input
        type='text'
        value={newProjectForm.project.image}
        name='image'
        placeholder='image URL'
        onChange={handleChange}
    />
    <input
        type='text'
        value={newProjectForm.project.shortVideo}
        name='shortVideo'
        placeholder='shortVideo URL'
        onChange={handleChange}
    />
    <input
        type='text'
        value={newProjectForm.project.Description}
        name='Description'
        placeholder='Description'
        onChange={handleChange}
    />
    <input type='submit' value='Create New Project' />
</form>
    </div>
  )
}

export default ShowProjects
