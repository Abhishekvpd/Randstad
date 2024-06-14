import "./albumList.css"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CardList } from "../../components"

const AlbumList = () => {
    const [albums, setAlbums] = useState(JSON.parse(localStorage.getItem('albums')) || {})
    const { state: { albumId, title } } = useLocation();

    const clickHandler = (id) => {
        const updatedAlbums = { ...albums };
        const updatedAlbumList = updatedAlbums[albumId].map(item => {
            if (item.id === id) item.seen = true;
            return item;
        });

        updatedAlbums[albumId] = updatedAlbumList;
        setAlbums(updatedAlbums)
    }

    useEffect(() => {
        localStorage.setItem('albums', JSON.stringify(albums));
    }, [albums])

    return (
        <section>
            <header className="album__title">
                <h2>{title}</h2>
            </header>
            <div className="album-list__container">
                {albums[albumId].map(list => (
                    <CardList details={list} key={list.id} albumId={albumId} clickHandler={clickHandler} />
                ))}
            </div>
        </section>
    )
}

export default AlbumList;