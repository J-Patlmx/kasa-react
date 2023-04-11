import {NavLink} from "react-router-dom";

const Card = ({ id,title,cover }) => { 

    return (
        <article className="card">
            <NavLink to={'/logement/' + id} >
                <img src={cover} className="imgAppt" alt="logement a la location" />
                <h2 className="cardP">{title}</h2>
            </NavLink>
        </article>
    );
};

export default Card;