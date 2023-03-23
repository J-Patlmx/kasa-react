import {NavLink} from "react-router-dom";

const Card = ({ id,title,cover }) => { 

    return (
        <article className="card">
            <NavLink to={'/logement/' + id} >
                <img src={cover} className="imgAppt" alt="logo" />
                <p className="cardP">{title}</p>
            </NavLink>
        </article>
    );
};

export default Card;