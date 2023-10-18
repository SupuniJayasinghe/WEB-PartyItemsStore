  import React from 'react'
  import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import TopNav from '../components/TopNav'
  import home from '../components/assets/home.jpg'

  import {FaTimes, FaReact} from 'react'
  import Footer from '../components/Footer'
  import Footerr from '../components/Footerr'

  import Slides from '../components/Slides'
  import NewHeader from '../components/NewHeader'

  import CreateAcc from '../pages/CreateAcc';
  import Login from './Login';
  import { useState } from 'react';




  function Home() {

    const navigate = useNavigate();

  const handleCreateAccClick = () => {
    navigate('/create-account');
  };
  const handleLoginAccClick = () => {
    navigate('/login');
  };

    return (
      <div>    
        <NewHeader onCreateAccClick={handleCreateAccClick} onMyAccountClick={handleLoginAccClick} />
      
        
        <TopNav/>
        <Slides/>
        <Footer/>
        <Footerr/>
      </div>
    )
  };
  export default Home;