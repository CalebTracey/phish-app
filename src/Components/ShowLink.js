import React from 'react';
import { Link } from "react-router-dom";

const ShowLink = ({show}) => {
    return (
        <div>
            <Link to={"/shows/" + show.date}>{show.venue.name}{show.date}</Link>
        </div>
    );
};

export default ShowLink;