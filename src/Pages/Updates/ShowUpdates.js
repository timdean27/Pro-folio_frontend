import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'

const ShowUpdates = ({UpdatesData,createUpdates}) => {

  //console.log("props from ShowUpdatess",UpdatesData)
    const [newUpdatesForm, setnewUpdatesForm] = useState({
      updates:{
        updateDescription: '',
        additions: '',
        updatedAt: Date
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
            updatedAt: Date
      }
      })
  }


  const loadedUpdatess = () => {
    return UpdatesData.map((data) => (
            <div key={data._id} className='Updates'>
              <p>{data.updates.updateDescription}</p>
              <p>{data.updates.additions}</p>
              <p>{data.updates.updatedAt}</p>
            </div>
        )
    )
  }
  
  const loadingUpdatess = () => {
    return <h1>Loading.........</h1>
  }

  return (
    <div>
    <h1>ShowUpdatess</h1>
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