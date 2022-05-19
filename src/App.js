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
      <h3>{dataRecived.name}</h3>
      <h3>{dataRecived.img}</h3>
      <h3>{dataRecived.title}</h3>
      </div>
      )
    })}
    </div>
  );
}

export default App;
