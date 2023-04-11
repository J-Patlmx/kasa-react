import {useState} from 'react'

const Slider = ( {slides}) => {

const [posi, setposi] = useState(0);
  const currentLog = posi;
  return (
    <div className="slider">

      <img src={slides[posi]} className="App-logo" alt="logo" />

      <div className="chevrons">
          <button className='chevronSlider '>
                <i className='fa-solid fa-chevron-left' onClick={() => {posi===0 ? setposi(slides.length-1): setposi(posi-1); }}></i>
          </button>

                    <span className='slider-Counter'> {[currentLog + 1]} / {slides.length}</span>

          <button className='chevronSlider'>
                <i className='fa-solid fa-chevron-right' onClick={() => {posi===slides.length-1 ?setposi(0): setposi(posi+1); }}></i>
          </button>
      </div>
  </div> 
  );
};

export default Slider;