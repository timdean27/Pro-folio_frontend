import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowUpdates from '../Pages/Updates/ShowUpdates.js';

const UpdatesRoutes = () => {

    const [UpdatesData, setUpdatesData] = useState([])
    const urlUpdates = 'http://localhost:4000/home/updates'

    async function getUpdatesData() {
        await fetch(urlUpdates).then((res) => res.json())
          .then((data) => {
            //console.log(' Updates data insisde fetch funciton', data)
      
            setUpdatesData(data)
          }).catch(console.error);
        }


        const createUpdates = async (newUpdates) => {
            await fetch(urlUpdates, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUpdates)
            })
            getUpdatesData();
        }

        useEffect(() => {
            getUpdatesData()
            }, []);

            if(!UpdatesData) {
                return( 
                  <div>
                    <h2>Loading</h2>
                  </div>
                )
              }

  return (
    <div className="updatings">
    <Routes>
    <Route path= '/Project/*'element={<ShowUpdates UpdatesData ={UpdatesData} createUpdates ={createUpdates }/>}/>
    </Routes>
    </div>
  )
}

export default UpdatesRoutes