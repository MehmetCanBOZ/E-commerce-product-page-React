import { SliderContext,useContext } from "context/useSliderContext";

const useSlider = () => {
  const { sliderIndex, setSliderIndex} = useContext(SliderContext);

  const handleNext = () => {
    setSliderIndex(sliderIndex + 1);
  }

  const handlePrevious = () => {
    setSliderIndex(sliderIndex - 1);
  }

  const handleHover = (index) => {
    setSliderIndex(index);
  }

  return {
    handleNext,
    handlePrevious,
    handleHover
  }

}

export default useSlider;