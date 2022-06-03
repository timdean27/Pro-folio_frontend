import React from 'react'
// import { link } from 'react-router-dom';
import { useState ,useRef } from 'react'
import "../../Styles/Contact.css";
import emailjs from 'emailjs-com';

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
      sendEmail(event)
      setnewContactForm({
        reach_out_to_Dev:{
          yourEmail: '',
          yourName: '',
          yourQuestion: '',
      }
      })
  }




  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('service_a8wgdba', 'template_hc21lj3', e.target, 'WN4Yo7G89VsX0VFAk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    
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




  //onSubmit={() => { sendEmail(); handleSubmit();}}
    return (
    <div className="contact-container">
      <h1 className="contact-header">Contact</h1>
      <section id="contact-section"></section>
      {ContactData ? loadedContacts() : loadingContacts()}
      <form onSubmit={handleSubmit} >
      
        <input
            type='text'
            value={newContactForm.reach_out_to_Dev.yourQuestion}
            name='yourQuestion'
            placeholder='your Question'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newContactForm.reach_out_to_Dev.yourEmail}
            name='yourEmail'
            placeholder='your Email'
            onChange={handleChange}
        />
        <input
            type='text'
            value={newContactForm.reach_out_to_Dev.yourName}
            name='yourName'
            placeholder='your Name'
            onChange={handleChange}
        />
        <input type='submit' value='Send out Email' />
    </form>
      </div>

    )
}

export default ShowContact