import React, { useState } from 'react';

const Collaps = ({ title,content }) => {

    const [isOpen, setIsOpen] = useState(false);

    const clickCollaps = () => {   setIsOpen((isOpen) => !isOpen) ; };

    const className = {
        header: `collapsible`,
        myicon: `fa-sharp fa-solid fa-chevron-up${isOpen ? '' : ' icon-rotate' }`,
        content:`content${isOpen ? ' ' : ' not-display'}`,
      };

    return (
        <>  
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

// TODO: class CollapsLog extends React.Component{
//     constructor(props) {

//     }
// }