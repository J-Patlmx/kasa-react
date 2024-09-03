import Hero from '../assets/IMGhero.png'
import React, {useState, useEffect} from 'react';
import Card from '../components/Card'

function Home() {
    const [logements, setlogements] = useState([]);

    useEffect(() => {
        // Récupération des données logements 
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
            setlogements( myJson);   // MAJ du state logements avec les données récupérées

            })
    }, []);// Exécute le hook useEffect une seule fois, au montage du component

    return (
        <>
        <div className="heroHome">
                <div className="hero">
                    <img src={Hero} className="heroHome" alt="logo" />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
        </div>
        
        <section className="locationCards">
            {/*      Utilisation de la méthode map pour boucler
                    Pour chaque logement, on extrait l'id, le title et cover
                    On utilise le component Card pour afficher les info
                    On ajoute l'id unique pour chaque card grâce à la propriété "key"
            */}
                {logements.map(({ id, title, cover }) =>
                    <Card id={id} title= {title} cover = {cover} key={id}/>   
				)}
        </section>
        </>
);}
export default Home;

