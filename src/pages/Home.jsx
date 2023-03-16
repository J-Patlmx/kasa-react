import Hero from '../assets/IMGhero.png'
import imgLogement from '../assets/appt1.jpeg'

function Home() {
 return (
        <div className='main'>
          <div className="heroHome">
                <div className="hero">
                      <img src={Hero} className="App-logo" alt="logo" />
                      <h1>Chez vous, partout et ailleurs</h1>
                </div>
          </div>
          
          <div className="locationCards">
          
                  <div className="card">
                      <img src={imgLogement} className="imgAppt" alt="logo" />
                      <p className="cardP">Titre de la location</p>
                  </div>

                  <div className="card">
                      <img src={imgLogement} className="imgAppt" alt="logo" />
                      <p className="cardP">Titre de la location</p>
                  </div>

                  <div className="card">
                      <img src={imgLogement} className="imgAppt" alt="logo" />
                      <p className="cardP">Titre de la location</p>
                  </div>

        

        
                  <div className="card">
                      <img src={imgLogement} className="imgAppt" alt="logo" />
                      <p className="cardP">Titre de la location</p>
                  </div>
                  
                  <div className="card">
                      <img src={imgLogement} className="imgAppt" alt="logo" />
                      <p className="cardP">Titre de la location</p>
                  </div>

                  <div className="card">
                      <img src={imgLogement} className="imgAppt" alt="logo" />
                      <p className="cardP">Titre de la location</p>
                  </div>

        

          </div>
        </div>
);}
 
export default Home;