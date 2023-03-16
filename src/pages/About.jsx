import Hero from '../assets/imgHeroapropos.png'

function About() {
    return (
      <div className="mainApropos">

      <div class="hero">
      <img src={Hero} className="App-logo" alt="logo" />
      </div>


      <button className="collapsible">Fiabilité</button>
      <div className="content">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
              et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </div>

      <button className="collapsible">Respect</button>
      <div className="content">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>

      <button className="collapsible">Service</button>
      <div className="content">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à
              nous contacter si vous avez la moindre question.</p>
      </div>

      <button className="collapsible">Sécurité</button>
      <div className="content">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
              correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
              qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
              organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </div>


  </div>
    );
  }
  
  export default About;