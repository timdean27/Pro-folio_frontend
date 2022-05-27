import React from 'react'
// import { link } from 'react-router-dom';
import { useState } from 'react'
import "./Contact.css";

const ShowContact = ({ContactData, createContact}) => {
    //console.log("props from ShowContact",ContactData)

    const [newContactForm, setnewContactForm] = useState({
      reach_out_to_Dev:{
      yourEmail: '',
      yourName: '',
      yourQuestion: ''
    }
    })

    const handleChange = (event) => {
      setnewContactForm({
          reach_out_to_Dev: {
              ...newContactForm.reach_out_to_Dev,
              [event.target.name]: event.target.value
          }
      })
  }


  const handleSubmit = (event) => {
      event.preventDefault();
      createContact(newContactForm);
      setnewContactForm({
        reach_out_to_Dev:{
          yourEmail: '',
          yourName: '',
          yourQuestion: '',
      }
      })
  }
  
    
    const loadedContacts = () => {
      return ContactData.map((data) => (
              <div key={data._id} className='user'>
                {/* <p>{data.reach_out_to_Dev.yourEmail}</p>
                <p>{data.reach_out_to_Dev.yourName}</p>
                <p>{data.reach_out_to_Dev.yourQuestion}</p> */}
              </div>
          )
      )
    }
    
    const loadingContacts = () => {
      return <h1>Loading.........</h1>
    }
  
    return (
    <div className="contact-container">
      <h1>Contact</h1>
      <section id="contact-section"></section>
      {ContactData ? loadedContacts() : loadingContacts()}
      <form onSubmit={handleSubmit}>

        <input
            type='text'
            value={newContactForm.reach_out_to_Dev.yourQuestion}
            name='yourQuestion'
            placeholder='yourQuestion'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newContactForm.reach_out_to_Dev.yourEmail}
            name='yourEmail'
            placeholder='yourEmail'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newContactForm.reach_out_to_Dev.yourName}
            name='yourName'
            placeholder='yourName'
            onChange={handleChange}
        />
        <input type='submit' value='Create New Contact' />
    </form>
      </div>

    )
}

export default ShowContact