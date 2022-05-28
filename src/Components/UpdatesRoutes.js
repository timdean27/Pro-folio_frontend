import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowUpdates from '../Pages/Updates/ShowUpdates.js';
import SingleUpdateView from '../Pages/Updates/SingleUpdateView';

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
        const editUpdate = async (Updates, id) => {
          console.log("PRINTING ID FROM UPDATE Updates FETCH", id)
          await fetch(urlUpdates + "/" + id, {
              method: 'put',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(Updates)
          })
          getUpdatesData();
      }
  
  
      const deleteUpdate = async id => {
        await fetch(urlUpdates + "/" + id, {
            method: 'delete',
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
    <Route
          path= '/Updates/:id'
                element={<SingleUpdateView
                    UpdatesData ={UpdatesData} 
                    editUpdate ={editUpdate}
                    deleteUpdate ={deleteUpdate}/>}
          
        />
    <Route path= '/Project/:id'element={<ShowUpdates UpdatesData ={UpdatesData} createUpdates ={createUpdates }/>}/>
    </Routes>
    </div>
  )
}

export default UpdatesRoutes