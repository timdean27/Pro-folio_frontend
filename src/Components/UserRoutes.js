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
            //console.log('User data insisde fetch funciton', data)
      
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
        // make post request to create People
        await fetch(urlUser + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        // Rerender the list of people
        getUserData();
    }

    const deleteUser = async id => {
        // make post request to create People
        await fetch(urlUser + id, {
            method: 'delete',
        })
        // Update the list
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
    <div>
    <ShowUsers 
    userData={userData}
    createUser={createUser}
    />
    <Routes>
            <Route 
                path= '/:id'
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