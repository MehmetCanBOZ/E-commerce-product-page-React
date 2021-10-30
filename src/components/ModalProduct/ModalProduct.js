import React,{useState,useEffect}from 'react';
import './ModalProduct.scss';
import { ThemeContext,useContext } from 'context/useThemeContext';
import useSlider from 'hooks/useSlider';
import { SliderContext } from 'context/useSliderContext';
import nextIcon from '../../assets/img/svg/icon-next.svg'
import previousIcon from '../../assets/img/svg/icon-previous.svg'
import ThumNail from 'components/ThumNail/ThumNail';
import closeIcon from '../../assets/img/svg/icon-close.svg'
const ModalProduct = () => {
  const { handleNext, handlePrevious, handleHover} = useSlider();
  const {sliderdata,sliderIndex} = useContext(SliderContext)
  const {setTheme} = useContext(ThemeContext);

  return (
    <div className="modal-wrapper" >
    <div className="slider">
      <img src={closeIcon} alt="closeIcon" className="close-modal" onClick={() => setTheme(false)}/>
      <div className="slider-upperContainer">
        <div className="slider-previous" onClick={handlePrevious}>
          <img className="nextIcon" src={previousIcon} alt="next-icon" />
        </div>
        <div className="slide-img">
          <img className = "sliderImage" src={sliderdata[sliderIndex]}alt="slider-image" onClick={() => setTheme(true)}/>
        </div>
        <div className="slider-next" onClick={handleNext}>
          <img className="previousIcon" src={nextIcon} alt="previous-icon"  />
        </div>
      </div>
      <ThumNail/>
    </div>
    </div>
  )
}

export default ModalProduct
