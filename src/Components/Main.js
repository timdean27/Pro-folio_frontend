import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import UserRoutes from './UserRoutes';
import ProjectsRoutes from './ProjectsRoutes';
import ContactRoutes from './ContactRoutes';
import MarketingRoutes from './MarketingRoutes';
import UpdatesRoutes from './UpdatesRoutes';
import "../Styles/ProjUpdate.css"




const Main = () => {

        
    return (
      <div className="App">
          <nav className="Nav-option1">
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Marketing">Marketing</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>

            <div className="User-HomePAGE-Div" id="Home">
            <UserRoutes/>
            </div>

          <br></br>
        <div id="Projects" className="ProjUpdates-container">
        <ProjectsRoutes/>
        <UpdatesRoutes/>
        </div>

          <div id="Marketing">
            <MarketingRoutes/>
          </div>

        <div id="Contact">
            <ContactRoutes/>
        </div>

      </div>
    );
  }

export default Main


