//Hero.jsx

import React, { useState, useEffect } from 'react';
import RightArrowIcon from '../../svg icuns/rightArrowIcun.jsx';
import LeftArrowIcon from '../../svg icuns/leftArrowIcun.jsx';
import { SortByDate } from '../sortdata/SortedData.js';
import './Hero.css';

const Hero = () => {
  const updatedShow = SortByDate.slice(0, 5);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, [updatedShow.length]);

  const handleNext = () => {
    setCurrentImage(prevImage => (prevImage + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentImage(prevImage => (prevImage - 1 + 5) % 5);
  };

  return (
    <div className='hero'>
      <div 
        className="imageGallary" 
        style={{ backgroundImage: `url(${updatedShow[currentImage].details.image})` }}
      >
        <div className="arrowsCtr">
          <div className="leftArrowCtr" onClick={handlePrev}>
            <LeftArrowIcon className="Arrows" />
          </div>
          <div className='rightArrowCtr' onClick={handleNext}>
            <RightArrowIcon className="Arrows" />
          </div>
        </div>
       
        <div className="detailsShowCtr">
          <div className="generCtr">
            <span className="gener">{updatedShow[currentImage].details.genre[0]}</span>
            <span className="gener">{updatedShow[currentImage].details.genre[1]}</span>
            <span className="gener">{updatedShow[currentImage].details.genre[2]}</span>
          </div>
          <div className="title">{updatedShow[currentImage].details.title}</div>
          <button className='watchBtn'>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
