import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import './AlbumPage.scss';

function AlbumPage(){
    let {id} = useParams();
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res => res.json())
        .then(data => {
            setTracks(data.data);
        });
    }, []);

    return (
        <div className="track-container">
            {tracks?.map(track => {
            return (
                <div className="card-body">
                    <h3 className="card-title">{track.name}</h3>
                    <audio src={track.preview_url} controls></audio>
                </div>
            )
        })}</div>
    )
}

export default AlbumPage;