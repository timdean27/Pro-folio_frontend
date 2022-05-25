import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'


const ShowProjects= ({ProjectsData}) => {

  //console.log("props from showProjects",ProjectsData)

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
    <div>
    <h1>ShowProjects</h1>
    {ProjectsData ? loadedProjects() : loadingProjects()}
    </div>
  )
}

export default ShowProjects

