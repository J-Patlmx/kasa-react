import {NavLink} from "react-router-dom";
import logo from '../assets/LOGO.png'
function Header() {
    return (
      <div className="App">
        <header className="App-header top-bar">
                    <img src={logo} className="App-logo" alt="logo" />
          <nav className="Header-link">
            
            <NavLink className="App-header-link" to={"/Home"} >Accueil</NavLink>
            <NavLink className="App-header-link" to={"/About"}>A propos</NavLink>
          </nav>

        </header>
      </div>
    );
  }

  export default Header;