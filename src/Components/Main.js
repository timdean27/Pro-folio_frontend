import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import UserRoutes from './UserRoutes';
import ProjectsRoutes from './ProjectsRoutes';
import ContactRoutes from './ContactRoutes';
import MarketingRoutes from './MarketingRoutes';
import UpdatesRoutes from './UpdatesRoutes';
import "../ProjUpdate.css"



const Main = () => {

        
    return (
      <div className="App">
      <UserRoutes/>
      <ProjectsRoutes/>
      <ContactRoutes/>
      <MarketingRoutes/>
      <UpdatesRoutes/>
      </div>
    );
  }

export default Main


