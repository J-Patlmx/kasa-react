// import Collaps from '../components/collapsLogement';
import Collaps from '../components/Collaps';
import Slider from '../components/slider';
import Rating from '../components/Rating';
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

                            <ul className="tags"> 
                            {CurrentLog.tags.map((tag, index) => <li className="tag" key={index}>{tag}</li>)}
                            </ul> 
                    </div>
                    <div className="logement-page__subtitle">
                        <div className='host'>
                            <p className='name'>{CurrentLog?.host.name}</p>
                            <img src={CurrentLog?.host.picture} className="picture" alt="host_photo" />                     
                        </div>

<>        <Rating note={CurrentLog.rating} />
</>

                    </div>

                </div>
                {/* <div className='collapsCollection CollapseRegroupement'>   */}

                <div className='collapsCollection CollapseRegroupement'>
            <Collaps className="collaps_CurrentLog" title="Description" content={CurrentLog.description} />
            <Collaps className="collaps_CurrentLog" title="Equipements" content={CurrentLog.equipments.join(', ')} />
        </div>                  
                        {/* {logementData.map(({ title, content }, index) => (
                            <div key={index}>
                                <Collaps title={title} content={content} />
                            </div>
                        ))}                         */}
                {/* </div> */}
            </>
        ):(<></>)}
    </>
    );
}







  export default Logement;

