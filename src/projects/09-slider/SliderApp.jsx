/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import SliderComp from './SliderComp'
import Title from "../components/Title"


export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(0);

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  }

  let bgColor;
  let textColor;

  if (slideValue < 25){
    bgColor = "red";
    textColor = "white";
  }
  if(slideValue > 25 && slideValue <= 50){
    bgColor = "blue";
  }
  if(slideValue > 51 && slideValue <= 75){
    bgColor = "green";
    textColor = "white";
  }
  if(slideValue > 75){
    bgColor = "orange";
    textColor = "white";
  }
  if(slideValue == 100) {
    bgColor = "red"; 
  }

  return (
    <div className='conatiner text-center'>
      <Title text={"Slide to grow"} />
      <SliderComp setValue={slideValue} handleInput={handleSliderValueChange} bgColor={bgColor} textColor={textColor} />
    </div>
  )
}
