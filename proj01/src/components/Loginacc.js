import React from 'react'
import './Loginacc.css'
import img from './assets/create.jpg'
import img2 from './assets/logo.png'

export default function Loginacc({handleLogin}) {
  return (
    <div className='login'>
        <div className='form'>
            <img src={img2} className='logo'></img>
            <div className='form-elements'>
                <h2 className='logintitle'>User Login</h2>
                <input className= 'input' type="text" placeholder="Email" name="email" required/>
                <input className= 'input' type="password" placeholder="Password" name="password" required/>
                <a href='#' className='fpass'>Forgot Password</a>
                <button className='loginbtn' onClick={handleLogin} >Log In</button>
            </div>
        </div>
        <div className='login-page-img'>
          <img src={img} className='logimg'></img>
        </div>
    </div>
  )
}
