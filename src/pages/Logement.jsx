import Hero from '../assets/imgHeroapropos.png'

function Logement() {
    return ( <div className="mainLogement">

    <div class="hero">
    <img src={Hero} className="App-logo" alt="logo" />
    <div className="chevrons">
      <span><i className='chevronG'>ChevronG</i></span>
      
      <span><i className='chevronD'>ChevronD</i></span>
    </div>

  </div>
    <div className='collapse-Logement'>
  <div className="div1">
        
        <button className="collapsible">Description</button>
        <div className="content">
      <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
        l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus.
        Logement parfait pour les voyageurs en solo
        et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
    </div>
  </div>

      <div className="div2">
        <button className="collapsible">Equipements</button>
        <div className="content">
            <ul>
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
        </div>
      </div>

</div>
</div>
      
    );
  }
  
  export default Logement;