import logo from '../assets/LOGO.png'
function Header() {
    return (
      <div className="App">
        <header className="App-header top-bar">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
                  <a
                    className="App-link"
                    href="/home"
                    rel="noopener noreferrer"> Accueil</a>

                    <br />
                    <a
                    className="App-link"
                    href="/About"
                    rel="noopener noreferrer"> A propos</a>

                    <br />
                    <a
                    className="App-link"
                    href="/Page404"
                    rel="noopener noreferrer"> 404</a>
                
                  <br />
                    <a
                    className="App-link"
                    href="/Logement"
                    rel="noopener noreferrer"> Logement</a> 
            </nav>
        </header>
      </div>
    );
  }

  export default Header;