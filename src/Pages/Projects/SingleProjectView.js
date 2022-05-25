import React from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const SingleProjectView = ({ProjectsData}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    
    const loadedProjects = () => {
        return ProjectsData.map((data) => (
                <div key={data._id} className='Projects'>
                  <p>{data.project.Description}</p>
                  <p>{data.project.image}</p>
                  <p>{data.project.shortVideo}</p>
                </div>
            )
        )
      }
      
      const loadingProjects = () => {
        return <h1>Loading.........</h1>
      }






  return (
    <div>SingleProjectView
    {ProjectsData ? loadedProjects() : loadingProjects()}
    </div>
  )
}

export default SingleProjectView