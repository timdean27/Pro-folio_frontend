import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowProjects from '../Pages/Projects/ShowProjects';

const ProjectsRoutes = () => {

    const [ProjectsData, setProjectsData] = useState([])
    const urlProjects = 'http://localhost:4000/home/projects'

    async function getProjectsData() {
        await fetch(urlProjects).then((res) => res.json())
          .then((data) => {
            //console.log(' Projects data insisde fetch funciton', data)
      
            setProjectsData(data)
          }).catch(console.error);
        }

        useEffect(() => {
            getProjectsData()
            }, []);

            if(!ProjectsData) {
                return( 
                  <div>
                    <h2>Loading</h2>
                  </div>
                )
              }

  return (
    <div>
    <Routes>
    <Route path= '/'element={<ShowProjects ProjectsData ={ProjectsData}/>}/>
    </Routes>
    </div>
  )
}

export default ProjectsRoutes