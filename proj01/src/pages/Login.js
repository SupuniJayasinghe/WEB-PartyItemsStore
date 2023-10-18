import React from 'react'
import Loginacc from '../components/Loginacc'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';

import Footerr from '../components/Footerr'

export default function Login() {

  const navigate = useNavigate();

  const OnClickLogin = () => {
    console.log('Clicked Log In');
    navigate('/');  };
  return (
    <div>
      <Loginacc handleLogin={OnClickLogin}/>
      <Footer/>
      <Footerr/>
    </div>
  )
}
