import Hero from '../assets/imgHeroapropos.png'
import Collaps from '../components/Collaps';

function About() {
    const apropsData = [ // Tableau de données pour les collaps
        {
            title:'Fiabilité',
            content:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            title:'Respect',
            content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title:'Service',
            content:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            title:'Sécurité',
            content:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <>
            <div className="hero">
                    <img src={Hero} className="heroAbout" alt="logo" />
            </div>
            <div className='collapsCollection'>
            {apropsData.map(({ title, content }, index) => (
                <Collaps title={title} content={content} key={index} />   // Boucle qui affiche chaque collapsible         
            ))}</div>

        </>
    );
  }
  
  export default About;