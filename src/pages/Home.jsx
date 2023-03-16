import Hero from '../assets/IMGhero.png'

function Home() {
 return (
        <div className="heroHome" >
          <div className="hero">
          <img src={Hero} className="App-logo" alt="logo" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        </div>
          );
        }
 
export default Home;