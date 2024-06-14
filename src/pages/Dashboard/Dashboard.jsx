import "./dashboard.css";

import { Card, Header } from "../../components";
import { useEffect, useState } from "react";
import { hostUrl } from "../../utils/urls";
import { useSearchContext } from "../../components/context/searchContext/searchContext";

const Dashboard = () => {
    const [albums, setAlbums] = useState(JSON.parse(localStorage.getItem('albums')) || {});
    const { searchText } = useSearchContext();

    const fetchAblums = async () => {
        const response = await fetch(hostUrl);
        const data = await response.json();
        const albums = parseData(data);
        localStorage.setItem('albums', JSON.stringify(albums))
        setAlbums(albums);
    }

    const parseData = (data) => {
        return data.reduce((acc, item) => {
            if (!acc[item.userId]) acc[item.userId] = [];
            acc[item.userId].push({ ...item, seen: false });
            return acc;
        }, {})
    };

    useEffect(() => {
        if (!Object.keys(albums).length) {
            console.log('inn')
            fetchAblums()
        };
    }, [])

    return (
        <section className="dashboard__wrapper">
            {Object.keys(albums).map(albumId => (
                <Card key={albumId} albumId={albumId} items={albums[albumId]} />
            ))}
        </section>
    )
}

export default Dashboard