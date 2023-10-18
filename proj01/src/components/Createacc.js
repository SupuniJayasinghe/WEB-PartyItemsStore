import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Createacc.css';
import img from './assets/create.jpg';
import img2 from './assets/logo.png';

export default function Createacc({ onSignUp }) {

  return (
    <div className='createaccount'>
      <div className='form'>
        <img src={img2} className='logo' alt="Logo" />
        <div className='felements'>
          <h2 className='createTitle'>Create Account</h2>
          <input className='input' type="text" placeholder="First Name" name="fname" required />
          <input className='input' type="text" placeholder="Last Name" name="lname" required />
          <input className='input' type="text" placeholder="Email" name="email" required />
          <input className='input' type="password" placeholder="Password" name="password" required />
          <input className='input' type="text" placeholder="Address" name="address" required />
          <input className='input' type="text" placeholder="Phone" name="phone" required />
          <button className='signup' onClick={onSignUp}>
            Sign Up
          </button>
        </div>
      </div>
      <div className='image-create'>
        <img src={img} className='create-account-img' alt="Create Account Image" />
      </div>
    </div>
  );
}
