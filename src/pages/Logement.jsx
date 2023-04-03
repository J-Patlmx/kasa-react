import Hero from '../assets/imgHeroapropos.png'
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
    <div className="hero">
   <> <img src={Hero} className="App-logo" alt="logo" />
   
    <div className="chevrons">
    <span><i className='chevronSlider fa-solid fa-chevron-left'></i></span>
      <span><i className='chevronSlider fa-solid fa-chevron-right'></i></span>
    </div>
    </>
  </div>
<div className="logement-page__title">


      <div className="logement-page__subtitle">
      <p className='cercle'>cercle</p>
        <>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        </>
      </div>

</div>
<div className="collapsCollection">
    <div className='collapse-Logement'>
            {logementData.map(({ title, content }, index) => (
                <Collaps title={title} content={content} key={index} />                    
            ))}</div>
</div>

</>
    );
  }
  
  export default Logement;