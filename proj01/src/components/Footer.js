import React from 'react'
import './Footer.css'
import image1 from './assets/BestQuality.jpeg'
import image2 from './assets/BestPrice.jpeg'
import image3 from './assets/QuickDelivery.jpeg'
import image4 from './assets/BestSeller.jpg'

export default function Footer() {
  return (
    <div className='footer-nav'>
      <p><img src= {image1}/>Best Quality</p>
      <p><img src= {image2}/>Best Price</p>
      <p><img src= {image3}/>Quick Delivery</p>
      <p><img src= {image4}/>Best Sellers</p>
   </div>
  )
}
