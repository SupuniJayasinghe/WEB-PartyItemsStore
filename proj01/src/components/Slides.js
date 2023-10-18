import React, { useState, useEffect } from 'react';
import './Slides.css';
import img1 from './assets/home.jpg';
import img2 from './assets/Home2.jpg';
import img3 from './assets/home3.jpg';
import img4 from './assets/home4.jpg';
import img5 from './assets/home5.jpg';


export default function Slides() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex % 5) + 1);
    }, 2000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []); // Empty dependency array to run the effect once

  return (
    <div className="slideshow-container">
      <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}> 
        <img src={img1} className = 'imgslide' alt="Slide 1" /> 
      </div>

      <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
        <img src={img2} className='imgslide' alt="Slide 2" />
      </div>

      <div className={`mySlides fade ${slideIndex === 3 ? 'active' : ''}`}>
        <img src={img3} className='imgslide' alt="Slide 3" />
      </div>

      <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
        <img src={img4} className='imgslide' alt="Slide 4" />
      </div>

      <div className={`mySlides fade ${slideIndex === 5 ? 'active' : ''}`}>
        <img src={img5} className='imgslide' alt="Slide 5" />
      </div>
    </div>
  );
}
