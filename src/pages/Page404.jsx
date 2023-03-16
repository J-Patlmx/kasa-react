function Page404() {
    return (

      <div className="main">
        <h1 className="notfound">404</h1>
        <p className="pNotFound">Oups! La page que vous demandez n'existe pas.</p>

        <a
          className="backtoHome"
          href="/Home"
          
          rel="noopener noreferrer"> Retourner sur la page d’accueil</a>
      </div>

    );
  }
  
  export default Page404;