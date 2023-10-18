import React from 'react'
import './NewHeader.css'
import logo1 from './assets/logo.png';
import cart from './assets/cart.jpeg';
import { Link } from 'react-router-dom';
import CreateAcc from '../pages/CreateAcc';


export default function NewHeader({onCreateAccClick,onMyAccountClick}) {
  return (
    <div className='header'>
        <img className='logo1' src={logo1}></img>
        <div className='search'>
              <input type='text' placeholder='Enter Keywords to Search..' name='search' />
              <button className='searchbtn'>Search</button>        
        </div>

        <div className='header-btns'>
            <div className='btns'> 
              <button onClick={onCreateAccClick}>Create Account</button>
              <button onClick={onMyAccountClick}>My Account</button>
        
            </div>
            <div className='additional-content'>
              <img src={cart} className='cart' />
              <div className='shopping-cart'>
                <p>SHOPPING CART</p>
                <p>0 Items 0.00 LKR</p>
              </div>
            </div>
        </div>

    </div>
  )
}
