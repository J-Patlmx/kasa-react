// import Hero from '../assets/imgHeroapropos.png'
// import React, {useState, useEffect} from 'react';
 import Collaps from '../components/collapsLogement';
// import Slider from '../components/slider';


import React from "react";
function Logement() {
  // const [logements, setlogements] = useState([]);

  // useEffect(() => {
  //     fetch('../../datas/logements.json'
  //         ,{
  //             headers : {
  //                 'Content-Type': 'application/json',
  //                 'Accept': 'application/json'
  //             }
  //         }
  //         )
  //         .then(function(response){
  //         return response.json();
  //         }).then(function(myJson) {
  //         setlogements( myJson);
  //         // console.log(logements)
  //         })
  // }, []);

  const Hero = 'https://source.unsplash.com/random'

 const logementData = [
        {
            title:'Description',
            content:"Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer 'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus.Logement parfait pour les voyageurs en sol et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
        },
        {
            title:'Equipements',
            content:"Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"},

    ];

    return (
<>
    <div className="slider">
    <> 
      <img src={Hero} className="App-logo" alt="logo" />

      <div className="chevrons">
         <i className='chevronSlider fa-solid fa-chevron-left'></i>
         <i className='chevronSlider fa-solid fa-chevron-right'></i>
      </div>

    </>

  </div>  
            <div className="logement-page">


                <div className="logement-page__title">

                      <div className="logementNameLoc">
                            <h1 className='logementTittle'>Duplex en haut de l'escalier</h1>
                            <p className='Localisation'>Tout en haut de l'escalier </p>
                      </div>

                      <div className="tags">
                                <div className="tag"> tag 1</div>
                                <div className="tag"> tag 2</div>
                                <div className="tag"> tag 3</div>
                      </div>

                </div>
              <div className="logement-page__subtitle">
                    <div className='host'>
                          <p className='name'>Jean-titi Kudo</p>
                          <p className='picture'></p>
                    </div>

                    <div className='rating'>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                    </div>
              </div>

            </div>



{/*  */}


{/* TODO fixer le probleme de positionement _logement.scss */}

<div className="CollapseRegroupement">
    <div className='collapse-Logement'>
            {logementData.map(({ title, content }, index) => (
                <Collaps title={title} content={content} key={index} />
            ))}
    </div>
 
</div> 

</>
    );
  }







  export default Logement;