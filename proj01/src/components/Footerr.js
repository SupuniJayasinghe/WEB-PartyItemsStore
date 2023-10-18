import React from 'react'
import './Footerr.css'
import img1 from './assets/R (3).jpeg'
import img2 from './assets/OIP (11).jpeg'
import img3 from './assets/R.png'
import img4 from './assets/fb.jpeg'
import img5 from './assets/imo.jpeg'
import img6 from './assets/twitter.jpeg'
import img7 from './assets/phone.jpeg'
import img8 from './assets/email-1.webp'
import img9 from './assets/address.jpeg'
import 'font-awesome/css/font-awesome.min.css';


export default function Footerr() {
  return (
    <div className='footer-items'>
      <div className='footer-left'>
        <h3>Payment Methods</h3>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
      </div>
      <div className='footer-mid1'>
        <h3>Follow Us</h3>
        <img src={img4}/>
        <img src={img5}/>
        <img src={img6}/>
      </div>
      <div className='fotter-mid2'>
        <h3 className='footerhead'>Contact Us</h3>
        <p className='p'><img src={img7} className='img'/>077452542</p>
        <p className='p'><img src={img8} className='img'/>celebr8@gmail.com</p>
        <p className='p'><img src={img9} className='img'/>No.18, Main Street, Embilipitiya</p>    
      </div>
      <div className='fotter-right'>
          <h3 className='footerhead'>Customer Care</h3>
          <ul className='custom-list'>
          <li>
              <i className='fa fa-question-circle'></i>
              <a href='#' className='link'>Help Center</a>
           </li>
          <li>
              <i className='fa fa-envelope'></i>
              <a href='#' className='link'>Contact Us</a>
          </li>
          <li>
              <i className='fa fa-info-circle'></i>
              <a href='#' className='link'>About Us</a>
          </li>
          </ul>
      </div>

    </div>
  )
}
