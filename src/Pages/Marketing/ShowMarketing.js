
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'
const ShowMarketing = ({MarketingData, createMarketing}) => {
    console.log('props from ShowContact',MarketingData)

    import React from 'react'
    import { useState } from 'react'

const ShowMarketing = ({MarketingData, createMarketing}) => {
    console.log("props from ShowContact",MarketingData)


    const [newMarketingForm, setnewMarketingForm] = useState({
      Marketing_info: {
        gitHub: '',
        linkedIn: '',
        resume: '',
        coverLetter: '',
      }
    })


    const handleChange = (event) => {
      setnewMarketingForm({
          Marketing_info: {
              ...newMarketingForm.Marketing_info,
              [event.target.name]: event.target.value
          }
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createMarketing(newMarketingForm);
    setnewMarketingForm({
      Marketing_info:{
        gitHub: '',
        linkedIn: '',
        resume: '',
        coverLetter: '',
      }
    })
  }

  }
    const loadedMarketingData = () => {
      return MarketingData.map((data) => (
              <div key={data._id} className='user'>
                <p>{data.Marketing_info.coverLetter}</p>
                <p>{data.Marketing_info.gitHub}</p>
                <p>{data.Marketing_info.linkedIn}</p>
                <p>{data.Marketing_info.resume}</p>
              </div>
          )
      )
    }
    const loadingMarketingData = () => {
      return <h1>Loading.........</h1>
    }
    return (
      <div>
      <h1>ShowMarketing</h1>
      {MarketingData ? loadedMarketingData() : loadingMarketingData()}
      <form onSubmit={handleSubmit}>

        <input 

            type='text'
            value={newMarketingForm.Marketing_info.gitHub}
            name='gitHub'
            placeholder='gitHub'
            onChange={handleChange}
        />
         <input 
            type='text'
            value={newMarketingForm.Marketing_info.linkedIn}
            name='linkedIn'
            placeholder='linkedIn'
            onChange={handleChange}
        />
              
         <input 
            type='text'
            value={newMarketingForm.Marketing_info.resume}
            name='resume'
            placeholder='resume'
            onChange={handleChange}
        />

         <input 
            type='text'
            value={newMarketingForm.Marketing_info.coverLetter}
            name='coverLetter'
            placeholder='coverLetter'
            onChange={handleChange}
        />
        <input type='submit' value='Create New Marketing' />
        </form>
      </div>
    )
}
export default ShowMarketing