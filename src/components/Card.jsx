import {NavLink} from "react-router-dom";

const Card = ({ id,title,cover }) => { 

    return (
        <article className="card">
            <NavLink to={'/logement/' + id} >
                <img src={cover} className="imgAppt" alt="logement a la location" />
                <p className="cardP">{title}</p>
            </NavLink>
        </article>
    );
};

export default Card;