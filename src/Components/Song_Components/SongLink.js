import React from "react";
import { Link } from "react-router-dom";

const SongLink = (song) => {
    return (
        <Link to={`/PhishApp/songs/${song.song.id}`} style={{ color: "white" }} className="btn btn-primary shows"> {song.song.title} </Link>
    );
};

export default SongLink;