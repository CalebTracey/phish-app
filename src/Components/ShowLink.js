import React from 'react';
import { Link } from "react-router-dom";

const ShowLink = ({show}) => {
    return (
        <div>
            <Link to={"/shows/" + show.date}>{show.date} {show.venue.name}</Link>
        </div>
            
    );
};

export default ShowLink;