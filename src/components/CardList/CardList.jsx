import { useEffect, useState } from "react";
import "./cardList.css";

const CardList = ({ details, albumId, clickHandler }) => {
    const [albums, setAlbums] = useState({});
    const { id, title, seen } = details;

    // useEffect(() => {
    //     if (Object.keys(albums).length) localStorage.setItem('albums', JSON.stringify(albums))
    //     else {
    //         setAlbums(JSON.parse(localStorage.getItem('albums')))
    //     }
    // }, [albums])

    return (
        <div className={`list ${seen && 'list--seen'}`} onClick={() => clickHandler(id)}>
            <span>{title}</span>
        </div>
    )
}

export default CardList