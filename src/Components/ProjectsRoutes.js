import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowProjects from '../Pages/Projects/ShowProjects';
import SingleProjectView from '../Pages/Projects/SingleProjectView';

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

        const createProject = async (newProject) => {
          await fetch(urlProjects, {
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newProject)
          })
          getProjectsData();
      }

      const updateProject = async (Project, id) => {
        console.log("PRINTING ID FROM UPDATE PROJECT FETCH", id)
        await fetch(urlProjects + "/" + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Project)
        })
        getProjectsData();
    }


    const deleteProject = async id => {
      await fetch(urlProjects + "/" + id, {
          method: 'delete',
      })
      // Update the list
      getProjectsData();
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
    <Route 
    path= '/Project/:id'
          element={<SingleProjectView
              ProjectsData ={ProjectsData} 
              updateProject ={updateProject}
              deleteProject ={deleteProject}/>}
          
        />
      
    <Route path= '/'element={
      <ShowProjects 
      ProjectsData ={ProjectsData} 
      createProject={createProject}/>
          }/>
    </Routes>
    </div>
  )
}

export default ProjectsRoutes