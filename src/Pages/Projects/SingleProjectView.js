import React from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const SingleProjectView = ({ProjectsData , updateProject}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    console.log("THIS IS THE IS",id)
    console.log("THIS IS THE ProjectsData",ProjectsData)
    let projectCurrent = ProjectsData.find(project => project._id === id)

    
    console.log("projectCurrent",projectCurrent)

    const [editProject, setEditProject] = useState(projectCurrent)



    const handleChange = (event) => {
        setEditProject({
            project: {
                ...editProject.project,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        updateProject(editProject, id)

        navigate('/')
    }

    const loadedProjects = () => {
        return (
                <div key={projectCurrent._id} className='Projects'>
                  <p>{projectCurrent.Description}</p>
                  <p>{projectCurrent.image}</p>
                  <p>{projectCurrent.shortVideo}</p>
                </div>
            )
      }
      
      const loadingProjects = () => {
        return <h1>Loading.........</h1>
      }

  return (
    <div>SingleProjectView
    <p>{projectCurrent.Description}</p>
                  <p>{projectCurrent.image}</p>
                  <p>{projectCurrent.shortVideo}</p>
    {ProjectsData ? loadedProjects() : loadingProjects()}
    <form onSubmit={handleSubmit}>
    <input
        type='text'
        value={editProject.image}
        name='image'
        placeholder='image URL'
        onChange={handleChange}
    />
    <input
        type='text'
        value={editProject.shortVideo}
        name='shortVideo'
        placeholder='shortVideo URL'
        onChange={handleChange}
    />
    <input
        type='text'
        value={editProject.Description}
        name='Description'
        placeholder='Description'
        onChange={handleChange}
    />
    <input type='submit' value='Edit Project' />
    </form>
    </div>
  )
}

export default SingleProjectView