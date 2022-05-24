import React, { useState , useEffect} from 'react'
import ShowUsers from '../Pages/Users/ShowUsers';

const UserRoutes = () => {
    const [userData, setuserData] = useState([])
    const urlUser = 'http://localhost:4000/home/user'

    async function getUserData() {
        await fetch(urlUser).then((res) => res.json())
          .then((data) => {
            console.log('User data insisde fetch funciton', data)
      
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
    </div>
  )
}

export default UserRoutes