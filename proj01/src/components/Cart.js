import React from 'react'
import './Cart.css'
import img1 from './assets/cartp.jpeg'
import logoimg from './assets/logo.png'
import img3 from './assets/cart.jpeg'

export default function Cart() {
  return (
    <div className='cart'>
      <div className='itemsbuy'>
        <img src={logoimg} className= 'logo' alt='logo'></img>
        <div className='carttitle'>
            <img src={img3} alt='cart1'></img>
            <h3 className='ctitle'>SHOPPING CART</h3>
        </div>
         
        
      
      </div> 
      <div>
        <img src={img1} className='cart-img'></img>
      </div>
      
    </div>
  )
}
