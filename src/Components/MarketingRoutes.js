import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowMarketing from '../Pages/Marketing/ShowMarketing';
// test commit
const MarketingRoutes = () => {

const [MarketingData, setMarketingData] = useState([])
const urlMarketing = 'http://localhost:4000/home/marketing'

async function getMarketingData() {
  await fetch(urlMarketing).then((res) => res.json())
    .then((data) => {
      console.log('Marketing Data  insisde fetch funciton', data)

      setMarketingData(data)
    }).catch(console.error);
  }

  const createMarketing = async (newMarketing) => {
    await fetch(urlMarketing, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMarketing)
    })
    getMarketingData();

  }
  
    useEffect(() => {

      getMarketingData()
      }, []);
   
      if(!MarketingData) {
          return( 
            <div>
              <h2>Loading</h2>
            </div>
          )
        } 


  return (
    <div>
    <ShowMarketing MarketingData ={MarketingData} createMarketing={createMarketing}/>
    </div>
  )
}

export default MarketingRoutes