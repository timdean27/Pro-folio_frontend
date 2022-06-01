import React from 'react'
import { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'


const SingleUpdateView = ({UpdatesData , editUpdate , deleteUpdate}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log("THIS IS THE ID from Updates",id)
    let UpdateCurrent = UpdatesData.find(updates => updates._id === id)
    const [editUpdateState, setUpdateState] = useState(UpdateCurrent)
    // console.log("UpdateCurrent", UpdateCurrent.updates)

    const handleChange = (event) => {
        setUpdateState({
            updates: {
                ...editUpdateState.updates,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        editUpdate(editUpdateState, id)
        navigate(`/Project/${UpdateCurrent.updates.projectID}`)
        //navigate('/')
    }

    const DeleteUpdateFunc = () => {
        deleteUpdate(id)
        navigate(`/Project/${UpdateCurrent.updates.projectID}`)
        navigate('/')
      }

    const loadedUpdates = () => {
        return (
                <div key={UpdateCurrent._id} className='SingleUpdate-items-Container'>
                <p>{UpdateCurrent.updates.updateDescription}</p>
                <p>{UpdateCurrent.updates.additions}</p>  
                <p>{UpdateCurrent.updates.comments}</p>
                </div>
            )
      }
      
      const loadingUpdates = () => {
        return <h1>Loading.........</h1>
      }

  return (
    <div className='Main-SingleUpdate-Container'>
    <h1>Single Update View ID# :{UpdateCurrent._id}</h1>
    {UpdatesData ? loadedUpdates() : loadingUpdates()}
    <div className='SingleUpdate-Forms-Container'>
    <form onSubmit={handleSubmit}>
    <input
        type='text'
        value={editUpdateState.updates.updateDescription}
        name='updateDescription'
        placeholder='updateDescription'
        onChange={handleChange}
    />
    <input
        type='text'
        value={editUpdateState.updates.additions}
        name='additions'
        placeholder='additions'
        onChange={handleChange}
    />
    <input
        type='text'
        value={editUpdateState.updates.comments}
        name='comments'
        placeholder='comments'
        onChange={handleChange}
    />
    <input
            type='date'
            value={editUpdateState.updates.date_Of_Update}
            name='date_Of_Update'
            placeholder='date_Of_Update'
            onChange={handleChange}
        />
    <input type='submit' value='Edit Update' />
    </form>
    </div>
    <button className="SinglePoj-deleteBTN" onClick={DeleteUpdateFunc}>
            DELETE This Update
            <br></br>
            {UpdateCurrent._id}
          </button>
    </div>
  )
}

export default SingleUpdateView