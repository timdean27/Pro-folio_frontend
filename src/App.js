import React, { useState , useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

function App() {
  const [frontEndData, setfrontEndData] = useState([])
  const url = 'http://localhost:4000/home/json'


  async function getData() {
    await fetch(url).then((res) => res.json())
      .then((data) => {
        console.log('data insisde fetch funciton', data)

        setfrontEndData(data)
      }).catch(console.error);
    }

useEffect(() => {
  getData()
}, []);

if(!frontEndData) {
    return( 
      <div>
        <h2>Loading</h2>
      </div>
    )
  }

  return (
    <div className="App">
    <h1>React BackEnd</h1>
    <h1>We have data from backend</h1>
    {frontEndData.map((dataRecived,index) => {
      return (
        <div key={index}>
      <h3>{dataRecived._id}</h3>
      <h1>Marketing Info Obeject</h1>
      <h3>{dataRecived.Marketing_info.coverLetter}</h3>
      <h3>{dataRecived.Marketing_info.gitHub}</h3>
      <h3>{dataRecived.Marketing_info.linkedIn}</h3>
      <h3>{dataRecived.Marketing_info.resume}</h3>
      <h1>Projects Obeject</h1>
      <h2>project Obeject nside Projects</h2>
      <h3>{dataRecived.Projects.project.Description}</h3>
      <h3>{dataRecived.Projects.project.image}</h3>
      <h3>{dataRecived.Projects.project.shortVideo}</h3>
      <h2>updates Obeject nside Projects</h2>
      <h3>{dataRecived.Projects.updates.additions}</h3>
      <h3>{dataRecived.Projects.updates.updateDescription}</h3>
      <h3>{dataRecived.Projects.updates.updatedAt}</h3>
      <h1>reach_out_to_Dev Obeject</h1>
      <h3>{dataRecived.reach_out_to_Dev.yourEmail}</h3>
      <h3>{dataRecived.reach_out_to_Dev.yourName}</h3>
      <h3>{dataRecived.reach_out_to_Dev.yourQuestion}</h3>
      <h1>User Obeject</h1>
      <h3>{dataRecived.user.password}</h3>
      <h3>{dataRecived.user.profilePic}</h3>
      <h3>{dataRecived.user.username}</h3>
      </div>
      )
    })}
    </div>
  );
}

export default App;
