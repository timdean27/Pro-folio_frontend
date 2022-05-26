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


  const loadedUpdatess = () => {
    return UpdatesData.map((data) => (
            <div key={data._id} className='Updates'>
              <p>{data.updates.updateDescription}</p>
              <p>{data.updates.additions}</p>
              <p>{data.updates.comments}</p>
              <p>{data.updates.updatedAt}</p>
              <p>{data.updates.projectID}</p>
            </div>
        )
    )
  }
  
  const loadingUpdatess = () => {
    return <h1>Loading.........</h1>
  }

  return (
    <div>
    <h1>ShowUpdates</h1>
    {UpdatesData ? loadedUpdatess() : loadingUpdatess()}
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
  )
}

export default ShowUpdates