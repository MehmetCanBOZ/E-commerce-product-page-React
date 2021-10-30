import { createContext, useState, useEffect, useContext } from "react";

import productImage1 from '../assets/img/image-product-1.jpg';
import productImage2 from '../assets/img/image-product-2.jpg';
import productImage3 from '../assets/img/image-product-3.jpg';
import productImage4 from '../assets/img/image-product-4.jpg';


const SliderContext = createContext();

const SliderContextProvider = ({children}) => {

  const [sliderIndex,setSliderIndex] = useState(0)

  const sliderdata = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
  ]
  
  const showSlides =  () => {
    if (sliderIndex > 3) { setSliderIndex(0)}    
    if (sliderIndex < 0) { setSliderIndex(3)}
  }
  
  useEffect(() => {
    showSlides();
  }, [sliderIndex])

  const data = {
    sliderdata,
    sliderIndex,
    setSliderIndex
  }

  return (
    <SliderContext.Provider value = {data}>
      {children}
    </SliderContext.Provider>
  )
}

export {
  SliderContext,
  SliderContextProvider,
  useContext
}