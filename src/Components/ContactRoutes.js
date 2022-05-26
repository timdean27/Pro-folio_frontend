import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowContact from '../Pages/Contact/ShowContact';
import "../Contact.css";


const ContactRoutes = () => {
    const [ContactData, setContactData] = useState([])
    const urlContact = 'http://localhost:4000/home/contact'

    async function getContactData() {
        await fetch(urlContact).then((res) => res.json())
          .then((data) => {
            //console.log('Contact data insisde fetch funciton', data)
      
            setContactData(data)
          }).catch(console.error);
        }

        const createContact = async (newContact) => {
          await fetch(urlContact, {
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newContact)
          })
          getContactData();
      }

        useEffect(() => {
            getContactData()

            }, []);

            if(!ContactData) {
                return( 
                  <div>
                    <h2>Loading</h2>
                  </div>
                )
              }

  return (
    <div className="contactbody">
    <Routes>
    <Route path= '/'element={<ShowContact ContactData ={ContactData} createContact={createContact}/>}/>
    </Routes>
    </div>
    
  )
}




export default ContactRoutes