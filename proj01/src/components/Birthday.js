import React from 'react'
import './Birthday.css'
import img1 from './assets/hats.jpg'
import img2 from './assets/cups.jpeg'
import img3 from './assets/Blowouts.jpg'
import img4 from './assets/balloons.jpeg'
import img5 from './assets/waterb.jpeg'
import img6 from './assets/PaperPlates.jpg'
import img7 from './assets/helium.jpeg'
import img8 from './assets/banners.jpeg'



export default function Birthday() {
  return (
    <div className='items'>
        <h2 className='title'>Birthday Party Items</h2>
      <div className='row'>
        <div className='content'>
            <img src={img1} className='hats'></img>
            <div className='details'>
                <h3>Hats</h3>
                <p>200 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

        <div className='content'>
            <img src={img2} className='cups'></img>
            <div className='details'>
                <h3>Cups</h3>
                <p>150 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

        <div className='content'>
            <img src={img3} className='blowouts'></img>
            <div className='details'>
                <h3>Blowouts</h3>
                <p>20 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

        <div className='content'>
            <img src={img4} className='balloons'></img>
            <div className='details'>
                <h3>Balloons</h3>
                <p>10 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

      </div>

      <div className='row'>
        <div className='content'>
            <img src={img5} className='ballon'></img>
            <div className='details'>
                <h3>Water Ballons</h3>
                <p>200 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

        <div className='content'>
            <img src={img6} className='paperplates'></img>
            <div className='details'>
                <h3>Paper Plates</h3>
                <p>20 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

        <div className='content'>
            <img src={img7} className='blowouts'></img>
            <div className='details'>
                <h3>Helium Spiral Balloons</h3>
                <p>30 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

        <div className='content'>
            <img src={img8} className='Banners'></img>
            <div className='details'>
                <h3>Bannerss</h3>
                <p>50 LKR</p>
                <a href="#" >Add Your Review</a>
            </div>
            <button>Add to Cart</button>
        </div>

      </div>
    </div>
  )
}
