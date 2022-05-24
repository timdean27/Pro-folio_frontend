import React from 'react'

const ShowMarketing = ({MarketingData}) => {
    console.log("props from ShowContact",MarketingData)

    const loadedMarketingData = () => {
      return MarketingData.map((data) => (
              <div key={data._id} className='user'>
                <p>{data.Marketing_info.coverLetter}</p>
                <p>{data.Marketing_info.gitHub}</p>
                <p>{data.Marketing_info.linkedIn}</p>
                <p>{data.Marketing_info.resume}</p>
              </div>
          )
      )
    }
    
    const loadingMarketingData = () => {
      return <h1>Loading.........</h1>
    }
  
    return (
      <div>
      <h1>ShowMarketing</h1>
      {MarketingData ? loadedMarketingData() : loadingMarketingData()}
      </div>
    )
}

export default ShowMarketing