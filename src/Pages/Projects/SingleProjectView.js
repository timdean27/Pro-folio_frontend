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
const [ImageInput, setImageInput] = useState("")
const [VideoInput, setVideoInput] = useState("")
const [ImageURLStore, setImageURLStore] = useState("")
const [VideoURLStore, setVideoURLStore] = useState("")
const [ImageCloudDate, setImageCloudDate] = useState("")
const [VideoCloudDate, setVideoCloudDate] = useState("")


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



const handleImageInput = async (files) =>{
  files.preventDefault()
  const formData = new FormData();
  formData.append("file" , ImageInput)
  formData.append('upload_preset', 'GAproject3');
  const ImageUrlData = await fetch(`https://api.cloudinary.com/v1_1/dtonselel/image/upload`,
  {method: 'post', body:formData}
  ).then((response) =>response.json()) 

  setImageCloudDate(ImageUrlData)
  setImageURLStore(ImageUrlData.url)
  // console.log('ImageUrlData' ,ImageUrlData)
  // console.log('ImageUrlData.secure_url' ,ImageUrlData.secure_url)
  console.log('ImageCloudDate' ,ImageCloudDate)
  console.log('ImageURLStore' ,ImageURLStore)

  setEditProject({
    project: {
        ...editProject.project,
        image: ImageURLStore
    }
})

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
  setVideoURLStore(VideoUrlData.url)
  console.log('VideoCloudDate' ,VideoCloudDate)
  console.log('VideoURLStore' ,VideoURLStore)
  
  setEditProject({
    project: {
        ...editProject.project,
        image: VideoURLStore
    }
})

}

const loadedProjects = () => {
  return (
    
          <div key={projectCurrent._id} className='SingleProject-items-Container'>
              <h1 className='SingleProject-Title-h1'>{projectCurrent.project.title}</h1>
          
          <a href={projectCurrent.project.appLink} target="_blank"> 
            <div className='SingleProject-Image' >
              <img src={projectCurrent.project.image} alt={projectCurrent.project.title} />
            </div>
          </a>
            <div  className='SingleProject-Description-Container' >
              <p>{projectCurrent.project.shortVideo}</p>  
              <p>{projectCurrent.project.Description}</p>
            
              </div>
          </div>
    
      )
}

const loadingProjects = () => {
  return <h1>Loading.........</h1>
}


return (
    <div className='Main-SingleProject-Container'>
    {ProjectsData ? loadedProjects() : loadingProjects()}
    <div className='SingleProject-Forms-Container'>
    <form onSubmit={handleSubmit}>
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