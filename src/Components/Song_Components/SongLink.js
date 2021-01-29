import React from "react";
import { Link } from "react-router-dom";

const SongLink = (song) => {
    return (
        <Link to={`/PhishApp/songs/${song.song.id}`} style={{ color: "white" }} className="btn btn-primary shows"> <h5>{song.song.title}</h5> </Link>
    );
};

export default SongLink;