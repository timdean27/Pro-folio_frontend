import React from 'react'

const ShowContact = ({ContactData}) => {
    console.log("props from ShowContact",ContactData)

    const loadedUsers = () => {
      return ContactData.map((data) => (
              <div key={data._id} className='user'>
                <p>{data.reach_out_to_Dev.yourEmail}</p>
                <p>{data.reach_out_to_Dev.yourName}</p>
                <p>{data.reach_out_to_Dev.yourQuestion}</p>
              </div>
          )
      )
    }
    
    const loadingUsers = () => {
      return <h1>Loading.........</h1>
    }
  
    return (
      <div>
      <h1>ShowContact</h1>
      {ContactData ? loadedUsers() : loadingUsers()}
      </div>
    )
}

export default ShowContact