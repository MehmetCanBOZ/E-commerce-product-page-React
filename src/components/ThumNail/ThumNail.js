import React from 'react'
import productImageThumnail1 from '../../assets/img/image-product-1-thumbnail.jpg'
import productImageThumnail2 from '../../assets/img/image-product-2-thumbnail.jpg'
import productImageThumnail3 from '../../assets/img/image-product-3-thumbnail.jpg'
import productImageThumnail4 from '../../assets/img/image-product-4-thumbnail.jpg';
import useSlider from 'hooks/useSlider';
import { SliderContext,useContext } from 'context/useSliderContext';
import "./ThumNail.scss";
const ThumNail = () => {
  const { handleHover} = useSlider();
  const {sliderIndex} = useContext(SliderContext);
  console.log("sliderIndex" , sliderIndex);
  return (
    <div className="slider-bottomContainer">
      <div className={`${sliderIndex === 0 ? "opacity" : ""}`} onMouseOver={() => handleHover(0) }>
        <img src={productImageThumnail1} />
      </div>
      <div className={`${sliderIndex === 1 ? "opacity" : ""}`}  onMouseOver={() => handleHover(1)}>
        <img src={productImageThumnail2}/>
      </div>
      <div className={`${sliderIndex === 2 ? "opacity" : ""}`}  onMouseOver={() => handleHover(2) }>
        <img src={productImageThumnail3}/>
      </div>
      <div className={`${sliderIndex === 3 ? "opacity" : ""}`}  onMouseOver={() => handleHover(3) }>
        <img src={productImageThumnail4}/>
      </div>
  </div>
  )
}

export default ThumNail
