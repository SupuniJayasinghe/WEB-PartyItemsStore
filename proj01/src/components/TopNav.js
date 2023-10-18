import React from 'react'
import './TopNav.css'
import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function TopNav() {
  return (
    <div className='topnav'>      
     <div className="Products">
        <button className="products">
          Products <FaCaretDown/>
        </button>
        <div className="products-content">
            <a href="#">Balloons</a>
            <a href="#">Banners</a>
            <a href="#">Tables clothes</a>
        </div>
     </div>
     <div className="Themes">
        <button className="themes">Themes<FaCaretDown/></button>
        <div className="themes-content">
        <div ><Link to="/bday">Birthdays</Link>
    </div>
            <a href="#">Weddings</a>
            <a href="#">Anniversaries</a>
        </div>
     </div>
     <div ><Link to="/">Home</Link>
    </div>
     <a href="#contactUs">Contact Us</a>
     <a href="#aboutUs">About Us</a>

  
    </div>
  )
}
