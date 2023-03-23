import Hero from '../assets/imgHeroapropos.png'
import Collaps from '../components/Collaps';

function About() {
    const apropsData = [
        {
            title:'Fiabilité',
            content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        },
        {
            title:'Respect',
            content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        },
        {
            title:'Service',
            content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        },
        {
            title:'Sécurité',
            content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        }
    ];

    return (
        <>
            <div className="hero">
                    <img src={Hero} className="App-logo" alt="logo" />
            </div>
            <div className='collapsCollection'>
            {apropsData.map(({ title, content }, index) => (
                <Collaps title={title} content={content} key={index} />                    
            ))}</div>

        </>
    );
  }
  
  export default About;