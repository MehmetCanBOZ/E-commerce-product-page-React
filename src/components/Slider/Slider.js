import React, {useEffect, useState} from 'react';
import "./Slider.scss";

import nextIcon from '../../assets/img/svg/icon-next.svg'
import previousIcon from '../../assets/img/svg/icon-previous.svg'
import { ThemeContext,useContext } from 'context/useThemeContext';
import useSlider from 'hooks/useSlider';
import { SliderContext } from 'context/useSliderContext';
import ThumNail from 'components/ThumNail/ThumNail';

const Slider = () => {
  const { handleNext, handlePrevious} = useSlider();
  const {sliderdata,sliderIndex} = useContext(SliderContext)
  const {setTheme} = useContext(ThemeContext);
  
  return (
    <div className="slider">
      <div className="slider-upperContainer">
        <div className="slider-previous" onClick={handlePrevious}>
          <img  src={previousIcon} alt="next-icon" />
        </div>
        <div className="slide-img">
          <img className = "sliderImage" src={sliderdata[sliderIndex]}alt="slider-image" onClick={() => setTheme(true)}/>
        </div>
        <div className="slider-next" onClick={handleNext}>
          <img  src={nextIcon} alt="previous-icon"  />
        </div>
      </div>
      <ThumNail/>
    </div>
  )
}

export default Slider
