import Collaps from '../components/Collaps';
import Slider from '../components/slider';
import Rating from '../components/Rating';
import  {React, useState, useEffect} from 'react';

import { useParams, useNavigate} from 'react-router-dom';

function Logement() {
// Appel de l'API avec la méthode fetch()
const [CurrentLog, setCurrentLog] = useState(null);
// Récupération des paramètres d'URL
const params = useParams();
// Navigation de l'utilisateur
const navigate = useNavigate();

// Utilisation du hook useEffect pour effectuer une action après chaque rendu de la page
    useEffect(() => {// Appel de l'API avec la méthode fetch()
        fetch('../../datas/logements.json',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        // Récupération de la réponse de l'API au format JSON
        .then(function(response){ return response.json();})
          // Traitement des données récupérées
        .then(function(logs) {   
            // Vérification si l'ID du logement demandé (passé en paramètre dans l'URL) existe dans le fichier JSON     
            if (logs.find((log) => log.id === params.id) ){
                 // Si l'ID existe, on met à jour l'état "CurrentLog" avec les données du logement correspondant
                setCurrentLog(logs.find((log) => log.id === params.id) )
                
            }
            else {
                // Si l'ID n'existe pas, on redirige vers la page d'erreur 404
                navigate("/404");
            }      
        })
        
    }, [params.id, navigate]); 

    return (// Affichage des éléments sur la page
        <>
       {/* Vérification si CurrentLog n'est pas null */}
            {CurrentLog != null ? (
            <>      
            {/*  Rend le contenu du component ici */}
                <Slider slides ={CurrentLog.pictures}/>

                <div className="logement-page">
                    <div className="logement-page__title">
                            <div className="logementNameLoc">
                                <h1 className='logementTittle'>{CurrentLog.title}</h1>
                                <p className='Localisation'>{CurrentLog.location}</p>
                            </div>

                            <ul className="tags"> 
                            {CurrentLog.tags.map((tag, index) => <li className="tag" key={index}>{tag}</li>)}
                            </ul> 
                    </div>
                    <div className="logement-page__subtitle">
                        <div className='host'>
                            <p className='name'>{CurrentLog?.host.name}</p>
                            <img src={CurrentLog?.host.picture} className="picture" alt="host_photo" />                     
                        </div>

                    <>  
                            <Rating note={CurrentLog.rating} />
                    </>

                    </div>

                </div>

                <div className='collapsCollection CollapseRegroupement'>

            <div>
                <Collaps title="Description" content={CurrentLog.description} />
            </div>
            <div>
                <Collaps title="Equipements" content={CurrentLog.equipments} />
            </div>
        </div>                  

            </>
        )
        :(<></>)}

    </>
    );
}







    export default Logement;

