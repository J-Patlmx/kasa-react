import {useState} from 'react'

const Slider = ( {slides}) => {

const [posi, setposi] = useState(0);// Création d'un état local avec useState pour stocker la position actuelle du slide

  const currentLog = posi;// Récupération de la position actuelle pour l'affichage du compteur de slides
  return (
    <div className="slider">

      <img src={slides[posi]} className="slideShow" alt="logo" />

      <div className="chevrons">{ 
        (slides.length > 1) && (// Vérification s'il y a plus d'un slide pour afficher les flèches de navigation
          <>
    
                  <i className='chevronSlider  fa-solid fa-chevron-left' onClick={() => {posi===0 ? setposi(slides.length-1): setposi(posi-1); }}></i>

                      <span className='slider-Counter'> {[currentLog + 1]} / {slides.length}</span>

                  <i className='chevronSlider  fa-solid fa-chevron-right' onClick={() => {posi===slides.length-1 ?setposi(0): setposi(posi+1); }}></i>
      </>
      )
     }
      </div>
  </div> 
  );
};

export default Slider;
