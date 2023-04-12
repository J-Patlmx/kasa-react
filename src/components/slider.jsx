import {useState} from 'react'

const Slider = ( {slides}) => {

const [posi, setposi] = useState(0);
  const currentLog = posi;
  return (
    <div className="slider">

      <img src={slides[posi]} className="App-logo" alt="logo" />

      <div className="chevrons">{
      (slides.length > 1) && (
        <>
  
                <i className='chevronSlider  fa-solid fa-chevron-left' onClick={() => {posi===0 ? setposi(slides.length-1): setposi(posi-1); }}></i>

                    <span className='slider-Counter'> {[currentLog + 1]} / {slides.length}</span>

                <i className='chevronSlider  fa-solid fa-chevron-right' onClick={() => {posi===slides.length-1 ?setposi(0): setposi(posi+1); }}></i>
    </>)}
      </div>
  </div> 
  );
};

export default Slider;


// TODO 
// if currentLog.pictures >= 1 {
// chevronSlider style={display:"none"}
// } else {};