import React, { useState , useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import ShowUsers from '../Pages/Users/ShowUsers';
import EditUsers from '../Pages/Users/EditUsers';

const UserRoutes = () => {
    const [userData, setuserData] = useState([])
    const urlUser = 'http://localhost:4000/home/user'

    async function getUserData() {
        await fetch(urlUser).then((res) => res.json())
          .then((data) => {
      
            setuserData(data)
          }).catch(console.error);
        }

        const createUser = async (newUser) => {
            await fetch(urlUser, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            })
            getUserData();
        }

  const updateUser = async (user, id) => {
        await fetch(urlUser + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        getUserData();
    }

    const deleteUser = async id => {
        await fetch(urlUser + id, {
            method: 'delete',
        })
        getUserData();
    }

        useEffect(() => {
            getUserData()

            }, []);
         
            if(!userData) {
                return( 
                  <div>
                    <h2>Loading</h2>
                  </div>
                )
              }

  return (
    <div className="userbody">
    <Routes>
    <Route 
          path= '/'
                element={<ShowUsers 
                  userData={userData}
                  createUser={createUser}
                
                />}
              />
    
    
            <Route 
                path= '/user/:id'
                element={<EditUsers 
                userData={userData} 
                updateUser={updateUser} 
                deleteUser={deleteUser} 
            />}
                />
        </Routes>
    </div>
  )
}

export default UserRoutes