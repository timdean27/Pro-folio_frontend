import React from 'react'
import { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'


const SingleProjectView = ({ProjectsData , updateProject, deleteProject}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    //console.log("THIS IS THE IS From Projects Single",id)
    //console.log("THIS IS THE ProjectsData",ProjectsData)
    let projectCurrent = ProjectsData.find(project => project._id === id)

    
    //console.log("projectCurrent",projectCurrent.project.image)

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
        navigate(`/Project/${id}`)
    }

    const DeleteProjectFunc = () => {
        deleteProject(id)
        navigate(`/`)
      }

    const loadedProjects = () => {
        return (
          <a href={projectCurrent.project.appLink} target="_blank">
                <div key={projectCurrent._id} className='SingleProject-items-Container'>
                <h3>{projectCurrent.project.title}</h3>
                <img src="" alt={projectCurrent.project.title} />
                <p>{projectCurrent.project.shortVideo}</p>  
                <p>{projectCurrent.project.Description}</p>
                </div>
          </a>
            )
      }
      
      const loadingProjects = () => {
        return <h1>Loading.........</h1>
      }

  return (
    <div className='Main-SingleProject-Container'>
    <h1>SingleProjectView ID# :{projectCurrent._id}</h1>
    {ProjectsData ? loadedProjects() : loadingProjects()}
    <div className='SingleProject-Forms-Container'>
    <form onSubmit={handleSubmit}>
    <input
        type='text'
        value={editProject.project.title}
        name='title'
        placeholder='title'
        onChange={handleChange}
    />
    <input
        type='text'
        value={editProject.project.image}
        name='image'
        placeholder='image URL'
        onChange={handleChange}
    />
    <input
        type='text'
        value={editProject.project.shortVideo}
        name='shortVideo'
        placeholder='shortVideo URL'
        onChange={handleChange}
    />
    <input
        type='text'
        value={editProject.project.Description}
        name='Description'
        placeholder='Description'
        onChange={handleChange}
    />
    <input
    type='text'
    value={editProject.project.appLink}
    name='appLink'
    placeholder='appLink'
    onChange={handleChange}
    />
    <input type='submit' value='Edit Project' />
    </form>
    </div>
    <button className="SinglePoj-deleteBTN" onClick={DeleteProjectFunc}>
            DELETE This Project{projectCurrent._id}
          </button>
    </div>
  )
}

export default SingleProjectView