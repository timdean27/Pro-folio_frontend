import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowMarketing from '../Pages/Marketing/ShowMarketing';

const MarketingRoutes = () => {

const [MarketingData, setMarketingData] = useState([])
const urlMarketing = 'http://localhost:4321/home/marketing'

async function getMarketingData() {
  await fetch(urlMarketing).then((res) => res.json())
    .then((data) => {
      console.log('Marketing Data  insisde fetch funciton', data)

      setMarketingData(data)
    }).catch(console.error);
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
    <ShowMarketing MarketingData ={MarketingData}/>
    </div>
  )
}

export default MarketingRoutes