// import Collaps from '../components/collapsLogement';
import Collaps from '../components/Collaps';
import Slider from '../components/slider';
import  {React, useState, useEffect} from 'react';

import { useParams} from 'react-router-dom';

function Logement() {

const [CurrentLog, setCurrentLog] = useState(null);

const params = useParams();

  useEffect(() => {
      fetch('../../datas/logements.json',{
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      }
      )
      .then(function(response){ return response.json();})
      .then(function(logs) {        
        setCurrentLog(logs.find((log) => log.id === params.id) ? logs.find((log) => log.id === params.id) : ' not exist' )       
    })
      
  }, [params.id]); 

//   console.log(CurrentLog)
 
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
            {CurrentLog != null ? (
            <>      
                <Slider slides ={CurrentLog.pictures}/>

                <div className="logement-page">
                    <div className="logement-page__title">
                            <div className="logementNameLoc">
                                <h1 className='logementTittle'>{CurrentLog.title}</h1>
                                <p className='Localisation'>{CurrentLog.location}</p>
                            </div>

                            <div className="tags"> 
                            {CurrentLog.tags.map((tag, index) => <div className="tag" key={index}>{tag}</div>)}
                            </div> 
                    </div>
                    <div className="logement-page__subtitle">
                        <div className='host'>
                            <p className='name'>{CurrentLog?.host.name}</p>
                            <img src={CurrentLog?.host.picture} className="picture" alt="host_photo" />                     
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
                <div className='collapsCollection CollapseRegroupement'>                    
                        {logementData.map(({ title, content }, index) => (
                            <div key={index}>
                                <Collaps title={title} content={content} />
                            </div>
                        ))}                        
                </div>
            </>
        ):(<></>)}
    </>
    );
  }







  export default Logement;



// import Collaps from '../components/collapsLogement';
      // import  React from 'react'
      // // import React, {useState, useEffect} from 'react';


      // function Logement() {

      //       const Hero = 'https://source.unsplash.com/random'

      //       const logementData = [
      //             {
      //             title:'Description',
      //             content:"Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer 'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus.Logement parfait pour les voyageurs en sol et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
      //             },
      //             {
      //             title:'Equipements',
      //             content:"Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"},

      //       ];

      //       return (
      //       <>
      //       <>
      //       <div className="slider">
            
      //       <img src={Hero} className="App-logo" alt="logo" />
                  
      //       {/* {Slideshow.map(({ id, title, cover }) =>
      //       <Slideshow id={id} title= {title} cover = {cover} key={id}/>   
      //       )}  */}
      //             <div className="chevrons">
      //             <i className='chevronSlider fa-solid fa-chevron-left'></i>
      //             <i className='chevronSlider fa-solid fa-chevron-right'></i>
      //             </div>
      //       </div>
      //       </>

      // {/* </div>   */}
      //             <div className="logement-page">


      //                   <div className="logement-page__title">

      //                         <div className="logementNameLoc">
      //                               <h1 className='logementTittle'>Duplex en haut de l'escalier</h1>
      //                               <p className='Localisation'>Tout en haut de l'escalier </p>
      //                         </div>

      //                         <div className="tags">
      //                                     <li className="tag"> Canal Saint Martin</li>
      //                                     <li className="tag"> tag 2</li>
      //                                     <li className="tag"> tag 3</li>
      //                         </div>

      //                   </div>
      //                   <div className="logement-page__subtitle">
      //                         <div className='host'>
      //                               <p className='name'>Jean-titi Kudo</p>
      //                               <img className='picture' url='https://source.unsplash.com/random' alt=''/>
      //                         </div>

      //                         <div className='rating'>
      //                               <i className="fa-solid fa-star"></i>
      //                               <i className="fa-solid fa-star"></i>
      //                               <i className="fa-solid fa-star"></i>
      //                               <i className="fa-solid fa-star"></i>
      //                               <i className="fa-solid fa-star"></i>
      //                         </div>
      //                   </div>

      //             </div>



      // {/*  */}


      // {/* TODO fixer le probleme de positionement _logement.scss */}

      //       <div className="CollapseRegroupement">
      //             <div className='collapse-Logement'>
      //                         {logementData.map(({ title, content }, index) => (
      //                         <Collaps title={title} content={content} key={index} />
      //                         ))}
      //             </div>
                  
      //       </div> 

      // </>
      //       );
      //       }







      //       export default Logement;
