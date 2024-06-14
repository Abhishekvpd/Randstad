import { useNavigate } from "react-router-dom";
import { randomNames } from "../../utils/randomNames";
import "./card.css";

const Card = ({ albumId, items }) => {
    const navigate = useNavigate();

    const title = `${randomNames[albumId - 1]} ${albumId}`;

    const count = items.filter(item => !item.seen).length;

    return (
        <div className="card__container" onClick={() => navigate(`/album/${albumId}`, { state: { albumId, title } })}>
            <div className="item-count">
                <span>{count}</span>
            </div>
            <span className="card__title">{title}</span>
        </div>
    )
}

export default Card