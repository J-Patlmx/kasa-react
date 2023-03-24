import Hero from '../assets/IMGhero.png'
import React, {useState, useEffect} from 'react';
import Card from '../components/Card'

function Home() {
    const [logements, setlogements] = useState([]);

    useEffect(() => {
        fetch('../../datas/logements.json'
            ,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            )
            .then(function(response){          
            return response.json();
            }).then(function(myJson) {          
            setlogements( myJson);
            // console.log(logements)
            })
    }, []);

 return (
        <>
        <div className="heroHome">
                <div className="hero">
                    <img src={Hero} className="App-logo" alt="logo" />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
        </div>
        
        <div className="locationCards">
        
                {logements.map(({ id, title,cover },index) =>
                    <Card id={id} title= {title} cover = {cover} key={id}/>   
				)}
        

        </div>
        </>
);}
 
export default Home;

