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
            <li><a href="#Home-Scroll">Home</a></li>
            <li><a href="#About-Scroll">About</a></li>
            <li><a href="#Projects-Scroll">Projects</a></li>
            <li><a href="#Marketing-Scroll">Marketing</a></li>
            <li><a href="#Contact-Scroll">Contact</a></li>
          </ul>
        </nav>
        

            <div  id="Home-Scroll">
            <UserRoutes/>
            </div>

          <br></br>

        <div id="Projects-Scroll" className="ProjUpdates-container">
        <ProjectsRoutes/>
        <UpdatesRoutes/>
        </div>

          <div id="Marketing-Scroll">
            <MarketingRoutes/>
          </div>

        <div id="Contact-Scroll">
            <ContactRoutes/>
        </div>

      </div>
    );
  }

export default Main


