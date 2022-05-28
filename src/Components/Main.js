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
      <div className="ProjUpdates-container">
      <ProjectsRoutes/>
      <UpdatesRoutes/>
      </div>
      <ContactRoutes/>
      <MarketingRoutes/>
      </div>
    );
  }

export default Main


