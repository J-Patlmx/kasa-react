import {Link} from "react-router-dom";

function Page404() {
    return (

      <div className="main">
        <h1 className="notfound">404</h1>
        <p className="pNotFound">Oups! La page que vous demandez n'existe pas.</p>

        <Link  className="backtoHome" to={"/Home"}>

              Retourner sur la page d’accueil

        </Link>
      
      </div>

    );
  }
  
  export default Page404;