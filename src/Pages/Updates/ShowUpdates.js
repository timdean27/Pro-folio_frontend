import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'



const ShowUpdates = ({UpdatesData,createUpdates}) => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log("THIS IS THE IS The Project ID printing on ShowUPdates page",id)
  //console.log("props from ShowUpdatess",UpdatesData)
    const [newUpdatesForm, setnewUpdatesForm] = useState({
      updates:{
        updateDescription: '',
        additions: '',
        comments:'',
        updatedAt: new Date(),
        projectID: id
    }
    })

    const handleChange = (event) => {
      setnewUpdatesForm({
          updates: {
              ...newUpdatesForm.updates,
              [event.target.name]: event.target.value
          }
      })
      //console.log("handleChangeUpdates", newUpdatesForm)
  }


  const handleSubmit = (event) => {
      event.preventDefault();
      createUpdates(newUpdatesForm);
      setnewUpdatesForm({
        updates:{
          updateDescription: '',
          additions: '',
          comments:'',
          updatedAt: new Date(),
          projectID: id
      }
      })
  }


  const FilterUpdates = () => {
    return (UpdatesData.filter((updates)=>{
    if(updates.updates.projectID == id){
      console.log("ID Matched", updates)
      return updates
    }
    else{
      console.log("ID Did Not Match", updates.updates.projectID, "id", id)
      console.log("project ID type", typeof(updates.updates.projectID), "id type of ", typeof(id))
    }
    }).map((data) => (
      <Link to={`/Updates/${data._id}`}>
            <div key={data._id} className='ShowUpdates-items-Container'>
              <p>{data.updates.updateDescription}</p>
              <p>{data.updates.additions}</p>
              <p>{data.updates.comments}</p>
              <p>{data.updates.updatedAt}</p>
              <p>{data.updates.projectID}</p>
            </div>
      </Link>
        )
    )
  )}
  console.log("FilterUpdates", FilterUpdates)

  const loadingUpdates = () => {
    return <h1>Loading.........</h1>
  }

  return (
    <div className='Main-ShowUpdates-Container'>
    <h1>ShowUpdates</h1>
    {UpdatesData ? FilterUpdates() : loadingUpdates()}
    <div className ="ShowUpdates-Forms-Container" >
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={newUpdatesForm.updates.updateDescription}
            name='updateDescription'
            placeholder='update Description'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newUpdatesForm.updates.additions}
            name='additions'
            placeholder='additions'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newUpdatesForm.updates.comments}
            name='comments'
            placeholder='comments'
            onChange={handleChange}
        />
        <input
            type='date'
            value={newUpdatesForm.updates.updatedAt}
            name='updatedAt'
            placeholder='updatedAt'
            onChange={handleChange}
        />
        <input type='submit' value='Create New Updates' />
    </form>
    </div>
    </div>
  )
}

export default ShowUpdates