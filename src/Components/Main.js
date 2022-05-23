import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowProjectCards from './ProjectsDisplay/ShowProjectCards';

const Main = () => {
    const [frontEndData, setfrontEndData] = useState([])
    const url = 'http://localhost:4000/home/json'
  
// get all data from backend 
    async function getData() {
      await fetch(url).then((res) => res.json())
        .then((data) => {
          console.log('data insisde fetch funciton', data)
  
          setfrontEndData(data)
        }).catch(console.error);
      }
  

  
// make post request
    const createProject = async (project) => {
        await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        getData();
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
      {frontEndData.map((dataRecived) => {
        return (
        <div key={dataRecived._id}>
        <h3>{dataRecived._id}</h3>
        <h1>Marketing Info Obeject</h1>
        <h3>{dataRecived.Marketing_info.coverLetter}</h3>
        <h3>{dataRecived.Marketing_info.gitHub}</h3>
        <h3>{dataRecived.Marketing_info.linkedIn}</h3>
        <h3>{dataRecived.Marketing_info.resume}</h3>
        <h1>Projects Obeject</h1>
        <h2>updates Obeject inside Projects</h2>
        <h3>{dataRecived.Projects.updates.additions}</h3>
        <h3>{dataRecived.Projects.updates.updateDiscription}</h3>
        <h3>{dataRecived.Projects.updates.updatedAt}</h3>
        <h1>reach_out_to_Dev Obeject</h1>
        <h3>{dataRecived.reach_out_to_Dev.yourEmail}</h3>
        <h3>{dataRecived.reach_out_to_Dev.yourName}</h3>
        <h3>{dataRecived.reach_out_to_Dev.yourQuestion}</h3>
        <h1>User Obeject</h1>
        <h3>{dataRecived.user.password}</h3>
        <h3>{dataRecived.reach_out_to_Dev.yourName}</h3>
        <h3>{dataRecived.reach_out_to_Dev.yourQuestion}</h3>
        <Routes>
        <Route exact path='/' 
            element={<ShowProjectCards
                projectsData={frontEndData}
                createProject={createProject}
            />} />
    </Routes>
        </div>
        )
      })}

     
      </div>
    );
  }

export default Main


