import React, { useState } from 'react';

const Collaps = ({ title,content }) => {

    const [isOpen, setIsOpen] = useState(false);// Défini l'état initial

    const clickCollaps = () => {   setIsOpen((isOpen) => !isOpen) ; };// Défini une fonction pour gérer le clic sur le bouton d'ouverture/fermeture

    const className = { // Défini les classes CSS du bloc  en fonction de son état
        header: `collapsible`,
        myicon: `fa-sharp fa-solid fa-chevron-up${isOpen ? '' : ' icon-rotate' }`,
        content:`content${isOpen ? ' ' : ' not-display'}`,
      };

    return (
        <>  
          {/* Affiche le bouton d'ouverture/fermeture 
           Applique les classes CSS définies en fonction de l'état d'ouverture */}
            <button className={className.header} onClick={() => {clickCollaps()}}>{title}
            <i className={className.myicon}></i>
            
            </button>
            <div className={className.content}>{
                Array.isArray(content) ? 
                (
                   <ul>
                    {content.map((item,i) => <li key={i}>{item}</li>)}
                    </ul>
                ) 
                : (<p>{content}</p>)
            }
            </div>
        </>
    );
};

export default Collaps;
