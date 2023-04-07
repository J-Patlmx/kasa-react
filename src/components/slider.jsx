import {useState} from 'react'

const Slider = ( {slides}) => {

const [posi, setposi] = useState(0);
  
  return (
    <div className="slider">
     
      <img src={slides[posi]} className="App-logo" alt="logo" />

      <div className="chevrons">
         <i className='chevronSlider fa-solid fa-chevron-left' onClick={() => {posi===0 ? setposi(slides.length-1): setposi(posi-1); }}></i>
         <i className='chevronSlider fa-solid fa-chevron-right' onClick={() => {posi===slides.length-1 ?setposi(0): setposi(posi+1); }}></i>
      </div>
  </div> 
  );
};

export default Slider;